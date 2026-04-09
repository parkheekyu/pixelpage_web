import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import charMale from "@/assets/char-male.png";
import charFemale from "@/assets/char-female.jpeg";
import webbuildScreen from "@/assets/webbuild-screen.jpg";

const WebBuildPage = () => (
  <div className="pt-24">
    {/* Hero with photo bg */}
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={webbuildScreen} alt="웹 빌드" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-dark/80" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Web Build</p>
              <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/95 leading-[1.15] tracking-[-0.02em] mb-4">
                웹 빌드
              </h1>
              <p className="text-[18px] text-cream/60 leading-[1.7] max-w-[440px] mb-8">
                보여주기 위한 웹이 아닌, <strong className="text-cream/90 font-medium">파는 웹</strong>. 광고를 클릭한 관객이 처음 만나는 곳을 전환이 일어나도록 설계합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["전환 최적화 랜딩 페이지", "브랜드 사이트", "엔터프라이즈 풀빌드"].map(t => (
                  <span key={t} className="text-[11px] text-cream/50 bg-cream/6 border border-cream/10 px-4 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="flex items-end">
                <div className="w-[130px] lg:w-[150px] rounded-2xl overflow-hidden shadow-lg -mr-5 relative z-10">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={charMale} alt="웹 빌드 캐릭터" className="w-full h-full object-cover object-top scale-[1.3] origin-top" />
                  </div>
                </div>
                <div className="w-[130px] lg:w-[150px] rounded-2xl overflow-hidden shadow-lg relative z-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={charFemale} alt="웹 빌드 캐릭터" className="w-full h-full object-cover object-top scale-[1.25] origin-top" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 3 Tier cards */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Service Tiers</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            필요에 맞는 3가지 빌드
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
            <h4 className="text-[16px] font-medium text-t-strong mb-2">Landing Page</h4>
            <p className="text-[13px] text-t-secondary leading-[1.7] mb-4">단일 전환 목적의 고집중 랜딩 페이지. 반응형 · 모바일 퍼스트 · 픽셀 연동.</p>
            {["광고 연동 전환 최적화", "모바일 퍼스트 반응형", "Meta · Google 픽셀 설치", "CTA · 폼 설계"].map(li => (
              <p key={li} className="text-[12px] text-t-tertiary pl-3 py-1 border-l border-gold/30 mb-1">{li}</p>
            ))}
          </div>
          <div className="bg-card rounded-lg shadow-card p-7 border-2 border-gold/30 relative hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
            <span className="absolute -top-2.5 left-5 text-[9px] font-bold bg-gold text-primary-foreground px-2.5 py-0.5 rounded tracking-[0.04em]">Most Popular</span>
            <h4 className="text-[16px] font-medium text-t-strong mb-2">Brand Website</h4>
            <p className="text-[13px] text-t-secondary leading-[1.7] mb-4">브랜드 전체를 아우르는 웹 경험. CMS · 블로그 · CRM · 결제 연동.</p>
            {["멀티 페이지 브랜드 사이트", "블로그 · CMS 연동", "CRM · 결제 시스템 통합", "SEO 구조 설계"].map(li => (
              <p key={li} className="text-[12px] text-t-tertiary pl-3 py-1 border-l border-gold/30 mb-1">{li}</p>
            ))}
          </div>
          <div className="bg-card rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
            <h4 className="text-[16px] font-medium text-t-strong mb-2">Enterprise</h4>
            <p className="text-[13px] text-t-secondary leading-[1.7] mb-4">가맹·B2B·다지점 사업을 위한 대형 풀 빌드. 회원 · 예약 · SEO 포함.</p>
            {["회원 · 로그인 시스템", "예약 · 결제 풀스택", "AI 마케팅 자동화", "유지보수 · 확장 지원"].map(li => (
              <p key={li} className="text-[12px] text-t-tertiary pl-3 py-1 border-l border-gold/30 mb-1">{li}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Enterprise detail */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Enterprise Grade</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            엔터프라이즈급 웹 빌드
          </h2>
          <p className="text-[14px] text-cream/40 mt-3 max-w-[480px] leading-[1.8]">
            대형 플랫폼 수준의 풀빌드를 제공합니다. 마케팅과 연동되는 웹을 빌드합니다.
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
            <div key={f.t} className="bg-cream/4 border border-cream/8 rounded-lg p-5 hover:border-gold/20 transition-colors">
              <h4 className="text-[14px] font-medium text-cream/80 mb-1.5">{f.t}</h4>
              <p className="text-[12px] text-cream/40 leading-[1.7]">{f.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-t-strong mb-3">전환되는 웹사이트가 필요하신가요?</h2>
          <p className="text-[13px] text-t-tertiary mb-6">광고와 연동되는 파는 웹을 만들어 드립니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default WebBuildPage;
