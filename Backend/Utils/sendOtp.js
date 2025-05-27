const sendEmail = require("./sendEmail");

// send otp logic

const sendOtp = async (email) => {
  // Generate otp and send to email
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const title = `Your otp for registration is ${otp}`;
  const msg = `Your SuPapp OTP is: ${otp}. It will expire in 5 minutes. Do not share it with anyone.`;
  await sendEmail({ to: email, subject: title, text: msg, contact: false });
  return otp;
};

module.exports = sendOtp;
