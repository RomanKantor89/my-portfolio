/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as cors from "cors";

const fetch = require('node-fetch');
const corsHandler = cors({ origin: true });

// google Recaptcha
async function validateRecaptcha(token: string): Promise<boolean> {
    const secret = functions.config().recaptcha.key;
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {
            method: "POST",
        }
    )
    const data = await response.json();
    return data.success;
}

// nodemailer transporter initialization
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: functions.config().email.user,
        pass: functions.config().email.pass
    }
});

// email delivery 
export const emailSender = functions.https.onRequest(async (req, res) => {
    var contact = req.body; 
    var recapResult = await validateRecaptcha(contact.token)

    corsHandler(req, res, () => {

        if (!recapResult) {
            res.status(400);
            res.json({ errors: ["ReCaptcha validation failed for email form"] });
            return;
        }
        else {
            const mailOptions = {
                from: 'Roman.Kantor89@gmail.com',
                to: 'Roman.Kantor89@gmail.com',
                subject: 'Dev Portfolio Contact Form',
                html: '<h3>Name: ' + contact.name + '</h3>' +
                    '<h3>Email: ' + contact.email + '</h3>' +
                    '<h3>Message: ' + contact.message + '</h3>',
            };

            return transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return res.send(err);
                }
                return res.send(info);
            });
        }

    });
});

