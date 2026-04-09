import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const SeoPage = () => {
  return (
    <div className="pt-[72px]">
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal>
            <SectionHeader label="Search Engine Optimization" title="검색엔진 최적화" subtitle="찾아오게 만드는 신뢰." dark />
            <p className="text-base text-cream/75 leading-relaxed max-w-[700px] mb-12">
              광고는 보여주는 것이고, SEO는 <strong className="text-cream">찾아오게 만드는 것</strong>입니다. 관심 맥락이 뚜렷한 검색어를 점령해 브랜드 신뢰도를 콘텐츠로 쌓습니다.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-cream/5 border border-gold/30 p-8 rounded-lg">
                <div className="w-10 h-10 bg-green-500 text-card font-bold text-xl flex items-center justify-center rounded mb-4">N</div>
                <h4 className="font-serif text-xl font-medium text-cream mb-3">네이버 SEO</h4>
                <p className="text-sm text-cream/60 leading-relaxed mb-4">블로그 · 카페 · 플레이스 최적화. 국내 검색 점유율 1위 플랫폼에서 콘텐츠로 신뢰를 쌓습니다.</p>
                <ul className="flex flex-col gap-2">
                  {["네이버 블로그 SEO 콘텐츠 전략", "스마트스토어 · 플레이스 최적화", "지식iN · 카페 마케팅"].map((li) => (
                    <li key={li} className="text-sm text-cream/50 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-gold">{li}</li>
                  ))}
                </ul>
                <span className="inline-block mt-6 text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-400/20">운영 중</span>
              </div>
              <div className="bg-cream/5 border border-cream/10 p-8 rounded-lg opacity-70">
                <div className="w-10 h-10 bg-blue-500 text-card font-bold text-xl flex items-center justify-center rounded mb-4">G</div>
                <h4 className="font-serif text-xl font-medium text-cream mb-3">
                  구글 SEO <span className="text-xs bg-gold/15 text-gold px-2 py-0.5 rounded-full border border-gold/30 ml-2">준비중</span>
                </h4>
                <p className="text-sm text-cream/60 leading-relaxed mb-4">글로벌 기준의 기술적 SEO와 콘텐츠 마케팅. 구글 유기 검색 유입으로 장기 마케팅 자산을 구축합니다.</p>
                <ul className="flex flex-col gap-2">
                  {["기술적 SEO (Technical SEO)", "콘텐츠 마케팅 · 백링크", "Core Web Vitals 최적화"].map((li) => (
                    <li key={li} className="text-sm text-cream/40 pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-gold/50">{li}</li>
                  ))}
                </ul>
                <span className="inline-block mt-6 text-xs text-gold/60 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">Coming Soon</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground mb-4">SEO로 브랜드 신뢰를 쌓고 싶으신가요?</h2>
            <p className="text-muted-foreground mb-8">네이버 SEO는 지금 바로 시작할 수 있습니다.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-block px-9 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-all">
              무료 상담 신청
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SeoPage;
