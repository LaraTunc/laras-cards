'use strict';

const nodemailer = require("nodemailer");

require("dotenv").config();
const { PASSWORD } = process.env;

const sendMyEmail = async (recipientEmail, senderName, emailHtml, attachments) => {

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
        text: "Please enable the HTML view.", 
        html: emailHtml, 
        attachments : attachments,
    });

    console.log("Message sent: %s", email.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));

    if(email.messageId) {
        return email.messageId;
    };

};

module.exports = { sendMyEmail };