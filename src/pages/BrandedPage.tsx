import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import brandedVideo from "@/assets/branded-video.jpg";
import charCurly from "@/assets/char-curly.png";

const BrandedPage = () => (
  <div className="pt-24">
    {/* Hero */}
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
          <p className="text-[18px] text-cream/60 leading-[1.8] max-w-[560px] mb-8">
            강사의 목소리, 공간의 공기, 수강생의 표정 — 무형을 파는 일은 결국 <strong className="text-cream/90 font-medium">감각을 번역하는 일</strong>입니다. 브랜디드 유튜브와 숏폼으로 24시간 일하는 영업사원을 만듭니다.
          </p>
          <div className="flex flex-wrap gap-2">
            {["브랜디드 유튜브", "숏폼 (Shorts · Reels · TikTok)", "광고 소재 제작"].map(t => (
              <span key={t} className="text-[11px] text-cream/50 bg-cream/6 border border-cream/10 px-4 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-dark border-t border-cream/6">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal className="flex flex-wrap justify-between gap-6">
          {[{ n: "9", u: "년+", l: "영상 제작 경력" }, { n: "100", u: "만+", l: "누적 구독자" }, { n: "4", u: "배", l: "상담 전환율 증가" }, { n: "2", u: "개월", l: "채널 성장 기간" }].map(k => (
            <div key={k.l} className="text-center">
              <span className="text-[36px] font-serif font-light text-cream/80 tracking-[-0.02em]">{k.n}<span className="text-[16px] text-cream/30 ml-0.5">{k.u}</span></span>
              <span className="block text-[10px] text-cream/25 tracking-[0.1em] uppercase mt-1">{k.l}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Why branded content */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">왜 브랜디드 콘텐츠인가요?</p>
              <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] mb-8">
                광고는 3초 만에 스킵됩니다.<br />콘텐츠는 10분을 붙잡습니다.
              </h2>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                무형 서비스를 파는 브랜드에게 유튜브는 단순한 영상 플랫폼이 아닙니다. 잠재 고객이 '이 브랜드를 믿을 수 있는가?'를 판단하는 <strong className="text-t-strong font-medium">신뢰의 공간</strong>입니다. 강사가 어떤 사람인지, 수강생들의 반응은 어떤지, 실제 현장은 어떤 분위기인지 — 이런 것들을 텍스트나 이미지로는 전달할 수 없습니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                그래서 우리는 '조회수를 위한 영상'이 아니라 <strong className="text-t-strong font-medium">'상담과 매출로 연결되는 영상'</strong>을 만듭니다. 창업자의 서사, 강의 현장의 분위기, 수강생의 진짜 후기 — 이런 서사형 콘텐츠가 광고보다 훨씬 강력한 신뢰를 만듭니다. 실제로 유튜브를 운영한 뒤 상담 건수가 4배 증가한 클라이언트도 있습니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2]">
                9년 이상의 영상 제작 경력과 누적 100만+ 구독자를 보유한 파트너 프로덕션과 함께합니다. 기획부터 촬영, 편집, 업로드, 썸네일, 숏폼 재가공까지 원스톱으로 대행하므로 대표님은 촬영에만 참여하시면 됩니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <img src={charCurly} alt="PIXELPAGE" className="w-[180px] rounded-xl animate-float sticky top-24" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* YouTube operations detail */}
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">YouTube Operations</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            유튜브 운영 상세
          </h2>
          <p className="text-[14px] text-t-secondary mt-3 max-w-[520px] leading-[1.9]">
            유튜브 채널을 처음 시작하는 브랜드부터, 기존 채널을 리뉴얼하고 싶은 브랜드까지. 상황에 맞는 전략을 설계합니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[
            { t: "올인원 채널 운영", d: "주제 기획부터 촬영, 편집, 업로드, 썸네일 디자인, 숏폼 재가공까지 전 과정을 대행합니다. 대표님은 촬영에만 참여하시면 됩니다. 매주 콘텐츠 캘린더를 공유하고, 촬영 일정을 조율합니다. 영상 1개를 촬영하면 롱폼 1개 + 숏폼 2-3개가 나옵니다." },
            { t: "알고리즘 기반 주제 선정", d: "감이 아닌 데이터로 주제를 선정합니다. 키워드 검색량, 경쟁 강도, 트렌드, 시청자 행동 패턴을 분석해 가장 효과적인 콘텐츠를 기획합니다. '지금 올려야 할 영상'과 '6개월 뒤에도 검색될 영상'을 균형 있게 배치합니다." },
            { t: "매출 연결 전략", d: "조회수 100만을 자랑하는 게 아니라, 실제 상담과 매출로 연결되는 구조를 설계합니다. 영상 내 CTA(Call to Action) 설계, 댓글 관리, 커뮤니티 탭 운영, 고정 댓글 전략까지. 영상을 본 사람이 '상담을 받아볼까'라는 행동으로 이어지도록 만듭니다." },
            { t: "2개월 내 채널 성장", d: "추천 알고리즘(홈/다음 영상)과 검색 유입을 동시에 공략합니다. 2개월 내에 구독자와 조회수를 빠르게 성장시키는 전략을 실행합니다. 실제로 1년 6개월간 구독자 73명이던 채널을 2개월 만에 2,500명으로 성장시킨 사례가 있습니다." },
            { t: "숏폼 자동 재가공", d: "롱폼(10-20분) 콘텐츠의 핵심 장면을 YouTube Shorts, Instagram Reels, TikTok용 숏폼(15-60초)으로 재가공합니다. 하나의 촬영으로 5개 이상의 콘텐츠를 생산하므로, 콘텐츠 대비 비용 효율이 매우 높습니다." },
            { t: "카테고리 1등 포지션", d: "단기 조회수가 아닌, 장기적으로 해당 분야에서 가장 신뢰받는 채널 포지션을 구축합니다. '스피치 학원' 하면 ○○, '온라인 코칭' 하면 ○○ — 카테고리를 대표하는 채널이 되도록 설계합니다." },
          ].map(item => (
            <div key={item.t} className="bg-background rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <h4 className="text-[15px] font-medium text-t-strong mb-3">{item.t}</h4>
              <p className="text-[13px] text-t-secondary leading-[1.9]">{item.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Before/After */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Results</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            실제 채널 성장 케이스
          </h2>
          <p className="text-[14px] text-cream/40 mt-3 max-w-[520px] leading-[1.9]">
            1년 6개월 동안 혼자 운영하며 구독자 73명에 머물던 채널이, PIXELPAGE와 함께한 뒤 2개월 만에 구독자 2,500명, 총 조회수 44만으로 성장했습니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-cream/4 border border-cream/8 rounded-lg p-7">
            <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold">채널 성장</span>
            <h3 className="text-[16px] font-medium text-cream/80 mt-3 mb-4">Before vs After</h3>
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
            <h3 className="text-[16px] font-medium text-cream/80 mt-3 mb-4">상담 건수 4배 증가</h3>
            <p className="text-[13px] text-cream/40 leading-[1.8] mb-6">
              유튜브 콘텐츠를 통해 브랜드 인지도와 신뢰가 쌓이면서, 월 평균 상담 건수가 30건에서 120건 이상으로 4배 증가했습니다. 광고비를 추가로 쓰지 않아도, 콘텐츠가 24시간 영업사원 역할을 합니다.
            </p>
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
          <p className="text-[13px] text-t-tertiary mb-6 max-w-[400px] mx-auto leading-[1.8]">기획부터 촬영, 편집, 운영까지 원스톱으로. 무료 상담에서 채널 전략을 함께 설계합니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default BrandedPage;
