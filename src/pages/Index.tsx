import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import ServicesTabSection from "@/components/ServicesTabSection";
import PhilosophySection from "@/components/PhilosophySection";
import charMale from "@/assets/char-male.png";
import charFemale from "@/assets/char-female.png";
import charCurly from "@/assets/char-curly.png";
import iconOk from "@/assets/icon-ok.svg";
import iconRocket from "@/assets/icon-rocket.svg";
import iconFileForm from "@/assets/icon-file-form.svg";
import iconCloud from "@/assets/icon-cloud.svg";
import iconAt from "@/assets/icon-at.svg";
import iconTrophy from "@/assets/icon-trophy.svg";


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
        {/* Film grain overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.105] mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        <div className="relative z-10 max-w-[1240px] mx-auto w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[15px] tracking-[0.2em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-1">
                교육 · 지식 · 경험 · 문화
              </p>
              <h1 className="font-serif text-[clamp(52px,7.5vw,96px)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground mb-7 opacity-0 animate-fade-up stagger-2">
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
                <span className="absolute -top-2 -left-8 z-10 bg-primary/20 text-primary text-[13px] font-sans font-semibold px-4 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap shadow-sm">Meta Business Partner</span>
              </div>
              <div className="absolute bottom-0 right-12 animate-float stagger-4">
                <div className="blob-shape-2 w-[240px] h-[260px] overflow-hidden shadow-card">
                  <img src={charFemale} alt="" className="w-full h-full object-cover scale-110" />
                </div>
                <span className="absolute -bottom-2 right-[-20px] z-10 bg-primary/20 text-primary text-[13px] font-sans font-semibold px-4 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap shadow-sm">Marketing Design</span>
              </div>
              <div className="absolute top-[28%] left-0 animate-float stagger-6">
                <div className="blob-shape-3 w-[200px] h-[220px] overflow-hidden shadow-card">
                  <img src={charCurly} alt="" className="w-full h-full object-cover scale-110" />
                </div>
                <span className="absolute -bottom-2 -left-4 z-10 bg-primary/20 text-primary text-[13px] font-sans font-semibold px-4 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap shadow-sm">ROAS 500%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhilosophySection />

      <ServicesTabSection />

      {/* ─── CASES ─── */}
      <section id="cases" className="py-28 lg:py-36 bg-surface-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <Reveal className="text-center mb-16">
            <div>
              <img src={iconTrophy} alt="Cases" className="w-10 h-10 mb-5 mx-auto" />
              <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em]">
                짧은 기간,<br />또렷한 결과.
              </h2>
            </div>
            <p className="text-[17px] text-muted-foreground max-w-[480px] mx-auto leading-[1.9] mt-4">
              무형 서비스 브랜드와 함께한 실제 성과입니다.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { cat: "온라인 교육", name: "디지털노마드 하이클래스", desc: "카페 회원 7만 명의 커뮤니티를 가진 온라인 교육 브랜드. 업계 평균의 3배 이상인 CTR을 달성했습니다.", stats: [{ val: "70K+", label: "카페 회원" }, { val: "3.93%", label: "CTR" }] },
              { cat: "B2B 지식 서비스", name: "부트스트래퍼", desc: "고단가 B2B 지식 상품을 단 ₩40M 예산으로 ROAS 500%를 달성하며 수익성을 증명했습니다.", stats: [{ val: "500%", label: "ROAS" }, { val: "40M", label: "집행 금액" }] },
              { cat: "오프라인 교육", name: "플러스 스피치 학원", desc: "단일 지점에서 시작해, 4개 신규 지점을 오픈하며 매출을 6.6배 성장시켰습니다.", stats: [{ val: "6.6×", label: "매출 성장" }, { val: "4+", label: "신규 지점" }] },
              { cat: "가맹 네트워크", name: "라 컴퍼니", desc: "전국 7개 지점의 가맹 네트워크를 마케팅으로 확장한 프로젝트입니다.", stats: [{ val: "7+", label: "전국 지점" }, { val: "전국", label: "커버리지" }] },
            ].map((c) => (
              <div key={c.name} className="rounded-xl border border-border p-10 hover:border-foreground/20 transition-colors">
                <span className="text-[13px] text-primary tracking-[0.1em] uppercase">{c.cat}</span>
                <h3 className="font-serif text-[28px] font-medium text-foreground mt-3 mb-3">{c.name}</h3>
                <p className="text-[16px] text-muted-foreground leading-[1.9] mb-8">{c.desc}</p>
                <div className="flex gap-10 pt-6 border-t border-border">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <span className="text-[40px] font-serif font-normal text-foreground tracking-[-0.02em]">{s.val}</span>
                      <span className="block text-[12px] text-muted-foreground tracking-[0.08em] uppercase mt-1">{s.label}</span>
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
          <Reveal className="text-center">
            <img src={iconCloud} alt="Process" className="w-10 h-10 mb-5 mx-auto" />
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em]">
              어떻게 일하나요?
            </h2>
            <p className="text-[19px] text-muted-foreground mt-4 max-w-[480px] mx-auto leading-[1.9]">
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
            <img src={iconAt} alt="Contact" className="w-10 h-10 mb-5" />
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em] mb-5">
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
