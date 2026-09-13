"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, ArrowLeft, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Feedback / Suggestion");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Silently ignore bots filling the hidden honeypot
    if (honeypot) {
      setStatus("success");
      return;
    }

    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a message before sending.");
      return;
    }

    if (!webhookUrl) {
      setStatus("error");
      setErrorMessage(
        "Discord webhook URL is not configured yet. Please set NEXT_PUBLIC_DISCORD_WEBHOOK_URL in your environment variables, or email ray4578ray@gmail.com directly."
      );
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const payload = {
        username: "Berea Contact Form",
        avatar_url: "https://gergoded-ux.github.io/Biblical-Claim-Checker-for-YouTube-Berea---Page/logo.png",
        embeds: [
          {
            title: `Contact Message: ${category}`,
            color: 0x6b3f1f, // Berea primary brand color
            fields: [
              {
                name: "Sender",
                value: name.trim() || "Anonymous",
                inline: true,
              },
              {
                name: "Email",
                value: email.trim() || "Not provided",
                inline: true,
              },
              {
                name: "Category",
                value: category,
                inline: false,
              },
              {
                name: "Message",
                value: message.trim(),
                inline: false,
              },
            ],
            footer: {
              text: "Sent from Berea website contact form",
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Discord responded with status ${response.status}`);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      console.error("Failed to send message to Discord:", err);
      setStatus("error");
      setErrorMessage(
        "Could not send your message right now. You can also reach out by email at ray4578ray@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 px-6 border-b border-line bg-surface/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-primary font-bold text-lg hover:opacity-80 transition-opacity inline-flex items-center gap-1.5"
          >
            <ArrowLeft size={18} />
            <span>Berea</span>
          </Link>
          <span className="text-muted text-sm font-medium">Contact</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-accent-soft px-3 py-1 rounded-full text-xs font-semibold text-primary mb-3">
            <MessageSquare size={14} />
            <span>Discord channel connection</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-2">
            Send a message
          </h1>
          <p className="text-muted text-sm md:text-base leading-relaxed">
            Have feedback, found a bug, or want to ask a question? Fill out the form below and your note will post directly into our Discord channel.
          </p>
        </div>

        {status === "success" ? (
          <div className="paper-card p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#2d6a4f]/15 text-[#2d6a4f] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl font-bold text-ink">Message sent</h2>
            <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
              Your note has been posted to our Discord channel. Thank you for reaching out and helping us improve Berea.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-line hover:bg-accent-soft/60 text-sm font-bold text-ink transition-colors"
              >
                Send another message
              </button>
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="paper-card p-6 md:p-8 space-y-5 shadow-sm">
            {/* Honeypot field for bot spam prevention */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">Do not fill this out</label>
              <input
                id="website_hp"
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Error Alert */}
            {status === "error" && errorMessage && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Sender Name / Handle */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                Name or Discord username
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John or @john_1711"
                className="w-full px-4 py-2.5 bg-background border border-line rounded-lg text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                Email address <span className="text-muted font-normal lowercase">(optional, if you want a reply)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 bg-background border border-line rounded-lg text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                Topic
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-line rounded-lg text-ink focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              >
                <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                <option value="Bug Report">Bug report</option>
                <option value="Scripture / Theological Question">Scripture / Theological question</option>
                <option value="General Question">General question</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-4 py-2.5 bg-background border border-line rounded-lg text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 px-6 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending to Discord...</span>
                ) : (
                  <>
                    <span>Send to Discord</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-xs text-muted pt-1">
              Your message posts directly to our Discord server. You can also write to{" "}
              <a href="mailto:ray4578ray@gmail.com" className="text-primary underline hover:opacity-80">
                ray4578ray@gmail.com
              </a>.
            </p>
          </form>
        )}
      </main>
    </div>
  );
}
