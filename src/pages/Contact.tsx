import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, Check, Instagram, Facebook } from "lucide-react";
import { Blobs, SectionHeader } from "@/components/Decor";
import { toast } from "sonner";

const FloatingInput = ({ label, type = "text", value, onChange, as = "input" }: {
  label: string; type?: string; value: string; onChange: (v: string) => void; as?: "input" | "textarea";
}) => {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Comp: any = as;
  return (
    <div className="relative">
      <Comp
        type={type}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={as === "textarea" ? 4 : undefined}
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/[0.03] border transition-all outline-none resize-none ${
          focused ? "border-primary/60 shadow-[0_0_0_4px_hsl(var(--primary)/0.1)]" : "border-white/10"
        }`}
      />
      <label
        className={`absolute left-4 pointer-events-none transition-all ${
          active ? "top-2 text-[10px] uppercase tracking-widest text-primary-glow" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSent(true);
    toast.success("Message sent! We'll be in touch shortly.");
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", message: "" });
      setSent(false);
    }, 3000);
  };

  return (
    <section className="relative pt-32 pb-24 px-6 min-h-screen">
      <Blobs />
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Get in touch"
          title="Let's talk cycles"
          sub="Drop by our Nedumangad store, ring us, or send a message — we'd love to help you find the perfect ride."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl glass-strong p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/30 blur-3xl rounded-full" />
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-gradient-primary grid place-items-center shadow-glow"
                    >
                      <Check size={36} className="text-primary-foreground" />
                    </motion.div>
                    <h3 className="mt-6 font-display text-2xl font-bold">Message received!</h3>
                    <p className="mt-2 text-muted-foreground">We'll get back to you within a few hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative space-y-5"
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <FloatingInput label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                      <FloatingInput label="Email address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    </div>
                    <FloatingInput label="Phone (optional)" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                    <FloatingInput label="How can we help?" as="textarea" value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

                    <button
                      type="submit"
                      className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow-soft hover:shadow-glow hover:scale-[1.03] transition-all"
                    >
                      Send message <Send size={16} className="group-hover:translate-x-1 transition" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: MapPin, label: "Visit Us", val: "Main Road, Nedumangad\nThiruvananthapuram, Kerala 695541" },
              { icon: Phone, label: "Call Us", val: "+91 98765 43210\nMon–Sat · 9:30 AM – 8:30 PM" },
              { icon: Mail, label: "Email", val: "hello@toysvilla.in" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-5 rounded-2xl glass hover:border-primary/30 transition"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 grid place-items-center text-primary-glow">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary-glow">{c.label}</div>
                  <div className="mt-1 whitespace-pre-line text-sm">{c.val}</div>
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="glass w-11 h-11 grid place-items-center rounded-xl hover:bg-primary/20 hover:text-primary-glow transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative rounded-3xl overflow-hidden glass-strong p-2 shadow-elegant"
        >
          <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-2xl -z-10 rounded-3xl" />
          <iframe
            title="Toysvilla Cycle Shop location"
            src="https://www.google.com/maps?q=Nedumangad,+Kerala&output=embed"
            className="w-full h-[420px] rounded-2xl border-0 grayscale-[0.3] contrast-110"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
