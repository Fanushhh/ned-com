import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export async function POST(req, res) {
  const data = await req.formData();
  const isUpload = data.get("isUpload");
  if (isUpload === "false") {
    const phoneNr = data.get("phoneNr");
    const message = data.get("propertyMessage");
    await transporter.sendMail({
      from: phoneNr,
      to: process.env.EMAIL,
      subject: "Mesaj nou de pe Nedcom.imobiliare",
      text: `Numar de telefon: ${phoneNr} \nMesaj: ${message}`,
    });
    return Response.json({
      message: `Email sent`,
      ok: true,
    });
  } else {
    const phoneNr = data.get("phoneNr");
    const message = data.get("propertyMessage");
    const files = data.getAll("photoAttachments");
    
    const photoAttachments = [];
    
    for (const file of files) {
      // Convert file to buffer
      const buffer = await file.arrayBuffer();
      const image = Buffer.from(buffer);
      // Add file to attachments array
      photoAttachments.push({
        filename: file.name,
        content: image,
      });
    }
    
    await transporter.sendMail({
      from: phoneNr,
      to: process.env.EMAIL,
      subject: "Mesaj nou de pe Nedcom.imobiliare",
      text: `Numar de telefon: ${phoneNr} \nMesaj: ${message}`,
      attachments: photoAttachments,
    });
    
  }

  return Response.json({
    message: `File has been uploaded and sent via email`,
    ok: true,
  });
}

// export async function GET(req) {
//     return Response.json({ message: "Hello from the API" });
// }
