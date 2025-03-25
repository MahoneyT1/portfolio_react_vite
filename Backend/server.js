/**
 * server for sending mail from my frontend 
 */

import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

// create an express app instance
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res)=> {
    const { name, email, message } = req.body;

    // check if any of variables above not available
    if (!name || !email || !message) {
        return res.status(400).json({"error": "All fields are required"})
    };

    try {
        const transporter = nodemailer.createTransport({
            secure: true,
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        const mailObject = {
            to: process.env.EMAIL_USER,
            subject: `Recieved a mail from ${name}`,
            html: message
        }

        await transporter.sendMail({
            to: mailObject.to,
            subject: mailObject.subject,
            html: mailObject.html
        });

        res.status(200).json({"success": "message sent successsfully"})
    } catch (error) {
        res.status(400).json({"error": "failed to send message"});
    }

});


app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
});
