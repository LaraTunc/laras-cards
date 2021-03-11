'use strict';

const nodemailer = require("nodemailer");

require("dotenv").config();
const { PASSWORD } = process.env;

const sendMyEmail = async (recipientEmail, senderName, emailText, emailHtml) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'larascards9@gmail.com', 
            pass: PASSWORD, 
        },
    });

    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    let email = await transporter.sendMail({
        from: 'Laras Cards <larascards9@gmail.com>', 
        to: `${recipientEmail}`,
        subject: `You have a card from ${senderName}`, 
        text: emailText, 
        html: emailHtml, 
    });

    console.log("Message sent: %s", email.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));
    
};

sendMyEmail(
    "larascards9@gmail.com",
    "Lara",
    "Hello world woop",
    "<b>Hello world woop</b>"
).catch(console.error);

// module.exports = { sendMyEmail };