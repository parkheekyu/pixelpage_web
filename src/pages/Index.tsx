import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import charCurly from "@/assets/char-curly.png";

const ticker = ["무형 서비스 전담", "퍼포먼스 마케팅", "브랜디드 유튜브", "검색엔진 최적화", "CRM 자동화", "웹 빌드", "Meta Business Partner", "짧은 사이클 · 또렷한 결과"];

const Index = () => {
  return (
    <div>
      {/* ─── TICKER ─── */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-dark overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap py-2">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="text-[11px] text-cream/50 tracking-[0.08em] mx-6 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-gold inline-block" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-8 relative">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-6 opacity-0 animate-fade-up stagger-1">
                교육 · 지식 · 경험 · 문화
              </p>
              <h1 className="font-serif text-[clamp(44px,6.5vw,88px)] font-light leading-[1.05] tracking-[-0.03em] text-t-strong mb-8 opacity-0 animate-fade-up stagger-2">
                만질 수 없는 것을
                <br />
                <span className="text-gold font-normal">파는 일.</span>
              </h1>
              <p className="text-[16px] text-t-tertiary leading-[1.9] max-w-[420px] mb-10 opacity-0 animate-fade-up stagger-3">
                무형의 가치를 파는 브랜드의 전담 마케팅 파트너.
                <br />
                짧은 사이클, 또렷한 결과.
              </p>
              <div className="flex items-center gap-4 mb-16 opacity-0 animate-fade-up stagger-4">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold tracking-[0.02em] rounded-md hover:bg-gold-light transition-colors">
                  무료 상담 신청
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/#cases" className="text-[13px] font-medium text-t-secondary hover:text-t-strong transition-colors px-4 py-3.5">
                  성과 보기 →
                </Link>
              </div>

              {/* KPI strip — StyleSeed: big number + small label */}
              <div className="flex items-center gap-0 opacity-0 animate-fade-up stagger-5">
                {[
                  { num: "3.93", unit: "%", label: "Avg. CTR" },
                  { num: "500", unit: "%", label: "Peak ROAS" },
                  { num: "6.6", unit: "×", label: "매출 성장" },
                  { num: "280", unit: "+", label: "캠페인" },
                ].map((k, i) => (
                  <div key={i} className="flex items-center gap-0">
                    {i > 0 && <div className="w-px h-8 bg-border mx-6" />}
                    <div>
                      <span className="text-[28px] font-serif font-light text-t-strong tracking-[-0.02em]">
                        {k.num}
                        <span className="text-[14px] text-t-disabled ml-0.5">{k.unit}</span>
                      </span>
                      <span className="block text-[10px] font-medium text-t-disabled tracking-[0.08em] uppercase mt-0.5">{k.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end opacity-0 animate-fade-up stagger-6">
              <img src={charCurly} alt="PIXELPAGE" className="w-[240px] lg:w-[280px] animate-float rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY — Type D: full-width dark ─── */}
      <section className="py-24 lg:py-32 bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Philosophy</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em] max-w-[600px]">
              만질 수 없는 것을 파는 일은,<br />조금 다릅니다.
            </h2>
          </Reveal>
          <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px]">
            <p className="text-[14px] text-cream/50 leading-[1.9]">
              교육·지식·체험·문화 — 무형의 가치를 파는 브랜드는 '공급의 질'만큼 <strong className="text-cream/80 font-medium">'의향을 가진 관객과 어떻게 만나는가'</strong>가 전부입니다.
            </p>
            <p className="text-[14px] text-cream/50 leading-[1.9]">
              상품이 아니라 서사, 숫자가 아니라 태도를 다루는 브랜드들의 전담 파트너. 짧은 시간 안에 또렷한 결과를 만듭니다.
            </p>
          </Reveal>
          {/* StyleSeed: 4 pillars with border-t, never repeated layout */}
          <Reveal className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: "01", title: "Intangible First", body: "무형 서비스 전담. 제품 기반 이커머스와 완전히 다른 의사결정 구조를 이해합니다." },
              { num: "02", title: "Narrative Creative", body: "브랜드 고유의 톤을 해치지 않는 서사를 설계합니다." },
              { num: "03", title: "Short-Cycle Wins", body: "단기 집행만으로 브랜드가 다음 단계로 넘어갑니다." },
              { num: "04", title: "Category Leaders", body: "함께한 브랜드들은 각자의 카테고리 상위권으로 올라섰습니다." },
            ].map((p) => (
              <div key={p.num} className="border-t border-cream/8 pt-6 pr-6 pb-6">
                <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.num}</span>
                <h3 className="font-accent text-[16px] font-bold text-cream/80 mt-3 mb-2">{p.title}</h3>
                <p className="text-[13px] text-cream/40 leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICES — Type A: cards, cream bg ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Services</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
              유기적으로 연결된 마케팅 설계
            </h2>
            <p className="text-[14px] text-t-tertiary mt-3 max-w-[480px] leading-[1.8]">
              5가지 서비스는 각각 독립적으로 강하고, 함께할 때 가장 강력합니다.
            </p>
          </Reveal>

          {/* Funnel strip */}
          <Reveal className="mt-10 mb-6 flex items-center gap-0 overflow-x-auto">
            {["인지", "신뢰", "전환", "유지"].map((f, i) => (
              <div key={f} className="flex items-center shrink-0">
                {i > 0 && <div className="w-8 h-px bg-border" />}
                <span className={`text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full border transition-all ${
                  i === 0 ? "bg-dark text-gold border-dark" : "text-t-disabled border-border"
                }`}>{f}</span>
              </div>
            ))}
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num: "01", name: "퍼포먼스 마케팅", plat: "Meta · Google · 토스 · 당근 · TikTok", desc: "의향이 있는 사람만 남도록 퍼널 상단부터 메시지를 거릅니다.", href: "/services/performance", tags: ["인지", "전환"] },
                { num: "02", name: "브랜디드 콘텐츠", plat: "브랜디드 유튜브 · 숏폼", desc: "감각을 번역하는 서사형 영상. 브랜드 고유의 톤을 지킵니다.", href: "/services/branded", tags: ["인지", "신뢰"] },
                { num: "03", name: "검색엔진 최적화", plat: "네이버 SEO · 구글 SEO", desc: "찾아오게 만드는 콘텐츠 기반 신뢰 구축.", href: "/services/seo", tags: ["인지", "신뢰"] },
                { num: "04", name: "CRM 마케팅", plat: "이메일 · 카카오 · 문자 자동화", desc: "관심객을 고객으로, 고객을 팬으로.", href: "/services/crm", tags: ["전환", "유지"] },
                { num: "05", name: "웹 빌드", plat: "랜딩 페이지 · 브랜드 사이트", desc: "광고와 연동되는 전환 최적화 웹.", href: "/services/webbuild", tags: ["전환", "유지"] },
              ].map((s) => (
                <Link key={s.num} to={s.href} className="group block bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-display text-t-disabled tracking-[0.1em]">{s.num}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-t-disabled group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h3 className="text-[16px] font-medium text-t-strong mb-1">{s.name}</h3>
                  <p className="text-[11px] text-t-disabled tracking-[0.02em] mb-3">{s.plat}</p>
                  <p className="text-[13px] text-t-secondary leading-[1.7]">{s.desc}</p>
                  <div className="flex gap-1.5 mt-4 pt-4 border-t border-border">
                    {s.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold text-gold bg-gold/8 px-2.5 py-0.5 rounded-full tracking-[0.04em]">{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CASES — Type B: alternating card colors ─── */}
      <section id="cases" className="py-24 lg:py-32 bg-card">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Case Studies</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
              짧은 기간, 또렷한 결과.
            </h2>
          </Reveal>
          <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "디지털노마드 하이클래스", cat: "온라인 교육", stats: [{ n: "70,000", u: "+", l: "카페 회원" }, { n: "3.93", u: "%", l: "CTR" }], dark: true },
              { name: "부트스트래퍼", cat: "B2B 지식", stats: [{ n: "500", u: "%", l: "ROAS" }, { n: "40", u: "M", l: "집행" }], dark: false },
              { name: "플러스 스피치 학원", cat: "오프라인 교육", stats: [{ n: "6.6", u: "×", l: "매출 성장" }, { n: "4", u: "+", l: "신규 지점" }], dark: false },
              { name: "라 컴퍼니", cat: "가맹 네트워크", stats: [{ n: "7", u: "+", l: "전국 지점" }, { n: "국내", u: "", l: "전 지점" }], dark: true },
            ].map((c, i) => (
              <div key={i} className={`p-7 rounded-lg ${c.dark ? "bg-dark" : "bg-background"}`}>
                <span className={`text-[10px] font-bold tracking-[0.08em] uppercase ${c.dark ? "text-gold" : "text-t-disabled"}`}>{c.cat}</span>
                <h3 className={`font-serif text-[22px] font-normal mt-2 mb-5 ${c.dark ? "text-cream/90" : "text-t-strong"}`}>{c.name}</h3>
                <div className="flex gap-8">
                  {c.stats.map((s, j) => (
                    <div key={j}>
                      <span className={`text-[32px] font-serif font-light tracking-[-0.02em] ${c.dark ? "text-cream/80" : "text-t-strong"}`}>
                        {s.n}<span className={`text-[16px] ml-0.5 ${c.dark ? "text-cream/30" : "text-t-disabled"}`}>{s.u}</span>
                      </span>
                      <span className={`block text-[10px] tracking-[0.08em] uppercase mt-0.5 ${c.dark ? "text-cream/30" : "text-t-disabled"}`}>{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── WHY — Type D: asymmetric ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Why Pixelpage</p>
                <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] mb-10">
                  왜 우리인가.
                </h2>
                <div className="flex flex-col gap-8">
                  {[
                    { n: "01", t: "무형의 경험만 다뤄 왔습니다.", b: "'한 번 경험해 보고 싶다'는 감정을 설계해 온 경험이 가장 깊은 에이전시입니다." },
                    { n: "02", t: "짧은 사이클, 또렷한 결과.", b: "단기 집행만으로 월 매출을 6배 만들고, ₩40M로 고단가 상품을 수익 구간에 올려본 팀입니다." },
                    { n: "03", t: "의향 기반 타겟팅.", b: "'관심 있는 사람'이 아니라 '올 사람'을 정의하고 찾습니다." },
                  ].map(r => (
                    <div key={r.n} className="flex gap-5 items-start">
                      <span className="text-[12px] font-display text-gold tracking-[0.08em] shrink-0 mt-1">{r.n}</span>
                      <div>
                        <h3 className="text-[15px] font-medium text-t-strong mb-1.5">{r.t}</h3>
                        <p className="text-[13px] text-t-secondary leading-[1.8]">{r.b}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-center gap-3">
                <img src={charCurly} alt="PIXELPAGE" className="w-[180px] rounded-xl animate-float" />
                <span className="text-[10px] text-t-disabled tracking-[0.1em] uppercase">Meta Business Partner</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT — compact ─── */}
      <section id="contact" className="py-24 lg:py-32 bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Contact</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
              한 번 얘기해봐요.
            </h2>
            <p className="text-[14px] text-cream/40 mt-3 max-w-[400px] leading-[1.8] mb-8">
              지금 당장 계약이 목표가 아닙니다. 어떻게 팔 수 있는지 함께 생각해 보는 것부터 시작합니다.
            </p>
            <a href="mailto:contact@pixelpage.co.kr" className="block font-serif text-[20px] text-cream/70 hover:text-gold transition-colors mb-1.5">
              contact@pixelpage.co.kr
            </a>
            <p className="text-[11px] text-cream/25 mb-8">보통 24시간 이내 회신드립니다.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
              이메일 문의 <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
