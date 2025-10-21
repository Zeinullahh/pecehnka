"use client";

import { useState } from "react";
import Link from "next/link";
import EdgeGlowCard from "@/components/EdgeGlowCard";
import GlowButton from "@/components/GlowButton";

const overviewStats = [
  {
    label: "Total earnings",
    value: "$128,000",
    helper: "Lifetime commissions",
  },
  {
    label: "Available to withdraw",
    value: "$18,250",
    helper: "Next payout: May 15",
  },
  {
    label: "Active referred accounts",
    value: "312",
    helper: "+21 this month",
  },
];

const topLinks = [
  {
    promo: "CYBER23",
    title: "AI-SOC web audit",
    conversions: "74 signups · 38 billing",
    revenue: "$42.6k usage MTD",
    destination: "ai-soc.silenceai.net/register?promo=CYBER23",
  },
  {
    promo: "ONBOARD90",
    title: "90-day enterprise pilot",
    conversions: "52 signups · 21 billing",
    revenue: "$31.4k usage MTD",
    destination: "ai-soc.silenceai.net/register?promo=ONBOARD90",
  },
  {
    promo: "SOCFAST",
    title: "Emergency SOC migration",
    conversions: "19 signups · 11 billing",
    revenue: "$18.9k usage MTD",
    destination: "ai-soc.silenceai.net/register?promo=SOCFAST",
  },
];

const payoutTimeline = [
  {
    label: "In progress",
    description: "May 15 · ACH transfer to Chase Business",
    amount: "$9,750",
    status: "confirming usage",
  },
  {
    label: "Scheduled",
    description: "Jun 01 · Auto-trigger when balance reaches $10k",
    amount: "$10,000",
    status: "upcoming",
  },
  {
    label: "Completed",
    description: "May 02 · Settled to Chase Business",
    amount: "$18,750",
    status: "cleared",
  },
];

const commissionTable = [
  {
    date: "May 12, 2024 · 14:48",
    buyer: "ciso@vectorlabs.io",
    usage: "$4,800 combined usage",
    commission: "$480.00",
    promo: "CYBER23",
  },
  {
    date: "May 11, 2024 · 08:14",
    buyer: "ops@cloudfire.dev",
    usage: "$9,200 combined usage",
    commission: "$920.00",
    promo: "ONBOARD90",
  },
  {
    date: "May 10, 2024 · 19:05",
    buyer: "security@atlas-collective.com",
    usage: "$1,750 combined usage",
    commission: "$175.00",
    promo: "CYBER23",
  },
  {
    date: "May 09, 2024 · 09:53",
    buyer: "cto@deltaraid.ai",
    usage: "$12,640 combined usage",
    commission: "$1,264.00",
    promo: "SOCFAST",
  },
];

