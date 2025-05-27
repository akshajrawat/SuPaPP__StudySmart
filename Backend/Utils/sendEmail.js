const nodemailer = require("nodemailer");

const sendEmail = async ({ to, from, subject, text, contact = false }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use host/port for custom services
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: contact
        ? `"SuPaPP user" <${from}>`
        : `"SuPaPP" <${process.env.EMAIL_USER}>`,
      to: contact ? process.env.EMAIL_USER : to,
      subject,
      text,
    });
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong while sending main");
  }
};

module.exports = sendEmail;
