import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const SeoPage = () => (
  <div className="pt-24">
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Search Engine Optimization</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/90 leading-[1.15] tracking-[-0.02em] mb-4">
            검색엔진 최적화
          </h1>
          <p className="font-display italic text-[clamp(18px,2.5vw,28px)] text-gold/80">찾아오게 만드는 신뢰.</p>
          <p className="text-[14px] text-cream/50 leading-[1.9] max-w-[600px] mt-6">
            광고는 보여주는 것이고, SEO는 <strong className="text-cream/80 font-medium">찾아오게 만드는 것</strong>입니다.
          </p>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-cream/4 border border-gold/20 rounded-lg p-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-md bg-green-600 flex items-center justify-center text-[14px] font-bold text-card">N</span>
              <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-green-400">운영 중</span>
            </div>
            <h3 className="text-[18px] font-medium text-cream/90 mb-3">네이버 SEO</h3>
            <p className="text-[13px] text-cream/50 leading-[1.7] mb-4">국내 검색 점유율 1위 플랫폼에서 콘텐츠로 신뢰를 쌓습니다.</p>
            {["네이버 블로그 SEO 콘텐츠 전략", "스마트스토어 · 플레이스 최적화", "지식iN · 카페 마케팅"].map(li => (
              <p key={li} className="text-[12px] text-cream/35 pl-4 py-1 border-l border-gold/20 mb-1.5">{li}</p>
            ))}
          </div>
          <div className="bg-cream/4 border border-cream/8 rounded-lg p-7 opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-[14px] font-bold text-card">G</span>
              <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-cream/30">Coming Soon</span>
            </div>
            <h3 className="text-[18px] font-medium text-cream/70 mb-3">구글 SEO</h3>
            <p className="text-[13px] text-cream/40 leading-[1.7] mb-4">글로벌 기준의 기술적 SEO와 콘텐츠 마케팅으로 장기 마케팅 자산을 구축합니다.</p>
            {["기술적 SEO (Technical SEO)", "콘텐츠 마케팅 · 백링크", "Core Web Vitals 최적화"].map(li => (
              <p key={li} className="text-[12px] text-cream/25 pl-4 py-1 border-l border-cream/10 mb-1.5">{li}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-16 bg-background text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-t-strong mb-6">네이버 SEO는 지금 바로 시작할 수 있습니다.</h2>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default SeoPage;
