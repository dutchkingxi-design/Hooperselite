import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }: { to: string; subject: string; html: string }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SYSTEM_EMAIL,
      pass: process.env.SYSTEM_EMAIL_PASSWORD
    }
  });

  await transporter.sendMail({
    from: `"HoopersElite Academy" <${process.env.SYSTEM_EMAIL}>`,
    to,
    subject,
    html
  });
};
