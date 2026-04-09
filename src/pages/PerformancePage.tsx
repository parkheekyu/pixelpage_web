import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import performanceAds from "@/assets/performance-ads.jpg";
import charCurly from "@/assets/char-curly.png";

const PerformancePage = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={performanceAds} alt="퍼포먼스 마케팅" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-dark/80" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Performance Marketing</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/95 leading-[1.15] tracking-[-0.02em] mb-4">
            퍼포먼스 마케팅
          </h1>
          <p className="text-[18px] text-cream/60 leading-[1.8] max-w-[560px] mb-8">
            무형 서비스 광고의 핵심은 '예산의 크기'가 아닌 <strong className="text-cream/90 font-medium">'구매 의향이 있는 사람을 얼마나 정확하게 찾는가'</strong>입니다. 제품 사진 한 장으로 설득할 수 없는 서비스를, 서사형 크리에이티브로 '경험해 보고 싶다'는 감정으로 바꿉니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"].map(t => (
              <span key={t} className="text-[11px] text-cream/50 bg-cream/6 border border-cream/10 px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* KPI bar */}
    <section className="py-12 bg-dark border-t border-cream/6">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal className="flex flex-wrap justify-between gap-6">
          {[{ n: "3.93", u: "%", l: "Avg. CTR" }, { n: "500", u: "%", l: "Peak ROAS" }, { n: "280", u: "+", l: "캠페인 집행" }, { n: "70,000", u: "+", l: "커뮤니티 회원" }].map(k => (
            <div key={k.l} className="text-center">
              <span className="text-[36px] font-serif font-light text-cream/80 tracking-[-0.02em]">{k.n}<span className="text-[18px] text-cream/30 ml-0.5">{k.u}</span></span>
              <span className="block text-[10px] text-cream/25 tracking-[0.1em] uppercase mt-1">{k.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Detailed explanation */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">왜 다른가요?</p>
              <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] mb-8">
                무형 서비스 광고는<br />일반 이커머스 광고와 다릅니다.
              </h2>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                온라인 쇼핑몰의 광고는 단순합니다. 제품 사진을 보여주고, 할인율을 강조하면 됩니다. 하지만 교육, 코칭, 컨설팅, 체험형 서비스를 파는 브랜드는 다릅니다. 고객이 '이걸 경험해 보고 싶다'고 느끼기까지의 과정이 훨씬 복잡하고, 감정적 의사결정이 깊게 개입됩니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                그래서 우리는 단순히 '많이 노출'하는 광고를 하지 않습니다. 퍼널의 가장 윗단계부터 메시지를 설계해서, <strong className="text-t-strong font-medium">의향 없는 클릭은 줄이고 전환 가능성이 높은 관객만 남기는 구조</strong>를 만듭니다. 서사형 크리에이티브로 '광고 같지 않은 광고'를 만들어, 브랜드 톤을 보존하면서도 구매 의향을 만들어냅니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2]">
                매 시즌 소재 · 카피 · 타겟 · 랜딩 페이지를 반복 테스트하며 최적점을 찾습니다. 노출 수나 클릭 수가 아닌, <strong className="text-t-strong font-medium">전환 당 비용(CPA)과 매출 대비 수익률(ROAS)</strong>로 성과를 관리합니다. 280건 이상의 캠페인 경험에서 나온 무형 서비스 특화 노하우가 차이를 만듭니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <img src={charCurly} alt="PIXELPAGE" className="w-[180px] rounded-xl animate-float sticky top-24" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* What we do — cards */}
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">구체적으로 뭘 하나요?</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            서비스 상세
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[
            { t: "의향 기반 타겟팅", d: "'관심 있는 사람'이 아니라 '실제로 올 사람'을 정의하고 찾습니다. 무형 서비스의 구매 여정에 맞는 정밀 타겟을 설계합니다. 인구통계가 아닌, 행동 패턴과 관심사 기반으로 타겟을 세분화합니다. 룩어라이크, 리타겟팅, 커스텀 오디언스를 조합해 전환 가능성이 높은 관객만 남깁니다." },
            { t: "서사형 크리에이티브", d: "광고가 아닌 것처럼 보이는 광고를 만듭니다. 일반적인 '혜택 나열형' 광고가 아니라, 브랜드 고유의 서사와 톤을 보존하면서 '경험해 보고 싶다'는 감정을 설계합니다. 이미지, 영상, 카피를 하나의 서사로 연결하고, 각 플랫폼 특성에 맞게 변형합니다." },
            { t: "리드 단가 · ROAS 최적화", d: "노출 수나 클릭 수 같은 허수 지표가 아닌, 실제 전환 당 비용(CPA)과 매출 대비 수익률(ROAS)로 성과를 관리합니다. 매주 데이터를 리뷰하고 예산 배분을 조정합니다. ₩40M 집행으로 ROAS 500%를 달성한 노하우를 바로 적용합니다." },
            { t: "매 시즌 A/B 테스트", d: "소재(이미지/영상), 카피(헤드라인/본문), 타겟(오디언스/세그먼트), 랜딩 페이지(CTA/레이아웃)를 매 시즌 반복 테스트합니다. 감이 아닌 데이터로 의사결정하며, 검증된 조합만 스케일업합니다." },
            { t: "멀티 플랫폼 운영", d: "Meta(Facebook/Instagram), Google(Search/Display/YouTube), 토스애즈, 당근마켓, TikTok 등 주요 플랫폼을 동시 운영합니다. 플랫폼별 특성에 맞는 소재와 전략을 설계하고, 전체 예산을 효율적으로 배분합니다." },
            { t: "주간 리포트 · 소통", d: "일주일에 한 번, 주요 지표와 인사이트를 공유합니다. 긴 보고서가 아니라, 핵심 숫자와 다음 주 실행 계획을 간결하게 전달합니다. 슬랙이나 카카오톡으로 실시간 소통도 가능합니다." },
          ].map(item => (
            <div key={item.t} className="bg-background rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <h4 className="text-[15px] font-medium text-t-strong mb-3">{item.t}</h4>
              <p className="text-[13px] text-t-secondary leading-[1.9]">{item.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Platforms detail */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Platforms</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            지원 플랫폼 상세
          </h2>
          <p className="text-[14px] text-cream/40 mt-3 max-w-[520px] leading-[1.9]">
            각 플랫폼의 강점을 이해하고, 브랜드에 가장 적합한 조합을 설계합니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "f", name: "Meta Ads", sub: "Facebook · Instagram", features: ["리타겟팅 · 룩어라이크 · DPA", "카탈로그 · 리드 광고 · 컬렉션", "인스타그램 스토리 · 릴스 광고", "전환 API · 서버사이드 트래킹"], desc: "가장 정밀한 타겟팅과 가장 많은 광고 포맷을 제공하는 플랫폼. 무형 서비스 광고에서 가장 높은 효율을 보입니다." },
            { icon: "G", name: "Google Ads", sub: "Search · Display · YouTube", features: ["키워드 검색 광고", "디스플레이 네트워크 (GDN)", "YouTube 인스트림 · 범퍼 광고", "퍼포먼스 맥스 캠페인"], desc: "'이미 찾고 있는 사람'을 잡는 검색 광고와, 인지를 확장하는 디스플레이·영상 광고를 조합합니다." },
            { icon: "T", name: "토스애즈", sub: "핀테크 네이티브 광고", features: ["2030 금융·자기계발 관심층", "네이티브 광고 포맷", "정밀 행동 데이터 타겟팅", "높은 신뢰도 기반 전환"], desc: "토스 앱 내 2030 사용자에게 네이티브하게 노출됩니다. 자기계발, 교육, 금융 관련 서비스에 특히 효과적입니다." },
            { icon: "D", name: "당근마켓", sub: "하이퍼로컬 광고", features: ["동네 기반 정밀 지역 타겟팅", "피드 광고 · 배너 광고", "오프라인 매장 방문 유도", "지역 인지도 구축"], desc: "학원, 스튜디오, 매장 등 오프라인 기반 교육·서비스 브랜드에 최적화된 하이퍼로컬 광고입니다." },
            { icon: "♪", name: "TikTok Ads", sub: "숏폼 광고", features: ["인피드 · 탑뷰 · 브랜디드 효과", "Z세대 · 밀레니얼 집중 도달", "UGC 스타일 네이티브 소재", "스파크 광고 · 쇼핑 광고"], desc: "15-60초 숏폼으로 강렬한 첫 인상을 만듭니다. 젊은 층 대상 교육·체험 서비스에 특히 효과적입니다." },
            { icon: "★", name: "크로스 플랫폼", sub: "통합 운영", features: ["플랫폼 간 예산 최적 배분", "통합 대시보드 리포팅", "크로스 디바이스 리타겟팅", "전체 퍼널 통합 관리"], desc: "개별 플랫폼이 아닌, 전체 마케팅 퍼널을 하나로 관리합니다. 각 플랫폼의 역할을 정의하고 시너지를 만듭니다." },
          ].map(p => (
            <div key={p.name} className="bg-cream/4 border border-cream/8 rounded-lg p-6 hover:border-gold/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-cream/6 flex items-center justify-center text-[16px] text-gold font-bold">{p.icon}</span>
                <div>
                  <span className="block text-[14px] font-medium text-cream/80">{p.name}</span>
                  <span className="block text-[11px] text-cream/35">{p.sub}</span>
                </div>
              </div>
              <p className="text-[13px] text-cream/50 leading-[1.8] mb-4">{p.desc}</p>
              {p.features.map(f => (
                <p key={f} className="text-[12px] text-cream/35 pl-3 py-1 border-l border-gold/20 mb-1">{f}</p>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Process</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            데이터 기반 4단계 프로세스
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-0">
          {[
            { s: "01", t: "브랜드 · 상품 분석", d: "무형 서비스의 핵심 가치를 정의합니다. 기존 광고 자산을 진단하고, 타겟 관객의 구매 여정을 분석합니다. 경쟁사 광고도 함께 리서치합니다." },
            { s: "02", t: "채널 · 예산 설계", d: "브랜드에 가장 적합한 플랫폼 조합과 예산 배분을 설계합니다. KPI를 함께 정하고, 달성 가능한 타임라인을 제안합니다." },
            { s: "03", t: "소재 제작 · 테스트", d: "서사형 크리에이티브를 제작합니다. 이미지, 영상, 카피를 조합해 A/B 테스트를 반복하고, 가장 효과적인 조합을 찾습니다." },
            { s: "04", t: "최적화 · 스케일업", d: "매주 데이터를 리뷰하며 소재 · 타겟 · 예산을 지속 최적화합니다. 검증된 조합을 기반으로 빠르게 스케일업합니다." },
          ].map(p => (
            <div key={p.s} className="border-t-2 border-gold pt-5 pr-6 pb-6">
              <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.s}</span>
              <h3 className="text-[15px] font-medium text-t-strong mt-3 mb-2">{p.t}</h3>
              <p className="text-[13px] text-t-secondary leading-[1.8]">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-dark text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-3">퍼포먼스 마케팅이 필요하신가요?</h2>
          <p className="text-[13px] text-cream/35 mb-6 max-w-[400px] mx-auto leading-[1.8]">무료 상담에서 브랜드를 함께 진단하고, 최적의 채널 · 예산 · 전략을 제안드립니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default PerformancePage;
