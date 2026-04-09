import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const PerformancePage = () => {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal>
            <SectionHeader label="Performance Marketing" title="퍼포먼스 마케팅" subtitle="의향이 있는 사람만 남도록." dark />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
              <div>
                <p className="text-base text-cream/75 leading-relaxed mb-8">
                  무형 서비스 광고의 핵심은 '예산의 크기'가 아닌 <strong className="text-cream">'구매 의향이 있는 사람을 얼마나 정확하게 찾는가'</strong>입니다. 코호트 타겟팅과 반복 튜닝으로 리드 단가를 꾸준히 압축해 왔습니다.
                </p>
                <ul className="flex flex-col gap-3">
                  {["무형 서비스 특화 의향 기반 타겟팅", "서사형 크리에이티브 — 브랜드 톤 보존", "리드 단가 최적화 · ROAS 설계", "매 시즌 A/B 테스트 반복 튜닝"].map((li) => (
                    <li key={li} className="text-sm text-cream/70 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-gold before:font-display">{li}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { icon: "f", name: "Meta Ads", sub: "Facebook · Instagram" },
                  { icon: "G", name: "Google Ads", sub: "Search · Display · YouTube" },
                  { icon: "토스", name: "토스애즈", sub: "Toss Ads · 핀테크 네이티브" },
                  { icon: "🥕", name: "당근마켓", sub: "하이퍼로컬 타겟팅" },
                  { icon: "♪", name: "TikTok", sub: "숏폼 네이티브 광고" },
                ].map((p) => (
                  <div key={p.name} className="bg-cream/5 border border-cream/10 p-5 rounded-md text-center hover:bg-cream/8 hover:border-gold hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center text-xl font-bold text-gold">{p.icon}</div>
                    <span className="block text-sm font-medium text-cream">{p.name}</span>
                    <span className="block text-[10px] text-cream/40 mt-1">{p.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-dark border-t border-cream/10">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ num: "3.93%", label: "Avg. CTR" }, { num: "500%", label: "Peak ROAS" }, { num: "280+", label: "캠페인 집행" }, { num: "70,000+", label: "커뮤니티 확보" }].map((r) => (
                <div key={r.label} className="text-center">
                  <span className="block font-display text-4xl text-cream">{r.num}</span>
                  <span className="block text-xs text-cream/40 tracking-widest mt-2 uppercase">{r.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <SectionHeader label="Process" title="퍼포먼스 마케팅 프로세스" subtitle="데이터 기반 의사결정으로 효율을 끌어올립니다." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { step: "01", title: "브랜드 분석", desc: "무형 서비스의 핵심 가치와 타겟 관객을 정의합니다. 경쟁 환경과 시장 포지션을 분석합니다." },
                { step: "02", title: "채널 설계", desc: "Meta, Google, 토스, 당근, TikTok 중 최적 채널 조합을 설계합니다." },
                { step: "03", title: "크리에이티브 제작", desc: "서사형 광고 소재를 제작하고 A/B 테스트 구조를 세팅합니다." },
                { step: "04", title: "최적화 · 스케일", desc: "데이터 기반 반복 튜닝으로 리드 단가를 압축하고 스케일업합니다." },
              ].map((p) => (
                <div key={p.step} className="border-t-2 border-gold pt-6">
                  <span className="font-display text-xs text-gold tracking-[0.15em] block mb-3">{p.step}</span>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark text-center">
        <div className="container">
          <Reveal>
            <h2 className="font-serif text-3xl text-cream mb-4">퍼포먼스 마케팅이 필요하신가요?</h2>
            <p className="text-cream/50 mb-8">무료 상담으로 시작해보세요.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-block px-9 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-all">
              무료 상담 신청
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PerformancePage;
