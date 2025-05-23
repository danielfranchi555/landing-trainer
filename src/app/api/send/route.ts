import { EmailTemplate } from "@/app/components/EmailTemplate/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Martin Chaig <noreply@martinchaig.com>",
      to: email,
      bcc: "franchidaniel76@gmail.com", // destinatario en copia oculta
      subject: "Benvenuto alle lezioni di Padel!",
      react: EmailTemplate({ name }), // Ahora se pasa también el nombre
    });

    if (error) {
      console.log({ errorResend: error });
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
