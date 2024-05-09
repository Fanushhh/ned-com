import nodemailer from "nodemailer";

import { writeFile, unlink } from "fs/promises";
import { join } from "path";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
  },
});

export async function POST(req, res) {
  
  const data = await req.formData();
  const isUpload = data.get('isUpload');
  if(isUpload === 'false') {
    const phoneNr = data.get('phoneNr');
    const message = data.get('propertyMessage');
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
  }else{
    const file = data.get('photoAttachments');
  const phoneNr = data.get('phoneNr');
  const message = data.get('propertyMessage');
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  

  await transporter.sendMail({
      from: phoneNr,
      to: process.env.EMAIL,
      subject: "Mesaj nou de pe Nedcom.imobiliare",
      text: `Numar de telefon: ${phoneNr} \nMesaj: ${message}`,
      attachments: [
          {
              filename: file.name,
              content: buffer, // Attach file content directly
              contentType: file.type, // Change to the appropriate content type based on your file type
          },
      ],
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
