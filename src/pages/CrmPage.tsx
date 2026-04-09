import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import crmAuto from "@/assets/crm-auto.jpg";

const CrmPage = () => (
  <div className="pt-24">
    {/* Hero */}
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={crmAuto} alt="CRM 마케팅 자동화" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-dark/80" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-cream/30 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" /> 홈으로
        </Link>
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">CRM Marketing</p>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-cream/95 leading-[1.15] tracking-[-0.02em] mb-4">
            CRM 마케팅
          </h1>
          <p className="text-[18px] text-cream/60 leading-[1.7] max-w-[520px]">
            퍼포먼스 광고가 관객을 데려온다면, CRM은 <strong className="text-cream/90 font-medium">그들이 떠나지 않도록 붙잡습니다.</strong>
          </p>
        </Reveal>
      </div>
    </section>

    {/* Funnel Flow — concrete */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">CRM Flow</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            리드부터 팬덤까지, 4단계 자동화
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { s: "01", t: "리드 수집", d: "광고 → 랜딩 → 폼 → DB 연동. 유입 소스별로 자동 분류합니다. 어디서 온 리드가 가장 좋은지 바로 알 수 있습니다.", color: "border-gold/30" },
            { s: "02", t: "육성 자동화", d: "카카오 알림톡 · 이메일 · 문자 시퀀스를 설계합니다. 시간, 행동, 관심사에 따라 자동으로 다음 메시지를 보냅니다.", color: "border-gold/50" },
            { s: "03", t: "전환 최적화", d: "타이밍별 메시지 A/B 테스트로 전환율을 향상시킵니다. 어떤 메시지가 구매를 만드는지 데이터로 확인합니다.", color: "border-gold/70" },
            { s: "04", t: "리텐션 · 팬덤", d: "재구매 · 추천 · 팬덤으로 이어지는 장기 관계를 설계합니다. 한 번 온 고객이 계속 오게 만듭니다.", color: "border-gold" },
          ].map(p => (
            <div key={p.s} className={`bg-card rounded-lg shadow-card p-6 border-t-2 ${p.color} hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`}>
              <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.s}</span>
              <h3 className="text-[15px] font-medium text-t-strong mt-3 mb-2">{p.t}</h3>
              <p className="text-[13px] text-t-secondary leading-[1.7]">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Channels */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Channels</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            구체적으로 어떤 채널을 사용하나요?
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: "카카오 알림톡", d: "90%+ 오픈율. 예약 확인, 결제 안내, 후속 메시지를 자동으로 발송합니다." },
            { t: "이메일 마케팅", d: "뉴스레터, 프로모션, 교육 시퀀스. 세그먼트별 맞춤 메시지를 보냅니다." },
            { t: "문자 (SMS/LMS)", d: "짧은 한 줄로 행동을 유도합니다. 시간 민감한 프로모션에 최적." },
            { t: "푸시 알림", d: "앱 · 웹 푸시로 실시간 리인게이지먼트. 이탈 방지에 효과적입니다." },
            { t: "리드 대시보드", d: "리드 상태, 전환율, 채널별 성과를 한눈에 볼 수 있는 대시보드를 제공합니다." },
            { t: "A/B 테스트 자동화", d: "메시지 · 타이밍 · CTA를 자동으로 테스트하고 최적 조합을 찾습니다." },
          ].map(f => (
            <div key={f.t} className="bg-cream/4 border border-cream/8 rounded-lg p-5 hover:border-gold/20 transition-colors">
              <h4 className="text-[14px] font-medium text-cream/80 mb-1.5">{f.t}</h4>
              <p className="text-[12px] text-cream/40 leading-[1.7]">{f.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-t-strong mb-3">CRM 자동화가 필요하신가요?</h2>
          <p className="text-[13px] text-t-tertiary mb-6">관심객을 고객으로, 고객을 팬으로 만들어 드립니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default CrmPage;
