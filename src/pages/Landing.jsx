import { useNavigate, Link } from "react-router-dom";
import { PixelFighter, Btn } from "../App.jsx";
import { useEffect, useState } from "react";

const ACCENT = "#c41e3a";

export default function Landing() {
  const navigate = useNavigate();
  const [frame, setFrame] = useState(0);

  // Idle animation loop
  useEffect(() => {
    const iv = setInterval(() => setFrame(f => (f + 1) % 6), 180);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", position: "relative",
      overflow: "hidden", padding: "20px"
    }}>
      {/* Background gradient glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse at center, ${ACCENT}08 0%, transparent 70%)`
      }} />

      {/* Kanji watermark */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "serif", fontSize: 280, color: "#ffffff03",
        pointerEvents: "none", userSelect: "none", letterSpacing: 20, whiteSpace: "nowrap"
      }}>
        武士道
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", animation: "fu 0.8s ease both" }}>
        {/* Title */}
        <h1 style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 28, color: ACCENT,
          letterSpacing: 4, textShadow: `0 0 40px ${ACCENT}55, 0 0 80px ${ACCENT}22`,
          marginBottom: 10, lineHeight: 1.4
        }}>
          BUSHIDO<br/>BRACKET
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 16, color: "#9ca3af",
          letterSpacing: 3, marginBottom: 6, marginTop: -4
        }}>
          LAST WARRIOR
        </p>
        <p style={{
          fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af",
          letterSpacing: 4, marginBottom: 32
        }}>
          侍 SIMULATE YOUR FIGHT 侍
        </p>

        {/* Animated fighters */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 40, marginBottom: 36
        }}>
          <div style={{ animation: "fu 0.6s ease 0.2s both" }}>
            <PixelFighter charType="samurai1" anim="idle" frame={frame} facing="right" size={100} />
          </div>
          <div style={{
            fontFamily: "'Press Start 2P',sans-serif", fontSize: 18, color: "#ffd700",
            textShadow: "0 0 20px #ffd70055", animation: "fu 0.6s ease 0.3s both"
          }}>
            VS
          </div>
          <div style={{ animation: "fu 0.6s ease 0.4s both" }}>
            <PixelFighter charType="demon" anim="idle" frame={frame} facing="left" size={100} />
          </div>
        </div>

        {/* START button */}
        <div style={{ animation: "fu 0.6s ease 0.5s both" }}>
          <button onClick={() => navigate("/play")} style={{
            padding: "16px 48px", background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`,
            border: "none", borderRadius: 8, color: "#fff",
            fontFamily: "'Press Start 2P',sans-serif", fontSize: 11, letterSpacing: 2,
            cursor: "pointer", textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            boxShadow: `0 0 30px ${ACCENT}33, 0 4px 20px rgba(0,0,0,0.3)`,
            transition: "transform 0.15s, box-shadow 0.15s"
          }}
            onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = `0 0 50px ${ACCENT}55, 0 6px 30px rgba(0,0,0,0.4)`; }}
            onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = `0 0 30px ${ACCENT}33, 0 4px 20px rgba(0,0,0,0.3)`; }}
          >
            ENTER THE ARENA
          </button>
        </div>

        {/* Crypto fairness badge */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          marginTop: 20, animation: "fu 0.6s ease 0.6s both"
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1z" fill={ACCENT} opacity="0.8"/><path d="M7 9.5L5.5 8l-.7.7L7 10.9l4-4-.7-.7L7 9.5z" fill="#fff"/></svg>
          <span style={{ fontFamily: "'VT323',monospace", fontSize: 16, color: "#fff", letterSpacing: 2, fontWeight: 600 }}>
            POWERED BY WEB CRYPTO API — CRYPTOGRAPHICALLY FAIR
          </span>
        </div>

        {/* Quick nav links */}
        <div style={{
          display: "flex", gap: 24, justifyContent: "center", marginTop: 36,
          animation: "fu 0.6s ease 0.7s both"
        }}>
          {[
            { to: "/about", label: "ABOUT" },
            { to: "/rules", label: "RULES" },
            { to: "/contact", label: "CONTACT" },
            { to: "/tip-jar", label: "TIP JAR" },
          ].map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af",
              letterSpacing: 2, transition: "color 0.2s"
            }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#9ca3af"}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: 48, animation: "fu 0.6s ease 0.9s both",
          fontSize: 18, color: "#9ca3af44"
        }}>
          <span style={{ animation: "fl 2s ease-in-out infinite", display: "inline-block" }}>
            ▼
          </span>
        </div>
      </div>

      <style>{`@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}`}</style>
    </div>
  );
}
