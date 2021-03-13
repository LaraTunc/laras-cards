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
        //from: 'marlin.schneider84@ethereal.email',
        from: 'Laras Cards <larascards9@gmail.com>', 
        to: `${recipientEmail}`,
        subject: `You have a card from ${senderName}`, 
        text: "Please enable the HTML view.", 
        html: emailHtml, 
        attachments : attachments,
    });

    console.log("Message sent: %s", email.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));
    
};

sendMyEmail(
    "larascards9@gmail.com, ",
    "Lara",
    '<head><style>.background {background-color: linen;width:100%;height:500px;} h1,p {color: maroon;text-align:center;} .gif {display: block; margin-left:auto; margin-right:auto} </style></head><body><div class="background"><h1>This is a heading</h1><p>This is a paragraph.</p><img src="cid:unique@nodemailer.com" class="gif"/></div></body>',
    [{ "filename": "giphy.gif", "path": "./public/giphy.gif", "cid": "unique@nodemailer.com" }]
    ).catch(console.error);

// module.exports = { sendMyEmail };