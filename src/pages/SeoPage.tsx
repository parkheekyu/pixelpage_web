import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import seoSearch from "@/assets/seo-search.jpg";

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
          <p className="text-[18px] text-cream/60 leading-[1.7] max-w-[520px]">
            광고는 보여주는 것이고, SEO는 <strong className="text-cream/90 font-medium">찾아오게 만드는 것</strong>입니다.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Naver + Google cards */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">지원 플랫폼</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            콘텐츠 기반 장기 신뢰 구축
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg shadow-card p-8 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center text-[16px] font-bold text-card">N</span>
              <div>
                <span className="block text-[14px] font-medium text-t-strong">네이버 SEO</span>
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-green-600">운영 중</span>
              </div>
            </div>
            <p className="text-[14px] text-t-secondary leading-[1.8] mb-6">
              국내 검색 점유율 1위 플랫폼에서 콘텐츠로 신뢰를 쌓습니다. 블로그, 스마트스토어, 플레이스, 지식iN까지 네이버 생태계 전체를 활용합니다.
            </p>
            {[
              { t: "네이버 블로그 SEO", d: "키워드 전략, 콘텐츠 기획, 상위 노출 최적화" },
              { t: "스마트스토어 · 플레이스 최적화", d: "상품 검색 노출, 리뷰 관리, 지역 검색 최적화" },
              { t: "지식iN · 카페 마케팅", d: "질문 답변형 콘텐츠로 자연 유입 확보" },
            ].map(item => (
              <div key={item.t} className="py-3 border-t border-border">
                <h4 className="text-[13px] font-medium text-t-strong">{item.t}</h4>
                <p className="text-[12px] text-t-tertiary mt-0.5">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-card rounded-lg shadow-card p-8 border-l-4 border-blue-400 opacity-70">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-[16px] font-bold text-card">G</span>
              <div>
                <span className="block text-[14px] font-medium text-t-strong">구글 SEO</span>
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-t-disabled">Coming Soon</span>
              </div>
            </div>
            <p className="text-[14px] text-t-secondary leading-[1.8] mb-6">
              글로벌 기준의 기술적 SEO와 콘텐츠 마케팅으로 장기 마케팅 자산을 구축합니다. 준비 중입니다.
            </p>
            {[
              { t: "기술적 SEO (Technical SEO)", d: "사이트 구조, 스키마 마크업, Core Web Vitals" },
              { t: "콘텐츠 마케팅 · 백링크", d: "키워드 리서치 기반 장기 콘텐츠 전략" },
              { t: "사이트맵 · 인덱싱 최적화", d: "크롤링 최적화, 구조화된 데이터" },
            ].map(item => (
              <div key={item.t} className="py-3 border-t border-border">
                <h4 className="text-[13px] font-medium text-t-strong">{item.t}</h4>
                <p className="text-[12px] text-t-tertiary mt-0.5">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-dark text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-3">네이버 SEO는 지금 바로 시작할 수 있습니다.</h2>
          <p className="text-[13px] text-cream/35 mb-6">검색에서 찾아오는 고객을 만들어 드립니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default SeoPage;
