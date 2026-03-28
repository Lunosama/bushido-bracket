import { CHAR_INFO } from "../App.jsx";

const ACCENT = "#c41e3a";

const Card = ({ title, icon, children, delay = 0 }) => (
  <div style={{
    background: "#111114", borderRadius: 14, border: `1px solid ${ACCENT}12`,
    padding: 24, marginBottom: 18, animation: `fu 0.5s ease ${delay}s both`,
    boxShadow: "0 4px 24px #00000040"
  }}>
    <h2 style={{
      fontFamily: "'Press Start 2P',sans-serif", fontSize: 13, color: ACCENT,
      letterSpacing: 2, marginBottom: 14, display: "flex", alignItems: "center", gap: 10
    }}>
      <span style={{ fontSize: 20 }}>{icon}</span> {title}
    </h2>
    <div style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#c8c0b8", lineHeight: 1.7 }}>
      {children}
    </div>
  </div>
);

export default function About() {
  const chars = Object.entries(CHAR_INFO);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 28, animation: "fu 0.5s ease both" }}>
        <h1 style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 22, color: ACCENT,
          letterSpacing: 3, textShadow: `0 0 30px ${ACCENT}55`
        }}>
          ABOUT
        </h1>
        <div style={{ height: 1, maxWidth: 120, margin: "8px auto 0", background: `linear-gradient(90deg,transparent,${ACCENT}40,transparent)` }} />
      </div>

      <Card title="WHY THIS EXISTS" icon="🎁" delay={0.1}>
        <p>This started as a giveaway tool. Planning my first ever channel giveaway, I wanted something more
        creative and fun than just picking a random name,so I built this instead.</p>
        <p style={{ marginTop: 8, color: "#9ca3af" }}>
          What began as a simple bracket turned into a full pixel fighting tournament simulator. If your name
          is in the bracket, you're not just being picked,you're fighting for it.
        </p>
      </Card>

      <Card title="WHAT IS THIS?" icon="🏯" delay={0.12}>
        <p>A tournament bracket simulator where pixel samurai fight in randomly generated battles.
        Every outcome is determined by cryptographic randomness,no bias, no rigging, pure digital bushido.</p>
        <p style={{ marginTop: 8, color: "#9ca3af" }}>
          Enter your participants, generate a bracket, and watch pixel warriors clash in choreographed combat
          with synthesized audio and sprite animations.
        </p>
      </Card>

      <Card title="HOW FIGHTS WORK" icon="⚔️" delay={0.15}>
        <p>Each participant is randomly assigned a pixel fighter character with unique animations and fighting styles.</p>
        <ul style={{ marginTop: 8, paddingLeft: 20, color: "#c8c0b8" }}>
          <li>Winners are determined by the <span style={{ color: ACCENT }}>Web Crypto API</span> before the fight begins</li>
          <li>Fights follow a <span style={{ color: ACCENT }}>5-phase narrative arc</span>: Opening, Escalation, Rally, Turning Point, and Climax</li>
          <li>Exchanges are choreographed with attacks, blocks, counters, combos, and special finishers</li>
          <li>Each fight features real-time sprite animations rendered on HTML5 Canvas</li>
          <li>Projectile attacks, screen shakes, and hit-stop effects add impact to every blow</li>
        </ul>
      </Card>

      <Card title="CRYPTOGRAPHIC FAIRNESS" icon="🔐" delay={0.2}>
        <p>Every fight outcome is decided using <span style={{ color: ACCENT }}>crypto.getRandomValues()</span>,the Web Crypto API built into your browser.</p>
        <ul style={{ marginTop: 8, paddingLeft: 20, color: "#c8c0b8" }}>
          <li><strong style={{ color: "#ffd700" }}>Hardware entropy</strong>,randomness sourced from physical hardware, not pseudo-random algorithms</li>
          <li><strong style={{ color: "#ffd700" }}>Unpredictable</strong>,no one (not even the app) can predict or influence outcomes</li>
          <li><strong style={{ color: "#ffd700" }}>Tamper-proof</strong>,the same API used for cryptographic key generation</li>
          <li><strong style={{ color: "#ffd700" }}>Transparent</strong>,no server-side manipulation, everything runs in your browser</li>
        </ul>
        <p style={{ marginTop: 10, color: "#9ca3af", fontSize: 18 }}>
          This is the gold standard of randomness on the web. The same entropy source that protects your banking sessions decides who wins each fight.
        </p>
      </Card>

      <Card title="THE CHARACTERS" icon="👥" delay={0.25}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 10, marginTop: 4
        }}>
          {chars.map(([key, info]) => (
            <div key={key} style={{
              background: "#0a0a0c", borderRadius: 10, padding: "12px 10px",
              border: `1px solid ${ACCENT}08`, textAlign: "center"
            }}>
              <div style={{ fontSize: 28, marginBottom: 4 }}>{info.icon}</div>
              <div style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 8, color: ACCENT, letterSpacing: 1 }}>
                {info.name.toUpperCase()}
              </div>
              <div style={{
                marginTop: 4, fontSize: 14, color: "#9ca3af", letterSpacing: 1,
                textTransform: "uppercase"
              }}>
                {info.style}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="CREDITS" icon="🎨" delay={0.28}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <span style={{ color: ACCENT }}>Character Art</span>
            <span style={{ color: "#9ca3af" }}> — pixel sprite sheets by </span>
            <span style={{ color: "#fff" }}>Mattz Art</span>
            <p style={{ color: "#9ca3af", fontSize: 18, marginTop: 4 }}>
              The character PNG assets were purchased from Mattz Art. All in-game visual effects,
              animations, and UI were built on top of those sprites.
            </p>
          </div>
          <div>
            <span style={{ color: ACCENT }}>Sound &amp; Audio</span>
            <span style={{ color: "#9ca3af" }}> — procedurally synthesized via </span>
            <span style={{ color: "#fff" }}>Tone.js</span>
            <p style={{ color: "#9ca3af", fontSize: 18, marginTop: 4 }}>
              Every sound effect and music track is generated in real-time in your browser. No audio files,all sound is synthesized from scratch.
            </p>
          </div>
        </div>
      </Card>

      <Card title="TECH STACK" icon="🛠️" delay={0.3}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            { name: "React 19", desc: "UI framework" },
            { name: "Vite", desc: "Build tool" },
            { name: "Tone.js", desc: "Audio synthesis" },
            { name: "Web Crypto API", desc: "Cryptographic RNG" },
            { name: "HTML5 Canvas", desc: "Sprite rendering" },
            { name: "React Router", desc: "Client-side routing" },
          ].map(t => (
            <div key={t.name} style={{
              background: "#0a0a0c", borderRadius: 8, padding: "8px 14px",
              border: `1px solid ${ACCENT}08`
            }}>
              <span style={{ color: ACCENT, fontFamily: "'Press Start 2P',sans-serif", fontSize: 8 }}>{t.name}</span>
              <span style={{ color: "#9ca3af", fontSize: 14, marginLeft: 8 }}>{t.desc}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
