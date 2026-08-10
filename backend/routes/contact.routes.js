const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post("/contacto", async (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  const mailOptions = {
    from: `"Formulario Web" <${process.env.SMTP_USER || email}>`,
    to: process.env.CONTACT_EMAIL || "sandrafernandez.psico@gmail.com",
    subject: `Nuevo mensaje de ${nombre}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || "No especificado"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Mensaje enviado correctamente" });
  } catch (err) {
    console.error("Error al enviar email:", err);
    res.status(500).json({ error: "Error al enviar el mensaje" });
  }
});

module.exports = router;
