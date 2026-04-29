import { motion } from "framer-motion";
import { Wrench, Bike, Settings, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Blobs, SectionHeader } from "@/components/Decor";

const services = [
  { icon: Wrench, title: "Cycle Repair", desc: "Quick fixes to full overhauls — punctures, brakes, gears, chains and more, handled by certified mechanics." },
  { icon: Settings, title: "Maintenance Plans", desc: "Quarterly tune-ups, lubrication and safety checks to keep your ride running like new for years." },
  { icon: Bike, title: "Custom Fitting", desc: "Bio-mechanical fitting sessions for the perfect saddle height, reach and posture — no more sore rides." },
  { icon: Sparkles, title: "Detailing & Restoration", desc: "Deep clean, polish and frame restoration. Make your old cycle look and feel showroom-fresh." },
  { icon: ShieldCheck, title: "Safety Inspection", desc: "Comprehensive 21-point safety inspection before every long ride — for peace of mind on the road." },
  { icon: Zap, title: "Upgrade Studio", desc: "Wheel upgrades, lighting, gear systems and accessories — personalize your ride with premium parts." },
];

const Services = () => (
  <section className="relative pt-32 pb-24 px-6 min-h-screen">
    <Blobs />
    <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        kicker="What we do"
        title="Service that keeps you riding"
        sub="From routine care to complete restorations — our workshop is built around one promise: your cycle, perfectly tuned."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5 }}
            transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative p-8 rounded-3xl glass hover:border-primary/30 transition-colors overflow-hidden"
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow-soft transition-transform group-hover:scale-105">
                <s.icon size={24} />
              </div>
              <h3 className="mt-6 font-display font-semibold text-xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 relative rounded-3xl glass-strong p-10 md:p-14 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl" />
        <div className="relative">
          <h3 className="font-display text-3xl md:text-4xl font-bold">Need a tune-up?</h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Walk in to our Nedumangad workshop or book a slot online — most repairs done same day.</p>
          <a href="/contact" className="inline-flex mt-6 items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow-soft hover:shadow-glow transition-shadow">
            Book a Service
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Services;
