"use server";

type FormState = {
  success: boolean;
  error?: string;
};

export async function handleSubmit(
  prevState: FormState,
  payload: FormData
): Promise<FormState> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const email = payload.get("email");
    if (
      typeof email !== "string" ||
      !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      return {
        success: false,
        error: "Email inválido",
      };
    }

    const resp = await fetch(`${baseUrl}/api/send`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) {
      return {
        success: false,
        error: "Errore nell'inviare il modulo, riprova più tardi.",
      };
    }

    // const data = await resp.json();
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: "Si è verificato un errore imprevisto, riprova più tardi.",
    };
  }
}
