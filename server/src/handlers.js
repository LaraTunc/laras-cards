"use strict";

// Mongo config
require("dotenv").config();
const { MongoClient } = require("mongodb");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { MONGO_URI } = process.env;
const { PASSWORD } = process.env;

// nodemailer config
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "larascards9@gmail.com",
    pass: PASSWORD,
  },
});

// config
const assert = require("assert");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const generator = require("generate-password");
const { cards } = require("./data");

// util
const formatString = (string) => {
  const lowerCasedString = string.toLowerCase();
  const capitalizedString =
    lowerCasedString.charAt(0).toUpperCase() + lowerCasedString.slice(1);
  return capitalizedString;
};

// handlers
const getUser = async (req, res) => {
  const { userId } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("laras-cards");
    const user = await db.collection("users").findOne({ _id: userId });
    client.close();
    if (!user) {
      return res.status(404).json({
        status: 404,
        error: "User not found.",
      });
    }

    return res.status(200).json({
      status: 200,
      userId: user._id,
      user,
    });
  } catch (err) {
    console.log(err.stack);
    client.close();

    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("laras-cards");
    const user = await db.collection("users").findOne({ email });

    client.close();

    if (!user) {
      return res.status(404).json({
        status: 404,
        error: "User not found. Please try signing up first.",
      });
    }
    const passwordIsValidated = await bcrypt.compare(password, user.password);
    if (!passwordIsValidated) {
      return res.status(401).json({
        status: 401,
        error: "The password is incorrect.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Successfully logged in",
        userId: user._id,
        user,
      });
    }
  } catch (err) {
    console.log(err.stack);
    client.close();

    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("laras-cards");
    const user = {
      _id: uuidv4(),
      userName,
      email,
      password: hashPassword,
      sentCards: {},
      type: "Account owner",
    };
    const result = await db.collection("users").insertOne(user);
    assert.equal(1, result.insertedCount);

    client.close();

    if (result.insertedCount === 1) {
      return res.status(201).json({
        status: 201,
        message: "User added.",
        user,
      });
    } else {
      return res.status(400).json({
        status: 400,
        error: "Input not accepted.",
      });
    }
  } catch (err) {
    console.log(err.stack);
    client.close();

    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("laras-cards");
    const user = await db.collection("users").findOne({ email });

    if (user) {
      //if user exists generate new password
      const newPassword = generator.generate({
        length: 10,
        numbers: true,
      });
      // set the new password
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(newPassword, salt);
      const newValues = { $set: { password: hashPassword } };
      const result = await db
        .collection("users")
        .updateOne({ email }, newValues);
      assert.equal(1, result.matchedCount);
      client.close();

      // send the email
      let info = await transporter
        .sendMail({
          from: "Laras Cards <larascards9@gmail.com>",
          to: `${email}`,
          subject: "Your password for Laras Cards",
          text: `Here is your new password: ${newPassword}. Please reset it upon login for maximum security.`,
          html: `Here is your new password: ${newPassword}. Please reset it upon login for maximum security.`,
        })
        .catch((error) => {
          console.log(error);
          return res.status(500).json({
            status: 500,
            error,
          });
        });
      console.log("Password email sent: %s", info.messageId);
      const messageId = info.messageId;

      return res.status(200).json({
        status: 200,
        messageId,
        message:
          "An email to reset your password has been sent. Please refer to your email to login.",
      });
    } else {
      //if user does not exist
      client.close();

      return res.status(404).json({
        status: 404,
        error: "User not found. Please try signing up first.",
      });
    }
  } catch (err) {
    console.log(err.stack);
    client.close();
    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const resetPassword = async (req, res) => {
  const { _id, newPassword } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(newPassword, salt);

  try {
    await client.connect();
    const db = client.db("laras-cards");
    const user = await db.collection("users").findOne({ _id });
    const newValues = { $set: { password: hashPassword } };
    const result = await db.collection("users").updateOne({ _id }, newValues);
    assert.equal(1, result.matchedCount);
    client.close();

    //Success
    return res.status(200).json({
      status: 200,
      user,
      message: "Your password has been changed.",
    });
  } catch (err) {
    console.log(err.stack);
    client.close();
    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const sendCard = async (req, res) => {
  const {
    user,
    cardId,
    formData,
    // selectedCardHtml,
    // selectedCardAttachments,
    customMessage,
  } = req.body;

  // find card and get html and attachments
  console.log("cardId:", cardId);
  const cardsArray = Object.values(cards);
  console.log("cardsArray:", cardsArray);
  const card = cardsArray.find((cardObject) => {
    console.log(
      "cardscardObject.id & cardId",
      typeof cardObject.id,
      cardObject.id,
      typeof cardId,
      cardId,
      cardObject.id === cardId
    );
    return cardObject.id === cardId;
  });
  console.log("card:", card);
  const cardType = card.type;
  let selectedCardHtml;
  if (cardType === "custom") {
    selectedCardHtml = card.html(customMessage);
  } else {
    selectedCardHtml = card.html;
  }
  const selectedCardAttachments = card.attachments;

  //Send the email
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  let email = await transporter
    .sendMail({
      from: "Laras Cards <larascards9@gmail.com>",
      to: `${formData.to.email}`,
      subject: `You have a card from ${formatString(
        formData.from.firstName
      )} ${formatString(formData.from.lastName)}`,
      text: "Please enable the HTML view.",
      html: selectedCardHtml,
      attachments: selectedCardAttachments,
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        status: 500,
        error:
          "An error occurred. Please check the email you provided is correct.",
      });
    });
  console.log("Message sent: %s", email.messageId);
  const messageId = email.messageId;

  //If there is a logged in user push the sent email data to the database and send response
  if (user) {
    const userId = user._id;
    const client = await MongoClient(MONGO_URI, options);
    try {
      await client.connect();

      const db = client.db("laras-cards");
      const user = await db.collection("users").findOne({ _id: userId });

      const userSentCards = user.sentCards;
      const date = new Date();
      if (customMessage) {
        userSentCards[messageId] = {
          sentCardId: messageId,
          date,
          to: formData.to.email,
          cardId,
          customMessage,
        };
      } else {
        userSentCards[messageId] = {
          sentCardId: messageId,
          date,
          to: formData.to.email,
          cardId,
        };
      }
      const newValues = { $set: { sentCards: { ...userSentCards } } };
      const result = await db
        .collection("users")
        .updateOne({ _id: user._id }, newValues);
      assert.equal(1, result.matchedCount);
      client.close();

      //Success for logged in user
      return res.status(200).json({
        status: 200,
        messageId,
        user,
        message: "Your email has been sent and recorded in user history.",
      });
    } catch (err) {
      console.log(err.stack);
      client.close();

      return res.status(500).json({
        status: 500,
        error: err,
      });
    }
  } else {
    // If there isn't a logged in user then just send response
    return res.status(200).json({
      status: 200,
      messageId,
      message: "Your email has been sent.",
    });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("laras-cards");
    const user = await db.collection("users").deleteOne({ _id: userId });
    client.close();
    if (!user) {
      return res.status(404).json({
        status: 404,
        error: "User not found.",
      });
    }

    assert.equal(1, result.matchedCount);
    return res.status(204).json({
      status: 204,
      message: "User deleted.",
    });
  } catch (err) {
    console.log(err.stack);
    client.close();

    return res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

module.exports = {
  login,
  signUp,
  sendCard,
  forgotPassword,
  resetPassword,
  getUser,
  deleteUser,
};
