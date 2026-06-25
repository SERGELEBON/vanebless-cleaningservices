"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { site } from "@/lib/site";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SocialIcons } from "./social-icons";

const socialLinks = [
  { label: "TikTok", href: site.social.tiktok, key: "tiktok" },
  { label: "Instagram", href: site.social.instagram, key: "instagram" },
  { label: "Facebook", href: site.social.facebook, key: "facebook" },
  { label: "X", href: site.social.x, key: "x" },
  { label: "Snapchat", href: site.social.snapchat, key: "snapchat" },
];

export function ContactSection() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">("idle");
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message || !form.phone) {
      toast.error("Please fill in your name, phone and message.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("done");
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send. Please call us directly.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-3 bg-brand-red/10 text-brand-red">Contact</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Let's talk about your{" "}
            <span className="text-brand-blue">project</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            A question, an urgent need, a quote? Our team is here for you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info + map */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Contact details
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Phone
                    </p>
                    {site.phones.map((p, i) => (
                      <a
                        key={p}
                        href={`tel:${site.phoneIntl[i]}`}
                        className="block text-sm font-medium text-slate-900 hover:text-brand-blue"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      WhatsApp
                    </p>
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-slate-900 hover:text-brand-blue"
                    >
                      Chat now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm font-medium text-slate-900 hover:text-brand-blue"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Opening hours
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                      Mon - Sat: 7am - 8pm
                    </p>
                    <p className="text-sm text-slate-600">
                      Emergencies 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Service area
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                      Accra & across Ghana
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Follow us
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  @{site.socialHandle}
                </p>
                <div className="mt-3">
                  <SocialIcons links={socialLinks} />
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Vanebless Cleaning Services location - Accra"
                src="https://www.google.com/maps?q=Accra,Ghana&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                We reply to all messages within 24h.
              </p>

              {status === "done" ? (
                <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-xl border border-green-200 bg-green-50 p-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-green-600" />
                  <h4 className="text-xl font-bold text-slate-900">
                    Message sent!
                  </h4>
                  <p className="text-sm text-slate-600">
                    Thank you for reaching out. Our team will get back to you
                    very soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus("idle")}
                    className="mt-2"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="c-name">Full name *</Label>
                      <Input
                        id="c-name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c-phone">Phone *</Label>
                      <Input
                        id="c-phone"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="020 650 5564"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="c-email">Email</Label>
                      <Input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c-subject">Subject</Label>
                      <Input
                        id="c-subject"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        placeholder="Subject of your message"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-message">Message *</Label>
                    <Textarea
                      id="c-message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Describe your need..."
                      className="min-h-[140px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand-red text-white hover:bg-brand-red-dark"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
