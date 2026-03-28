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
    <div style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#c8c0b8", lineHeight: 1.6 }}>
      {children}
    </div>
  </div>
);

const Step = ({ n, title, desc }) => (
  <div style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
    <div style={{
      minWidth: 32, height: 32, borderRadius: 8,
      background: `${ACCENT}15`, display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Press Start 2P',sans-serif", fontSize: 10, color: ACCENT
    }}>
      {n}
    </div>
    <div>
      <div style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 9, color: "#c8c0b8", letterSpacing: 1, marginBottom: 4 }}>
        {title}
      </div>
      <div style={{ fontFamily: "'VT323',monospace", fontSize: 20, color: "#9ca3af" }}>
        {desc}
      </div>
    </div>
  </div>
);

export default function Rules() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 28, animation: "fu 0.5s ease both" }}>
        <h1 style={{
          fontFamily: "'Press Start 2P',sans-serif", fontSize: 22, color: ACCENT,
          letterSpacing: 3, textShadow: `0 0 30px ${ACCENT}55`
        }}>
          RULES
        </h1>
        <div style={{ height: 1, maxWidth: 120, margin: "8px auto 0", background: `linear-gradient(90deg,transparent,${ACCENT}40,transparent)` }} />
      </div>

      <Card title="HOW TO PLAY" icon="🎮" delay={0.1}>
        <Step n="1" title="ENTER PARTICIPANTS" desc="Type participant names in the text area, one per line. You need at least 2 and can add up to 256." />
        <Step n="2" title="GENERATE BRACKET" desc='Click "Generate Bracket" to create a single-elimination tournament. Player positions are assigned randomly using the Web Crypto API, ensuring no participant is given a favourable slot. If the number of players is not a power of two, the bracket is automatically filled with byes, which are empty slots that allow a participant to advance without competing. These byes are also distributed at random, so any participant may progress to the next round purely by chance rather than design.' />
        <Step n="3" title="START TOURNAMENT" desc="Preview the full bracket layout, then click 'Start Tournament' to begin the battles." />
        <Step n="4" title="WATCH THE FIGHTS" desc="Each match plays out with animated pixel fighters. In Auto mode, fights run automatically. In Manual mode, click 'Fight' to start each match." />
        <Step n="5" title="CHAMPION CROWNED" desc="The last fighter standing is crowned champion with a victory fanfare and confetti celebration!" />
      </Card>

      <Card title="SETTINGS" icon="⚙️" delay={0.15}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { name: "TOURNAMENT NAME", desc: "Customize the title displayed at the top of the bracket. Default: 'BUSHIDO BRACKET'." },
            { name: "FIGHT SPEED", desc: "Control how fast fights play out. 0.5x for slow-motion drama, 1x for normal, up to 2x for fast-paced action." },
            { name: "ADVANCE MODE", desc: "Auto: fights start and advance automatically. Manual: click to start each fight and advance to the next, controlling the pace yourself." },
            { name: "THEME COLOR", desc: "Choose from 5 accent colors: Cyan, Red, Gold, Green, or Purple. Changes the entire UI accent throughout the app." },
            { name: "AUDIO", desc: "Separate volume controls for sound effects (SFX) and background music. Click the speaker icon to enable audio — browser requires a user gesture to start." },
          ].map(s => (
            <div key={s.name}>
              <span style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 9, color: ACCENT, letterSpacing: 1 }}>{s.name}</span>
              <p style={{ marginTop: 3, color: "#9ca3af", fontSize: 20 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="TIPS" icon="💡" delay={0.2}>
        <ul style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 8 }}>
            <span style={{ color: "#ffd700" }}>More participants = more drama.</span> A 16-player tournament has 4 intense rounds of elimination.
          </li>
          <li style={{ marginBottom: 8 }}>
            <span style={{ color: "#ffd700" }}>Try Manual mode</span> for watch parties — control the pace and build suspense between each fight.
          </li>
          <li style={{ marginBottom: 8 }}>
            <span style={{ color: "#ffd700" }}>Enable audio</span> for the full experience — every punch, slash, and block has unique synthesized samurai sounds.
          </li>
          <li style={{ marginBottom: 8 }}>
            <span style={{ color: "#ffd700" }}>Slow it down</span> with 0.5x speed to appreciate the choreography of each fight sequence.
          </li>
          <li>
            <span style={{ color: "#ffd700" }}>All outcomes are random</span> — run the same tournament twice and get completely different results!
          </li>
        </ul>
      </Card>
    </div>
  );
}
