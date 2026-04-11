import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import ServicesTabSection from "@/components/ServicesTabSection";
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

      <ServicesTabSection />

      {/* ─── CASES ─── */}
      <section id="cases" className="py-28 lg:py-36 bg-surface-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium text-foreground leading-[1.2] tracking-[-0.02em]">
                짧은 기간,<br />또렷한 결과.
              </h2>
            </div>
            <p className="text-[17px] text-muted-foreground max-w-[360px] leading-[1.9] lg:text-right">
              무형 서비스 브랜드와 함께한 실제 성과입니다.
            </p>
          </Reveal>

          {/* Highlight card */}
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 rounded-xl overflow-hidden border border-border mb-5">
              <div className="bg-foreground p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[13px] text-primary tracking-[0.1em] uppercase">온라인 교육</span>
                  <h3 className="font-serif text-[clamp(28px,3vw,40px)] font-medium text-background mt-3 mb-4">디지털노마드 하이클래스</h3>
                  <p className="text-[17px] text-background/60 leading-[1.9] max-w-[400px]">
                    카페 회원 7만 명의 커뮤니티를 가진 온라인 교육 브랜드. 업계 평균의 3배 이상인 CTR을 달성했습니다.
                  </p>
                </div>
                <div className="flex gap-12 mt-10">
                  <div>
                    <span className="text-[48px] font-serif font-normal text-background tracking-[-0.03em]">70K<span className="text-[18px] text-background/40 ml-1">+</span></span>
                    <span className="block text-[12px] text-background/40 tracking-[0.1em] uppercase mt-1">카페 회원</span>
                  </div>
                  <div>
                    <span className="text-[48px] font-serif font-normal text-primary tracking-[-0.03em]">3.93<span className="text-[18px] text-primary/60 ml-0.5">%</span></span>
                    <span className="block text-[12px] text-background/40 tracking-[0.1em] uppercase mt-1">CTR</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-beige p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-[13px] text-primary tracking-[0.1em] uppercase">B2B 지식 서비스</span>
                  <h3 className="font-serif text-[clamp(28px,3vw,40px)] font-medium text-foreground mt-3 mb-4">부트스트래퍼</h3>
                  <p className="text-[17px] text-muted-foreground leading-[1.9] max-w-[400px]">
                    고단가 B2B 지식 상품을 단 ₩40M 예산으로 ROAS 500%를 달성하며 수익성을 증명했습니다.
                  </p>
                </div>
                <div className="flex gap-12 mt-10">
                  <div>
                    <span className="text-[48px] font-serif font-normal text-foreground tracking-[-0.03em]">500<span className="text-[18px] text-muted-foreground ml-0.5">%</span></span>
                    <span className="block text-[12px] text-muted-foreground tracking-[0.1em] uppercase mt-1">ROAS</span>
                  </div>
                  <div>
                    <span className="text-[48px] font-serif font-normal text-foreground tracking-[-0.03em]">40<span className="text-[18px] text-muted-foreground ml-0.5">M</span></span>
                    <span className="block text-[12px] text-muted-foreground tracking-[0.1em] uppercase mt-1">집행 금액</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bottom two cards */}
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-border p-10 hover:border-foreground/20 transition-colors">
              <span className="text-[13px] text-primary tracking-[0.1em] uppercase">오프라인 교육</span>
              <h3 className="font-serif text-[28px] font-medium text-foreground mt-3 mb-3">플러스 스피치 학원</h3>
              <p className="text-[16px] text-muted-foreground leading-[1.9] mb-8">
                단일 지점에서 시작해, 4개 신규 지점을 오픈하며 매출을 6.6배 성장시켰습니다.
              </p>
              <div className="flex gap-10 pt-6 border-t border-border">
                <div>
                  <span className="text-[40px] font-serif font-normal text-foreground tracking-[-0.02em]">6.6<span className="text-[16px] text-muted-foreground ml-0.5">×</span></span>
                  <span className="block text-[12px] text-muted-foreground tracking-[0.08em] uppercase mt-1">매출 성장</span>
                </div>
                <div>
                  <span className="text-[40px] font-serif font-normal text-foreground tracking-[-0.02em]">4<span className="text-[16px] text-muted-foreground ml-0.5">+</span></span>
                  <span className="block text-[12px] text-muted-foreground tracking-[0.08em] uppercase mt-1">신규 지점</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border p-10 hover:border-foreground/20 transition-colors">
              <span className="text-[13px] text-primary tracking-[0.1em] uppercase">가맹 네트워크</span>
              <h3 className="font-serif text-[28px] font-medium text-foreground mt-3 mb-3">라 컴퍼니</h3>
              <p className="text-[16px] text-muted-foreground leading-[1.9] mb-8">
                전국 7개 지점의 가맹 네트워크를 마케팅으로 확장한 프로젝트입니다.
              </p>
              <div className="flex gap-10 pt-6 border-t border-border">
                <div>
                  <span className="text-[40px] font-serif font-normal text-foreground tracking-[-0.02em]">7<span className="text-[16px] text-muted-foreground ml-0.5">+</span></span>
                  <span className="block text-[12px] text-muted-foreground tracking-[0.08em] uppercase mt-1">전국 지점</span>
                </div>
                <div>
                  <span className="text-[40px] font-serif font-normal text-foreground tracking-[-0.02em]">전국</span>
                  <span className="block text-[12px] text-muted-foreground tracking-[0.08em] uppercase mt-1">커버리지</span>
                </div>
              </div>
            </div>
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
