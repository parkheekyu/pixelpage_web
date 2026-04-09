import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import seoSearch from "@/assets/seo-search.jpg";
import charMale from "@/assets/char-male.png";

const SeoPage = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={seoSearch} alt="검색엔진 최적화" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-dark/80" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Search Engine Optimization</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/95 leading-[1.15] tracking-[-0.02em] mb-4">
            검색엔진 최적화
          </h1>
          <p className="text-[18px] text-cream/60 leading-[1.8] max-w-[560px]">
            광고는 돈을 써서 보여주는 것이고, SEO는 <strong className="text-cream/90 font-medium">돈을 쓰지 않아도 찾아오게 만드는 것</strong>입니다. 한 번 쌓이면 광고비 없이도 유입이 계속됩니다.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Why SEO */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">왜 SEO인가요?</p>
              <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] mb-8">
                광고를 끄면 유입도 멈춥니다.<br />SEO는 멈추지 않습니다.
              </h2>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                퍼포먼스 광고는 즉각적인 효과가 있지만, 광고비를 쓰는 동안만 유입이 발생합니다. 광고를 끄면 유입도 멈춥니다. SEO는 다릅니다. 한 번 만든 콘텐츠가 검색 상위에 노출되면, <strong className="text-t-strong font-medium">광고비 없이도 매일 새로운 잠재 고객이 찾아옵니다.</strong>
              </p>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                특히 무형 서비스를 찾는 사람들은 '검색'을 통해 신뢰할 수 있는 브랜드를 찾습니다. '스피치 학원 추천', '온라인 코칭 후기', '마케팅 대행사 비교' — 이런 키워드를 검색하는 사람은 이미 구매 의향이 있는 사람입니다. 이 사람들이 검색했을 때 가장 먼저 보이는 것이 우리 브랜드의 콘텐츠라면, 광고보다 훨씬 높은 신뢰와 전환율을 얻을 수 있습니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2]">
                현재 네이버 SEO를 운영 중이며, 구글 SEO는 준비 중입니다. 네이버 블로그, 스마트스토어, 플레이스, 지식iN까지 네이버 생태계 전체를 활용한 콘텐츠 기반 신뢰 구축 전략을 실행합니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-[180px] rounded-xl overflow-hidden sticky top-24">
                <img src={charMale} alt="PIXELPAGE SEO" className="w-full object-cover object-top scale-[1.2] origin-top" loading="lazy" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Naver + Google */}
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Platforms</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            플랫폼별 SEO 전략
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-background rounded-lg shadow-card p-8 border-l-4 border-gold">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center text-[16px] font-bold text-gold">N</span>
              <div>
                <span className="block text-[14px] font-medium text-t-strong">네이버 SEO</span>
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">운영 중</span>
              </div>
            </div>
            <p className="text-[14px] text-t-secondary leading-[1.9] mb-6">
              국내 검색 점유율 1위 플랫폼에서 콘텐츠로 신뢰를 쌓습니다. 네이버는 블로그, 카페, 지식iN, 스마트스토어, 플레이스 등 자체 생태계가 강력합니다. 이 생태계 전체를 활용해 브랜드의 검색 가시성을 높입니다.
            </p>
            {[
              { t: "네이버 블로그 SEO", d: "타겟 키워드를 선정하고, 검색 의도에 맞는 콘텐츠를 기획·작성합니다. 상위 노출을 위한 구조(제목, 소제목, 이미지, 링크 등)를 최적화합니다. 매주 새로운 콘텐츠를 발행하고 노출 순위를 모니터링합니다." },
              { t: "스마트스토어 · 플레이스 최적화", d: "상품명, 카테고리, 태그, 상세페이지 구조를 최적화해 상품 검색 노출을 높입니다. 플레이스의 경우 영업시간, 사진, 리뷰 관리, 지역 검색 최적화까지 포함합니다." },
              { t: "지식iN · 카페 마케팅", d: "질문 답변형 콘텐츠로 자연 유입을 확보합니다. 잠재 고객이 실제로 검색하는 질문을 분석하고, 전문적이면서 자연스러운 답변을 통해 브랜드 인지도를 높입니다." },
              { t: "월간 키워드 리서치", d: "매달 검색 트렌드를 분석하고, 새로운 키워드 기회를 발굴합니다. 경쟁 강도, 검색량, 전환 가능성을 종합적으로 평가해 우선순위를 정합니다." },
            ].map(item => (
              <div key={item.t} className="py-4 border-t border-border">
                <h4 className="text-[13px] font-medium text-t-strong mb-1">{item.t}</h4>
                <p className="text-[12px] text-t-tertiary leading-[1.8]">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-background rounded-lg shadow-card p-8 border-l-4 border-muted opacity-70">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-[16px] font-bold text-t-disabled">G</span>
              <div>
                <span className="block text-[14px] font-medium text-t-strong">구글 SEO</span>
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-t-disabled">Coming Soon</span>
              </div>
            </div>
            <p className="text-[14px] text-t-secondary leading-[1.9] mb-6">
              글로벌 기준의 기술적 SEO와 콘텐츠 마케팅으로 장기 마케팅 자산을 구축합니다. 현재 준비 중이며, 곧 서비스를 시작합니다.
            </p>
            {[
              { t: "기술적 SEO (Technical SEO)", d: "사이트 구조 최적화, 스키마 마크업, Core Web Vitals 개선, 모바일 최적화 등 검색엔진이 사이트를 잘 이해할 수 있도록 기술적 기반을 구축합니다." },
              { t: "콘텐츠 마케팅 · 백링크", d: "키워드 리서치를 기반으로 장기 콘텐츠 전략을 수립합니다. 가치 있는 콘텐츠를 통해 자연 백링크를 확보하고, 도메인 권위도를 높입니다." },
              { t: "사이트맵 · 인덱싱 최적화", d: "XML 사이트맵 생성, 로봇 설정, 크롤링 최적화, 구조화된 데이터(JSON-LD)를 적용해 검색엔진 인덱싱 효율을 극대화합니다." },
              { t: "성과 측정 · 리포팅", d: "Google Search Console, Google Analytics를 활용해 검색 노출, 클릭, 순위 변동을 추적합니다. 매월 성과 리포트를 제공합니다." },
            ].map(item => (
              <div key={item.t} className="py-4 border-t border-border">
                <h4 className="text-[13px] font-medium text-t-strong mb-1">{item.t}</h4>
                <p className="text-[12px] text-t-tertiary leading-[1.8]">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Benefits</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            SEO가 만드는 장기적 가치
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: "광고비 절감", d: "SEO를 통해 유입된 트래픽은 광고비가 들지 않습니다. 초기 투자 후 콘텐츠가 쌓일수록 유입 비용이 점점 낮아집니다. 광고 의존도를 줄이는 가장 확실한 방법입니다." },
            { t: "높은 전환율", d: "검색을 통해 찾아오는 사람은 이미 관심과 의향이 있는 사람입니다. 광고를 통한 유입보다 전환율이 2-5배 높습니다. 특히 무형 서비스의 경우 '검색 → 콘텐츠 소비 → 신뢰 → 상담' 흐름이 자연스럽습니다." },
            { t: "브랜드 신뢰 구축", d: "검색 1페이지에 브랜드 콘텐츠가 노출되면, 그 자체로 전문성과 신뢰를 보여줍니다. '이 분야의 전문가'라는 포지션을 자연스럽게 구축합니다." },
            { t: "장기 마케팅 자산", d: "한 번 만든 콘텐츠는 수년간 유입을 만듭니다. 광고는 끄면 끝이지만, SEO 콘텐츠는 시간이 지날수록 가치가 올라갑니다. 장기적으로 가장 효율적인 마케팅 투자입니다." },
            { t: "경쟁 우위 확보", d: "SEO는 시간이 걸리는 만큼, 먼저 시작하면 경쟁사가 따라잡기 어렵습니다. 검색 1위를 점유하면 후발 주자가 그 자리를 빼앗기 매우 어렵습니다." },
            { t: "다른 채널과의 시너지", d: "SEO 콘텐츠는 퍼포먼스 광고의 랜딩 페이지로, CRM 육성 시퀀스의 콘텐츠로, 유튜브 영상의 소재로 재활용됩니다. 한 번 만든 콘텐츠가 모든 채널에서 일합니다." },
          ].map(f => (
            <div key={f.t} className="bg-cream/4 border border-cream/8 rounded-lg p-6 hover:border-gold/20 transition-colors">
              <h4 className="text-[14px] font-medium text-cream/80 mb-2">{f.t}</h4>
              <p className="text-[13px] text-cream/45 leading-[1.9]">{f.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-t-strong mb-3">네이버 SEO는 지금 바로 시작할 수 있습니다.</h2>
          <p className="text-[13px] text-t-tertiary mb-6 max-w-[400px] mx-auto leading-[1.8]">무료 상담에서 현재 검색 노출 현황을 진단하고, 키워드 전략을 함께 설계합니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default SeoPage;
