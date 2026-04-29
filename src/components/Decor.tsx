import { motion } from "framer-motion";

export const Blobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="blob bg-primary/40 w-[500px] h-[500px] -top-32 -left-32" />
    <div className="blob bg-accent/30 w-[600px] h-[600px] top-1/3 -right-40" style={{ animationDelay: "-6s" }} />
    <div className="blob bg-primary-glow/25 w-[450px] h-[450px] bottom-0 left-1/3" style={{ animationDelay: "-12s" }} />
  </div>
);

export const WaveDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px]">
      <defs>
        <linearGradient id="waveGrad" x1="0" x2="1">
          <stop offset="0" stopColor="hsl(142 76% 45% / 0.15)" />
          <stop offset="1" stopColor="hsl(130 90% 60% / 0.15)" />
        </linearGradient>
      </defs>
      <path
        d="M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,72 L1440,120 L0,120 Z"
        fill="url(#waveGrad)"
      />
      <path
        d="M0,80 C320,32 640,128 960,80 C1200,48 1320,96 1440,80 L1440,120 L0,120 Z"
        fill="hsl(150 18% 7% / 0.6)"
      />
    </svg>
  </div>
);

export const SectionHeader = ({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="text-center max-w-2xl mx-auto mb-14"
  >
    {kicker && (
      <span className="inline-block px-4 py-1.5 mb-4 text-xs uppercase tracking-[0.2em] glass rounded-full text-primary-glow">
        {kicker}
      </span>
    )}
    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      <span className="text-gradient">{title}</span>
    </h2>
    {sub && <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{sub}</p>}
  </motion.div>
);
