import { useState } from "react";
import emailjs from "@emailjs/browser";

const ACCENT = "#c41e3a";
const EMAILJS_SERVICE_ID  = "service_9lef22k";
const EMAILJS_TEMPLATE_ID = "template_sa9gkr8";
const EMAILJS_PUBLIC_KEY  = "ct9fgVhRIQYR2XYT4";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      { from_name: name, from_email: email, message },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    }).catch(() => {
      setStatus("error");
    });
  }

  const inputStyle = {
    width: "100%", background: "#0a0a0c", border: `1px solid ${ACCENT}10`,
    borderRadius: 8, padding: "10px 14px", color: "#e8e8e8",
    fontFamily: "'VT323',monospace", fontSize: 20, lineHeight: 1.5
  };

  const isSending = status === "sending";

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 28, animation: "fu 0.5s ease both" }}>
        <h1 style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 22, color: ACCENT,
          letterSpacing: 3, textShadow: `0 0 30px ${ACCENT}55`
        }}>
          CONTACT
        </h1>
        <div style={{ height: 1, maxWidth: 120, margin: "8px auto 0", background: `linear-gradient(90deg,transparent,${ACCENT}40,transparent)` }} />
        <p style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af", marginTop: 10 }}>
          Get in touch
        </p>
      </div>

      <div style={{
        background: "#111114", borderRadius: 14, border: `1px solid ${ACCENT}12`,
        padding: 24, animation: "fu 0.5s ease 0.1s both",
        boxShadow: "0 4px 24px #00000040"
      }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 8, color: ACCENT, letterSpacing: 2, display: "block", marginBottom: 6 }}>
              NAME
            </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
              required disabled={isSending} style={inputStyle} />
          </div>

          <div style={{ marginBottom: 14 }}>
            <label style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 8, color: ACCENT, letterSpacing: 2, display: "block", marginBottom: 6 }}>
              EMAIL
            </label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
              required disabled={isSending} style={inputStyle} />
          </div>

          <div style={{ marginBottom: 14 }}>
            <label style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 8, color: ACCENT, letterSpacing: 2, display: "block", marginBottom: 6 }}>
              MESSAGE
            </label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="What's on your mind?"
              required rows={6} disabled={isSending} style={{ ...inputStyle, resize: "vertical" }} />
          </div>

          <button type="submit" disabled={isSending || status === "sent"} style={{
            width: "100%", padding: "12px 28px",
            background: status === "sent"
              ? "linear-gradient(135deg,#2bff6e,#1ecc55)"
              : `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`,
            border: "none", borderRadius: 8, color: "#fff",
            fontFamily: "'Press Start 2P',sans-serif", fontSize: 9, letterSpacing: 1,
            cursor: isSending || status === "sent" ? "default" : "pointer",
            opacity: isSending ? 0.7 : 1, transition: "background 0.3s, opacity 0.2s"
          }}>
            {status === "sending" ? "SENDING…" : status === "sent" ? "SENT ✓" : "SEND MESSAGE"}
          </button>

          {status === "sent" && (
            <p style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#2bff6e", marginTop: 10, textAlign: "center" }}>
              Message delivered! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: ACCENT, marginTop: 10, textAlign: "center" }}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* Social links */}
      <div style={{
        background: "#111114", borderRadius: 14, border: `1px solid ${ACCENT}12`,
        padding: 24, marginTop: 18, animation: "fu 0.5s ease 0.2s both",
        boxShadow: "0 4px 24px #00000040", textAlign: "center"
      }}>
        <h2 style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 11, color: ACCENT,
          letterSpacing: 2, marginBottom: 14
        }}>
          FIND US
        </h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {[
            { name: "DISCORD", icon: "💬", url: "https://discord.com/invite/eNbVMne84S" },
            { name: "YOUTUBE", icon: "▶", url: "https://www.youtube.com/@lunosama", color: "#ff0000" },
          ].map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{
              background: "#0a0a0c", borderRadius: 10, padding: "10px 18px",
              border: `1px solid ${ACCENT}08`, cursor: "pointer",
              transition: "border-color 0.2s", textDecoration: "none", display: "block"
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${ACCENT}30`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${ACCENT}08`}
            >
              <div style={{ fontSize: 22, marginBottom: 4, color: s.color || "inherit" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 7, color: "#9ca3af", letterSpacing: 1 }}>
                {s.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
