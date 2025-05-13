import { EmailTemplate } from "@/app/components/EmailTemplate/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Ymf9sceg_Dcf9wX8NfETrJ4ALURXk6gxX");

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Hello world",
      react: EmailTemplate({ email: email }),
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
