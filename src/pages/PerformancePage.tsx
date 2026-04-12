import { ArrowRight, ArrowLeft, AlertTriangle, TrendingUp, Layers, BarChart3, Video, FileText, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import illustHero from "@/assets/illust-performance-hero.png";
import perfStructure from "@/assets/perf-structure.png";
import perfOverlap from "@/assets/perf-overlap.png";
import perfScaling from "@/assets/perf-scaling.png";
import perfLifecycle from "@/assets/perf-lifecycle.png";

/* ─────────────── Section 01 · Hero ─────────────── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
    <div className="max-w-[1240px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32 lg:py-40">
      <Reveal>
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-[hsl(var(--cream))]/50 hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <p className="font-display text-[13px] tracking-[0.25em] uppercase text-primary mb-6">Performance Marketing</p>
        <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold text-[hsl(var(--cream))] leading-[1.2] tracking-[-0.02em] mb-6">
          광고비 낭비는<br />구조를 모르기 때문입니다
        </h1>
        <p className="text-[17px] text-[hsl(var(--cream))]/60 leading-[1.9] max-w-[480px] mb-10">
          소재 기획부터 억 단위 예산 집행까지 —<br />
          감이 아닌 <strong className="text-[hsl(var(--cream))]/90 font-medium">구조</strong>로 운영합니다.
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-[14px] font-bold tracking-[0.05em] hover:bg-[hsl(var(--gold-light))] transition-all hover:-translate-y-0.5 rounded-sm">
            지금 무료 광고 진단 받기 <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        {/* Trust anchors */}
        <div className="flex flex-wrap gap-8">
          {[
            { n: "12억+", l: "누적 광고비 운용" },
            { n: "500%", l: "최고 ROAS" },
            { n: "280+", l: "캠페인 집행" },
          ].map(k => (
            <div key={k.l}>
              <span className="text-[28px] font-serif font-semibold text-[hsl(var(--cream))] tracking-[-0.02em]">{k.n}</span>
              <span className="block text-[11px] text-[hsl(var(--cream))]/30 tracking-[0.08em] uppercase mt-1">{k.l}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <div className="hidden lg:flex justify-center">
        <img src={illustHero} alt="퍼포먼스 마케팅" className="w-[420px] animate-float" width={1024} height={1024} />
      </div>
    </div>
  </section>
);

/* ─────────────── Section 02 · Pain ─────────────── */
const PainSection = () => {
  const pains = [
    "예산 올렸더니 CPA도 같이 올라갔어요",
    "잘 되던 광고가 갑자기 죽어버렸습니다",
    "대행사 보고서가 조회수 스크린샷뿐이에요",
    "소재를 몇 개나 만들어야 할지 모르겠어요",
  ];

  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="font-display text-[13px] tracking-[0.25em] uppercase text-primary mb-6">Common Problems</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
            광고는 돌리고 있는데,<br />뭐가 문제인지 모르겠습니다
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[2] max-w-[520px] mb-12">
            이런 경험 있으시죠?
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[760px]">
            {pains.map((p, i) => (
              <div key={i} className="flex items-start gap-3 border border-border rounded-lg p-5 bg-card">
                <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-[15px] text-foreground leading-[1.8]">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="border-l-2 border-primary pl-6 max-w-[560px]">
            <p className="text-[17px] font-serif text-foreground leading-[1.9]">
              이 질문들에 즉시 답할 수 없다면,<br />
              지금 광고는 <span className="text-primary font-semibold">감으로 돌아가고 있는 겁니다.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────── Section 03 · Structure ─────────────── */
const StructureSection = () => {
  const matrix = [
    { ctr: "High", cpa: "Low", action: "전력 스케일", desc: "예산 올려라", color: "bg-primary/15 border-primary/30 text-primary" },
    { ctr: "High", cpa: "High", action: "타겟 조정", desc: "입찰 경쟁이 문제", color: "bg-[hsl(40,80%,50%)]/15 border-[hsl(40,80%,50%)]/30 text-[hsl(40,80%,40%)]" },
    { ctr: "Low", cpa: "Low", action: "소재 교체", desc: "새 소재 투입", color: "bg-[hsl(210,60%,50%)]/15 border-[hsl(210,60%,50%)]/30 text-[hsl(210,60%,40%)]" },
    { ctr: "Low", cpa: "High", action: "즉시 중지", desc: "끄고 점검", color: "bg-destructive/10 border-destructive/30 text-destructive" },
  ];

  return (
    <section className="py-28 lg:py-36 bg-[hsl(var(--surface-beige))]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="font-display text-[13px] tracking-[0.25em] uppercase text-primary mb-6">Ad Structure</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
            캠페인 → 광고세트 → 광고<br />이 구조가 곧 전략입니다
          </h2>
          <p className="text-[16px] text-muted-foreground leading-[2] max-w-[600px] mb-6">
            대부분의 광고 실패는 세팅 문제가 아닙니다.<br />
            구조 이해 없이 최적화를 시도한 결과입니다.
          </p>
        </Reveal>

        {/* Campaign structure image */}
        <Reveal className="mt-12 mb-16">
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
            <img src={perfStructure} alt="캠페인 3단 구조 — Campaign → Ad Set → Ad" className="w-full" loading="lazy" />
          </div>
        </Reveal>

        {/* Supporting visuals */}
        <Reveal className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
              <img src={perfOverlap} alt="오디언스 오버랩 문제" className="w-full" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
              <img src={perfLifecycle} alt="소재 성과 생애주기" className="w-full" loading="lazy" />
            </div>
          </div>
        </Reveal>

        {/* Scaling image */}
        <Reveal className="mb-16">
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm max-w-[800px] mx-auto">
            <img src={perfScaling} alt="예산 스케일링 타임라인" className="w-full" loading="lazy" />
          </div>
        </Reveal>

        {/* CTR × CPA Matrix */}
        <Reveal>
          <h3 className="font-serif text-[clamp(22px,3vw,32px)] font-medium text-foreground mb-8 text-center">
            CTR × CPA 판단 매트릭스
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[640px] mx-auto">
            {matrix.map(m => (
              <div key={m.action} className={`rounded-xl border p-6 ${m.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[12px] font-medium opacity-70">CTR {m.ctr} · CPA {m.cpa}</span>
                </div>
                <h4 className="text-[18px] font-bold mb-1">{m.action}</h4>
                <p className="text-[14px] opacity-70">{m.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────── Section 04 · Differentiation ─────────────── */
const DifferentiationSection = () => {
  const items = [
    { icon: <Video className="w-5 h-5" />, t: "크리에이티브 소재 기획 · 제작", d: "카피 · 이미지 · 영상까지 인하우스 제작. 외주 없이 빠르게 테스트합니다." },
    { icon: <Layers className="w-5 h-5" />, t: "구조 기반 캠페인 설계", d: "3단 구조 · 오디언스 분리 · 소재 수명 관리 — 감이 아닌 시스템으로 운영합니다." },
    { icon: <TrendingUp className="w-5 h-5" />, t: "스케일링 & 예산 확장", d: "테스트 → 검증 → 확장의 단계적 스케일링. 예산을 10배 키워도 무너지지 않는 구조를 만듭니다." },
    { icon: <BarChart3 className="w-5 h-5" />, t: "데이터 기반 주간 리포트", d: "CTR · CPA · ROAS · 전환율 — 숫자로 판단하고 숫자로 보고합니다." },
  ];

  return (
    <section className="py-28 lg:py-36 bg-dark text-[hsl(var(--cream))]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="font-display text-[13px] tracking-[0.25em] uppercase text-primary mb-6">Why Us</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] font-semibold text-[hsl(var(--cream))] leading-[1.2] tracking-[-0.02em] mb-4">
            소재 한 장부터<br />월 억 단위 예산 운용까지
          </h2>
          <p className="text-[16px] text-[hsl(var(--cream))]/50 leading-[2] max-w-[520px] mb-16">
            단순 집행을 넘어선 압도적 범위. 이 팀 하나면 됩니다.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {items.map(item => (
              <div key={item.t} className="border border-[hsl(var(--cream))]/10 rounded-xl p-8 hover:bg-[hsl(var(--cream))]/5 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-5">
                  {item.icon}
                </div>
                <h4 className="text-[17px] font-semibold text-[hsl(var(--cream))] mb-3">{item.t}</h4>
                <p className="text-[15px] text-[hsl(var(--cream))]/50 leading-[1.9]">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────── Section 05 · Social Proof ─────────────── */
const SocialProofSection = () => {
  const stats = [
    { metric: "ROAS", value: "8.4×", desc: "뷰티 커머스", sub: "월 광고비 3천만" },
    { metric: "CPA", value: "-62%", desc: "교육 플랫폼", sub: "캠페인 재설계 후" },
    { metric: "전환율", value: "3.2×", desc: "B2B SaaS", sub: "소재 교체 후 4주" },
  ];

  const cases = [
    { industry: "뷰티 커머스", challenge: "ROAS 2.0 정체", approach: "3단 구조 재설계 + 서사형 영상 소재", result: "ROAS 8.4× 달성", quote: "구조를 바꿨을 뿐인데 숫자가 완전히 달라졌습니다." },
    { industry: "교육 플랫폼", challenge: "CPA 지속 상승", approach: "오디언스 오버랩 제거 + A/B 소재 테스트", result: "CPA 62% 절감", quote: "같은 예산으로 두 배 넘게 모집할 수 있게 됐어요." },
    { industry: "B2B SaaS", challenge: "전환율 0.8%", approach: "소재 생애주기 관리 + 랜딩 최적화", result: "전환율 3.2배 향상", quote: "데이터로 모든 걸 설명해주니 신뢰가 갔습니다." },
  ];

  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="font-display text-[13px] tracking-[0.25em] uppercase text-primary mb-6">Results</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
            이상한마케팅은 후기를 자랑합니다.<br />
            <span className="text-primary">저희는 수치를 꺼냅니다.</span>
          </h2>
        </Reveal>

        {/* Big stat cards */}
        <Reveal className="mt-16 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map(s => (
              <div key={s.metric} className="text-center border border-border rounded-xl p-8 bg-card">
                <span className="text-[14px] text-muted-foreground font-medium tracking-wide">{s.metric}</span>
                <span className="block text-[48px] font-serif font-bold text-foreground mt-2 tracking-[-0.03em]">{s.value}</span>
                <span className="block text-[14px] text-foreground font-medium mt-2">{s.desc}</span>
                <span className="block text-[13px] text-muted-foreground mt-1">{s.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Case cards */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cases.map(c => (
              <div key={c.industry} className="border border-border rounded-xl p-7 bg-card">
                <span className="text-[12px] text-primary font-semibold tracking-wide">{c.industry}</span>
                <h4 className="text-[16px] font-semibold text-foreground mt-3 mb-2">과제: {c.challenge}</h4>
                <p className="text-[14px] text-muted-foreground leading-[1.8] mb-4">{c.approach}</p>
                <div className="border-t border-border pt-4">
                  <span className="text-[15px] font-bold text-foreground">{c.result}</span>
                  <p className="text-[13px] text-muted-foreground italic mt-2">"{c.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────── Section 06 · Process ─────────────── */
const ProcessSection = () => {
  const steps = [
    { n: "01", t: "광고 계정 & 현황 무료 진단", d: "현재 캠페인 구조, CPA 흐름, 소재 수명 분석 — 계약 전 공개" },
    { n: "02", t: "캠페인 구조 설계 & 소재 기획", d: "3단 구조 재설계 + 첫 소재 세트 제작 (이미지/영상)" },
    { n: "03", t: "실전 집행 & 주간 최적화", d: "CTR·CPA 매트릭스 기반 판단 → 살릴지 끌지 교체할지 매주 결정" },
    { n: "04", t: "스케일링 & 월간 성과 보고", d: "이긴 구조를 복제하고 예산을 단계적으로 확장 — 수치로 증명" },
  ];

  return (
    <section className="py-28 lg:py-36 bg-dark text-[hsl(var(--cream))]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="font-display text-[13px] tracking-[0.25em] uppercase text-primary mb-6">Process</p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] font-semibold text-[hsl(var(--cream))] leading-[1.2] tracking-[-0.02em] mb-4">
            계약 후 연락이 끊기는<br />대행사에 지쳤다면 —
          </h2>
          <p className="text-[17px] text-[hsl(var(--cream))]/50 mb-16">저희는 다릅니다.</p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {steps.map(s => (
              <div key={s.n} className="border-t-2 border-primary pt-8 pr-8 pb-8">
                <span className="text-[13px] font-display text-primary tracking-[0.1em]">{s.n}</span>
                <h3 className="text-[18px] font-semibold text-[hsl(var(--cream))] mt-4 mb-4">{s.t}</h3>
                <p className="text-[15px] text-[hsl(var(--cream))]/50 leading-[2]">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────── Section 07 · CTA ─────────────── */
const CtaSection = () => (
  <section className="py-28 lg:py-36 bg-background text-center">
    <div className="max-w-[1240px] mx-auto px-6">
      <Reveal>
        <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em] mb-6">
          지금 광고 계정,<br />무료로 진단해드립니다
        </h2>
        <p className="text-[16px] text-muted-foreground mb-10 max-w-[480px] mx-auto leading-[2]">
          10분이면 됩니다. 어디서 예산이 새고 있는지,<br />
          다음 소재는 무엇을 테스트해야 하는지 —<br />
          구조로 짚어드립니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-primary-foreground text-[14px] font-bold tracking-[0.05em] hover:bg-[hsl(var(--gold-light))] transition-all hover:-translate-y-0.5 rounded-sm">
            무료 광고 진단 신청하기 <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/cases" className="inline-flex items-center gap-2 px-9 py-4 border border-border text-foreground text-[14px] font-medium hover:bg-secondary transition-colors rounded-sm">
            포트폴리오 보기
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────── Page ─────────────── */
const PerformancePage = () => (
  <div>
    <PageMeta
      title="퍼포먼스 마케팅"
      description="소재 기획부터 억 단위 예산 집행까지 — 감이 아닌 구조로 광고를 운영합니다. Meta·Google·토스·당근·TikTok 퍼포먼스 마케팅."
      path="/services/performance"
    />
    <HeroSection />
    <PainSection />
    <StructureSection />
    <DifferentiationSection />
    <SocialProofSection />
    <ProcessSection />
    <CtaSection />
  </div>
);

export default PerformancePage;
