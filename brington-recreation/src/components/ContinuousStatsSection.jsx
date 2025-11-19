// ContinuousStatsExact.jsx
import React, { useEffect, useRef, useState } from "react";

/*
  FINAL VERSION WITH CORRECT VALUES:
  - Odometer now ALWAYS ends at exact target
  - All other code untouched
*/

const SLIDES = [
  { value: 1034, label: "Sample Data about Sample Things" },
  { value: 2, label: "Sample Data about Sample Things" },
  { value: 54, label: "Sample Data about Sample Things" },
  { value: 25, label: "Sample Data about Sample Things" },
];

/* -------------------------------------------
   CONTINUOUS BACKGROUND (Matches screenshots)
-------------------------------------------- */
const FULL_BACKGROUND =
  "linear-gradient(180deg, \
    #39615E 0%, #91BDB3 25%, \
    #91BDB3 25%, #C8FBEC 50%, \
    #CFFAEC 50%, #EAF0EF 75%, \
    #F3F2F2 75%, #D1CFF6 100% \
  )";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/* -------------------------------------------
   FIXED ODOMETER — 100% accurate final values
-------------------------------------------- */
function useOdometer(target, active) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    let raf = null;
    let start = null;
    const duration = 1400;

    function step(ts) {
      if (!start) start = ts;

      const p = Math.min(1, (ts - start) / duration);
      const eased = easeOutCubic(p);

      // Correct intermediate value
      let current = Math.round(target * eased);

      // FORCE exact final value at completion
      if (p === 1) current = target;

      setDisplay(current.toLocaleString());

      if (p < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);

  return display;
}

export default function ContinuousStatsExact() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState([false, false, false, false]);

  const slideOffsets = [0, 100, 200, 300];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const centerY = y + vh / 2;

      const idx = Math.min(3, Math.floor(centerY / vh));
      setActiveIndex(idx);

      const newView = SLIDES.map((_, i) => {
        const slideCenter = (i + 0.5) * vh;
        return Math.abs(slideCenter - centerY) < vh * 0.45;
      });

      setInView(newView);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const odometers = SLIDES.map((s, i) => useOdometer(s.value, inView[i]));

  /* ---------- Inject Styles (unchanged) ---------- */
  useEffect(() => {
    if (document.getElementById("continuous-exact-styles")) return;
    const style = document.createElement("style");
    style.id = "continuous-exact-styles";

    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600&display=swap');
      .ce-container {
        width:100%;
        min-height:400vh;
        position:relative;
        overflow-x:hidden;
        background-attachment: fixed;
      }
      .ce-section {
        position:absolute;
        width:100%;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        pointer-events:none;
      }
      .ce-center {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        pointer-events:none;
      }
      .ce-number {
        font-family:'Playfair Display', serif;
        font-size:16.5vw;
        color:rgba(20,20,20,0.95);
        -webkit-font-smoothing:antialiased;
        text-align:center;
      }
      .ce-label {
        font-family:Inter, sans-serif;
        margin-top:18px;
        font-size:0.95rem;
        color:rgba(8,8,8,0.54);
      }
      .ce-svg {
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        width:1920px;
        height:400vh;
        pointer-events:none;
      }
      .ce-path {
        stroke:rgba(35,35,35,0.42);
        stroke-width:2.2;
        stroke-dasharray:6 9;
        stroke-linecap:round;
        fill:none;
      }
      .ce-star {
        fill:#caa5ff;
        filter:drop-shadow(0 6px 14px rgba(140,80,200,0.18));
      }
      .ce-glow {
        fill:#bda8ff;
        opacity:0.36;
        filter:blur(6px);
      }
    `;
    document.head.appendChild(style);
  }, []);

  /* ---------- SVG Curve Path (unchanged) ---------- */
  const VIEW_W = 1920;
  const VIEW_H = 4000;

  const pathD = `
    M 140 120
    C 220 360, 240 760, 480 980
    C 760 1220, 980 1480, 1120 1740
    C 1260 1980, 1420 2260, 1180 2480
    C 930 2720, 700 2920, 460 3060
    C 260 3180, 300 3350, 560 3600
  `.replace(/\s+/g, " ");

  return (
    <div
      ref={containerRef}
      className="ce-container"
      style={{ background: FULL_BACKGROUND }}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="ce-section"
          style={{ top: `${slideOffsets[i]}vh` }}
        >
          <div className="ce-center">
            <div className="ce-number">{odometers[i]}</div>
            <div className="ce-label">{slide.label}</div>
          </div>
        </div>
      ))}

      <svg
        className="ce-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <path id="curvePath" d={pathD} />
          <g id="starShape">
            <path
              d="M10 0 L12.4 6.2 L19 7.2 L14.4 11.8 L15.4 18.3 L10 15 L4.6 18.3 L5.6 11.8 L1 7.2 L7.6 6.2 Z"
              className="ce-star"
            />
          </g>
        </defs>

        <use href="#curvePath" className="ce-path" />

        <g transform="translate(-8,-8)">
          <use href="#starShape" width="28" height="28" />
          <animateMotion dur="9s" repeatCount="indefinite">
            <mpath href="#curvePath" />
          </animateMotion>
        </g>

        <g transform="translate(-8,-8)">
          <use href="#starShape" width="22" height="22" />
          <animateMotion dur="11s" begin="2s" repeatCount="indefinite">
            <mpath href="#curvePath" />
          </animateMotion>
        </g>

        <g transform="translate(-8,-8)">
          <use href="#starShape" width="18" height="18" />
          <animateMotion dur="13s" begin="4s" repeatCount="indefinite">
            <mpath href="#curvePath" />
          </animateMotion>
        </g>
      </svg>
    </div>
  );
}
