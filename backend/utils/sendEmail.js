import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * sendEmail - utility function to send emails
 * @param {string} email - recipient email
 * @param {string} subject - email subject
 * @param {string} message - HTML content of the email
 */
const sendEmail = async ({ email, subject, message }) => {
  try {
    await resend.emails.send({
      from: "PriyaLooms <orders@priyalooms.in>", // your verified sender
      to: email,
      subject: subject,
      html: message,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
