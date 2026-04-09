import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const WebBuildPage = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Web Build</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/90 leading-[1.15] tracking-[-0.02em] mb-4">
            웹 빌드
          </h1>
          <p className="font-display italic text-[clamp(18px,2.5vw,28px)] text-gold/80">보여주기 위한 웹이 아닌, 파는 웹.</p>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[14px] text-cream/50 leading-[1.9] mb-8">
              광고를 클릭한 관객이 처음 만나는 것은 웹사이트입니다. 전환이 일어나도록 설계된 <strong className="text-cream/80 font-medium">파는 웹을 빌드합니다</strong>.
            </p>
            {["전환 최적화 랜딩 페이지", "브랜드 사이트 · 포트폴리오 웹", "강의 · 코호트 상품 판매 페이지", "픽셀 · CRM 연동 풀스택 빌드"].map(li => (
              <p key={li} className="text-[13px] text-cream/40 pl-4 py-1.5 border-l border-gold/30 mb-2">{li}</p>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-cream/4 border border-cream/8 rounded-lg p-6">
              <h4 className="text-[14px] font-medium text-cream/70 mb-1.5">Landing Page</h4>
              <p className="text-[12px] text-cream/35 leading-[1.7]">단일 전환 목적의 고집중 랜딩. 반응형 · 모바일 퍼스트 · 픽셀 연동.</p>
            </div>
            <div className="bg-cream/4 border-2 border-gold/40 rounded-lg p-6 relative">
              <span className="absolute -top-2.5 left-5 text-[9px] font-bold bg-gold text-primary-foreground px-2.5 py-0.5 rounded tracking-[0.04em]">Most Popular</span>
              <h4 className="text-[14px] font-medium text-cream/80 mb-1.5">Brand Website</h4>
              <p className="text-[12px] text-cream/40 leading-[1.7]">브랜드 전체를 아우르는 웹 경험. CMS · 블로그 · CRM · 결제 연동.</p>
            </div>
            <div className="bg-cream/4 border border-cream/8 rounded-lg p-6">
              <h4 className="text-[14px] font-medium text-cream/70 mb-1.5">Enterprise</h4>
              <p className="text-[12px] text-cream/35 leading-[1.7]">가맹·B2B·다지점 사업을 위한 대형 풀 빌드. 회원 · 예약 · SEO 포함.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Enterprise detail — cream for rhythm */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Enterprise Grade</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            엔터프라이즈급 웹 빌드
          </h2>
          <p className="text-[14px] text-t-tertiary mt-3 max-w-[480px] leading-[1.8]">
            대형 플랫폼 수준의 풀빌드를 제공합니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: "멀티 페이지 설계", d: "서비스 소개, 요금제, 고객지원, 블로그 등 완전한 구조" },
            { t: "회원 · 결제 시스템", d: "로그인/회원가입, PG 연동, 구독 결제 구현" },
            { t: "AI 마케팅 자동화", d: "AI 기반 마케팅 도구, 자동 상품 추천, 대시보드" },
            { t: "반응형 · 퍼포먼스", d: "Core Web Vitals 통과, 모든 디바이스 최적화" },
            { t: "SEO 구조 설계", d: "메타 태그, 스키마 마크업, 사이트맵 세팅" },
            { t: "유지보수 · 확장", d: "운영 후 업데이트, 기능 확장, 트래픽 대응" },
          ].map(f => (
            <div key={f.t} className="bg-card rounded-lg shadow-card p-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <h4 className="text-[14px] font-medium text-t-strong mb-1.5">{f.t}</h4>
              <p className="text-[12px] text-t-secondary leading-[1.7]">{f.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-dark text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-6">전환되는 웹사이트가 필요하신가요?</h2>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default WebBuildPage;
