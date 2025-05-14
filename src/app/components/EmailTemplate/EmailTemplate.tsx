interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate = ({ email }: EmailTemplateProps) => (
  <div
    style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5, color: "#333" }}
  >
    <h2 style={{ color: "#1c1c1c" }}>Grazie per il tuo interesse!</h2>

    <p>Ciao {email},</p>

    <p>Grazie per aver lasciato la tua email. Ti contatterò molto presto.</p>

    <p>
      Se vuoi fissare una lezione o hai qualche domanda, presto riceverai
      notizie tramite questo canale.
    </p>

    <p>Grazie per il tuo interesse e ci vediamo in campo! 🎾</p>

    <p style={{ marginTop: "24px" }}>
      Cordiali saluti,
      <br />
      <strong>Maestro di Padel</strong>
    </p>
  </div>
);
