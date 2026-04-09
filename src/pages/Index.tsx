import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import heroOffice from "@/assets/hero-office.jpg";
import performanceAds from "@/assets/performance-ads.jpg";
import brandedVideo from "@/assets/branded-video.jpg";
import webbuildScreen from "@/assets/webbuild-screen.jpg";
import crmAuto from "@/assets/crm-auto.jpg";
import seoSearch from "@/assets/seo-search.jpg";

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

      {/* ─── HERO — full-width photo bg like isanghan ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute inset-0">
          <img src={heroOffice} alt="PIXELPAGE 오피스" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 lg:px-8">
          <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-gold mb-6 opacity-0 animate-fade-up stagger-1">
            교육 · 지식 · 경험 · 문화 전담 마케팅
          </p>
          <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-light leading-[1.1] tracking-[-0.03em] text-cream/95 mb-6 opacity-0 animate-fade-up stagger-2">
            만질 수 없는 것을 파는 브랜드의<br />
            <span className="text-gold font-normal">전담 마케팅 파트너.</span>
          </h1>
          <p className="text-[16px] text-cream/60 leading-[1.9] max-w-[520px] mb-10 opacity-0 animate-fade-up stagger-3">
            퍼포먼스 광고 · 브랜디드 유튜브 · SEO · CRM · 웹 빌드까지,
            <br />5가지 서비스가 유기적으로 연결된 마케팅을 설계합니다.
          </p>
          <div className="flex items-center gap-4 mb-16 opacity-0 animate-fade-up stagger-4">
            <Link to="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold tracking-[0.02em] rounded-md hover:bg-gold-light transition-colors">
              무료 상담 신청
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/#cases" className="text-[13px] font-medium text-cream/60 hover:text-cream transition-colors px-4 py-3.5">
              성과 보기 →
            </Link>
          </div>

          {/* KPI strip */}
          <div className="flex items-center gap-0 opacity-0 animate-fade-up stagger-5">
            {[
              { num: "3.93", unit: "%", label: "Avg. CTR" },
              { num: "500", unit: "%", label: "Peak ROAS" },
              { num: "6.6", unit: "×", label: "매출 성장" },
              { num: "280", unit: "+", label: "캠페인" },
            ].map((k, i) => (
              <div key={i} className="flex items-center gap-0">
                {i > 0 && <div className="w-px h-8 bg-cream/15 mx-6" />}
                <div>
                  <span className="text-[28px] font-serif font-light text-cream/90 tracking-[-0.02em]">
                    {k.num}
                    <span className="text-[14px] text-cream/40 ml-0.5">{k.unit}</span>
                  </span>
                  <span className="block text-[10px] font-medium text-cream/35 tracking-[0.08em] uppercase mt-0.5">{k.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO — bold statement + concrete list ─── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">What We Do</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] max-w-[700px]">
              일반 마케팅 회사와는<br /><strong className="font-normal text-gold">조금 다릅니다.</strong>
            </h2>
            <p className="text-[15px] text-t-secondary leading-[1.9] max-w-[600px] mt-6">
              교육·지식·체험·문화 — 무형의 가치를 파는 브랜드는 '공급의 질'만큼 <strong className="text-t-strong font-medium">'의향을 가진 관객과 어떻게 만나는가'</strong>가 전부입니다.
              상품이 아니라 서사, 숫자가 아니라 태도를 다루는 브랜드들의 전담 파트너입니다.
            </p>
          </Reveal>

          <Reveal className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: "01", title: "무형 서비스 전담", body: "제품 기반 이커머스와 완전히 다른 의사결정 구조를 이해하고, 무형 서비스만 전담합니다." },
              { num: "02", title: "서사형 크리에이티브", body: "브랜드 고유의 톤을 해치지 않는 서사를 설계합니다. 감각을 번역합니다." },
              { num: "03", title: "짧은 사이클, 또렷한 결과", body: "단기 집행만으로 월 매출 6배, ₩40M로 고단가 상품을 수익 구간에 올립니다." },
              { num: "04", title: "카테고리 리더 배출", body: "함께한 브랜드들은 각자의 카테고리 상위권으로 올라섰습니다." },
            ].map((p) => (
              <div key={p.num} className="border-t border-border pt-6 pr-6 pb-6">
                <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.num}</span>
                <h3 className="font-accent text-[15px] font-bold text-t-strong mt-3 mb-2">{p.title}</h3>
                <p className="text-[13px] text-t-secondary leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICES — each with photo, isanghan-style visual blocks ─── */}
      <section className="py-24 lg:py-32 bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Services</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
              5가지 서비스,<br />하나의 마케팅 설계.
            </h2>
            <p className="text-[14px] text-cream/40 mt-3 max-w-[480px] leading-[1.8]">
              각각 독립적으로 강하고, 함께할 때 가장 강력합니다.
            </p>
          </Reveal>

          {/* Service 1 — Performance */}
          <Reveal className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img src={performanceAds} alt="퍼포먼스 마케팅 대시보드" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
              </div>
              <div className="bg-cream/4 p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">01 · Performance Marketing</span>
                <h3 className="font-serif text-[clamp(22px,3vw,32px)] font-light text-cream/90 mt-3 mb-4">퍼포먼스 마케팅</h3>
                <p className="text-[14px] text-cream/50 leading-[1.8] mb-5">
                  '예산의 크기'가 아닌 <strong className="text-cream/80 font-medium">'구매 의향이 있는 사람을 얼마나 정확하게 찾는가'</strong>가 핵심입니다. 퍼널 상단부터 메시지를 걸러, 의향 있는 사람만 남깁니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"].map(t => (
                    <span key={t} className="text-[11px] text-cream/40 bg-cream/4 border border-cream/8 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <Link to="/services/performance" className="inline-flex items-center gap-2 text-[13px] font-medium text-gold hover:text-gold-light transition-colors">
                  자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Service 2 — Branded */}
          <Reveal className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden">
              <div className="bg-cream/4 p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">02 · Branded Content</span>
                <h3 className="font-serif text-[clamp(22px,3vw,32px)] font-light text-cream/90 mt-3 mb-4">브랜디드 콘텐츠</h3>
                <p className="text-[14px] text-cream/50 leading-[1.8] mb-5">
                  강사의 목소리, 공간의 공기, 수강생의 표정 — <strong className="text-cream/80 font-medium">감각을 번역하는 서사형 영상</strong>. 브랜디드 유튜브와 숏폼으로 24시간 영업사원을 만듭니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["브랜디드 유튜브", "숏폼 (Shorts · Reels)", "광고 소재 제작"].map(t => (
                    <span key={t} className="text-[11px] text-cream/40 bg-cream/4 border border-cream/8 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <Link to="/services/branded" className="inline-flex items-center gap-2 text-[13px] font-medium text-gold hover:text-gold-light transition-colors">
                  자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                <img src={brandedVideo} alt="브랜디드 콘텐츠 촬영 현장" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
              </div>
            </div>
          </Reveal>

          {/* Service 3+4+5 — smaller cards row */}
          <Reveal className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "03", name: "검색엔진 최적화", sub: "네이버 SEO · 구글 SEO", desc: "광고는 보여주는 것, SEO는 찾아오게 만드는 것. 콘텐츠 기반으로 장기 신뢰를 구축합니다.", img: seoSearch, href: "/services/seo" },
              { num: "04", name: "CRM 마케팅", sub: "카카오 · 이메일 · 문자 자동화", desc: "관심객을 고객으로, 고객을 팬으로. 리드 수집부터 전환·리텐션까지 자동화합니다.", img: crmAuto, href: "/services/crm" },
              { num: "05", name: "웹 빌드", sub: "랜딩 · 브랜드 사이트 · 엔터프라이즈", desc: "보여주기 위한 웹이 아닌, 파는 웹. 전환이 일어나도록 설계된 웹사이트를 빌드합니다.", img: webbuildScreen, href: "/services/webbuild" },
            ].map(s => (
              <Link key={s.num} to={s.href} className="group block rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1200} height={800} />
                </div>
                <div className="bg-cream/4 p-6">
                  <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">{s.num}</span>
                  <h3 className="text-[16px] font-medium text-cream/90 mt-2 mb-1">{s.name}</h3>
                  <p className="text-[11px] text-cream/30 mb-3">{s.sub}</p>
                  <p className="text-[13px] text-cream/50 leading-[1.7]">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-gold mt-4 group-hover:translate-x-1 transition-transform">
                    자세히 보기 <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <section id="cases" className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Case Studies</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
              짧은 기간, 또렷한 결과.
            </h2>
            <p className="text-[14px] text-t-tertiary mt-3 max-w-[480px] leading-[1.8]">
              무형 서비스 브랜드와 함께한 실제 성과입니다.
            </p>
          </Reveal>
          <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "디지털노마드 하이클래스", cat: "온라인 교육", desc: "카페 회원 7만 명의 커뮤니티를 가진 교육 브랜드. 퍼포먼스 광고로 업계 최고 CTR 달성.", stats: [{ n: "70,000", u: "+", l: "카페 회원" }, { n: "3.93", u: "%", l: "CTR" }], dark: true },
              { name: "부트스트래퍼", cat: "B2B 지식 서비스", desc: "고단가 B2B 상품을 ₩40M 집행으로 수익 구간에 올린 사례.", stats: [{ n: "500", u: "%", l: "ROAS" }, { n: "40", u: "M", l: "집행 금액" }], dark: false },
              { name: "플러스 스피치 학원", cat: "오프라인 교육", desc: "1개 지점에서 시작해 4개 지점까지 확장. 매출 6.6배 성장.", stats: [{ n: "6.6", u: "×", l: "매출 성장" }, { n: "4", u: "+", l: "신규 지점" }], dark: false },
              { name: "라 컴퍼니", cat: "가맹 네트워크", desc: "전국 7개 지점의 가맹 네트워크를 마케팅으로 확장한 프로젝트.", stats: [{ n: "7", u: "+", l: "전국 지점" }, { n: "전국", u: "", l: "커버리지" }], dark: true },
            ].map((c, i) => (
              <div key={i} className={`p-7 rounded-lg ${c.dark ? "bg-dark" : "bg-card shadow-card"}`}>
                <span className={`text-[10px] font-bold tracking-[0.08em] uppercase ${c.dark ? "text-gold" : "text-t-disabled"}`}>{c.cat}</span>
                <h3 className={`font-serif text-[22px] font-normal mt-2 mb-2 ${c.dark ? "text-cream/90" : "text-t-strong"}`}>{c.name}</h3>
                <p className={`text-[13px] leading-[1.7] mb-5 ${c.dark ? "text-cream/40" : "text-t-secondary"}`}>{c.desc}</p>
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

      {/* ─── HOW WE WORK — process flow ─── */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">How We Work</p>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
              어떻게 일하나요?
            </h2>
          </Reveal>
          <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { s: "01", t: "브랜드 분석", d: "무형 서비스의 핵심 가치와 타겟 관객을 정의합니다. 기존 마케팅 자산을 진단합니다." },
              { s: "02", t: "채널 · 퍼널 설계", d: "5가지 서비스 중 최적 조합을 설계합니다. 예산 배분과 KPI를 함께 정합니다." },
              { s: "03", t: "집행 · 크리에이티브", d: "서사형 광고 소재를 제작하고, A/B 테스트를 반복하며 최적화합니다." },
              { s: "04", t: "스케일업", d: "검증된 소재와 채널을 기반으로 빠르게 스케일업합니다. 데이터로 의사결정합니다." },
            ].map(p => (
              <div key={p.s} className="border-t-2 border-gold pt-6 pr-6 pb-6">
                <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.s}</span>
                <h3 className="text-[15px] font-medium text-t-strong mt-3 mb-2">{p.t}</h3>
                <p className="text-[13px] text-t-secondary leading-[1.7]">{p.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
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
