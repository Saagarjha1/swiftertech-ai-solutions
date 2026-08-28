import { createFileRoute } from "@tanstack/react-router";
import {
  BotMessageSquare,
  Workflow,
  Globe,
  Database,
  Search,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  Layers,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import logoAsset from "@/assets/swiftertech-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Swiftertech Solutions — AI Automations, Web, ERP & SEO in Navi Mumbai",
      },
      {
        name: "description",
        content:
          "Swiftertech Solutions builds AI automations, AI & web solutions, ERP systems, and SEO optimization for growing businesses in Sanpada, Navi Mumbai. Call +91 83697 16455 or email swiftertech@zohomail.in.",
      },
      {
        name: "keywords",
        content:
          "AI automation Navi Mumbai, web development Navi Mumbai, ERP solutions Mumbai, SEO services Navi Mumbai, Swiftertech Solutions, business automation India",
      },
      { property: "og:title", content: "Swiftertech Solutions — AI, Web, ERP & SEO" },
      {
        property: "og:description",
        content:
          "AI automations, AI & web solutions, ERP systems, and SEO optimization from Navi Mumbai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Swiftertech Solutions — AI, Web, ERP & SEO" },
      {
        name: "twitter:description",
        content:
          "AI automations, AI & web solutions, ERP systems, and SEO optimization from Navi Mumbai.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Swiftertech Solutions",
          alternateName: "Swiftertech",
          url: "/",
          logo: logoAsset.url,
          description:
            "Swiftertech Solutions builds AI automations, AI & web solutions, ERP systems, and SEO optimization for growing businesses.",
          slogan: "Innovate • Integrate • Elevate",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kukreja Classic, Plot No. 2, Sector 16",
            addressLocality: "Sanpada, Navi Mumbai",
            postalCode: "400705",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-83697-16455",
            email: "swiftertech@zohomail.in",
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Swiftertech Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Automations",
                  description:
                    "Intelligent workflows, chatbots, document processing, and lead qualification.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI & Web Solutions",
                  description:
                    "Modern websites, portals, and web applications with AI-powered features.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "ERP Solutions",
                  description:
                    "ERP implementation, customization, integrations, dashboards, and reporting.",
                },
              },
            ],
          },
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: BotMessageSquare,
    title: "AI Automations",
    tag: "Innovate",
    description:
      "Intelligent workflows that handle repetitive work for you — document processing, chat assistants, lead qualification, and reporting that runs itself.",
    points: ["Workflow & process automation", "AI chatbots & assistants", "Document & data intelligence"],
  },
  {
    icon: Globe,
    title: "AI & Web Solutions",
    tag: "Integrate",
    description:
      "Modern websites, portals, and web applications with AI built in — fast, secure, and designed to convert visitors into customers.",
    points: ["Business websites & portals", "Custom web applications", "AI-powered product features"],
  },
  {
    icon: Database,
    title: "ERP Solutions",
    tag: "Elevate",
    description:
      "End-to-end ERP implementation and customization that connects sales, inventory, finance, and operations into one clear system.",
    points: ["ERP implementation & customization", "Integrations & data migration", "Dashboards & reporting"],
  },
];

const stats = [
  { value: "3×", label: "Faster delivery cycles" },
  { value: "40%", label: "Average cost saved via automation" },
  { value: "24/7", label: "Systems that work while you sleep" },
];

const whyUs = [
  { icon: Gauge, title: "Built for speed", text: "Rapid prototyping and agile delivery get you to value in weeks, not quarters." },
  { icon: Layers, title: "End-to-end ownership", text: "From strategy and design to deployment and support — one team, full stack." },
  { icon: ShieldCheck, title: "Enterprise-grade", text: "Secure, scalable architecture with reliable support after launch." },
];

function Index() {
  return (
    <div className="min-h-screen font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Swiftertech Solutions logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-lg font-bold tracking-tight">
              Swifter<span className="text-primary">tech</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#why" className="transition-colors hover:text-foreground">Why Us</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-hero-mesh">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Innovate • Integrate • Elevate
            </div>
            <h1 className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Technology that moves{" "}
              <span className="text-gradient-brand">as fast as you do</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Swiftertech Solutions helps businesses automate with AI, launch powerful web
              products, and run operations on modern ERP — all from one partner in Navi Mumbai.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10">
              <img
                src={logoAsset.url}
                alt="Swiftertech Solutions — swift bird logo"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy-deep">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-3 sm:px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-display text-4xl font-extrabold text-primary-foreground">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">What we do</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Three ways we <span className="text-gradient-brand">accelerate</span> your business
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your first automation to a full ERP rollout, we design systems that scale with you.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-azure to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <span className="mt-5 inline-block rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold tracking-widest text-accent uppercase">
                {service.tag}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Workflow className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Why Swiftertech</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                A partner built for the <span className="text-gradient-brand">speed of now</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We combine deep engineering with real business understanding — so every automation,
                website, or ERP we ship solves a problem you actually have.
              </p>
            </div>
            <div className="space-y-4">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-navy-deep">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Get in touch</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
              Let's build something swift
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/70">
              Tell us about your project — whether it's an AI automation, a new web platform, or an
              ERP rollout. We'll get back within one business day.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  Kukreja Classic, Plot No. 2, Sector 16,
                  <br />
                  Sanpada, Navi Mumbai — 400705
                </span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:swiftertech@zohomail.in" className="transition-colors hover:text-primary-foreground">
                  swiftertech@zohomail.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+918369716455" className="transition-colors hover:text-primary-foreground">
                  +91 83697 16455
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MessageCircle className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href="https://wa.me/918369716455?text=Hi%20Swiftertech%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
          <form
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-primary-foreground/80">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-primary-foreground/80">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-primary-foreground/80">
                Service needed
              </label>
              <select
                id="service"
                className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-primary-foreground focus:border-accent focus:outline-none [&>option]:text-foreground"
              >
                <option>AI Automations</option>
                <option>AI & Web Solutions</option>
                <option>ERP Solutions</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-primary-foreground/80">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Swiftertech Solutions logo" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-display text-sm font-bold text-primary-foreground">
              Swiftertech Solutions
            </span>
          </div>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Swiftertech Solutions. Innovate • Integrate • Elevate.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918369716455?text=Hi%20Swiftertech%2C%20I%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
