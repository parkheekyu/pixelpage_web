import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const PerformancePage = () => (
  <div className="pt-24">
    {/* Hero — Type D */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Performance Marketing</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/90 leading-[1.15] tracking-[-0.02em] mb-4">
            퍼포먼스 마케팅
          </h1>
          <p className="font-display italic text-[clamp(18px,2.5vw,28px)] text-gold/80">의향이 있는 사람만 남도록.</p>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[14px] text-cream/50 leading-[1.9] mb-8">
              무형 서비스 광고의 핵심은 '예산의 크기'가 아닌 <strong className="text-cream/80 font-medium">'구매 의향이 있는 사람을 얼마나 정확하게 찾는가'</strong>입니다.
            </p>
            {["무형 서비스 특화 의향 기반 타겟팅", "서사형 크리에이티브 — 브랜드 톤 보존", "리드 단가 최적화 · ROAS 설계", "매 시즌 A/B 테스트 반복 튜닝"].map(li => (
              <p key={li} className="text-[13px] text-cream/40 pl-4 py-1.5 border-l border-gold/30 mb-2">{li}</p>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: "f", name: "Meta Ads", sub: "Facebook · Instagram" },
              { icon: "G", name: "Google Ads", sub: "Search · Display" },
              { icon: "T", name: "토스애즈", sub: "핀테크 네이티브" },
              { icon: "🥕", name: "당근마켓", sub: "하이퍼로컬" },
              { icon: "♪", name: "TikTok", sub: "숏폼 광고" },
            ].map(p => (
              <div key={p.name} className="bg-cream/4 border border-cream/8 rounded-lg p-4 text-center hover:border-gold/30 transition-colors">
                <span className="block text-[18px] text-gold mb-2">{p.icon}</span>
                <span className="block text-[12px] font-medium text-cream/70">{p.name}</span>
                <span className="block text-[10px] text-cream/30 mt-0.5">{p.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* KPI bar */}
    <section className="py-12 bg-dark border-t border-cream/6">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal className="flex flex-wrap justify-between gap-6">
          {[{ n: "3.93", u: "%", l: "Avg. CTR" }, { n: "500", u: "%", l: "Peak ROAS" }, { n: "280", u: "+", l: "캠페인" }, { n: "70,000", u: "+", l: "커뮤니티" }].map(k => (
            <div key={k.l} className="text-center">
              <span className="text-[36px] font-serif font-light text-cream/80 tracking-[-0.02em]">{k.n}<span className="text-[18px] text-cream/30 ml-0.5">{k.u}</span></span>
              <span className="block text-[10px] text-cream/25 tracking-[0.1em] uppercase mt-1">{k.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Process — cream bg */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Process</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            데이터 기반 의사결정
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            { s: "01", t: "브랜드 분석", d: "무형 서비스의 핵심 가치와 타겟 관객을 정의합니다." },
            { s: "02", t: "채널 설계", d: "최적 채널 조합과 예산 배분을 설계합니다." },
            { s: "03", t: "크리에이티브", d: "서사형 광고 소재를 제작, A/B 테스트합니다." },
            { s: "04", t: "최적화", d: "데이터 기반 반복 튜닝으로 스케일업합니다." },
          ].map(p => (
            <div key={p.s} className="border-t-2 border-gold pt-5 pr-6 pb-6">
              <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.s}</span>
              <h3 className="text-[15px] font-medium text-t-strong mt-3 mb-2">{p.t}</h3>
              <p className="text-[13px] text-t-secondary leading-[1.7]">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-dark text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-6">퍼포먼스 마케팅이 필요하신가요?</h2>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default PerformancePage;
