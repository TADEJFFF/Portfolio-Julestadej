"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!nom || !email || !message) {
    return { success: false, error: "Tous les champs sont requis." };
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return { success: false, error: "Configuration email manquante." };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Jules TADEJ" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📬 Nouveau message de ${nom} — Portfolio`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111111; border-bottom: 2px solid #FFD300; padding-bottom: 8px;">
            Nouveau message depuis ton portfolio
          </h2>
          <table style="width: 100%; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; width: 80px;">Nom</td>
              <td style="padding: 8px 0; font-weight: bold; color: #111;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color: #9A7200;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 20px; background: #f5f5f5; border-left: 3px solid #FFD300; padding: 16px; border-radius: 4px;">
            <p style="color: #666; font-size: 12px; margin: 0 0 8px;">Message</p>
            <p style="color: #111; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 24px; font-size: 11px; color: #aaa;">
            Envoyé depuis portfolio-julestadej.vercel.app
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erreur inconnue";
    console.error("Nodemailer error:", msg);
    return { success: false, error: `Erreur : ${msg}` };
  }
}
