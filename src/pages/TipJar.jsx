import { useState } from "react";

const ACCENT = "#c41e3a";
const BMAC_URL = "https://buymeacoffee.com/lunosama";

const tiers = [
  {
    name: "WARRIOR",
    icon: "⚔️",
    desc: "A small token of appreciation. Every warrior counts in the arena.",
    amount: "$5",
    color: "#c8c0b8"
  },
  {
    name: "SAMURAI",
    icon: "🗡️",
    desc: "A noble contribution. Your honor strengthens the battlefield.",
    amount: "$15",
    color: ACCENT
  },
  {
    name: "SHOGUN",
    icon: "👑",
    desc: "The ultimate patron. Command respect across the entire arena.",
    amount: "$50",
    color: "#ffd700"
  }
];

export default function TipJar() {
  const [customAmount, setCustomAmount] = useState("");
  const [customError, setCustomError] = useState("");

  function handleCustomTip() {
    const val = parseFloat(customAmount);
    if (!customAmount || isNaN(val) || val < 1) {
      setCustomError("Please enter a valid amount ($1 or more).");
      return;
    }
    setCustomError("");
    window.open(BMAC_URL, "_blank", "noopener,noreferrer");
  }

  function handleCustomInput(e) {
    setCustomError("");
    const raw = e.target.value;
    // Allow digits and one decimal point only
    if (/^(\d+\.?\d{0,2})?$/.test(raw)) setCustomAmount(raw);
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 28, animation: "fu 0.5s ease both" }}>
        <h1 style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 22, color: ACCENT,
          letterSpacing: 3, textShadow: `0 0 30px ${ACCENT}55`
        }}>
          SUPPORT THE ARENA
        </h1>
        <div style={{ height: 1, maxWidth: 120, margin: "8px auto 0", background: `linear-gradient(90deg,transparent,${ACCENT}40,transparent)` }} />
        <p style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af", marginTop: 10 }}>
          This project is completely free to use. If you enjoy it, consider leaving a tip to support development.
        </p>
      </div>

      {/* Tier cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16, marginBottom: 16
      }}>
        {tiers.map((t, i) => (
          <div key={t.name} style={{
            background: "#111114", borderRadius: 14, border: `1px solid ${ACCENT}12`,
            padding: 28, textAlign: "center", animation: `fu 0.5s ease ${0.1 + i * 0.08}s both`,
            boxShadow: "0 4px 24px #00000040", transition: "border-color 0.3s, transform 0.2s",
            cursor: "pointer"
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${t.color}40`; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = `${ACCENT}12`; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ fontSize: 42, marginBottom: 10 }}>{t.icon}</div>
            <h3 style={{
              fontFamily: "'Press Start 2P',sans-serif", fontSize: 12, color: t.color,
              letterSpacing: 2, marginBottom: 10
            }}>
              {t.name}
            </h3>
            <div style={{
              fontFamily: "'Press Start 2P',sans-serif", fontSize: 20, color: t.color,
              marginBottom: 10, textShadow: `0 0 20px ${t.color}33`
            }}>
              {t.amount}
            </div>
            <p style={{
              fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af",
              lineHeight: 1.4, marginBottom: 16
            }}>
              {t.desc}
            </p>
            <a
              href={BMAC_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 24px",
                background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`,
                borderRadius: 8, color: t.color === "#ffd700" ? "#000" : "#fff",
                fontFamily: "'Press Start 2P',sans-serif", fontSize: 8, letterSpacing: 1,
                textDecoration: "none", transition: "transform 0.15s"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              TIP {t.amount}
            </a>
          </div>
        ))}

        {/* Custom amount card */}
        <div style={{
          background: "#111114", borderRadius: 14, border: `1px solid ${ACCENT}12`,
          padding: 28, textAlign: "center", animation: "fu 0.5s ease 0.34s both",
          boxShadow: "0 4px 24px #00000040", transition: "border-color 0.3s, transform 0.2s"
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = `#9ca3af40`; e.currentTarget.style.transform = "translateY(-4px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = `${ACCENT}12`; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <div style={{ fontSize: 42, marginBottom: 10 }}>✨</div>
          <h3 style={{
            fontFamily: "'Press Start 2P',sans-serif", fontSize: 12, color: "#9ca3af",
            letterSpacing: 2, marginBottom: 10
          }}>
            YOUR CALL
          </h3>
          <p style={{
            fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af",
            lineHeight: 1.4, marginBottom: 16
          }}>
            Send whatever feels right. Every bit keeps the arena alive.
          </p>
          <div style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 4 }}>
              <span style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 14, color: "#9ca3af" }}>$</span>
              <input
                type="text"
                inputMode="decimal"
                value={customAmount}
                onChange={handleCustomInput}
                placeholder="0.00"
                style={{
                  width: 90, padding: "8px 10px",
                  background: "#0a0a0c", border: `1px solid ${customError ? ACCENT : "#9ca3af30"}`,
                  borderRadius: 6, color: "#fff", fontFamily: "'Press Start 2P',sans-serif",
                  fontSize: 14, textAlign: "center", outline: "none"
                }}
              />
            </div>
            {customError && (
              <p style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: ACCENT, marginBottom: 4 }}>
                {customError}
              </p>
            )}
          </div>
          <button
            onClick={handleCustomTip}
            style={{
              padding: "10px 24px",
              background: `linear-gradient(135deg, #9ca3af, #9ca3afcc)`,
              border: "none", borderRadius: 8, color: "#000",
              fontFamily: "'Press Start 2P',sans-serif", fontSize: 8, letterSpacing: 1,
              cursor: "pointer", transition: "transform 0.15s"
            }}
            onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.target.style.transform = "scale(1)"}
          >
            SEND TIP
          </button>
        </div>
      </div>

      {/* Alternative support */}
      <div style={{
        background: "#111114", borderRadius: 14, border: `1px solid ${ACCENT}12`,
        padding: 24, textAlign: "center", animation: "fu 0.5s ease 0.46s both",
        boxShadow: "0 4px 24px #00000040"
      }}>
        <h2 style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 11, color: ACCENT,
          letterSpacing: 2, marginBottom: 10
        }}>
          OTHER WAYS TO SUPPORT
        </h2>
        <p style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af", lineHeight: 1.5 }}>
          You can also support this project by sharing it with friends,<br />
          starring the repo on GitHub, or reporting bugs and suggestions.
        </p>
        <p style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af", marginTop: 10 }}>
          Every share helps the arena grow! 🏯
        </p>
      </div>
    </div>
  );
}
