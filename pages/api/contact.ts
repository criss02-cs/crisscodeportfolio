import * as nodemailer from 'nodemailer';
import { config } from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
    config();
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        secure: true,
        port: 465,
        auth: {
            user: process.env.email,
            pass: process.env.password
        },
    });
    const mailData = {
        from: process.env.email,
        to: process.env.emailTo,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    };
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err);
    });
    res.send(200);
}