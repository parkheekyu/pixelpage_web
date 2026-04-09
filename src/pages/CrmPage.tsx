import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const CrmPage = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-t-disabled hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">CRM Marketing</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-t-strong leading-[1.15] tracking-[-0.02em] mb-4">
            CRM 마케팅
          </h1>
          <p className="font-display italic text-[clamp(18px,2.5vw,28px)] text-t-tertiary">관심객을 고객으로, 고객을 팬으로.</p>
          <p className="text-[14px] text-t-secondary leading-[1.9] max-w-[500px] mt-6">
            퍼포먼스 광고가 관객을 데려온다면, CRM은 <strong className="text-t-strong font-medium">그들이 떠나지 않도록 붙잡습니다</strong>.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Flow — dark section */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">CRM Flow</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            리드부터 팬덤까지
          </h2>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            { s: "01", t: "리드 수집", d: "광고 → 랜딩 → 폼 → DB 연동. 유입 소스별 자동 분류." },
            { s: "02", t: "육성 자동화", d: "카카오 · 이메일 · 문자 시퀀스로 구매 의향 전환." },
            { s: "03", t: "전환 최적화", d: "타이밍별 메시지 A/B 테스트로 전환율 향상." },
            { s: "04", t: "리텐션", d: "재구매 · 추천 · 팬덤으로 이어지는 장기 관계." },
          ].map((p, i) => (
            <div key={p.s} className="border-t border-cream/8 pt-6 pr-6 pb-6 relative">
              <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.s}</span>
              <h3 className="text-[15px] font-medium text-cream/80 mt-3 mb-2">{p.t}</h3>
              <p className="text-[13px] text-cream/40 leading-[1.7]">{p.d}</p>
              {i < 3 && <span className="hidden lg:block absolute top-1/2 -right-1 text-[14px] text-gold/40">→</span>}
            </div>
          ))}
        </Reveal>
        <Reveal className="mt-10 flex flex-wrap gap-2">
          {["카카오 알림톡", "이메일 마케팅", "문자 자동화", "푸시 알림", "리드 대시보드"].map(t => (
            <span key={t} className="text-[11px] text-cream/40 bg-cream/4 border border-cream/8 px-4 py-1.5 rounded-full">{t}</span>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-t-strong mb-6">CRM 자동화가 필요하신가요?</h2>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default CrmPage;
