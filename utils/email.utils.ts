import nodemailer from "nodemailer";

const email:string = process.env.EMAIL || "";
const password:string = process.env.EMAIL_PASSWORD || "";

const sendMail = async (userEmail:string, subject:string, message:string) => {
  let data:object = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  }
  try {
    let transporter = nodemailer.createTransport(data);
    const result = await transporter.sendMail({
      from: email,
      to: userEmail,
      subject,
      html: message,
    });
    return true;
  } catch (err) {
    return false;
  }
};
export default sendMail;