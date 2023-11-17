const nodemailer = require("nodemailer");
// Import NodeMailer (after npm install)

async function main() {
  // Async function enables allows handling of promises with await

  // First, define send settings by creating a new transporter:
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    service: "hotmail",
    port: 587,
    secure: true,
    auth: {
      user: "riad.elhajjaji@outlook.com", // Your email address
      pass: "cloud2023",
    },
  });

  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  const info = await transporter.sendMail({
    from: "riad.elhajjaji@outlook.com",
    to: "riadelhajjaji@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
  });

  console.log(info.messageId); // Random ID generated after successful send (optional)
}

main().catch((err) => console.log(err));
