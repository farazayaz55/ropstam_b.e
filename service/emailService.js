const sgMail = require("@sendgrid/mail");
const { config } = require("dotenv");
sgMail.setApiKey(
  process.env.SENDGRID_KEY ||
    "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"
);

const sendEmail = async (to, subject, text) => {
  const msg = {
    to: to, // Change to your recipient
    from: 'noreply@molto-vino.com', // Change to your verified sender
    subject: subject,
    text: text,
    html: text,
  };
  //await transport.sendMail(msg);
  sgMail
    .send(msg)
    .then((response) => {
      console.log("Email sent.");
    })
    .catch((error) => {
      console.error(error.response.body);
    });
};

const sendSignUpMail = async (to, password) => {
  const subject = "Welcome to ropstam solutions";
  const text = `Dear user,
  \nYour Ropstam Account password  is ${password}`;
  await sendEmail(to, subject, text);
};

module.exports = {
  sendEmail,
  sendSignUpMail,
};
