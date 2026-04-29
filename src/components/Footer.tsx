import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { WaveDivider } from "./Decor";

export const Footer = () => (
  <footer className="relative mt-32">
    <WaveDivider />
    <div className="relative bg-gradient-card backdrop-blur-xl border-t border-primary/10">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center font-display font-bold text-primary-foreground">T</span>
            <div>
              <div className="font-display font-bold text-lg">Toysvilla Cycle Shop</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Nedumangad · Kerala</div>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Crafting joyful rides for every generation. Premium cycles, expert service and a community built on the love of two wheels.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="glass w-10 h-10 grid place-items-center rounded-full hover:bg-primary/20 hover:text-primary-glow transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-glow transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin size={16} className="text-primary-glow shrink-0 mt-0.5"/> Main Road, Nedumangad, Kerala 695541</li>
            <li className="flex gap-3"><Phone size={16} className="text-primary-glow shrink-0 mt-0.5"/> +91 98765 43210</li>
            <li className="flex gap-3"><Mail size={16} className="text-primary-glow shrink-0 mt-0.5"/> hello@toysvilla.in</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Toysvilla Cycle Shop · Built with passion in Kerala
      </div>
    </div>
  </footer>
);
