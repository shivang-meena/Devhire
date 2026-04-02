import trasporter from "./mailconfig.js"
import nodemailer from "nodemailer";



export const sendmail= async (to,sub,text)=>{

    try {
       
        console.log(to+""+sub+" "+text);
          const info = await trasporter.sendMail({
          from: `leonor55@ethereal.email`, 
      to: to,
      subject: sub,
      text: text,
    });

    console.log("Message sent:", info.messageId);
    } catch (err) {
    console.log("Messagewas not  sent:", err);
             
        }
}