import * as nodemailer from 'nodemailer';
import { config } from 'dotenv';

export default function (req, res) {
    config();
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'cristianoaloigi0@gmail.com',
            pass: process.env.password
        },
        secure: true
    });
    const mailData = {
        from: 'demo email',
        to: 'cristianoaloigi@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    };
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    
    res.send('succes');
}