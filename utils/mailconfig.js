import nodemailer from "nodemailer";
 


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "leonor55@ethereal.email",
    pass: "AhzPUWKjagbdXV4E1j"
   
  }
});

export default transporter;
