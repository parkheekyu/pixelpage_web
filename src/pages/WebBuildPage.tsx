import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import charMale from "@/assets/char-male.png";
import charFemale from "@/assets/char-female.jpeg";
import webbuildScreen from "@/assets/webbuild-screen.jpg";
import charCurly from "@/assets/char-curly.png";

const WebBuildPage = () => (
  <div className="pt-24">
    {/* Hero */}
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
              <p className="text-[18px] text-cream/60 leading-[1.8] max-w-[480px] mb-8">
                보여주기 위한 웹이 아닌, <strong className="text-cream/90 font-medium">파는 웹</strong>. 광고를 클릭한 관객이 처음 만나는 곳을 전환이 일어나도록 설계합니다. 마케팅과 연동되는 전환 최적화 웹사이트를 빌드합니다.
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
                    <img src={charMale} alt="웹 빌드" className="w-full h-full object-cover object-top scale-[1.3] origin-top" />
                  </div>
                </div>
                <div className="w-[130px] lg:w-[150px] rounded-2xl overflow-hidden shadow-lg relative z-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={charFemale} alt="웹 빌드" className="w-full h-full object-cover object-top scale-[1.25] origin-top" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Why web build */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">왜 중요한가요?</p>
              <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] mb-8">
                광고비의 절반은<br />웹사이트에서 낭비됩니다.
              </h2>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                아무리 좋은 광고를 만들어도, 클릭 후 도착하는 웹사이트가 형편없으면 전환이 일어나지 않습니다. 로딩이 느리거나, 모바일에서 깨지거나, CTA(행동유도)가 명확하지 않거나, 디자인이 브랜드와 맞지 않으면 — 광고비의 절반은 웹사이트에서 낭비되고 있는 겁니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                PIXELPAGE의 웹 빌드는 단순한 '예쁜 사이트'를 만드는 게 아닙니다. <strong className="text-t-strong font-medium">광고 → 랜딩 → 상담 신청(또는 구매)까지의 전환 퍼널을 설계</strong>하고, 그에 맞게 웹사이트를 빌드합니다. Meta/Google 픽셀을 설치해 광고 최적화 데이터를 수집하고, CRM과 연동해 리드를 자동으로 수집합니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2]">
                랜딩 페이지 1장부터, 브랜드 전체를 아우르는 멀티 페이지 사이트, 가맹·B2B를 위한 엔터프라이즈급 풀빌드까지. 필요에 맞는 3가지 빌드 옵션을 제공합니다. 모든 빌드에 반응형(모바일 퍼스트), SEO 기본 설정, 픽셀 연동이 포함됩니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <img src={charCurly} alt="PIXELPAGE" className="w-[160px] rounded-xl animate-float sticky top-24" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 3 Tier cards */}
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Service Tiers</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            필요에 맞는 3가지 빌드
          </h2>
          <p className="text-[14px] text-t-secondary mt-3 max-w-[520px] leading-[1.9]">
            작은 랜딩 페이지부터 대형 플랫폼까지, 브랜드 상황에 맞는 빌드를 선택하세요.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
            <h4 className="text-[16px] font-medium text-t-strong mb-3">Landing Page</h4>
            <p className="text-[13px] text-t-secondary leading-[1.8] mb-5">
              단일 전환 목적의 고집중 랜딩 페이지입니다. 광고를 클릭한 사람이 도착해서 '상담 신청' 또는 '구매'라는 하나의 행동을 하도록 설계합니다. 불필요한 요소를 제거하고, 전환에 집중하는 구조입니다.
            </p>
            {["광고 연동 전환 최적화 설계", "모바일 퍼스트 반응형", "Meta · Google 픽셀 설치 · 연동", "CTA · 폼 · 전화 버튼 설계", "A/B 테스트용 다중 버전", "빠른 로딩 (3초 이내)"].map(li => (
              <p key={li} className="text-[12px] text-t-tertiary pl-3 py-1 border-l border-gold/30 mb-1">{li}</p>
            ))}
          </div>
          <div className="bg-background rounded-lg shadow-card p-7 border-2 border-gold/30 relative hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
            <span className="absolute -top-2.5 left-5 text-[9px] font-bold bg-gold text-primary-foreground px-2.5 py-0.5 rounded tracking-[0.04em]">Most Popular</span>
            <h4 className="text-[16px] font-medium text-t-strong mb-3">Brand Website</h4>
            <p className="text-[13px] text-t-secondary leading-[1.8] mb-5">
              브랜드 전체를 아우르는 웹 경험입니다. 서비스 소개, 후기, 블로그, FAQ, 상담 신청 등 멀티 페이지로 브랜드의 전체 스토리를 전달합니다. CMS · 블로그 · CRM · 결제까지 연동합니다.
            </p>
            {["멀티 페이지 브랜드 사이트", "블로그 · CMS 연동", "CRM · 리드 수집 자동화", "결제 시스템 통합 (PG)", "SEO 기본 구조 설계", "관리자 페이지 · 콘텐츠 관리"].map(li => (
              <p key={li} className="text-[12px] text-t-tertiary pl-3 py-1 border-l border-gold/30 mb-1">{li}</p>
            ))}
          </div>
          <div className="bg-background rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
            <h4 className="text-[16px] font-medium text-t-strong mb-3">Enterprise</h4>
            <p className="text-[13px] text-t-secondary leading-[1.8] mb-5">
              가맹 · B2B · 다지점 사업을 위한 대형 풀 빌드입니다. 회원 시스템, 예약 · 결제, AI 자동화, 대시보드 등 대형 플랫폼 수준의 기능을 구현합니다. 유지보수와 기능 확장도 지원합니다.
            </p>
            {["회원 · 로그인 시스템", "예약 · 결제 풀스택 구현", "AI 마케팅 자동화 연동", "관리자 대시보드", "유지보수 · 기능 확장", "트래픽 · 보안 대응"].map(li => (
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
            엔터프라이즈급 웹 빌드 상세
          </h2>
          <p className="text-[14px] text-cream/40 mt-3 max-w-[520px] leading-[1.9]">
            대형 플랫폼 수준의 풀빌드를 제공합니다. 기획 단계부터 마케팅 연동을 고려해 설계하므로, 광고 · CRM · SEO와 자연스럽게 연결됩니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: "멀티 페이지 설계", d: "서비스 소개, 요금제, 고객후기, FAQ, 블로그, 채용 등 완전한 사이트 구조를 설계합니다. 사용자 동선을 분석해 전환 최적화된 페이지 흐름을 만듭니다." },
            { t: "회원 · 결제 시스템", d: "소셜 로그인, 이메일 회원가입, 비밀번호 찾기 등 회원 시스템을 구현합니다. PG사 연동, 구독 결제, 환불 처리 등 결제 전 과정을 자동화합니다." },
            { t: "AI 마케팅 자동화", d: "AI 기반 상품 추천, 챗봇 상담, 자동 이메일 발송, 마케팅 대시보드 등 AI를 활용한 마케팅 자동화 기능을 구현합니다." },
            { t: "반응형 · 퍼포먼스", d: "Core Web Vitals를 통과하는 빠른 로딩 속도, 모든 디바이스에서 완벽한 반응형 디자인. 데스크톱, 태블릿, 모바일 모두 최적화합니다." },
            { t: "SEO 구조 설계", d: "메타 태그, 오픈그래프, 스키마 마크업(JSON-LD), XML 사이트맵, robots.txt 등 검색엔진 최적화 기본 구조를 완벽하게 세팅합니다." },
            { t: "유지보수 · 확장", d: "런칭 후 지속적인 업데이트, 신규 기능 추가, 트래픽 증가 대응, 보안 업데이트 등 장기 유지보수를 지원합니다." },
          ].map(f => (
            <div key={f.t} className="bg-cream/4 border border-cream/8 rounded-lg p-6 hover:border-gold/20 transition-colors">
              <h4 className="text-[14px] font-medium text-cream/80 mb-2">{f.t}</h4>
              <p className="text-[13px] text-cream/45 leading-[1.9]">{f.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* What's included */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">모든 빌드에 포함</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            기본 포함 사항
          </h2>
          <p className="text-[14px] text-t-secondary mt-3 max-w-[520px] leading-[1.9]">
            Landing Page, Brand Website, Enterprise 모든 빌드 옵션에 아래 항목이 기본 포함됩니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { t: "모바일 퍼스트 반응형 디자인", d: "유입의 70% 이상이 모바일입니다. 모바일을 먼저 설계하고, 데스크톱으로 확장하는 모바일 퍼스트 접근을 취합니다. 모든 디바이스에서 완벽한 레이아웃을 보장합니다." },
            { t: "Meta · Google 픽셀 연동", d: "광고 플랫폼의 전환 추적 픽셀을 설치합니다. 어떤 광고에서 유입된 사용자가 실제로 전환(상담 신청, 구매)했는지 정확하게 추적합니다. 이 데이터가 있어야 광고 최적화가 가능합니다." },
            { t: "SEO 기본 설정", d: "메타 태그(title, description), 오픈그래프, 사이트맵, robots.txt 등 검색엔진 최적화 기본 설정을 세팅합니다. 네이버·구글 검색에 제대로 노출되도록 합니다." },
            { t: "속도 최적화", d: "이미지 최적화, 코드 최소화, 캐싱 설정 등을 통해 3초 이내 로딩을 목표로 합니다. Core Web Vitals 기준을 통과하는 빠른 사이트를 빌드합니다." },
          ].map(item => (
            <div key={item.t} className="bg-card rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <h4 className="text-[15px] font-medium text-t-strong mb-3">{item.t}</h4>
              <p className="text-[13px] text-t-secondary leading-[1.9]">{item.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-dark text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-3">전환되는 웹사이트가 필요하신가요?</h2>
          <p className="text-[13px] text-cream/35 mb-6 max-w-[400px] mx-auto leading-[1.8]">무료 상담에서 현재 웹사이트를 진단하고, 전환율을 높이는 최적의 빌드를 제안드립니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default WebBuildPage;
