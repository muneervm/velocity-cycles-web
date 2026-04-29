import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { Blobs, SectionHeader } from "@/components/Decor";
import { Counter } from "@/components/Counter";
import workshop from "@/assets/workshop.jpg";

const timeline = [
  { year: "2014", title: "The first store", desc: "Toysvilla opens its doors in Nedumangad with a single shelf of children's bicycles." },
  { year: "2017", title: "Workshop launched", desc: "Full-service repair workshop added — Kerala's most-loved local cycle hub." },
  { year: "2020", title: "Adult & pro lineup", desc: "Expanded into MTB, road and folding cycles for serious riders." },
  { year: "2024", title: "10,000+ riders", desc: "Crossed 10,000 happy customers across Thiruvananthapuram district." },
];

const About = () => (
  <section className="relative pt-32 pb-24 px-6 min-h-screen">
    <Blobs />
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        kicker="Our story"
        title="A decade of joyful rides"
        sub="From a small toy store in Nedumangad to Kerala's trusted cycle destination — built on care, craft and community."
      />

      {/* Story split */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-primary blur-3xl opacity-20 rounded-3xl" />
          <img src={workshop} alt="Toysvilla workshop in Nedumangad" loading="lazy" className="relative rounded-3xl shadow-elegant w-full" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-glow-soft hidden md:block"
          >
            <div className="font-display text-3xl font-bold text-gradient-primary"><Counter to={10000} suffix="+" /></div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Riders Served</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            More than a shop — <span className="text-gradient-primary">a riding community.</span>
          </h3>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            What began in 2014 as a humble store has grown into a trusted destination for cyclists across Kerala.
            We believe a great cycle should outlast trends — and great service should outlast the sale.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: 12, s: "+", l: "Years" },
              { v: 50, s: "+", l: "Models" },
              { v: 21, s: "", l: "Awards" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient"><Counter to={s.v} suffix={s.s} /></div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: Target, title: "Mission", desc: "To bring the joy and freedom of cycling to every home in Kerala — with quality, care and accessibility." },
          { icon: Eye, title: "Vision", desc: "Become South India's most trusted cycle brand by combining craftsmanship, technology and community." },
          { icon: Heart, title: "Values", desc: "Honest advice, lifelong service, and a deep love for two wheels guide every interaction." },
        ].map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl glass hover:border-primary/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center text-primary-glow mb-5">
              <m.icon size={22} />
            </div>
            <h4 className="font-display font-semibold text-xl">{m.title}</h4>
            <p className="mt-3 text-muted-foreground leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <SectionHeader title="Our Journey" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-px" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-10 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow-soft ring-4 ring-background" />
              <div className={`${i % 2 === 0 ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}`}>
                <div className="font-display text-2xl font-bold text-gradient-primary">{t.year}</div>
                <h5 className="font-display font-semibold text-lg mt-1">{t.title}</h5>
                <p className="text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
