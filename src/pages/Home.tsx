import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Wrench, Bike, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero-cycle.jpg";
import productMountain from "@/assets/product-mountain.jpg";
import productKids from "@/assets/product-kids.jpg";
import productRoad from "@/assets/product-road.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import { Blobs, WaveDivider, SectionHeader } from "@/components/Decor";
import { Counter } from "@/components/Counter";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease: EASE } }),
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const features = [
    { icon: Bike, title: "Premium Brands", desc: "Curated bicycles built for every age and adventure." },
    { icon: Wrench, title: "Expert Service", desc: "Pro mechanics. Honest diagnostics. Fast turnaround." },
    { icon: ShieldCheck, title: "Genuine Warranty", desc: "Every cycle covered by manufacturer assurance." },
    { icon: Sparkles, title: "Custom Fitting", desc: "Tailored sizing for the perfect ride feel." },
  ];

  const products = [
    { img: productMountain, name: "Trail Hawk Pro", cat: "Adult · MTB", price: "₹ 24,999" },
    { img: productKids, name: "Little Rider", cat: "Kids · 16″", price: "₹ 6,499" },
    { img: productRoad, name: "Aero Velocity", cat: "Adult · Road", price: "₹ 38,500" },
    { img: productAccessories, name: "Rider Essentials", cat: "Accessories", price: "from ₹ 499" },
  ];

  const testimonials = [
    { name: "Arun M.", role: "Weekend rider", text: "Toysvilla made my first MTB purchase effortless. The fitting session was a game-changer." },
    { name: "Priya S.", role: "Parent", text: "My daughter loves her new cycle. The team picked the perfect size and even taught her balance basics." },
    { name: "Rahul V.", role: "Cyclist", text: "Best workshop in Nedumangad. They saved my old road bike with a full restore." },
  ];

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
          <img src={heroImg} alt="Premium bicycle on misty mountain road" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
        </motion.div>
        <Blobs />

        <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs uppercase tracking-[0.2em] text-primary-glow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-glow" />
              Nedumangad · Kerala · Est. 2014
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: EASE }}
              className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight"
            >
              Ride <span className="text-gradient-primary">Beyond</span><br/>Ordinary.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              Premium cycles, expert service and a community built for the open road.
              Discover Toysvilla — Kerala's most loved cycle destination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow-soft hover:shadow-glow transition-shadow"
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-strong hover:bg-white/[0.07] transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { v: 5000, s: "+", l: "Happy Riders" },
                { v: 12, s: "+", l: "Years Trusted" },
                { v: 50, s: "+", l: "Cycle Models" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-gradient">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-3xl opacity-15" />
              <div className="relative glass-strong rounded-[2rem] p-7 shadow-elegant">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">Featured</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/20 text-primary-glow text-[10px] font-semibold">NEW</span>
                </div>
                <img src={productMountain} alt="Trail Hawk Pro" loading="lazy" className="w-full h-56 object-contain" />
                <div className="mt-4">
                  <div className="font-display font-semibold text-xl">Trail Hawk Pro</div>
                  <div className="text-sm text-muted-foreground">Carbon hardtail · 21-speed</div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display text-2xl text-gradient-primary font-bold">₹ 24,999</span>
                    <Link to="/products" className="text-sm text-primary-glow hover:underline">View →</Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <WaveDivider />

      {/* FEATURES */}
      <section className="relative py-24 px-6">
        <Blobs />
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Why Toysvilla"
            title="Built for riders. Designed for life."
            sub="Every detail considered, from your first test ride to the last mile."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-2xl glass hover:border-primary/40 transition-all"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center text-primary-glow mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Bestsellers"
            title="Cycles loved by Kerala"
            sub="Hand-picked rides for every age, terrain and ambition."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden glass hover:shadow-lift transition-all"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-widest text-primary-glow">{p.cat}</div>
                  <div className="mt-1 font-display font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.price}</div>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <Link to="/contact" className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold whitespace-nowrap shadow-glow-soft">
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-primary-glow hover:gap-3 transition-all">
              See all cycles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="relative py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden p-10 md:p-16 glass-strong"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/40 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/30 blur-3xl rounded-full" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">Onam Special</span>
              <h3 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
                Save up to <span className="text-gradient-primary">25%</span> on selected cycles
              </h3>
              <p className="mt-4 text-muted-foreground">Free helmet & 1-year service plan with every premium cycle this season.</p>
            </div>
            <div className="md:justify-self-end">
              <Link to="/products" className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow-soft hover:shadow-glow hover:scale-[1.03] transition-all">
                Claim Offer <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="Riders speak" title="Loved across Nedumangad" />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative p-7 rounded-2xl glass hover:border-primary/30 transition"
              >
                <Quote className="text-primary-glow/40 mb-3" size={28} />
                <p className="text-foreground/90 leading-relaxed">{t.text}</p>
                <div className="flex gap-0.5 mt-5 text-primary-glow">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