const AffiliateAdminPage = () => {
  const [activeTab, setActiveTab] = useState("links");

  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <header className="sticky top-0 z-50 border-b border-[#222222] bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/60">
              Affiliate admin
            </div>
            <nav className="hidden items-center gap-3 lg:flex">
              <button
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeTab === "links"
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setActiveTab("links")}
              >
                Links & campaigns
              </button>
              <button
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeTab === "finance"
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-transparent text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setActiveTab("finance")}
              >
                Finance & payouts
              </button>
            </nav>
          </div>
          <GlowButton glowColor="#FF00B7">
            <Link href="/affiliate" className="flex items-center text-black">
              Marketing site
            </Link>
          </GlowButton>
        </div>
        <div className="flex items-center gap-3 border-t border-[#222222] px-6 py-3 text-sm text-white/70 lg:hidden">
          <button
            className={`rounded-full border px-4 py-2 transition ${
              activeTab === "links"
                ? "border-white bg-white text-black"
                : "border-white/20 bg-transparent text-white/70"
            }`}
            onClick={() => setActiveTab("links")}
          >
            Links
          </button>
          <button
            className={`rounded-full border px-4 py-2 transition ${
              activeTab === "finance"
                ? "border-white bg-white text-black"
                : "border-white/20 bg-transparent text-white/70"
            }`}
            onClick={() => setActiveTab("finance")}
          >
            Finance
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-10 px-6 pb-24 pt-12">
        {activeTab === "links" ? (
          <>
            <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <EdgeGlowCard
                mode="static"
                spotlight
                outerClassName="rounded-[28px]"
                innerClassName="affiliate-card affiliate-card--default rounded-[24px]"
              >
                <div className="flex h-full flex-col gap-6 rounded-[20px] bg-black/80 p-8 backdrop-blur-xl">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-white">Link generator</h2>
                      <p className="text-sm text-white/60">
                        Submit the campaign context and partner operations will mint the promo code and destination flow.
                      </p>
                    </div>
                    <GlowButton>Submit request</GlowButton>
                  </div>
                  <form className="grid gap-4 rounded-[18px] border border-[#222222] bg-white/5 p-5 text-sm text-white/70">
                    <div className="grid gap-2">
                      <label className="text-xs uppercase tracking-[0.3em] text-white/45">
                        Campaign name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. SOC automation Q3 launch"
                        className="rounded-xl border border-white/12 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#37FF8B]"
                      />
                    </div>
                    <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                      <div className="grid gap-2">
                        <label className="text-xs uppercase tracking-[0.3em] text-white/45">
                          Landing experience
                        </label>
                        <select className="rounded-xl border border-[#222222] bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#37FF8B]">
                          <option>AI-SOC guided demo (recommended)</option>
                          <option>Emergency SOC migration flow</option>
                          <option>Enterprise pilot onboarding</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <label className="text-xs uppercase tracking-[0.3em] text-white/45">
                          Commission split
                        </label>
                        <select className="rounded-xl border border-[#222222] bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#37FF8B]">
                          <option>Standard (10% usage)</option>
                          <option>Volume accelerator (12%)</option>
                          <option>Custom enterprise proposal</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-xs uppercase tracking-[0.3em] text-white/45">
                        Notes to partner operations
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Launch timing, localized assets, or legal requirements."
                        className="rounded-xl border border-[#222222] bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#37FF8B]"
                      />
                    </div>
                    <div className="rounded-[18px] border border-[#222222] bg-black/60 p-5 text-sm text-white/70">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        Canonical URL format
                      </p>
                      <code className="mt-2 block break-all text-base text-white">
                        ai-soc.silenceai.net/register?promo=
                        <span className="text-[#FF00B7] font-semibold">[CODE HERE]</span>
                      </code>
                    </div>
                  </form>
                </div>
              </EdgeGlowCard>

              <EdgeGlowCard
                mode="static"
                spotlight
                outerClassName="rounded-[28px]"
                innerClassName="affiliate-card affiliate-card--default rounded-[24px]"
              >
                <div className="flex h-full flex-col gap-5 rounded-[20px] bg-black/80 p-8 backdrop-blur-xl">
                  <h2 className="text-2xl font-semibold text-white">Top performing links</h2>
                  <p className="text-sm text-white/60">
                    Copy the highest converting experiences and deploy them directly into your nurture streams.
                  </p>
                  <div className="space-y-4 text-sm text-white/70">
                    {topLinks.map((link) => (
                      <div
                        key={link.promo}
                        className="rounded-2xl border border-white/12 bg-white/5 p-5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.3em] text-white/45">
                            {link.promo}
                          </span>
                          <button className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/50 transition hover:bg-white/10">
                            Copy
                          </button>
                        </div>
                        <p className="mt-2 text-base font-medium text-white">
                          {link.title}
                        </p>
                        <p className="text-xs text-white/55">{link.conversions}</p>
                        <p className="text-xs text-white/45">{link.revenue}</p>
                        <code className="mt-3 block break-all text-[13px] text-white/75">
                          {link.destination}
                        </code>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-[0.3em] text-[#37FF8B] transition hover:text-[#37FF8B]/80"
                  >
                    View archived campaigns →
                  </Link>
                </div>
              </EdgeGlowCard>
            </section>
          </>
        ) : (
          <>
            <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {overviewStats.map((stat) => (
                <EdgeGlowCard
                  key={stat.label}
                  mode="static"
                  spotlight
                  outerClassName="rounded-[26px]"
                  innerClassName="affiliate-card affiliate-card--default rounded-[22px]"
                >
                  <div className="flex h-full flex-col justify-between gap-4 rounded-[18px] bg-black/80 p-6 backdrop-blur-xl">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/45">
                      <span>{stat.label}</span>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold text-white">{stat.value}</p>
                      <p className="text-sm text-white/60">{stat.helper}</p>
                    </div>
                  </div>
                </EdgeGlowCard>
              ))}
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <EdgeGlowCard
                mode="static"
                spotlight
                outerClassName="rounded-[28px]"
                innerClassName="affiliate-card affiliate-card--default rounded-[24px]"
              >
                <div className="flex h-full flex-col gap-6 rounded-[20px] bg-black/80 p-8 backdrop-blur-xl">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-white">
                        Recent commission rewards
                      </h2>
                      <p className="text-sm text-white/60">
                        Filter by email, promo code, or payout status. Export the filtered set for accounting hand-off.
                      </p>
                    </div>
                    <div className="flex gap-3 text-xs uppercase tracking-[0.25em] text-white/45">
                      <button className="rounded-full border border-white/15 px-4 py-2 text-white transition hover:bg-white/10">
                        30 days
                      </button>
                      <button className="rounded-full border border-white/15 px-4 py-2 text-white/50 transition hover:bg-white/10">
                        7 days
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
                    <input
                      type="search"
                      placeholder="Search email or organization"
                      className="rounded-xl border border-white/12 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#37FF8B]"
                    />
                    <select className="rounded-xl border border-white/12 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#37FF8B]">
                      <option>All promo codes</option>
                      <option>CYBER23</option>
                      <option>ONBOARD90</option>
                      <option>SOCFAST</option>
                    </select>
                    <select className="rounded-xl border border-white/12 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-[#37FF8B]">
                      <option>Status: any</option>
                      <option>Available</option>
                      <option>Pending</option>
                      <option>Paid out</option>
                    </select>
                  </div>

                  <div className="overflow-hidden rounded-[18px] border border-white/10">
                    <table className="min-w-full divide-y divide-white/10 text-left">
                      <thead className="bg-black/50 text-xs uppercase tracking-[0.25em] text-white/40">
                        <tr>
                          <th className="px-5 py-3">Date</th>
                          <th className="px-5 py-3">Buyer</th>
                          <th className="px-5 py-3">Usage volume</th>
                          <th className="px-5 py-3">Commission</th>
                          <th className="px-5 py-3">Promo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 text-sm text-white/70">
                        {commissionTable.map((row) => (
                          <tr key={`${row.date}-${row.buyer}`}>
                            <td className="px-5 py-4 text-white/80">{row.date}</td>
                            <td className="px-5 py-4">{row.buyer}</td>
                            <td className="px-5 py-4">{row.usage}</td>
                            <td className="px-5 py-4 text-[#37FF8B] font-semibold">
                              {row.commission}
                            </td>
                            <td className="px-5 py-4 text-white/50">{row.promo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
                    <p>
                      Showing {commissionTable.length} of {commissionTable.length} records
                    </p>
                    <GlowButton className="px-5 py-3 text-sm font-semibold">
                      Export filtered results
                    </GlowButton>
                  </div>
                </div>
              </EdgeGlowCard>

              <EdgeGlowCard
                mode="static"
                spotlight
                outerClassName="rounded-[28px]"
                innerClassName="affiliate-card affiliate-card--default rounded-[24px]"
              >
                <div className="flex h-full flex-col gap-5 rounded-[20px] bg-black/80 p-8 backdrop-blur-xl">
                  <div className="rounded-2xl border border-white/12 bg-white/5 p-5 text-sm text-white/70">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                      Available today
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-white">
                      $18,250
                    </p>
                    <p className="text-xs text-white/55">
                      Request payout by 3pm ET for same-day ACH transfer.
                    </p>
                    <GlowButton className="mt-4 justify-center px-6 py-3 text-sm font-semibold">
                      Initiate withdrawal
                    </GlowButton>
                  </div>
                  <div className="space-y-4 text-sm text-white/70">
                    {payoutTimeline.map((item) => (
                      <div
                        key={item.description}
                        className="rounded-2xl border border-white/12 bg-white/5 p-5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                            {item.label}
                          </span>
                          <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/55">
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-3 text-base font-medium text-white">
                          {item.amount}
                        </p>
                        <p className="text-xs text-white/55">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </EdgeGlowCard>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default AffiliateAdminPage;
