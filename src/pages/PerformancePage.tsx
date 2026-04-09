import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import performanceAds from "@/assets/performance-ads.jpg";

const PerformancePage = () => (
  <div className="pt-24">
    {/* Hero with photo */}
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={performanceAds} alt="퍼포먼스 마케팅" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-dark/80" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Performance Marketing</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/95 leading-[1.15] tracking-[-0.02em] mb-4">
            퍼포먼스 마케팅
          </h1>
          <p className="text-[18px] text-cream/60 leading-[1.7] max-w-[520px] mb-8">
            '예산의 크기'가 아닌 <strong className="text-cream/90 font-medium">'구매 의향이 있는 사람을 얼마나 정확하게 찾는가'</strong>가 핵심입니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"].map(t => (
              <span key={t} className="text-[11px] text-cream/50 bg-cream/6 border border-cream/10 px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* KPI bar */}
    <section className="py-12 bg-dark border-t border-cream/6">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal className="flex flex-wrap justify-between gap-6">
          {[{ n: "3.93", u: "%", l: "Avg. CTR" }, { n: "500", u: "%", l: "Peak ROAS" }, { n: "280", u: "+", l: "캠페인 집행" }, { n: "70,000", u: "+", l: "커뮤니티 회원" }].map(k => (
            <div key={k.l} className="text-center">
              <span className="text-[36px] font-serif font-light text-cream/80 tracking-[-0.02em]">{k.n}<span className="text-[18px] text-cream/30 ml-0.5">{k.u}</span></span>
              <span className="block text-[10px] text-cream/25 tracking-[0.1em] uppercase mt-1">{k.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* What we actually do — concrete */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">구체적으로 뭘 하나요?</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            무형 서비스 특화 퍼포먼스
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            {[
              { t: "의향 기반 타겟팅", d: "'관심 있는 사람'이 아니라 '올 사람'을 정의합니다. 무형 서비스의 구매 여정에 맞는 정밀 타겟을 찾습니다." },
              { t: "서사형 크리에이티브", d: "광고가 아닌 것처럼 보이는 광고. 브랜드 톤을 보존하면서 의향을 만드는 소재를 제작합니다." },
              { t: "리드 단가 · ROAS 최적화", d: "노출 수가 아니라 전환 당 비용과 매출 대비 수익률로 성과를 관리합니다." },
              { t: "매 시즌 A/B 테스트", d: "소재 · 카피 · 타겟 · 랜딩을 매 시즌 반복 테스트하며 최적점을 찾습니다." },
            ].map(item => (
              <div key={item.t} className="bg-card rounded-lg shadow-card p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                <h4 className="text-[15px] font-medium text-t-strong mb-2">{item.t}</h4>
                <p className="text-[13px] text-t-secondary leading-[1.7]">{item.d}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-dark rounded-lg p-8 sticky top-24">
              <h3 className="text-[14px] font-bold text-gold tracking-[0.04em] uppercase mb-6">지원 플랫폼</h3>
              {[
                { icon: "f", name: "Meta Ads", sub: "Facebook · Instagram 광고", detail: "리타겟팅, 룩어라이크, DPA 등 전 기능 활용" },
                { icon: "G", name: "Google Ads", sub: "Search · Display · YouTube", detail: "키워드 광고, 디스플레이, 영상 광고" },
                { icon: "T", name: "토스애즈", sub: "핀테크 네이티브 광고", detail: "2030 금융·자기계발 관심층 정밀 타겟" },
                { icon: "D", name: "당근마켓", sub: "하이퍼로컬 광고", detail: "오프라인 교육·매장 기반 지역 타겟팅" },
                { icon: "♪", name: "TikTok Ads", sub: "숏폼 광고", detail: "Z세대·밀레니얼 대상 임팩트 있는 숏폼" },
              ].map(p => (
                <div key={p.name} className="flex items-start gap-4 py-4 border-t border-cream/6">
                  <span className="w-8 h-8 rounded-md bg-cream/6 flex items-center justify-center text-[14px] text-gold font-bold shrink-0">{p.icon}</span>
                  <div>
                    <span className="block text-[13px] font-medium text-cream/80">{p.name}</span>
                    <span className="block text-[11px] text-cream/35 mt-0.5">{p.sub}</span>
                    <span className="block text-[12px] text-cream/45 mt-1">{p.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Process</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            데이터 기반 의사결정
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            { s: "01", t: "브랜드 · 상품 분석", d: "무형 서비스의 핵심 가치와 타겟 관객을 정의합니다." },
            { s: "02", t: "채널 · 예산 설계", d: "최적 채널 조합과 예산 배분을 설계합니다." },
            { s: "03", t: "소재 제작 · 테스트", d: "서사형 광고 소재를 제작, A/B 테스트합니다." },
            { s: "04", t: "최적화 · 스케일업", d: "데이터 기반 반복 튜닝으로 스케일업합니다." },
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
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-3">퍼포먼스 마케팅이 필요하신가요?</h2>
          <p className="text-[13px] text-cream/35 mb-6">무형 서비스 전담 팀이 직접 상담드립니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default PerformancePage;
