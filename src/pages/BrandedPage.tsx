import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const BrandedPage = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-t-disabled hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Branded Content</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-t-strong leading-[1.15] tracking-[-0.02em] mb-4">
            브랜디드 콘텐츠
          </h1>
          <p className="font-display italic text-[clamp(18px,2.5vw,28px)] text-t-tertiary">감각을 번역하는 서사형 영상.</p>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[14px] text-t-secondary leading-[1.9] mb-8">
              강사의 목소리, 공간의 공기, 수강생의 표정 — 무형을 파는 일은 결국 <strong className="text-t-strong font-medium">감각을 번역하는 일</strong>입니다.
            </p>
            {["브랜드 고유 톤을 보존하는 서사 기반 기획", "브랜디드 유튜브 — 장편 스토리텔링", "숏폼 (Shorts · Reels · TikTok)", "광고 소재 제작 및 A/B 테스트 연동"].map(li => (
              <p key={li} className="text-[13px] text-t-tertiary pl-4 py-1.5 border-l border-gold/30 mb-2">{li}</p>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-t-disabled">YouTube</span>
              <h3 className="text-[16px] font-medium text-t-strong mt-2 mb-2">브랜디드 유튜브</h3>
              <p className="text-[13px] text-t-secondary leading-[1.7]">창업자 서사, 강의 현장, 수강생 후기 — 신뢰를 쌓는 장편 콘텐츠로 빠르게 인지·신뢰를 형성합니다.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-card">
              <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-t-disabled">Short-form</span>
              <h3 className="text-[16px] font-medium text-t-strong mt-2 mb-2">숏폼</h3>
              <p className="text-[13px] text-t-secondary leading-[1.7]">15-60초 안에 임팩트. 퍼포먼스 광고와 연동되는 숏폼 소재로 상단 노출과 전환을 동시에.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* YouTube Deep Dive — dark section */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">YouTube Operations</p>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            유튜브로 24시간 영업사원을 만듭니다
          </h2>
          <p className="text-[14px] text-cream/40 mt-3 max-w-[480px] leading-[1.8]">
            기획 · 촬영 · 편집 · 업로드 · 썸네일 · 숏폼까지 원스톱 대행
          </p>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: "올인원 운영", d: "기획부터 업로드까지 전 과정 대행" },
            { t: "알고리즘 기반 기획", d: "감이 아닌 데이터로 주제 선정" },
            { t: "매출 연결 전략", d: "조회수가 아닌 상담·매출 연결" },
            { t: "채널 성장 설계", d: "2개월 내 추천·검색 동시 유입" },
            { t: "숏폼 재가공", d: "롱폼 → 숏폼 자동 재가공" },
            { t: "1등 포지션 구축", d: "장기 신뢰 기반 브랜드 포지션" },
          ].map(f => (
            <div key={f.t} className="bg-cream/4 border border-cream/8 rounded-lg p-5 hover:border-gold/20 transition-colors">
              <h4 className="text-[14px] font-medium text-cream/70 mb-1.5">{f.t}</h4>
              <p className="text-[12px] text-cream/35 leading-[1.7]">{f.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Stats bar */}
    <section className="py-12 bg-dark border-t border-cream/6">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal className="flex flex-wrap justify-between gap-6">
          {[{ n: "9", u: "년+", l: "현장 경력" }, { n: "100", u: "만+", l: "누적 구독자" }, { n: "4", u: "배", l: "상담 전환" }, { n: "2", u: "개월", l: "성장 기간" }].map(k => (
            <div key={k.l} className="text-center">
              <span className="text-[36px] font-serif font-light text-cream/80 tracking-[-0.02em]">{k.n}<span className="text-[16px] text-cream/30 ml-0.5">{k.u}</span></span>
              <span className="block text-[10px] text-cream/25 tracking-[0.1em] uppercase mt-1">{k.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Cases — cream bg for rhythm */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Results</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            채널 성장 케이스
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-card rounded-lg shadow-card p-7">
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">채널 성장</span>
            <div className="mt-4 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-[13px] font-medium text-t-secondary mb-3">Before — 1년 6개월</h4>
                <p className="text-[12px] text-t-tertiary leading-[1.8]">구독자 73명 · 조회수 4.4만</p>
              </div>
              <div>
                <h4 className="text-[13px] font-medium text-gold mb-3">After — 2개월</h4>
                <p className="text-[12px] text-t-strong font-medium leading-[1.8]">구독자 2,500명 · 조회수 44만</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-card p-7">
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">매출 전환</span>
            <h4 className="text-[15px] font-medium text-t-strong mt-3 mb-4">상담 건수 4배 증가</h4>
            <div className="flex items-end gap-6">
              <div>
                <span className="text-[32px] font-serif font-light text-t-disabled">30</span>
                <span className="block text-[10px] text-t-disabled tracking-[0.08em] uppercase">이전</span>
              </div>
              <span className="text-gold text-[18px] mb-2">→</span>
              <div>
                <span className="text-[32px] font-serif font-light text-gold">120<span className="text-[16px] text-gold/50">+</span></span>
                <span className="block text-[10px] text-t-disabled tracking-[0.08em] uppercase">현재</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-dark text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-6">브랜디드 콘텐츠가 필요하신가요?</h2>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default BrandedPage;
