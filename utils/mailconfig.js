import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0d273d8b971c1e",
    pass: "****86a1"
  }
});

export default transporter;