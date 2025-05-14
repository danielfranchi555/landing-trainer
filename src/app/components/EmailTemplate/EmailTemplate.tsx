interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate = ({ name }: EmailTemplateProps) => (
  <div
    style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5, color: "#333" }}
  >
    <h2 style={{ color: "#1c1c1c" }}>Grazie per il tuo interesse!</h2>

    <p>Ciao {name},</p>

    <p>
      Grazie per aver lasciato il tuo indirizzo email. Ti contatterò molto
      presto.
    </p>

    <p>
      Nel frattempo, puoi seguirmi su Instagram per rimanere aggiornato su
      tornei e novità che pubblico regolarmente dal club dove tengo le lezioni:
    </p>

    <p>
      👉{" "}
      <a
        href="https://www.instagram.com/cdm_worldpadelclub/"
        style={{ color: "#097FD9" }}
      >
        @cdm_worldpadelclub
      </a>
    </p>

    <p>Ci vediamo presto in campo! 🎾</p>

    <p style={{ marginTop: "24px" }}>
      Cordiali saluti,
      <br />
      <strong>Istruttore di Padel</strong>
    </p>
  </div>
);
