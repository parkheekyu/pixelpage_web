import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import heroOffice from "@/assets/hero-office.jpg";
import performanceAds from "@/assets/performance-ads.jpg";
import brandedVideo from "@/assets/branded-video.jpg";
import webbuildScreen from "@/assets/webbuild-screen.jpg";
import crmAuto from "@/assets/crm-auto.jpg";
import seoSearch from "@/assets/seo-search.jpg";
import charCurly from "@/assets/char-curly.png";
import charMale from "@/assets/char-male.png";
import charFemale from "@/assets/char-female.jpeg";

const Index = () => {
  return (
    <div>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-background overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[15%] w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-[1240px] mx-auto w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="font-display text-[13px] tracking-[0.25em] uppercase text-gold mb-6 opacity-0 animate-fade-up stagger-1">
                교육 · 지식 · 경험 · 문화
              </p>
              <h1 className="font-serif text-[clamp(48px,7vw,96px)] font-normal leading-[1.1] tracking-[-0.03em] text-foreground mb-7 opacity-0 animate-fade-up stagger-2">
                만질 수 없는 것을<br /><span className="text-gold">파는 일.</span>
              </h1>
              <p className="text-[17px] text-muted-foreground leading-[1.85] max-w-[460px] mb-10 opacity-0 animate-fade-up stagger-3">
                무형의 가치를 파는 브랜드의 전담 마케팅 파트너.<br />
                짧은 사이클 안에, 관객이 '한 번 경험해 보고 싶다'고<br />
                느끼는 그 순간까지 설계합니다.
              </p>
              <div className="flex items-center gap-4 mb-14 opacity-0 animate-fade-up stagger-4">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-9 py-4 bg-gold text-primary-foreground text-[14px] font-bold tracking-[0.05em] hover:bg-gold-light transition-all hover:-translate-y-0.5">
                  무료 상담 신청
                </Link>
                <Link to="/#cases" className="inline-flex items-center px-8 py-4 border border-foreground/20 text-[14px] font-medium text-foreground hover:border-gold hover:text-gold transition-colors">
                  성과 보기
                </Link>
              </div>
              <div className="flex items-center gap-8 opacity-0 animate-fade-up stagger-5">
                {[
                  { num: "100%", label: "무형 서비스 전담" },
                  { num: "5+", label: "시그니처 브랜드" },
                  { num: "TOP 1%", label: "니치 마켓 포지션" },
                ].map((k, i) => (
                  <div key={i} className="flex items-center gap-8">
                    {i > 0 && <div className="w-px h-9 bg-foreground/10" />}
                    <div>
                      <span className="block font-display text-[28px] font-normal text-foreground tracking-[-0.02em]">{k.num}</span>
                      <span className="block text-[11px] text-muted-foreground tracking-[0.05em] mt-0.5">{k.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Characters + floating tags */}
            <div className="hidden lg:flex flex-col items-start gap-6 opacity-0 animate-fade-up stagger-6">
              <div className="relative">
                <div className="flex items-end gap-4">
                  <img src={charCurly} alt="픽셀페이지" className="w-[210px] rounded-3xl animate-float" />
                  <img src={charMale} alt="픽셀페이지" className="w-[160px] rounded-2xl mb-2 scale-[1.15] origin-bottom" style={{ animation: 'float-gentle 7s ease-in-out infinite' }} />
                </div>
                {/* Floating KPI tags */}
                <div className="absolute -top-3 -right-4 bg-card border border-border shadow-card px-4 py-2 rounded-md text-[12px] font-medium text-foreground animate-float" style={{ animationDelay: '0.5s' }}>
                  Meta Ads
                </div>
                <div className="absolute top-1/3 -left-6 bg-card border border-border shadow-card px-4 py-2 rounded-md text-[12px] font-medium text-gold animate-float" style={{ animationDelay: '1.2s' }}>
                  3.93% CTR
                </div>
                <div className="absolute bottom-12 -right-8 bg-card border border-border shadow-card px-4 py-2 rounded-md text-[12px] font-medium text-gold animate-float" style={{ animationDelay: '1.8s' }}>
                  ROAS 500%
                </div>
                <div className="absolute -bottom-2 left-8 bg-card border border-border shadow-card px-4 py-2 rounded-md text-[12px] font-medium text-foreground animate-float" style={{ animationDelay: '2.4s' }}>
                  ×6.6 성장
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-10 left-12 flex items-center gap-4">
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">스크롤</span>
          <div className="w-[60px] h-px bg-gold" style={{ animation: 'scroll-line 2s ease infinite' }} />
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-5">What We Do</p>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] max-w-[700px]">
              일반 마케팅 회사와는<br /><strong className="font-normal text-gold">조금 다릅니다.</strong>
            </h2>
          </Reveal>
          <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-8">
              <p className="text-[17px] text-t-secondary leading-[2.2] mb-8">
                온라인 강의, 코칭 프로그램, 학원, 체험형 서비스, 프랜차이즈 교육, 지식 콘텐츠 — 이런 브랜드들은 실물 상품을 파는 이커머스와 완전히 다른 구매 여정을 갖고 있습니다. 고객이 '사야겠다'고 결심하기까지의 과정이 훨씬 길고, 감정적 의사결정이 개입되며, 한 번의 광고 클릭만으로 전환이 일어나지 않습니다.
              </p>
              <p className="text-[17px] text-t-secondary leading-[2.2] mb-8">
                PIXELPAGE는 이런 <strong className="text-t-strong font-medium">무형의 가치를 파는 브랜드만 전담</strong>합니다. 제품 사진 하나로 설득할 수 없는 서비스를 어떻게 '경험해 보고 싶다'는 감정으로 바꾸는지, 그 과정을 5가지 서비스로 설계합니다.
              </p>
              <p className="text-[17px] text-t-secondary leading-[2.2]">
                퍼포먼스 광고로 의향 있는 관객을 데려오고, 브랜디드 유튜브로 신뢰를 쌓고, SEO로 찾아오게 만들고, CRM으로 떠나지 않게 붙잡고, 전환이 일어나는 웹사이트로 마무리합니다. 이 5가지가 따로 노는 게 아니라, <strong className="text-t-strong font-medium">하나의 마케팅 설계로 유기적으로 연결</strong>됩니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-center gap-3">
              <img src={charCurly} alt="PIXELPAGE" className="w-[160px] rounded-xl animate-float" loading="lazy" />
              <span className="text-[11px] text-t-disabled tracking-[0.1em] uppercase">Meta Business Partner</span>
            </div>
          </Reveal>

          <Reveal className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: "01", title: "무형 서비스 전담", body: "제품 기반 이커머스와 완전히 다른 의사결정 구조를 이해합니다. 교육, 코칭, 체험, 지식 서비스 — 이 카테고리만 다뤄 왔기 때문에 시행착오 없이 바로 성과를 냅니다." },
              { num: "02", title: "서사형 크리에이티브", body: "광고가 아닌 것처럼 보이는 광고를 만듭니다. 브랜드 고유의 톤과 세계관을 해치지 않으면서, '한 번 경험해 보고 싶다'는 감정을 설계합니다." },
              { num: "03", title: "짧은 사이클, 또렷한 결과", body: "단기 집행만으로 월 매출을 6배 만들고, ₩40M 예산으로 고단가 상품을 수익 구간에 올려본 팀입니다. 긴 보고서 대신 빠른 결과로 증명합니다." },
              { num: "04", title: "카테고리 리더 배출", body: "함께한 브랜드들은 각자의 카테고리에서 상위권으로 올라섰습니다. 7만 명 커뮤니티, 전국 지점 확장, 업계 최고 CTR — 모두 실제 결과입니다." },
            ].map((p) => (
              <div key={p.num} className="border-t border-border pt-8 pr-8 pb-8">
                <span className="text-[13px] font-display text-gold tracking-[0.1em]">{p.num}</span>
                <h3 className="font-accent text-[18px] font-bold text-t-strong mt-4 mb-4">{p.title}</h3>
                <p className="text-[15px] text-t-secondary leading-[2.1]">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 lg:py-36 bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-gold mb-5">Services</p>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
              5가지 서비스,<br />하나의 마케팅 설계.
            </h2>
            <p className="text-[16px] text-cream/55 mt-5 max-w-[580px] leading-[2.1]">
              각각 독립적으로 강하고, 함께할 때 가장 강력합니다. 하나만 써도 효과가 있지만, 조합할수록 마케팅 비용은 줄고 전환율은 올라갑니다.
            </p>
          </Reveal>

          {/* Service 1 — Performance */}
          <Reveal className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img src={performanceAds} alt="퍼포먼스 마케팅 대시보드" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
              </div>
              <div className="bg-cream/4 p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-gold">01 · Performance Marketing</span>
                <h3 className="font-serif text-[clamp(24px,3vw,34px)] font-light text-cream/90 mt-3 mb-5">퍼포먼스 마케팅</h3>
                <p className="text-[16px] text-cream/60 leading-[2.1] mb-6">
                  Meta(Facebook · Instagram), Google, 토스애즈, 당근마켓, TikTok 등 주요 광고 플랫폼을 활용합니다. 단순히 광고를 많이 돌리는 게 아니라, <strong className="text-cream/90 font-medium">'구매 의향이 있는 사람'을 정밀하게 찾아내는 것</strong>이 핵심입니다.
                </p>
                <p className="text-[16px] text-cream/60 leading-[2.1] mb-8">
                  무형 서비스는 제품처럼 사진 한 장으로 설득할 수 없습니다. 그래서 퍼널 상단부터 메시지를 걸러, 의향 없는 클릭은 줄이고 전환 가능성이 높은 관객만 남기는 구조를 설계합니다. 서사형 크리에이티브로 '광고 같지 않은 광고'를 만들어, 브랜드 톤을 보존하면서 의향을 만듭니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"].map(t => (
                    <span key={t} className="text-[12px] text-cream/45 bg-cream/5 border border-cream/10 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <Link to="/services/performance" className="inline-flex items-center gap-2 text-[14px] font-medium text-gold hover:text-gold-light transition-colors">
                  자세히 보기 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Service 2 — Branded */}
          <Reveal className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden">
              <div className="bg-cream/4 p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-gold">02 · Branded Content</span>
                <h3 className="font-serif text-[clamp(24px,3vw,34px)] font-light text-cream/90 mt-3 mb-5">브랜디드 콘텐츠</h3>
                <p className="text-[16px] text-cream/60 leading-[2.1] mb-6">
                  강사의 목소리, 공간의 공기, 수강생의 표정 — 무형을 파는 일은 결국 <strong className="text-cream/90 font-medium">감각을 번역하는 일</strong>입니다. 브랜디드 유튜브와 숏폼을 통해 브랜드 고유의 서사를 영상으로 만들고, 24시간 일하는 영업사원을 만듭니다.
                </p>
                <p className="text-[16px] text-cream/60 leading-[2.1] mb-8">
                  기획 · 촬영 · 편집 · 업로드 · 썸네일 · 숏폼 재가공까지 원스톱 대행. 대표님은 촬영에만 참여하시면 됩니다. 조회수 자랑이 아닌, 실제 상담과 매출로 연결되는 채널을 설계합니다. 9년 이상의 영상 제작 경력과 누적 100만+ 구독자를 보유한 파트너 프로덕션과 함께합니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {["브랜디드 유튜브", "숏폼 (Shorts · Reels)", "광고 소재 제작"].map(t => (
                    <span key={t} className="text-[12px] text-cream/45 bg-cream/5 border border-cream/10 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <Link to="/services/branded" className="inline-flex items-center gap-2 text-[14px] font-medium text-gold hover:text-gold-light transition-colors">
                  자세히 보기 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                <img src={brandedVideo} alt="브랜디드 콘텐츠 촬영 현장" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
              </div>
            </div>
          </Reveal>

          {/* Service 3+4+5 */}
          <Reveal className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { num: "03", name: "검색엔진 최적화", sub: "네이버 SEO · 구글 SEO", desc: "광고는 돈을 써서 보여주는 것이고, SEO는 돈을 쓰지 않아도 찾아오게 만드는 것입니다. 네이버 블로그, 스마트스토어, 플레이스, 지식iN까지 네이버 생태계 전체를 활용해 콘텐츠 기반 장기 신뢰를 구축합니다.", img: seoSearch, href: "/services/seo" },
              { num: "04", name: "CRM 마케팅", sub: "카카오 · 이메일 · 문자 자동화", desc: "퍼포먼스 광고가 관객을 데려온다면, CRM은 그들이 떠나지 않도록 붙잡습니다. 리드 수집 → 육성 자동화 → 전환 최적화 → 리텐션까지 4단계 자동화 퍼널을 설계합니다.", img: crmAuto, href: "/services/crm" },
              { num: "05", name: "웹 빌드", sub: "랜딩 · 브랜드 사이트 · 엔터프라이즈", desc: "보여주기 위한 웹이 아닌, 파는 웹. 광고를 클릭한 관객이 처음 만나는 곳을 전환이 일어나도록 설계합니다. 랜딩 페이지부터 브랜드 사이트, 엔터프라이즈급 풀빌드까지.", img: webbuildScreen, href: "/services/webbuild" },
            ].map(s => (
              <Link key={s.num} to={s.href} className="group block rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1200} height={800} />
                </div>
                <div className="bg-cream/4 p-8">
                  <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-gold">{s.num}</span>
                  <h3 className="text-[18px] font-medium text-cream/90 mt-2 mb-2">{s.name}</h3>
                  <p className="text-[13px] text-cream/40 mb-4">{s.sub}</p>
                  <p className="text-[15px] text-cream/60 leading-[2.1]">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] text-gold mt-6 group-hover:translate-x-1 transition-transform">
                    자세히 보기 <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <section id="cases" className="py-28 lg:py-36">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-5">Case Studies</p>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
              짧은 기간, 또렷한 결과.
            </h2>
            <p className="text-[16px] text-t-tertiary mt-5 max-w-[540px] leading-[2.1]">
              무형 서비스 브랜드와 함께한 실제 성과입니다. 긴 보고서 대신 숫자로 증명합니다.
            </p>
          </Reveal>
          <Reveal className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "디지털노마드 하이클래스", cat: "온라인 교육", desc: "카페 회원 7만 명의 커뮤니티를 가진 온라인 교육 브랜드. 퍼포먼스 광고를 통해 업계 평균의 3배 이상인 CTR 3.93%를 달성했습니다.", stats: [{ n: "70,000", u: "+", l: "카페 회원" }, { n: "3.93", u: "%", l: "CTR" }], dark: true },
              { name: "부트스트래퍼", cat: "B2B 지식 서비스", desc: "고단가 B2B 지식 상품을 단 ₩40M 예산으로 수익 구간에 올린 사례입니다. ROAS 500%를 달성하며, 적은 예산으로도 수익성을 증명했습니다.", stats: [{ n: "500", u: "%", l: "ROAS" }, { n: "40", u: "M", l: "집행 금액" }], dark: false },
              { name: "플러스 스피치 학원", cat: "오프라인 교육", desc: "단일 지점에서 시작해, 마케팅을 통해 4개 신규 지점을 오픈하며 매출을 6.6배 성장시켰습니다.", stats: [{ n: "6.6", u: "×", l: "매출 성장" }, { n: "4", u: "+", l: "신규 지점" }], dark: false },
              { name: "라 컴퍼니", cat: "가맹 네트워크", desc: "전국 7개 지점의 가맹 네트워크를 마케팅으로 확장한 프로젝트입니다. 각 지점별 하이퍼로컬 광고와 브랜드 통합 전략을 동시에 운영했습니다.", stats: [{ n: "7", u: "+", l: "전국 지점" }, { n: "전국", u: "", l: "커버리지" }], dark: true },
            ].map((c, i) => (
              <div key={i} className={`p-10 rounded-lg ${c.dark ? "bg-dark" : "bg-card shadow-card"}`}>
                <span className={`text-[12px] font-bold tracking-[0.08em] uppercase ${c.dark ? "text-gold" : "text-t-disabled"}`}>{c.cat}</span>
                <h3 className={`font-serif text-[26px] font-normal mt-4 mb-4 ${c.dark ? "text-cream/90" : "text-t-strong"}`}>{c.name}</h3>
                <p className={`text-[15px] leading-[2.1] mb-7 ${c.dark ? "text-cream/55" : "text-t-secondary"}`}>{c.desc}</p>
                <div className="flex gap-8">
                  {c.stats.map((s, j) => (
                    <div key={j}>
                      <span className={`text-[34px] font-serif font-light tracking-[-0.02em] ${c.dark ? "text-cream/80" : "text-t-strong"}`}>
                        {s.n}<span className={`text-[17px] ml-0.5 ${c.dark ? "text-cream/35" : "text-t-disabled"}`}>{s.u}</span>
                      </span>
                      <span className={`block text-[11px] tracking-[0.08em] uppercase mt-1 ${c.dark ? "text-cream/35" : "text-t-disabled"}`}>{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="py-28 lg:py-36 bg-card">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-5">How We Work</p>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
              어떻게 일하나요?
            </h2>
            <p className="text-[16px] text-t-tertiary mt-5 max-w-[540px] leading-[2.1]">
              계약 전 무료 상담에서 브랜드를 함께 진단하고, 어떤 서비스 조합이 가장 효과적인지 설계합니다. 그리고 빠르게 실행합니다.
            </p>
          </Reveal>
          <Reveal className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { s: "01", t: "브랜드 진단", d: "무형 서비스의 핵심 가치, 기존 마케팅 자산, 경쟁 환경을 분석합니다. 타겟 관객이 누구인지, 어디에 있는지, 어떤 메시지에 반응하는지를 정의합니다." },
              { s: "02", t: "채널 · 퍼널 설계", d: "5가지 서비스 중 최적의 조합을 설계합니다. 예산 배분, KPI, 타임라인을 함께 정합니다. 처음부터 전체 퍼널을 그리고 시작합니다." },
              { s: "03", t: "집행 · 크리에이티브", d: "서사형 광고 소재를 제작하고, A/B 테스트를 반복하며 최적화합니다. 매주 데이터를 리뷰하고, 소재·카피·타겟·랜딩을 지속적으로 튜닝합니다." },
              { s: "04", t: "스케일업 · 확장", d: "검증된 소재와 채널을 기반으로 빠르게 스케일업합니다. 새로운 채널 확장, CRM 연동, 웹 최적화 등 다음 단계를 함께 설계합니다." },
            ].map(p => (
              <div key={p.s} className="border-t-2 border-gold pt-8 pr-8 pb-8">
                <span className="text-[13px] font-display text-gold tracking-[0.1em]">{p.s}</span>
                <h3 className="text-[18px] font-medium text-t-strong mt-4 mb-4">{p.t}</h3>
                <p className="text-[15px] text-t-secondary leading-[2.1]">{p.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── TEAM — with characters ─── */}
      <section className="py-28 lg:py-36">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-5">Our Team</p>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
              만질 수 없는 것을 파는 팀.
            </h2>
          </Reveal>
          <Reveal className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-[160px] h-[200px] rounded-2xl overflow-hidden mb-5">
                <img src={charCurly} alt="PIXELPAGE 팀" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <h3 className="text-[18px] font-medium text-t-strong mb-3">전략 · 기획</h3>
              <p className="text-[15px] text-t-secondary leading-[2.1]">
                무형 서비스만 다뤄온 마케팅 전략가. 브랜드 진단부터 퍼널 설계, 채널 조합까지 전체 마케팅 설계를 담당합니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[160px] h-[200px] rounded-2xl overflow-hidden mb-5">
                <img src={charMale} alt="PIXELPAGE 팀" className="w-full h-full object-cover object-top scale-[1.2] origin-top" loading="lazy" />
              </div>
              <h3 className="text-[18px] font-medium text-t-strong mb-3">퍼포먼스 · 데이터</h3>
              <p className="text-[15px] text-t-secondary leading-[2.1]">
                Meta, Google, 토스 등 멀티 플랫폼 광고 운영과 데이터 분석. 매주 A/B 테스트를 반복하며 전환율을 끌어올립니다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[160px] h-[200px] rounded-2xl overflow-hidden mb-5">
                <img src={charFemale} alt="PIXELPAGE 팀" className="w-full h-full object-cover object-top scale-[1.15] origin-top" loading="lazy" />
              </div>
              <h3 className="text-[18px] font-medium text-t-strong mb-3">크리에이티브 · 웹빌드</h3>
              <p className="text-[15px] text-t-secondary leading-[2.1]">
                서사형 광고 소재 제작, 브랜디드 영상 기획, 전환 최적화 웹사이트 빌드. 감각을 번역하는 크리에이티브를 만듭니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 lg:py-36 bg-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.2em] uppercase text-gold mb-5">Contact</p>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
              한 번 얘기해봐요.
            </h2>
            <p className="text-[16px] text-cream/55 mt-5 max-w-[520px] leading-[2.1] mb-10">
              지금 당장 계약이 목표가 아닙니다. 브랜드를 함께 진단하고, 어떻게 팔 수 있는지 생각해 보는 것부터 시작합니다. 무료 상담에서 브랜드 현황을 분석하고 최적의 마케팅 설계를 제안드립니다.
            </p>
            <a href="mailto:contact@pixelpage.co.kr" className="block font-serif text-[22px] text-cream/75 hover:text-gold transition-colors mb-2">
              contact@pixelpage.co.kr
            </a>
            <p className="text-[12px] text-cream/30 mb-10">보통 24시간 이내 회신드립니다.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[14px] font-bold rounded-md hover:bg-gold-light transition-colors">
              이메일 문의 <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
