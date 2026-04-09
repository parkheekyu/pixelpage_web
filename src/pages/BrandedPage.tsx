import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import brandedVideo from "@/assets/branded-video.jpg";

const BrandedPage = () => (
  <div className="pt-24">
    {/* Hero with photo */}
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={brandedVideo} alt="브랜디드 콘텐츠 촬영" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-dark/75" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Branded Content</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/95 leading-[1.15] tracking-[-0.02em] mb-4">
            브랜디드 콘텐츠
          </h1>
          <p className="text-[18px] text-cream/60 leading-[1.7] max-w-[520px] mb-8">
            강사의 목소리, 공간의 공기, 수강생의 표정 —<br />
            <strong className="text-cream/90 font-medium">감각을 번역하는 서사형 영상.</strong>
          </p>
          <div className="flex flex-wrap gap-2">
            {["브랜디드 유튜브", "숏폼 (Shorts · Reels · TikTok)", "광고 소재 제작"].map(t => (
              <span key={t} className="text-[11px] text-cream/50 bg-cream/6 border border-cream/10 px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Stats bar */}
    <section className="py-12 bg-dark border-t border-cream/6">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal className="flex flex-wrap justify-between gap-6">
          {[{ n: "9", u: "년+", l: "현장 경력" }, { n: "100", u: "만+", l: "누적 구독자" }, { n: "4", u: "배", l: "상담 전환율" }, { n: "2", u: "개월", l: "성장 기간" }].map(k => (
            <div key={k.l} className="text-center">
              <span className="text-[36px] font-serif font-light text-cream/80 tracking-[-0.02em]">{k.n}<span className="text-[16px] text-cream/30 ml-0.5">{k.u}</span></span>
              <span className="block text-[10px] text-cream/25 tracking-[0.1em] uppercase mt-1">{k.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* YouTube — concrete description */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">YouTube Operations</p>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            유튜브로 24시간 영업사원을 만듭니다
          </h2>
          <p className="text-[14px] text-t-secondary mt-3 max-w-[520px] leading-[1.8]">
            기획 · 촬영 · 편집 · 업로드 · 썸네일 · 숏폼까지 원스톱 대행. 조회수가 아닌 <strong className="text-t-strong font-medium">상담과 매출로 연결</strong>되는 채널을 만듭니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {[
              { t: "올인원 채널 운영", d: "주제 기획부터 촬영, 편집, 업로드, 썸네일, 숏폼 재가공까지 전 과정을 대행합니다. 대표님은 촬영만 참여하시면 됩니다." },
              { t: "알고리즘 기반 주제 선정", d: "감이 아닌 데이터로 주제를 선정합니다. 검색량, 경쟁 강도, 트렌드를 분석해 가장 효과적인 콘텐츠를 기획합니다." },
              { t: "매출 연결 전략", d: "조회수 자랑이 아닌, 실제 상담·매출로 연결되는 구조를 설계합니다. CTA 설계, 댓글 관리, 커뮤니티 운영까지." },
            ].map(item => (
              <div key={item.t} className="bg-card rounded-lg shadow-card p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                <h4 className="text-[15px] font-medium text-t-strong mb-2">{item.t}</h4>
                <p className="text-[13px] text-t-secondary leading-[1.7]">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {[
              { t: "2개월 내 채널 성장", d: "추천 알고리즘과 검색 유입을 동시에 공략해, 2개월 내에 구독자와 조회수를 빠르게 성장시킵니다." },
              { t: "숏폼 자동 재가공", d: "롱폼 콘텐츠를 Shorts · Reels · TikTok용 숏폼으로 재가공합니다. 하나의 촬영으로 다수의 콘텐츠를 생산합니다." },
              { t: "카테고리 1등 포지션", d: "단기 조회수가 아닌, 장기적으로 해당 분야에서 가장 신뢰받는 채널 포지션을 구축합니다." },
            ].map(item => (
              <div key={item.t} className="bg-card rounded-lg shadow-card p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                <h4 className="text-[15px] font-medium text-t-strong mb-2">{item.t}</h4>
                <p className="text-[13px] text-t-secondary leading-[1.7]">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Before/After case */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Results</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            실제 채널 성장 케이스
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-cream/4 border border-cream/8 rounded-lg p-7">
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">채널 성장</span>
            <h3 className="text-[16px] font-medium text-cream/80 mt-3 mb-4">1년 6개월 vs 2개월</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-[12px] font-bold text-cream/40 mb-3">Before — 1년 6개월</h4>
                <p className="text-[28px] font-serif font-light text-cream/40">73<span className="text-[14px] ml-0.5">명</span></p>
                <p className="text-[10px] text-cream/25 tracking-[0.08em] uppercase mt-1">구독자</p>
                <p className="text-[28px] font-serif font-light text-cream/40 mt-3">4.4<span className="text-[14px] ml-0.5">만</span></p>
                <p className="text-[10px] text-cream/25 tracking-[0.08em] uppercase mt-1">총 조회수</p>
              </div>
              <div>
                <h4 className="text-[12px] font-bold text-gold mb-3">After — 2개월</h4>
                <p className="text-[28px] font-serif font-light text-gold">2,500<span className="text-[14px] ml-0.5 text-gold/50">명</span></p>
                <p className="text-[10px] text-cream/25 tracking-[0.08em] uppercase mt-1">구독자</p>
                <p className="text-[28px] font-serif font-light text-gold mt-3">44<span className="text-[14px] ml-0.5 text-gold/50">만</span></p>
                <p className="text-[10px] text-cream/25 tracking-[0.08em] uppercase mt-1">총 조회수</p>
              </div>
            </div>
          </div>
          <div className="bg-cream/4 border border-cream/8 rounded-lg p-7">
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">매출 전환</span>
            <h3 className="text-[16px] font-medium text-cream/80 mt-3 mb-6">상담 건수 4배 증가</h3>
            <div className="flex items-end gap-8">
              <div>
                <span className="text-[40px] font-serif font-light text-cream/40">30</span>
                <span className="block text-[10px] text-cream/25 tracking-[0.08em] uppercase mt-1">이전 월평균</span>
              </div>
              <span className="text-gold text-[24px] mb-3">→</span>
              <div>
                <span className="text-[40px] font-serif font-light text-gold">120<span className="text-[20px] text-gold/50">+</span></span>
                <span className="block text-[10px] text-cream/25 tracking-[0.08em] uppercase mt-1">현재 월평균</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-t-strong mb-3">브랜디드 콘텐츠가 필요하신가요?</h2>
          <p className="text-[13px] text-t-tertiary mb-6">기획부터 촬영, 편집, 운영까지 원스톱으로.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default BrandedPage;
