import trasporter from "./mailconfig.js"

export const sendmail= async (to,sub,text)=>{
    try {
          const info = await trasporter.sendMail({
      from: "test@mail.com",
      to: to,
      subject: sub,
      text: text,
    });

    console.log("Message sent:", info.messageId);
    } catch (err) {
             res.status(400).json({messege:err+" gkjjjknk"});
        }
}