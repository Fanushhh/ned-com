import nodemailer from "nodemailer";

import { writeFile, unlink } from "fs/promises";
import { join } from "path";



export async function POST(req, res) {
  const data = await req.formData();
  const file = data.get('photoAttachments');
  const phoneNr = data.get('phoneNr');
  const message = data.get('propertyMessage');

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
      },
  });

  await transporter.sendMail({
      from: phoneNr,
      to: process.env.EMAIL,
      subject: "New message from contact form",
      text: `Phone number: ${phoneNr} \n Message: ${message}`,
      attachments: [
          {
              filename: file.name,
              content: buffer, // Attach file content directly
              contentType: "image/jpeg", // Change to the appropriate content type based on your file type
          },
      ],
  });

  return Response.json({
      message: `File has been uploaded and sent via email`,
      ok: true,
  });
}

// export async function GET(req) {
//     return Response.json({ message: "Hello from the API" });
// }
