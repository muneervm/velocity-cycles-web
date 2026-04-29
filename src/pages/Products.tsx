import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Blobs, SectionHeader } from "@/components/Decor";
import productMountain from "@/assets/product-mountain.jpg";
import productKids from "@/assets/product-kids.jpg";
import productRoad from "@/assets/product-road.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productFolding from "@/assets/product-folding.jpg";
import productBmx from "@/assets/product-bmx.jpg";

type Cat = "All" | "Kids" | "Adult" | "Accessories";

const catalog = [
  { img: productKids, name: "Little Rider 16″", cat: "Kids", price: "₹ 6,499", tag: "Best for 4-7 yrs" },
  { img: productMountain, name: "Trail Hawk Pro", cat: "Adult", price: "₹ 24,999", tag: "MTB · 21-speed" },
  { img: productRoad, name: "Aero Velocity", cat: "Adult", price: "₹ 38,500", tag: "Carbon · Road" },
  { img: productAccessories, name: "Rider Essentials Kit", cat: "Accessories", price: "₹ 1,999", tag: "Helmet + Lights" },
  { img: productFolding, name: "Urban Fold", cat: "Adult", price: "₹ 18,750", tag: "Compact · City" },
  { img: productBmx, name: "Neon BMX", cat: "Kids", price: "₹ 9,200", tag: "Street · Tricks" },
  { img: productAccessories, name: "Pro Helmet", cat: "Accessories", price: "₹ 1,499", tag: "Vented" },
  { img: productKids, name: "Junior Cruiser", cat: "Kids", price: "₹ 7,800", tag: "8-12 yrs" },
];

const Products = () => {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? catalog : catalog.filter((p) => p.cat === active);

  return (
    <section className="relative pt-32 pb-24 px-6 min-h-screen">
      <Blobs />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Our Collection"
          title="Find your perfect ride"
          sub="From first wobbles to weekend pursuits — discover cycles handpicked for every rider."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["All", "Kids", "Adult", "Accessories"] as Cat[]).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition ${
                active === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground glass"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="catBg"
                  className="absolute inset-0 rounded-full bg-gradient-primary shadow-glow-soft"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{c} {c === "Kids" ? "Cycles" : c === "Adult" ? "Cycles" : ""}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass rounded-3xl overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white text-black text-[10px] uppercase tracking-widest font-semibold shadow-sm">
                      {p.cat}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{p.tag}</div>
                    <div className="mt-1 flex items-center justify-between">
                      <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-display text-xl font-bold text-gradient-primary">{p.price}</span>
                      <Link
                        to="/contact"
                        className="px-4 py-2 rounded-full bg-white border border-primary text-primary hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent text-xs font-semibold transition-all hover:shadow-glow-soft"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
