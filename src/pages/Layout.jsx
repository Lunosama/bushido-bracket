import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/play", label: "PLAY" },
  { to: "/about", label: "ABOUT" },
  { to: "/rules", label: "RULES" },
  { to: "/contact", label: "CONTACT" },
  { to: "/tip-jar", label: "TIP JAR" },
];

const ACCENT = "#c41e3a";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0c", color: "#c8c0b8", fontFamily: "'VT323',monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        @keyframes fu{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:3px;height:3px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:${ACCENT}18;border-radius:3px}
        a{text-decoration:none}
      `}</style>

      {/* NAV BAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "#0a0a0cee", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${ACCENT}10`,
        padding: "0 20px", height: 52,
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ fontFamily: "'Press Start 2P',sans-serif", fontSize: 9, color: ACCENT, letterSpacing: 2, textShadow: `0 0 20px ${ACCENT}44`, display: "flex", flexDirection: "column", gap: 3, textDecoration: "none" }}>
          <span>BUSHIDO BRACKET</span>
          <span style={{ fontSize: 8, color: "#9ca3af", letterSpacing: 2, textShadow: "none", textAlign: "center" }}>LAST WARRIOR</span>
        </NavLink>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="nav-desktop">
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              style={({ isActive }) => ({
                fontFamily: "'VT323',monospace", fontSize: 16, letterSpacing: 2,
                color: isActive ? ACCENT : "#9ca3af",
                transition: "color 0.2s"
              })}
              onMouseEnter={e => { if (e.target.style.color !== ACCENT) e.target.style.color = "#fff"; }}
              onMouseLeave={e => { if (e.target.style.color !== ACCENT) e.target.style.color = "#9ca3af"; }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", background: "none", border: "none", color: "#9ca3af",
          fontSize: 24, cursor: "pointer", fontFamily: "monospace"
        }} className="nav-hamburger">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 52, left: 0, right: 0, bottom: 0, zIndex: 999,
          background: "#0a0a0cf5", backdropFilter: "blur(12px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28
        }}>
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: "'VT323',monospace", fontSize: 24, letterSpacing: 4,
                color: isActive ? ACCENT : "#9ca3af"
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media(max-width:700px){
          .nav-desktop{display:none !important}
          .nav-hamburger{display:block !important}
        }
      `}</style>

      {/* Page content */}
      <div style={{ paddingTop: 52 }}>
        <Outlet />
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: "center", padding: "32px 20px 18px",
        borderTop: `1px solid ${ACCENT}10`
      }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 14 }}>
          {NAV_LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}
              style={{ fontFamily: "'VT323',monospace", fontSize: 14, color: "#9ca3af", letterSpacing: 1 }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, opacity: 0.4 }}>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1z" fill={ACCENT} opacity="0.6"/><path d="M7 9.5L5.5 8l-.7.7L7 10.9l4-4-.7-.7L7 9.5z" fill="#fff"/></svg>
          <span style={{ fontFamily: "'VT323',monospace", fontSize: 9, color: "#fff", letterSpacing: 1.5 }}>POWERED BY WEB CRYPTO API — CRYPTOGRAPHICALLY FAIR</span>
        </div>
        <div style={{ marginTop: 8, fontFamily: "'VT323',monospace", fontSize: 12, color: "#9ca3af44" }}>
          &copy; 2026 BUSHIDO BRACKET: LAST WARRIOR
        </div>
      </footer>
    </div>
  );
}
