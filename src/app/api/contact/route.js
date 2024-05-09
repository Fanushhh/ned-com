import nodemailer from "nodemailer";
export const dynamic = "force-dynamic"; // defaults to auto

import { writeFile, unlink } from "fs/promises";
import { join } from "path";



export async function POST(req, res) {
    const data = await req.formData();
    const file = data.get('photoAttachments')
    const phoneNr = data.get('phoneNr');
    const message = data.get('propertyMessage');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join('public', 'uploads', file.name);
    await writeFile(path, buffer);
    console.log(`open ${path} to see your uploaded file`) ;  

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
            path: './public/uploads/' + file.name,
            contentType: "image/jpeg", // Change to the appropriate content type based on your file type
        },
        ],
    });
    await unlink(path);

  return Response.json({
    message: `File has been uploaded`,
    ok: true,
  });
}

// export async function GET(req) {
//     return Response.json({ message: "Hello from the API" });
// }
