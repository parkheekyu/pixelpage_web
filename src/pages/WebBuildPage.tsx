import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const WebBuildPage = () => {
  return (
    <div className="pt-[72px]">
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal>
            <SectionHeader label="Web Build" title="웹 빌드" subtitle="보여주기 위한 웹이 아닌, 파는 웹." dark />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
              <div>
                <p className="text-base text-cream/75 leading-relaxed mb-8">
                  광고를 클릭한 관객이 처음 만나는 것은 웹사이트입니다. 전환이 일어나도록 설계된 웹 — 퍼포먼스 마케팅과 완벽히 연동되는 <strong className="text-cream">파는 웹을 빌드합니다</strong>.
                </p>
                <ul className="flex flex-col gap-3">
                  {["전환 최적화 랜딩 페이지", "브랜드 사이트 · 포트폴리오 웹", "강의 · 코호트 상품 판매 페이지", "픽셀 · CRM 연동 풀스택 빌드"].map((li) => (
                    <li key={li} className="text-sm text-cream/70 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-gold">{li}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                {/* Tiers */}
                <div className="bg-cream/5 border border-cream/10 p-6 rounded-lg">
                  <h4 className="font-serif text-lg font-medium text-cream mb-2">Landing Page</h4>
                  <p className="text-sm text-cream/60 mb-4">단일 전환 목적의 고집중 랜딩. 광고 소재와 정합성을 갖춘 메시지 설계.</p>
                  <ul className="flex flex-col gap-1.5 text-xs text-cream/50">
                    <li>• 반응형 · 모바일 퍼스트</li>
                    <li>• Meta · Google 픽셀 연동</li>
                    <li>• A/B 테스트 구조</li>
                  </ul>
                </div>
                <div className="bg-cream/5 border-2 border-gold p-6 rounded-lg relative">
                  <span className="absolute -top-3 left-6 text-[10px] bg-gold text-dark px-3 py-1 font-bold tracking-wide rounded-sm">Most Popular</span>
                  <h4 className="font-serif text-lg font-medium text-cream mb-2">Brand Website</h4>
                  <p className="text-sm text-cream/60 mb-4">브랜드 전체를 아우르는 웹 경험. 신뢰 구축부터 전환까지 한 화면에서.</p>
                  <ul className="flex flex-col gap-1.5 text-xs text-cream/50">
                    <li>• 브랜드 아이덴티티 반영 디자인</li>
                    <li>• CMS · 블로그 통합</li>
                    <li>• CRM · 결제 시스템 연동</li>
                  </ul>
                </div>
                <div className="bg-cream/5 border border-cream/10 p-6 rounded-lg">
                  <h4 className="font-serif text-lg font-medium text-cream mb-2">Enterprise</h4>
                  <p className="text-sm text-cream/60 mb-4">가맹·B2B·다지점 사업을 위한 대형 웹 빌드. 엔터프라이즈 수준의 완성도.</p>
                  <ul className="flex flex-col gap-1.5 text-xs text-cream/50">
                    <li>• 멀티 페이지 풀 빌드</li>
                    <li>• 회원 · 예약 · 관리 시스템</li>
                    <li>• SEO 구조 설계 포함</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enterprise Reference */}
      <section className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <SectionHeader label="Enterprise Grade" title="엔터프라이즈급<br/>웹 빌드 역량" subtitle="대형 플랫폼 수준의 풀빌드를 제공합니다." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { title: "멀티 페이지 설계", desc: "서비스 소개, 요금제, 고객지원, 블로그 등 완전한 페이지 구조 설계", icon: "📐" },
                { title: "회원 · 결제 시스템", desc: "로그인/회원가입, PG 연동, 구독 결제 등 비즈니스 핵심 기능 구현", icon: "💳" },
                { title: "AI 마케팅 자동화", desc: "AI 기반 마케팅 도구, 자동 상품 추천, 데이터 분석 대시보드", icon: "🤖" },
                { title: "반응형 · 퍼포먼스", desc: "모든 디바이스 최적화, Core Web Vitals 통과, 빠른 로딩 속도", icon: "📱" },
                { title: "SEO 구조 설계", desc: "메타 태그, 스키마 마크업, 사이트맵, 기술적 SEO 완벽 세팅", icon: "🔍" },
                { title: "유지보수 · 확장", desc: "운영 후 지속적인 업데이트, 기능 확장, 트래픽 대응", icon: "🔧" },
              ].map((feat) => (
                <div key={feat.title} className="bg-card border border-border p-6 rounded-lg hover:border-gold/50 hover:-translate-y-1 transition-all">
                  <div className="text-2xl mb-3">{feat.icon}</div>
                  <h4 className="font-serif text-base font-medium text-foreground mb-2">{feat.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
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
            <h2 className="font-serif text-3xl text-cream mb-4">전환되는 웹사이트가 필요하신가요?</h2>
            <p className="text-cream/50 mb-8">랜딩부터 엔터프라이즈까지, 규모에 맞게 빌드합니다.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-block px-9 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-all">
              무료 상담 신청
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default WebBuildPage;
