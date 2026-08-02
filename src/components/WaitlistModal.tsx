"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, Gift, Mail, ArrowRight, ShieldCheck } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export default function WaitlistModal({ isOpen, onClose, initialEmail = "" }: WaitlistModalProps) {
  const [email, setEmail] = useState(initialEmail);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [positionNumber, setPositionNumber] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  useEffect(() => {
    // Check if user already joined waitlist previously
    const savedEmail = localStorage.getItem("berea_waitlist_email");
    const savedPos = localStorage.getItem("berea_waitlist_position");
    if (savedEmail && savedPos) {
      setIsSubmitted(true);
      setPositionNumber(parseInt(savedPos, 10));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    // Simulate generating a unique waitlist position number
    const pos = Math.floor(Math.random() * 40) + 510; // e.g. #510 - #550
    localStorage.setItem("berea_waitlist_email", email);
    localStorage.setItem("berea_waitlist_position", pos.toString());
    setPositionNumber(pos);
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-surface border border-line rounded-2xl shadow-2xl p-6 md:p-8 z-10 overflow-hidden text-ink"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-muted hover:text-ink hover:bg-accent-soft/60 transition-colors"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center gap-2">
                  <span className="bg-amber-400/20 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-300/40 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-600 fill-amber-500" />
                    Early Access Beta
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-ink">
                    Berea is Coming Soon to Chrome
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed">
                    Be the first to know the moment Berea lands on the Chrome Web Store, and start examining online teaching with Scripture.
                  </p>
                </div>

                {/* Offer Incentive Banner */}
                <div className="bg-accent-soft/70 border border-line/80 rounded-xl p-4 flex items-start gap-3 text-left">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0 mt-0.5">
                    <Gift size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink uppercase tracking-wider">
                      Launch Day Special Offer
                    </h4>
                    <p className="text-xs text-muted mt-0.5 leading-snug">
                      Join today to unlock <strong className="text-ink">10 Bonus Free Weekly Credits</strong> + VIP day-one extension access.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-ink uppercase tracking-wider block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-line rounded-xl text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm font-medium"
                        required
                      />
                    </div>
                    {error && <p className="text-xs text-red-600 font-semibold">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 px-6 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.99]"
                  >
                    <span>Reserve My Early Access Spot</span>
                    <ArrowRight size={18} />
                  </button>
                </form>

                {/* Micro Guarantee */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-muted">
                  <ShieldCheck size={14} className="text-aligned" />
                  <span>100% Free • No Spam • Unsubscribe Anytime</span>
                </div>
              </div>
            ) : (
              /* Success Confirmation State */
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 bg-aligned/15 text-aligned rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={36} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-ink">
                    You're on the List! 🎉
                  </h3>
                  <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed">
                    We’ve reserved your spot on the Berea Early Access list. We'll email you the moment the Chrome extension goes live.
                  </p>
                </div>

                {/* Position Counter Badge */}
                {positionNumber && (
                  <div className="inline-flex flex-col items-center justify-center bg-background border border-line px-6 py-3 rounded-2xl shadow-sm">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">
                      Your Waitlist Position
                    </span>
                    <span className="text-2xl font-black text-primary mt-0.5">
                      #{positionNumber}
                    </span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="bg-surface border border-line hover:bg-accent-soft/60 text-ink px-8 py-2.5 rounded-xl font-bold text-sm transition-colors"
                  >
                    Back to Showcase
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
