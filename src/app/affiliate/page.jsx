"use client";

import React, { useMemo, useState } from "react";
import AffiliateHeader from "@/components/affiliate/AffiliateHeader";
import AffiliateFooter from "@/components/affiliate/AffiliateFooter";
import Modal from "@/components/Modal";
import BackToTopButton from "@/components/BackToTopButton";
import GlowButton from "@/components/GlowButton";
import EdgeGlowCard from "@/components/EdgeGlowCard";
import { useLanguage } from "@/contexts/LanguageContext";

const AffiliatePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { heroMetrics, howItWorksSteps, topUpHighlights, faqs } = useMemo(
    () => ({
      heroMetrics: [
        {
          key: "activations",
          label: t("affiliate.hero.metric.conversion", "Activations"),
          value: "96",
          change: t("affiliate.hero.metric.conversionChange", "24 new teams this month"),
          valueClass: "text-white",
          icon: (
            <svg
              className="h-6 w-6 text-[#00BFFF]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18a6 6 0 100-12 6 6 0 000 12z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          key: "pending",
          label: t("affiliate.hero.metric.pending", "Pending rewards"),
          value: "$480",
          change: t("affiliate.hero.metric.pendingChange", "Withdrawl is being handled in 2 business days"),
          valueClass: "text-[#37FF8B]",
          icon: (
            <svg
              className="h-6 w-6 text-[#37FF8B]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
      ],
      howItWorksSteps: [
        {
          key: "create",
          title: t("affiliate.howItWorks.create.title", "Create your link"),
          description: t(
            "affiliate.howItWorks.create.description",
            "Generate a unique referral link or promo code inside your Silence AI dashboard."
          ),
          icon: (
            <svg
              className="h-12 w-12 text-[#FF00B7]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="10"
                width="36"
                height="28"
                rx="4"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M12 18H24M12 24H20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M30 22L36 30L30 30L30 22Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          key: "share",
          title: t("affiliate.howItWorks.share.title", "Share"),
          description: t(
            "affiliate.howItWorks.share.description",
            "Invite teams through email, LinkedIn, and communities. Track performance in real time."
          ),
          icon: (
            <svg
              className="h-12 w-12 text-[#00BFFF]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 16C18 18.2091 16.2091 20 14 20C11.7909 20 10 18.2091 10 16C10 13.7909 11.7909 12 14 12C16.2091 12 18 13.7909 18 16Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M38 10L22 20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M18 32C18 34.2091 16.2091 36 14 36C11.7909 36 10 34.2091 10 32C10 29.7909 11.7909 28 14 28C16.2091 28 18 29.7909 18 32Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M38 38L22 28"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M38 24C38 26.2091 36.2091 28 34 28C31.7909 28 30 26.2091 30 24C30 21.7909 31.7909 20 34 20C36.2091 20 38 21.7909 38 24Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          ),
        },
        {
          key: "earn",
          title: t("affiliate.howItWorks.earn.title", "Earn"),
          description: t(
            "affiliate.howItWorks.earn.description",
            "Receive commissions as soon as your referred customers activate their Silence AI protection."
          ),
          icon: (
            <svg
              className="h-12 w-12 text-[#37FF8B]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 10C15.1634 10 8 17.1634 8 26C8 34.8366 15.1634 42 24 42C32.8366 42 40 34.8366 40 26"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M32 8H40V16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40 8L24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
      ],
      topUpHighlights: [
        {
          key: "reward",
          title: t("affiliate.commission.reward.title", "10% reward on every balance top-up"),
          description: t(
            "affiliate.commission.reward.description",
            "Whenever an invited team recharges their Silence AI wallet, 10% of the net amount is credited to you instantly."
          ),
          icon: (
            <svg
              className="h-10 w-10 text-[#FF00B7]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 6V42"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M16 14H28C31.3137 14 34 16.6863 34 20C34 23.3137 31.3137 26 28 26H20C16.6863 26 14 28.6863 14 32C14 35.3137 16.6863 38 20 38H34"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          key: "settlement",
          title: t("affiliate.commission.settlement.title", "Realtime ledger settlement"),
          description: t(
            "affiliate.commission.settlement.description",
            "Rewards post to your partner balance as soon as the transaction clears—no manual approval queue."
          ),
          icon: (
            <svg
              className="h-10 w-10 text-[#00BFFF]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20L24 10L38 20V36C38 37.1046 37.1046 38 36 38H12C10.8954 38 10 37.1046 10 36V20Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 28L22 32L30 24"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          key: "visibility",
          title: t("affiliate.commission.visibility.title", "Full top-up visibility"),
          description: t(
            "affiliate.commission.visibility.description",
            "Dashboard exports list each refill, payment method, and reward amount so finance teams can reconcile effortlessly."
          ),
          icon: (
            <svg
              className="h-10 w-10 text-[#37FF8B]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 24C10 16 16.8 12 24 12C31.2 12 38 16 42 24C38 32 31.2 36 24 36C16.8 36 10 32 6 24Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="3" />
            </svg>
          ),
        },
      ],
      faqs: [
        {
          question: t(
            "affiliate.faq.payments.question",
            "How do I receive payments?"
          ),
          answer: t(
            "affiliate.faq.payments.answer",
            "You can add your VISA or Mastercard account number in your profile. Payouts can be withdrawn directly to the specified card."
          ),
        },
        {
          question: t(
            "affiliate.faq.discounts.question",
            "Do referred customers receive any discounts?"
          ),
          answer: t(
            "affiliate.faq.discounts.answer",
            "No. Referred customers do not receive discounts on their purchases. Only the affiliate partner earns a commission from successful referrals."
          ),
        },
        {
          question: t(
            "affiliate.faq.statistics.question",
            "When will I see my referral statistics?"
          ),
          answer: t(
            "affiliate.faq.statistics.answer",
            "Once a user registers using your promo code or referral link, their email address will appear in your dashboard along with the corresponding reward from the invitation."
          ),
        },
      ],
    }),
    [t]
  );

  const heroGlowPalette = useMemo(
    () => ({
      glowColor: "#FF00B7",
      secondaryGlowColor: "rgba(55,255,139,0.7)",
      topColor: "#FF00B7",
      leftColor: "#FF00B7",
      rightColor: "rgba(55,255,139,0.7)",
      bottomColor: "rgba(55,255,139,0.7)",
    }),
    []
  );

  const defaultGlowPalette = useMemo(
    () => ({
      glowColor: "#FF00B7",
      secondaryGlowColor: "rgba(32,140,255,0.45)",
      topColor: "#FF00B7",
      leftColor: "#FF00B7",
      rightColor: "rgba(32,140,255,0.45)",
      bottomColor: "rgba(32,140,255,0.45)",
    }),
    []
  );

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-[#01091C] px-4 pb-24 sm:px-6 lg:px-8">
        <AffiliateHeader onOpenModal={openModal} />

        <div className="relative z-10 mt-32 flex w-full max-w-7xl flex-col gap-16">
          <section className="relative grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="hero-spotlight hero-spotlight--pink"
              aria-hidden="true"
            />
            <div
              className="hero-spotlight hero-spotlight--cyan"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center rounded-full border border-[rgba(255,0,183,0.35)] bg-[rgba(255,0,183,0.18)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 shadow-[0_12px_35px_rgba(255,0,183,0.22)]">
                {t("affiliate.hero.tagline", "Join Silence AI's Affiliate Program")}
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
                {t("affiliate.hero.title", "Turn invitations into income.")}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <GlowButton onClick={openModal}>
                  {t("affiliate.hero.cta", "Join partnership program")}
                </GlowButton>
              </div>
            </div>
          </section>

          <section className="relative">
            <EdgeGlowCard
              mode="static"
              spotlight
              {...heroGlowPalette}
              outerClassName="group no-hover-glow rounded-[32px] relative z-10 edge-glow-card--hero"
            >
              <div className="affiliate-card affiliate-card--hero flex flex-col gap-8 rounded-[28px] p-10 lg:flex-row lg:items-stretch">
                <div className="affiliate-subcard affiliate-subcard--hero flex w-full flex-col justify-between gap-6 rounded-2xl p-6 lg:max-w-[320px]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                      {t("affiliate.hero.snapshot", "Live snapshot")}
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-white">
                      {t("affiliate.hero.earnings", "$2,940.00")}
                    </h2>
                    <p className="mt-2 text-base text-[#37FF8B]">
                      {t("affiliate.hero.growth", "+18% vs. last month")}
                    </p>
                    <p className="mt-4 text-sm text-white/60">
                      {t(
                        "affiliate.hero.snapshot.caption",
                        "Performance updates every 60 seconds, with confirmed payouts syncing instantly."
                      )}
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {heroMetrics.map((metric) => (
                      <div key={metric.key} className="affiliate-metric-row flex items-start gap-3 rounded-2xl p-4">
                        <span className="affiliate-metric-icon flex h-11 w-11 items-center justify-center rounded-2xl bg-black/60">
                          {metric.icon}
                        </span>
                        <div className="space-y-1">
                          <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">
                            {metric.label}
                          </p>
                          <p className={`text-lg font-semibold ${metric.valueClass}`}>
                            {metric.value}
                          </p>
                          <p className="text-xs text-white/50">{metric.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="affiliate-graph flex-1 rounded-2xl p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                        {t("affiliate.hero.graph.label", "Earnings trend")}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {t("affiliate.hero.graph.title", "Referral revenue growth")}
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-[#FF00B7]" />
                        {t("affiliate.hero.graph.window", "Last 30 days")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 h-64 w-full">
                    <svg
                      viewBox="0 0 480 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                    >
                      <defs>
                        <linearGradient id="affiliateGraphFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(255,0,183,0.24)" />
                          <stop offset="85%" stopColor="rgba(55,255,139,0)" />
                        </linearGradient>
                        <linearGradient id="affiliateGraphLine" x1="40" y1="200" x2="440" y2="40" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF00B7" />
                          <stop offset="0.5" stopColor="#8F59FF" />
                          <stop offset="1" stopColor="#37FF8B" />
                        </linearGradient>
                      </defs>
                      <g className="affiliate-graph-grid">
                        {[...Array(9)].map((_, i) => (
                          <line
                            key={`v-${i}`}
                            x1={40 + i * 48}
                            y1={40}
                            x2={40 + i * 48}
                            y2={200}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                          />
                        ))}
                        {[...Array(6)].map((_, i) => (
                          <line
                            key={`h-${i}`}
                            x1={40}
                            y1={60 + i * 28}
                            x2={440}
                            y2={60 + i * 28}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                          />
                        ))}
                      </g>
                      <path
                        d="M440 40C408 68 386 84 360 98C334 112 312 124 284 146C256 168 234 186 210 188C186 190 164 176 142 162C120 148 98 134 72 150C60 158 50 168 40 180V200H440V40Z"
                        fill="url(#affiliateGraphFill)"
                        opacity="0.65"
                      />
                      <path
                        d="M40 180C50 168 60 158 72 150C98 134 120 148 142 162C164 176 186 190 210 188C234 186 256 168 284 146C312 124 334 112 360 98C386 84 408 68 440 40"
                        stroke="url(#affiliateGraphLine)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="affiliate-graph-line"
                        pathLength="1"
                      />
                      {[40, 104, 168, 232, 296, 360, 440].map((cx, index) => (
                        <g key={cx}>
                          <circle
                            cx={cx}
                            cy={[180, 150, 162, 188, 146, 98, 40][index]}
                            r="6.5"
                            className="affiliate-graph-node"
                          />
                          <text
                            x={cx}
                            y={[180, 150, 162, 188, 146, 98, 40][index] - 20}
                            textAnchor="middle"
                            className="affiliate-graph-label"
                          >
                            {t(`affiliate.hero.graph.label${index}`, ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Today"][index])}
                          </text>
                        </g>
                      ))}
                      <circle cx="440" cy="40" r="9" className="affiliate-graph-pulse" />
                    </svg>
                  </div>
                </div>
              </div>
            </EdgeGlowCard>
          </section>

          <section className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {t("affiliate.howItWorks.title", "How it works")}
              </h2>
              <p className="max-w-3xl text-white/60">
                {t(
                  "affiliate.howItWorks.subtitle",
                  "Launch your referral funnel in minutes."
                )}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {howItWorksSteps.map((step) => (
                <EdgeGlowCard
                  key={step.key}
                  mode="static"
                  spotlight
                  {...defaultGlowPalette}
                  outerClassName="group no-hover-glow rounded-[28px] relative z-10 edge-glow-card--default"
                >
                  <div className="affiliate-card affiliate-card--default flex h-full flex-col gap-6 rounded-[24px] p-8">
                    <div className="affiliate-subcard affiliate-subcard--default flex h-16 w-16 items-center justify-center rounded-2xl">
                      {step.icon}
                    </div>
                    <div className="affiliate-subcard affiliate-subcard--default flex-1 space-y-2 rounded-2xl p-5 text-left">
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/60">{step.description}</p>
                    </div>
                  </div>
                </EdgeGlowCard>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <EdgeGlowCard
              mode="static"
              spotlight
              {...defaultGlowPalette}
              outerClassName="group no-hover-glow rounded-[28px] relative z-10 edge-glow-card--default"
            >
              <div className="affiliate-card affiliate-card--default flex h-full flex-col gap-6 rounded-[24px] p-8">
                <div className="affiliate-subcard affiliate-subcard--default space-y-3 rounded-2xl p-6">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                    {t("affiliate.commission.tagline", "Balance Rewards")}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {t(
                      "affiliate.commission.title",
                      "Top-ups that credit your partner wallet automatically"
                    )}
                  </h3>
                  <p className="text-sm text-white/60">
                    {t(
                      "affiliate.commission.description",
                      "Invited companies load funds into a shared balance before using Silence AI modules. Every refill pushes 10% of the net value straight to you."
                    )}
                  </p>
                </div>
                <div className="affiliate-subcard affiliate-subcard--default rounded-2xl p-6">
                  <div className="grid gap-5 md:grid-cols-3">
                    {topUpHighlights.map((item) => (
                      <div key={item.key} className="flex flex-col gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/55 shadow-[0_18px_40px_rgba(9,18,40,0.45)]">
                          {item.icon}
                        </div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-white/60">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="affiliate-subcard affiliate-subcard--default rounded-2xl p-6">
                  <div className="flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {t("affiliate.commission.sample.label", "Example Top-ups")}
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        {t(
                          "affiliate.commission.sample.caption",
                          "Affiliate earnings scale with every recharge—no tier resets or product mapping."
                        )}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white">
                      <div className="rounded-full border border-white/15 bg-black/50 px-4 py-2 shadow-[0_0_25px_rgba(255,0,183,0.25)]">
                        {t("affiliate.commission.sample.topup", "$250 top-up → $25 reward")}
                      </div>
                      <div className="rounded-full border border-white/15 bg-black/50 px-4 py-2 shadow-[0_0_25px_rgba(55,255,139,0.25)]">
                        {t("affiliate.commission.sample.topupHigher", "$1,000 top-up → $100 reward")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="affiliate-subcard affiliate-subcard--default text-xs text-white/60 rounded-2xl p-4">
                  {t(
                    "affiliate.commission.note",
                    "Commission is calculated from the net top-up amount after payment processing fees."
                  )}
                </div>
              </div>
            </EdgeGlowCard>

            <EdgeGlowCard
              mode="static"
              spotlight
              {...defaultGlowPalette}
              outerClassName="group no-hover-glow rounded-[28px] relative z-10 edge-glow-card--default"
            >
              <div className="affiliate-card affiliate-card--default flex h-full flex-col gap-6 rounded-[24px] p-8">
                <div className="affiliate-subcard affiliate-subcard--default space-y-3 rounded-2xl p-6">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
                    {t("affiliate.payment.tagline", "Payouts")}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {t("affiliate.payment.title", "Processing withdrawals within 2 business days.")}
                  </h3>
                  <p className="text-sm text-white/60">
                    {t(
                      "affiliate.payment.description",
                      "Initiate a withdrawal request anytime. Our finance team verifies and releases funds swiftly, so you get paid without delays."
                    )}
                  </p>
                </div>
                <div className="affiliate-subcard affiliate-subcard--default flex flex-col gap-4 rounded-2xl p-6 text-sm text-white/70">
                  <div className="affiliate-subcard affiliate-subcard--default flex items-start gap-3 rounded-2xl p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#37FF8B] shadow-[0_0_12px_rgba(55,255,139,0.8)]" />
                    <div>
                      <p className="font-semibold text-white">
                        {t("affiliate.payment.step.review.title", "Automated review")}
                      </p>
                      <p>
                        {t(
                          "affiliate.payment.step.review.copy",
                          "Transactions are validated instantly with built-in fraud filters."
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="affiliate-subcard affiliate-subcard--default flex items-start gap-3 rounded-2xl p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BFFF] shadow-[0_0_12px_rgba(0,191,255,0.8)]" />
                    <div>
                      <p className="font-semibold text-white">
                        {t("affiliate.payment.step.processing.title", "Processing window")}
                      </p>
                      <p>
                        {t(
                          "affiliate.payment.step.processing.copy",
                          "We finalize payouts within two business days after the request is approved."
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="affiliate-subcard affiliate-subcard--default flex items-start gap-3 rounded-2xl p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#FF00B7] shadow-[0_0_12px_rgba(255,0,183,0.8)]" />
                    <div>
                      <p className="font-semibold text-white">
                        {t("affiliate.payment.step.transfer.title", "Direct-to-card transfer")}
                      </p>
                      <p>
                        {t(
                          "affiliate.payment.step.transfer.copy",
                          "Receive funds on your VISA or Mastercard with transparent status tracking."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </EdgeGlowCard>
          </section>

          <section className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {t("affiliate.faq.title", "Questions & answers")}
              </h2>
              <p className="max-w-3xl text-white/60">
                {t(
                  "affiliate.faq.subtitle",
                  "Straightforward terms that keep your revenue predictable. Need more details? Contact our partner success team anytime."
                )}
              </p>
            </div>
            <EdgeGlowCard
              mode="static"
              spotlight
              {...defaultGlowPalette}
              outerClassName="group no-hover-glow rounded-[28px] relative z-10 edge-glow-card--default"
            >
              <div className="affiliate-card affiliate-card--default flex flex-col gap-6 rounded-[24px] p-8">
                <div className="space-y-6">
                  {faqs.map((item, index) => (
                    <div key={item.question} className="space-y-4">
                      <div className="affiliate-subcard affiliate-subcard--default rounded-2xl p-6 text-white/70">
                        <p className="text-base font-semibold text-white">
                          {item.question}
                        </p>
                        <p className="mt-3 text-sm">{item.answer}</p>
                      </div>
                      {index !== faqs.length - 1 && (
                        <div className="h-px w-full bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </EdgeGlowCard>
          </section>
        </div>
      </main>
      <AffiliateFooter />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <BackToTopButton />
    </>
  );
};

export default AffiliatePage;
