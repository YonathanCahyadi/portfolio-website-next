import { convertTransitionToAnimationOptions } from "framer-motion/types/animation/utils/transitions";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // check email
    const validateEmail = (email: string) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (validateEmail(req.body.email)) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });

      // send mail with defined transport object
      const info = await transporter
        .sendMail({
          from: "project.cahyadiyonathan@gmail.com", // sender address
          to: "work.yonathancahyadi@gmail.com", // list of receivers
          subject: req.body.subject,
          text: `From: ${req.body.email}\n\n\n ${req.body.message}`
        })
        .catch((err) => {
          res.status(500).json({ message: err });
        });

      res.status(200).json({ message: "Success" });

    } else { // invalid email
      res.status(400).json({ message: "Invalid email"});
    }
  } else {
    res.status(404).json({ message: "Invalid Method" });
  }
};
