'use strict';

const { sendMyEmail } = require("./helpers");

const sendCard = (req,res)=>{
    const { formData, selectedCardHtml, selectedCardImagePath } = req.body;
    const messageId = sendMyEmail(
        formData.to.email,
        formData.from.fullName,
        selectedCardHtml,
        [{ "filename": "gif", "path": selectedCardImagePath, "cid": "unique@nodemailer.com" }]
    ).catch(console.error);

    res.status(201).json({formData, selectedCardHtml, messageId });
};

module.exports = { sendCard };
