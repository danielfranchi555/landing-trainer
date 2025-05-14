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
    const name = payload.get("name");

    // Validación del nombre: asegurarse de que no esté vacío
    if (typeof name !== "string" || name.trim().length === 0) {
      return {
        success: false,
        error: "Il nome è obbligatorio",
      };
    }

    // Validación del email: debe ser un email válido
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
      body: JSON.stringify({ email, name }),
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
