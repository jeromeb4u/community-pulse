"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Activity,
  Users,
  BarChart3,
  Bell,
  Layers,
  Download,
  Zap,
  MessageSquare,
  TrendingUp,
  Award,
  ChevronRight,
  Check,
  Star,
} from "lucide-react";

// ─── NavBar ──────────────────────────────────────────────────────────────────

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-text">CommunityPulse</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted hover:text-text transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted hover:text-text transition-colors">
              Pricing
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-lg border border-primary px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors">
              Login
            </button>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-[#9333ea] transition-colors">
              Start Free
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-muted hover:text-text"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface">
          <div className="space-y-2 px-4 py-4">
            <a href="#features" className="block py-2 text-muted hover:text-text">Features</a>
            <a href="#pricing" className="block py-2 text-muted hover:text-text">Pricing</a>
            <div className="flex flex-col gap-2 pt-2">
              <button className="rounded-lg border border-primary px-4 py-2 text-sm text-primary hover:bg-primary/10">
                Login
              </button>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-[#9333ea]">
                Start Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#a855f720_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          Now tracking 50,000+ community members
        </div>

        <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-text">
          Know who&apos;s still in.
          <br />
          <span className="text-primary">Know who&apos;s about to leave.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted">
          CommunityPulse gives Discord and Telegram server owners real-time visibility into
          member engagement — so you can re-engage before they ghost.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-[#9333ea] transition-colors flex items-center justify-center gap-2">
            Start Free
            <ChevronRight className="h-4 w-4" />
          </button>
          <button className="w-full sm:w-auto rounded-lg border border-border px-8 py-3 text-base font-medium text-text hover:border-primary hover:text-primary transition-colors">
            See Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Dashboard Preview ─────────────────────────────────────────────────────

function DashboardPreview() {
  const members = [
    { name: "alex_dev", score: 92, avatar: "A" },
    { name: "crypto_queen", score: 78, avatar: "C" },
    { name: "night_owl", score: 65, avatar: "N" },
    { name: "silent_phi", score: 34, avatar: "S" },
    { name: "chatterbox", score: 88, avatar: "C" },
  ];

  const alerts = [
    { name: "silent_phi", days: 12, risk: "High" },
    { name: "ghost_rider", days: 18, risk: "Critical" },
    { name: "lurker_x", days: 7, risk: "Medium" },
  ];

  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-text">Your Community, Decoded</h2>
          <p className="text-muted">
            A real-time pulse on every member — engagement scores, retention funnels, and
            at-risk alerts in one view.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Floating glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl" />

          <div className="relative rounded-2xl border border-border bg-surface p-6 shadow-2xl">
            {/* Dashboard Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text">Alpha Gaming Hub</div>
                  <div className="text-xs text-muted">Discord · 2,340 members</div>
                </div>
              </div>
              <div className="text-xs font-medium text-success">Live</div>
            </div>

            {/* Metrics Row */}
            <div className="mb-6 grid grid-cols-3 gap-4">
              {[
                { label: "Avg Engagement", value: "74%", color: "text-secondary" },
                { label: "Active Today", value: "412", color: "text-success" },
                { label: "At Risk", value: "23", color: "text-warning" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-border bg-bg/50 p-4">
                  <div className={`text-2xl font-bold ${m.color}`}>{m.value}</div>
                  <div className="mt-1 text-xs text-muted">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Engagement Scores */}
              <div>
                <div className="mb-3 text-sm font-semibold text-text">Member Engagement Scores</div>
                <div className="space-y-3">
                  {members.map((m) => (
                    <div key={m.name} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                        {m.avatar}
                      </div>
                      <div className="w-24 text-xs text-muted">{m.name}</div>
                      <div className="flex-1">
                        <div className="h-2 w-full rounded-full bg-border">
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{
                              width: `${m.score}%`,
                              backgroundColor:
                                m.score >= 80
                                  ? "#22c55e"
                                  : m.score >= 50
                                  ? "#06b6d4"
                                  : m.score >= 30
                                  ? "#f59e0b"
                                  : "#ef4444",
                            }}
                          />
                        </div>
                      </div>
                      <div className="w-8 text-right text-xs font-bold text-text">{m.score}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retention Funnel */}
              <div>
                <div className="mb-3 text-sm font-semibold text-text">Retention Funnel</div>
                <div className="space-y-3">
                  {[
                    { stage: "Joined", count: 2340, pct: 100 },
                    { stage: "Active (7d)", count: 1480, pct: 63 },
                    { stage: "Active (30d)", count: 892, pct: 38 },
                    { stage: "At Risk", count: 284, pct: 12 },
                  ].map((f) => (
                    <div key={f.stage} className="flex items-center gap-3">
                      <div className="w-24 text-xs text-muted">{f.stage}</div>
                      <div className="flex-1">
                        <div className="h-3 w-full rounded-full bg-border">
                          <div
                            className="h-3 rounded-full bg-secondary/80"
                            style={{ width: `${f.pct}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-12 text-right text-xs text-muted">{f.count.toLocaleString()}</div>
                    </div>
                  ))}
                </div>

                {/* Inactive Alerts */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-warning">
                    <Bell className="h-3 w-3" />
                    Inactive Member Alerts
                  </div>
                  <div className="space-y-2">
                    {alerts.map((a) => (
                      <div
                        key={a.name}
                        className="flex items-center justify-between rounded-lg border border-border bg-bg/50 px-3 py-2"
                      >
                        <span className="text-xs text-muted">@{a.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted">{a.days}d inactive</span>
                          <span
                            className={`text-xs font-bold ${
                              a.risk === "Critical"
                                ? "text-red-400"
                                : a.risk === "High"
                                ? "text-warning"
                                : "text-yellow-400"
                            }`}
                          >
                            {a.risk}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Grid ───────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: Activity,
      title: "Member Engagement Scores",
      desc: "Every member gets a live score from 0–100 based on messages, reactions, voice activity, and more.",
      color: "text-secondary",
    },
    {
      icon: Bell,
      title: "Inactive Member Alerts",
      desc: "Get notified the moment a previously active member starts to ghost — before they fully disengage.",
      color: "text-warning",
    },
    {
      icon: BarChart3,
      title: "Retention Funnels",
      desc: "Visualize exactly where members drop off. See join → active → inactive → churn in real time.",
      color: "text-primary",
    },
    {
      icon: MessageSquare,
      title: "Pulse Surveys",
      desc: "Send custom pulse checks to at-risk members. Re-engage with targeted questions before they leave.",
      color: "text-success",
    },
    {
      icon: Award,
      title: "Role & Tier Insights",
      desc: "Understand engagement by role and tier. Know which member levels are healthy and which are bleeding out.",
      color: "text-primary",
    },
    {
      icon: Download,
      title: "Export to CSV",
      desc: "Download full member data, engagement scores, and retention reports. Works with any spreadsheet tool.",
      color: "text-secondary",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-text">Everything you need to keep your community alive</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Powerful analytics built for community managers who are serious about retention.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-surface p-6 hover:border-primary/50 hover-lift"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-border ${f.color}`}>
                <f.icon className={`h-5 w-5 ${f.color}`} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Users,
      title: "Connect Your Server",
      desc: "Link your Discord or Telegram server in one click via OAuth. No tokens, no complex setup.",
    },
    {
      num: "02",
      icon: Zap,
      title: "Pulse Analyzes",
      desc: "Our ML engine scores every member's engagement across messages, reactions, voice, and more.",
    },
    {
      num: "03",
      icon: BarChart3,
      title: "View Dashboard",
      desc: "See live engagement scores, retention funnels, and at-risk alerts in one unified dashboard.",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Take Action",
      desc: "Re-engage at-risk members with pulse surveys, role rewards, or direct outreach.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-text">Up and running in minutes</h2>
          <p className="text-muted">Four steps from zero to full community insight.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-border -translate-x-6" />
              )}
              <div className="flex flex-col items-start">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-2 text-2xl font-bold text-primary/30">{s.num}</div>
                <h3 className="mb-2 text-base font-semibold text-text">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ──────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { value: "50,000+", label: "Community Members Tracked" },
    { value: "2,400+", label: "Servers Connected" },
    { value: "89%", label: "Avg Retention Improvement" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-border bg-surface px-8 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote:
        "I went from guessing who's engaged to having actual data. CommunityPulse caught 15 members going dark in week one — I re-engaged them before they left.",
      name: "Marcus T.",
      role: "CryptoAlpha Discord Owner",
      stars: 5,
    },
    {
      quote:
        "Pulse surveys alone are worth the price. I've sent targeted questions to at-risk members, and the response rate is incredible. My retention is up 40%.",
      role: "Priya S.",
      role2: "Nexus Gaming Community Manager",
      stars: 5,
    },
    {
      quote:
        "I manage 6 Discord servers. CommunityPulse gives me the bird's-eye view I needed. The at-risk alerts are instant, and the retention funnel shows me exactly where to focus.",
      role: "Jake R.",
      role2: "DevHub Slack & Discord Admin",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-text">Community managers love it</h2>
          <p className="text-muted">Real feedback from real server owners.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-surface p-6 hover:border-primary/50 hover-lift"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <blockquote className="mb-4 text-sm text-muted leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <div className="text-sm font-semibold text-text">{t.name}</div>
                <div className="text-xs text-muted">{t.role}{t.role2 ? ` · ${t.role2}` : ''}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      desc: "For small communities just getting started.",
      features: ["1 server", "100 members", "Basic engagement scores", "7-day activity log"],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$15",
      period: "/mo",
      desc: "For growing communities that need more insight.",
      features: ["3 servers", "1,000 members", "Inactive member alerts", "Retention funnels", "Role insights", "CSV export"],
      cta: "Start Starter Trial",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$39",
      period: "/mo",
      desc: "For serious community builders who want full power.",
      features: [
        "Unlimited servers",
        "Unlimited members",
        "Everything in Starter",
        "Pulse surveys",
        "Priority support",
        "Custom integrations",
      ],
      cta: "Start Growth Trial",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-text">Simple, transparent pricing</h2>
          <p className="text-muted">Start free. Scale when you&apos;re ready.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-xl border p-6 ${
                p.highlight
                  ? "border-primary bg-surface shadow-[0_0_30px_-10px_#a855f7]"
                  : "border-border bg-surface"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <div className="mb-1 text-lg font-bold text-text">{p.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-text">{p.price}</span>
                  <span className="text-muted">{p.period}</span>
                </div>
                <div className="mt-2 text-sm text-muted">{p.desc}</div>
              </div>

              <ul className="mb-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  p.highlight
                    ? "bg-primary text-white hover:bg-[#9333ea]"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-2xl border border-border bg-surface px-8 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#a855f715_0%,_transparent_70%)]" />
          <div className="relative">
            <h2 className="mb-3 text-3xl font-bold text-text">
              Your community is watching.
            </h2>
            <p className="mb-8 text-muted max-w-xl mx-auto">
              Make sure you&apos;re watching back. Start tracking your members today — free, no credit card required.
            </p>
            <button className="rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-[#9333ea] transition-colors flex items-center justify-center gap-2 mx-auto">
              Get Started Free
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-text">CommunityPulse</span>
            </div>
            <p className="text-sm text-muted">
              Real-time community analytics for Discord and Telegram server owners.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="mb-4 text-sm font-semibold text-text">Product</div>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-muted hover:text-text">Features</a></li>
              <li><a href="#pricing" className="text-sm text-muted hover:text-text">Pricing</a></li>
              <li><a href="#dashboard" className="text-sm text-muted hover:text-text">Live Demo</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-4 text-sm font-semibold text-text">Legal</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted hover:text-text">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted hover:text-text">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="mb-4 text-sm font-semibold text-text">Connect</div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted hover:text-text flex items-center gap-2">
                  <span>Twitter / X</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-text flex items-center gap-2">
                  <span>Discord</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="text-xs text-muted">
            &copy; 2025 CommunityPulse. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            Made with
            <Activity className="h-3 w-3 text-primary" />
            for community builders
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <DashboardPreview />
        <Features />
        <HowItWorks />
        <StatsBar />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
