import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import iconOk from "@/assets/icon-ok.svg";

/* ── 보통 대행사 퍼널 (flat, 끊김) ── */
const AgencyFunnel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    { label: "광고 세팅", color: "bg-neutral-300" },
    { label: "노출", color: "bg-neutral-300" },
    { label: "클릭", color: "bg-neutral-400" },
  ];

  const gap = [
    { label: "랜딩 최적화", color: "bg-neutral-200", dashed: true },
    { label: "리텐션 설계", color: "bg-neutral-200", dashed: true },
    { label: "매출 전환", color: "bg-neutral-200", dashed: true },
  ];

  return (
    <div ref={ref} className="rounded-2xl border border-neutral-200 bg-white shadow-card overflow-hidden p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-neutral-300" />
        <span className="text-[15px] font-semibold text-neutral-500">보통 광고 대행사</span>
      </div>

      {/* Active steps */}
      <div className="space-y-2.5 mb-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.12 }}
            className="flex items-center gap-3"
          >
            <div className={`w-2 h-2 rounded-full ${s.color} flex-shrink-0`} />
            <div className={`${s.color} rounded-md px-4 py-2.5 flex-1`}>
              <span className="text-[13px] font-medium text-neutral-600">{s.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dashed separator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="border-t-2 border-dashed border-neutral-200 my-4 relative"
      >
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[11px] text-neutral-400 font-medium">여기서 끝</span>
      </motion.div>

      {/* Inactive steps */}
      <div className="space-y-2.5">
        {gap.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.45 } : {}}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-neutral-200 flex-shrink-0" />
            <div className="border border-dashed border-neutral-200 rounded-md px-4 py-2.5 flex-1">
              <span className="text-[13px] text-neutral-400 line-through">{s.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ── 런모아 퍼널 (full, 연결됨) ── */
const RunmoaFunnel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    { label: "시장 조사 · USP 개발", sub: "브랜드 포지셔닝", color: "from-[hsl(15,55%,58%)] to-[hsl(15,60%,65%)]" },
    { label: "퍼널 · 채널 설계", sub: "타겟 세그먼트", color: "from-[hsl(15,50%,55%)] to-[hsl(15,55%,62%)]" },
    { label: "크리에이티브 제작", sub: "A/B 테스트", color: "from-[hsl(20,45%,50%)] to-[hsl(15,50%,58%)]" },
    { label: "광고 집행 · 최적화", sub: "실시간 모니터링", color: "from-[hsl(25,40%,45%)] to-[hsl(20,45%,52%)]" },
    { label: "리텐션 · CRM", sub: "고객 재방문 유도", color: "from-[hsl(25,35%,40%)] to-[hsl(25,40%,48%)]" },
    { label: "매출 전환 · 스케일업", sub: "ROAS 극대화", color: "from-[hsl(25,30%,35%)] to-[hsl(25,35%,42%)]" },
  ];

  return (
    <div ref={ref} className="rounded-2xl border border-primary/20 bg-white shadow-card overflow-hidden p-6 lg:p-8 ring-1 ring-primary/10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <span className="text-[15px] font-semibold text-foreground">런모아</span>
        <span className="ml-auto text-[11px] bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full">End-to-End</span>
      </div>

      {/* Full funnel */}
      <div className="space-y-2">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -16, scale: 0.97 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{
              duration: 0.35,
              delay: 0.15 + i * 0.12,
              type: "spring",
              damping: 22,
              stiffness: 200,
            }}
          >
            <div className={`bg-gradient-to-r ${s.color} rounded-lg px-4 py-3 flex items-center justify-between`}>
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] font-bold text-white/50">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[13px] font-semibold text-white">{s.label}</span>
              </div>
              <span className="text-[11px] text-white/70">{s.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.2, delay: 0.3 + i * 0.12 }}
                className="w-px h-3 bg-primary/30 mx-auto origin-top"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Result badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.0 }}
        className="mt-5 bg-primary/5 border border-primary/15 rounded-xl px-5 py-3 text-center"
      >
        <span className="text-[13px] text-primary font-semibold">
          동종 업계 평균 대비 결과당 비용 최대 83% ↓
        </span>
      </motion.div>
    </div>
  );
};

/* ── Comparison Section ── */
const ComparisonSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-surface-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-20 lg:mb-28">
          <img src={iconOk} alt="Philosophy" className="w-10 h-10 mb-5 mx-auto" />
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em]">
            일반 마케팅 회사와는<br />조금 다릅니다.
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[520px] mx-auto leading-[1.9] mt-6">
            광고 세팅만 하고 끝나는 대행이 아닙니다.<br />
            시장 조사부터 매출 전환까지, 전 과정을 설계합니다.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <AgencyFunnel />
            <RunmoaFunnel />
          </div>
        </Reveal>

        {/* Bottom copy */}
        <Reveal className="mt-16 lg:mt-20 text-center">
          <p className="text-[19px] font-serif text-foreground leading-[1.9] max-w-[560px] mx-auto">
            "광고만 띡 하고 끝"이 아니라,<br />
            <span className="text-primary font-semibold">고객이 사는 순간까지</span> 함께합니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ComparisonSection;
