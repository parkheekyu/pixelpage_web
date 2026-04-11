import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import illustPerformance from "@/assets/illust-performance.png";
import illustBranded from "@/assets/illust-branded.png";
import illustSeo from "@/assets/illust-seo.png";
import illustCrm from "@/assets/illust-crm.png";
import illustWeb from "@/assets/illust-web.png";
import charMale from "@/assets/char-male.png";
import charFemale from "@/assets/char-female.png";
import charCurly from "@/assets/char-curly.png";

const Index = () => {
  return (
    <div>
      <PageMeta
        title="무형의 가치를 파는 브랜드 전담 에이전시"
        description="교육·지식·경험·문화 — 만질 수 없는 가치를 파는 브랜드의 전담 마케팅 파트너. 퍼포먼스 광고, 브랜디드 콘텐츠, SEO, CRM 자동화, 웹 빌드."
        path="/"
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-background overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[15px] tracking-[0.2em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-1">
                교육 · 지식 · 경험 · 문화
              </p>
              <h1 className="font-serif text-[clamp(52px,7.5vw,96px)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground mb-7 opacity-0 animate-fade-up stagger-2">
                만질 수 없는 것을<br /><span className="text-primary">파는 일.</span>
              </h1>
              <p className="text-[20px] text-muted-foreground leading-[1.85] max-w-[480px] mb-10 opacity-0 animate-fade-up stagger-3">
                무형의 가치를 파는 브랜드의 전담 마케팅 파트너.<br />
                짧은 사이클 안에, 관객이 '한 번 경험해 보고 싶다'고
                느끼는 그 순간까지 설계합니다.
              </p>
              <div className="flex items-center gap-4 mb-14 opacity-0 animate-fade-up stagger-4">
                <Link to="/#contact" className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-primary-foreground text-[16px] font-medium tracking-[0.02em] hover:bg-gold-light transition-all rounded-md">
                  무료 상담 신청
                </Link>
                <Link to="/#cases" className="inline-flex items-center px-8 py-4 border border-border text-[16px] text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors rounded-md">
                  성과 보기
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center relative h-[520px]">
              <div className="absolute top-0 right-4 animate-float stagger-2">
                <div className="blob-shape-1 w-[220px] h-[220px] overflow-hidden shadow-card">
                  <img src={charMale} alt="" className="w-full h-full object-cover scale-110 object-[center_20%]" />
                </div>
              </div>
              <div className="absolute bottom-0 right-12 animate-float stagger-4">
                <div className="blob-shape-2 w-[240px] h-[260px] overflow-hidden shadow-card">
                  <img src={charFemale} alt="" className="w-full h-full object-cover scale-110" />
                </div>
              </div>
              <div className="absolute top-[28%] left-0 animate-float stagger-6">
                <div className="blob-shape-3 w-[200px] h-[220px] overflow-hidden shadow-card">
                  <img src={charCurly} alt="" className="w-full h-full object-cover scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-28 lg:py-36 bg-surface-white border-t border-border">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[14px] tracking-[0.2em] uppercase text-muted-foreground mb-5">Philosophy</p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium text-foreground leading-[1.2] tracking-[-0.02em] max-w-[600px]">
              일반 마케팅 회사와는<br />조금 다릅니다.
            </h2>
          </Reveal>
          <Reveal className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[19px] text-muted-foreground leading-[2] mb-5">
                교육 · 지식 · 체험 · 문화 — 무형의 가치를 파는 브랜드는 '공급의 질'만큼
                <strong className="text-foreground font-medium"> '의향을 가진 관객과 어떻게 만나는가'가 전부입니다.</strong>
              </p>
              <p className="text-[19px] text-muted-foreground leading-[2]">
                PIXELPAGE는 이 낯선 시장에서만 일해 왔습니다. 상품이 아니라 서사, 숫자가 아니라 태도를 다루는 브랜드들의 전담 파트너입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0">
              {[
                { num: "01", title: "Intangible First", body: "무형 서비스 전담. 제품 기반 이커머스와 완전히 다른 의사결정 구조를 이해합니다." },
                { num: "02", title: "Narrative Creative", body: "감각을 번역하는 크리에이티브. 브랜드 고유의 톤을 해치지 않는 서사를 설계합니다." },
                { num: "03", title: "Short-Cycle Wins", body: "짧은 사이클 안에 유의미한 결과. 단기 집행만으로 다음 단계로 넘어갑니다." },
                { num: "04", title: "Category Leader", body: "함께한 브랜드들은 각 카테고리에서 상위권으로 올라섰습니다." },
              ].map(p => (
                <div key={p.num} className="border-t border-border pt-6 pr-6 pb-8">
                  <span className="text-[13px] text-primary/70 tracking-[0.1em]">{p.num}</span>
                  <h3 className="text-[16px] font-medium text-foreground mt-3 mb-2">{p.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.9]">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-28 lg:py-36 bg-surface-beige">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[14px] tracking-[0.2em] uppercase text-muted-foreground mb-5">Services</p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium text-foreground leading-[1.2] tracking-[-0.02em]">
              5가지 서비스,<br />하나의 마케팅 설계.
            </h2>
            <p className="text-[19px] text-muted-foreground mt-4 max-w-[480px] leading-[1.9]">
              각각 독립적으로 강하고, 함께할 때 가장 강력합니다.
            </p>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              {
                num: "01", name: "퍼포먼스 마케팅", sub: "Performance Marketing",
                desc: "Meta · Google · 토스 · 당근 · TikTok — 주요 광고 플랫폼에서 '구매 의향이 있는 사람'을 정밀하게 찾아냅니다.",
                img: illustPerformance, href: "/services/performance",
                tags: ["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"]
              },
              {
                num: "02", name: "브랜디드 콘텐츠", sub: "Branded Content",
                desc: "무형을 파는 일은 결국 감각을 번역하는 일입니다. 브랜디드 유튜브와 숏폼으로 24시간 일하는 영업사원을 만듭니다.",
                img: illustBranded, href: "/services/branded",
                tags: ["브랜디드 유튜브", "숏폼", "광고 소재 제작"]
              },
              {
                num: "03", name: "검색엔진 최적화", sub: "SEO",
                desc: "SEO는 돈을 쓰지 않아도 찾아오게 만드는 것입니다. 네이버 생태계 전체를 활용해 콘텐츠 기반 장기 신뢰를 구축합니다.",
                img: illustSeo, href: "/services/seo",
                tags: ["네이버 SEO", "구글 SEO"]
              },
              {
                num: "04", name: "CRM 마케팅", sub: "CRM Automation",
                desc: "퍼포먼스 광고가 관객을 데려온다면, CRM은 그들이 떠나지 않도록 붙잡습니다. 4단계 자동화 퍼널을 설계합니다.",
                img: illustCrm, href: "/services/crm",
                tags: ["카카오 알림톡", "이메일 시퀀스", "문자 자동화"]
              },
              {
                num: "05", name: "웹 빌드", sub: "Web Build",
                desc: "보여주기 위한 웹이 아닌, 파는 웹. 전환이 일어나도록 설계합니다.",
                img: illustWeb, href: "/services/webbuild",
                tags: ["랜딩 페이지", "브랜드 사이트", "엔터프라이즈"]
              },
            ].map((s, i) => (
              <Reveal key={s.num}>
                <Link to={s.href} className={`group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10 border-t border-border transition-colors ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <span className="text-[14px] tracking-[0.15em] uppercase text-muted-foreground">{s.sub}</span>
                    <h3 className="font-serif text-[clamp(32px,3.5vw,48px)] font-medium text-foreground mt-2 mb-4">{s.name}</h3>
                    <p className="text-[18px] text-muted-foreground leading-[1.9] mb-5 max-w-[440px]">{s.desc}</p>
                    <div className="flex flex-wrap gap-2.5 mb-5">
                      {s.tags.map(t => (
                        <span key={t} className="text-[15px] text-foreground/80 bg-surface-beige border border-border px-5 py-2 rounded-full">{t}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary group-hover:translate-x-1 transition-transform">
                      자세히 보기 <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className={`flex justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img src={s.img} alt={s.name} className="w-[280px] lg:w-[340px] group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={640} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASES ─── */}
      <section id="cases" className="py-28 lg:py-36 bg-surface-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[14px] tracking-[0.2em] uppercase text-muted-foreground mb-5">Case Studies</p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium text-foreground leading-[1.2] tracking-[-0.02em]">
              짧은 기간, 또렷한 결과.
            </h2>
            <p className="text-[19px] text-muted-foreground mt-4 max-w-[440px] leading-[1.9]">
              무형 서비스 브랜드와 함께한 실제 성과입니다.
            </p>
          </Reveal>
          <Reveal className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "디지털노마드 하이클래스", cat: "온라인 교육", desc: "카페 회원 7만 명의 커뮤니티를 가진 온라인 교육 브랜드. 업계 평균의 3배 이상인 CTR 3.93%를 달성했습니다.", stats: [{ n: "70,000", u: "+", l: "카페 회원" }, { n: "3.93", u: "%", l: "CTR" }] },
              { name: "부트스트래퍼", cat: "B2B 지식 서비스", desc: "고단가 B2B 지식 상품을 단 ₩40M 예산으로 ROAS 500%를 달성하며 수익성을 증명했습니다.", stats: [{ n: "500", u: "%", l: "ROAS" }, { n: "40", u: "M", l: "집행 금액" }] },
              { name: "플러스 스피치 학원", cat: "오프라인 교육", desc: "단일 지점에서 시작해, 4개 신규 지점을 오픈하며 매출을 6.6배 성장시켰습니다.", stats: [{ n: "6.6", u: "×", l: "매출 성장" }, { n: "4", u: "+", l: "신규 지점" }] },
              { name: "라 컴퍼니", cat: "가맹 네트워크", desc: "전국 7개 지점의 가맹 네트워크를 마케팅으로 확장한 프로젝트입니다.", stats: [{ n: "7", u: "+", l: "전국 지점" }, { n: "전국", u: "", l: "커버리지" }] },
            ].map((c, i) => (
              <div key={i} className="border border-border rounded-lg p-9 hover:border-foreground/20 transition-colors">
                <span className="text-[13px] tracking-[0.08em] uppercase text-primary/70">{c.cat}</span>
                <h3 className="font-serif text-[32px] font-medium text-foreground mt-2 mb-3">{c.name}</h3>
                <p className="text-[17px] text-muted-foreground leading-[1.9] mb-7">{c.desc}</p>
                <div className="flex gap-10 pt-5 border-t border-border">
                  {c.stats.map((s, j) => (
                    <div key={j}>
                      <span className="text-[36px] font-serif font-normal text-foreground tracking-[-0.02em]">
                        {s.n}<span className="text-[16px] text-muted-foreground ml-0.5">{s.u}</span>
                      </span>
                      <span className="block text-[12px] text-muted-foreground tracking-[0.08em] uppercase mt-1">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[14px] tracking-[0.2em] uppercase text-muted-foreground mb-5">Process</p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium text-foreground leading-[1.2] tracking-[-0.02em]">
              어떻게 일하나요?
            </h2>
            <p className="text-[19px] text-muted-foreground mt-4 max-w-[480px] leading-[1.9]">
              계약 전 무료 상담에서 브랜드를 함께 진단하고, 최적의 서비스 조합을 설계합니다.
            </p>
          </Reveal>
          <Reveal className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { s: "01", t: "브랜드 진단", d: "무형 서비스의 핵심 가치, 기존 마케팅 자산, 경쟁 환경을 분석합니다." },
              { s: "02", t: "채널 · 퍼널 설계", d: "5가지 서비스 중 최적의 조합을 설계합니다. 예산 배분, KPI, 타임라인을 함께 정합니다." },
              { s: "03", t: "집행 · 크리에이티브", d: "서사형 광고 소재를 제작하고, A/B 테스트를 반복하며 최적화합니다." },
              { s: "04", t: "스케일업 · 확장", d: "검증된 소재와 채널을 기반으로 빠르게 스케일업합니다." },
            ].map(p => (
              <div key={p.s} className="border-t border-border pt-7 pr-6 pb-7">
                <span className="text-[13px] text-primary tracking-[0.1em]">{p.s}</span>
                <h3 className="text-[19px] font-medium text-foreground mt-3 mb-3">{p.t}</h3>
                <p className="text-[17px] text-muted-foreground leading-[1.9]">{p.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 lg:py-36 bg-surface-beige">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="text-[14px] tracking-[0.2em] uppercase text-muted-foreground mb-5">Contact</p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium text-foreground leading-[1.2] tracking-[-0.02em] mb-5">
              한 번 얘기해봐요.
            </h2>
            <p className="text-[19px] text-muted-foreground max-w-[480px] leading-[1.9] mb-10">
              지금 당장 계약이 목표가 아닙니다. 브랜드를 함께 진단하고, 어떻게 팔 수 있는지 생각해 보는 것부터 시작합니다.
            </p>
            <a href="mailto:contact@pixelpage.co.kr" className="block font-serif text-[30px] font-medium text-foreground/80 hover:text-primary transition-colors mb-2">
              contact@pixelpage.co.kr
            </a>
            <p className="text-[14px] text-muted-foreground mb-8">보통 24시간 이내 회신드립니다.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-primary-foreground text-[16px] font-medium tracking-[0.02em] hover:bg-gold-light transition-all rounded-md">
              이메일 문의 <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
