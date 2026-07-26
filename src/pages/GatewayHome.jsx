import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

/* ─── HALF PANEL ─── */
function Half({
  side,
  eyebrow,
  headline,
  copy,
  ctaLabel,
  href,
  image,
  gradFrom,
  gradTo,
  accentBtn,
  prefersReducedMotion,
  otherHovered,
  onHoverStart,
  onHoverEnd,
}) {
  const navigate = useNavigate();
  const [exiting, setExiting] = useState(false);

  const handleClick = async (e) => {
    e.stopPropagation();
    if (exiting) return;
    setExiting(true);
    await new Promise((r) => setTimeout(r, prefersReducedMotion ? 0 : 160));
    navigate(href);
  };

  const revealVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, x: side === "left" ? "-5%" : "5%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: side === "left" ? 0.05 : 0.18,
      },
    },
  };

  const textDelay = side === "left" ? 0.35 : 0.48;

  return (
    <motion.section
      variants={revealVariants}
      initial="hidden"
      animate="visible"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      aria-label={ctaLabel}
      className="relative flex flex-col overflow-hidden
                 w-full md:w-1/2 min-h-[55vh] md:min-h-screen"
      style={{
        backgroundColor: gradTo,
        opacity: otherHovered && !prefersReducedMotion ? 0.88 : 1,
        transition: "opacity 0.35s ease",
      }}
    >
      {/* ── Background image — HIGH VISIBILITY ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          animate={prefersReducedMotion ? {} : { scale: otherHovered ? 1.0 : 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full object-cover object-center brightness-105 contrast-105"
          style={{ opacity: 0.85 }}
        />
      </div>

      {/* ── Gradient Overlay for readable text ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to bottom, ${gradFrom}88 0%, ${gradFrom}cc 40%, ${gradTo}fa 85%, ${gradTo} 100%)`,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 sm:px-12 lg:px-16 py-24 md:py-0 md:min-h-screen">
        {/* Eyebrow */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: textDelay }}
          className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] mb-3 drop-shadow-md"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          {eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: textDelay + 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-5 drop-shadow-lg"
        >
          {headline}
        </motion.h2>

        {/* Short copy */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: textDelay + 0.16 }}
          className="text-sm sm:text-base font-semibold mb-10 max-w-xs drop-shadow-md"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          {copy}
        </motion.p>

        {/* CTA Button — ONLY THIS BUTTON IS CLICKABLE */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: textDelay + 0.24 }}
        >
          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleClick}
            className="inline-flex items-center justify-center font-extrabold text-sm sm:text-base
                       px-8 py-4 rounded-2xl shadow-2xl transition-all duration-200 cursor-pointer"
            style={{
              background: "white",
              color: accentBtn,
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = accentBtn;
              e.currentTarget.style.color = "white";
              e.currentTarget.style.boxShadow = `0 16px 50px rgba(0,0,0,0.6)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = accentBtn;
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.5)";
            }}
          >
            <span>{ctaLabel}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-28 z-[2] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)" }}
      />
    </motion.section>
  );
}

/* ─── MAIN GATEWAY ─── */
export default function GatewayHome() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen overflow-hidden bg-slate-950">
      {/* ════ ONLY THE LOGO IN TOP HEADER ════ */}
      <header className="absolute top-0 inset-x-0 z-50 flex items-center justify-center h-20 pointer-events-none">
        <a href="/" aria-label="Saipal Academy" className="pointer-events-auto">
          <img
            src="/Logo.png"
            alt="Saipal Academy"
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-xl"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>
      </header>

      {/* ════ SCHOOL HALF ════ */}
      <Half
        side="left"
        eyebrow="School Division · Pre-Primary – Grade 10"
        headline={"Where\nCuriosity\nGrows"}
        copy="K–10 education with STEAM, sports & strong values."
        ctaLabel="Discover School"
        href="/school"
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=900"
        gradFrom="#2E3192"
        gradTo="#1a1c6e"
        accentBtn="#2E3192"
        prefersReducedMotion={prefersReducedMotion}
        otherHovered={hoveredSide === "right"}
        onHoverStart={() => setHoveredSide("left")}
        onHoverEnd={() => setHoveredSide(null)}
      />

      {/* ════ CENTER SEAM ════ */}
      <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-40 flex-col items-center justify-center pointer-events-none">
        <div
          className="w-px flex-grow opacity-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #00AEEF 25%, #00AEEF 75%, transparent)",
          }}
        />
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center my-2 shadow-2xl"
          style={{
            background: "#020617",
            border: "1.5px solid rgba(0,174,239,0.65)",
            boxShadow: "0 0 24px rgba(0,174,239,0.5)",
          }}
        >
          <img
            src="/Logo.png"
            alt=""
            aria-hidden
            className="w-5 h-5 object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div
          className="w-px flex-grow opacity-40"
          style={{
            background: "linear-gradient(to bottom, #00AEEF 75%, transparent)",
          }}
        />
      </div>

      {/* ════ COLLEGE HALF ════ */}
      <Half
        side="right"
        eyebrow="Higher Education · +2 & Cambridge A-Levels"
        headline={"Your\nFuture\nBegins Now"}
        copy="+2 & A-Levels built for global universities."
        ctaLabel="Discover College"
        href="/college"
        image="/hero.jpeg"
        gradFrom="#00AEEF"
        gradTo="#0077b6"
        accentBtn="#0077b6"
        prefersReducedMotion={prefersReducedMotion}
        otherHovered={hoveredSide === "left"}
        onHoverStart={() => setHoveredSide("right")}
        onHoverEnd={() => setHoveredSide(null)}
      />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
