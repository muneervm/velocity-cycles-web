import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="px-6 w-full">
        <div className="mx-auto max-w-7xl relative">
          <div className={`flex items-center justify-between rounded-2xl px-5 md:px-7 py-3.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elegant" : "bg-transparent"
          }`}>
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-primary shadow-glow-soft overflow-hidden transition-transform group-hover:scale-105 flex items-center justify-center p-1.5">
              <img src="/logo.png" alt="Toysvilla" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base">Toys Villa Cycles</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Kulavikkonam · Nedumangad</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
                    isActive ? "text-primary" : "text-black hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className={`absolute inset-0 rounded-lg -z-10 ${
                          scrolled ? "bg-primary/10 border border-primary/20" : "bg-white shadow-sm border border-primary/10"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow-soft hover:shadow-glow transition-shadow"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden glass rounded-lg p-2"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive ? "bg-primary/15 text-primary" : "text-black"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};
