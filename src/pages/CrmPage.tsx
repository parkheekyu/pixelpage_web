import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import crmAuto from "@/assets/crm-auto.jpg";
import charFemale from "@/assets/char-female.jpeg";

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
          <p className="text-[18px] text-cream/60 leading-[1.8] max-w-[560px]">
            퍼포먼스 광고가 관객을 데려온다면, CRM은 <strong className="text-cream/90 font-medium">그들이 떠나지 않도록 붙잡고, 구매하게 만들고, 다시 오게 만듭니다.</strong>
          </p>
        </Reveal>
      </div>
    </section>

    {/* Why CRM */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">왜 CRM인가요?</p>
              <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em] mb-8">
                광고비의 70%는 '관심만 있는 사람'에게 쓰입니다.
              </h2>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                무형 서비스의 구매 여정은 깁니다. 광고를 클릭하고 랜딩 페이지를 보고 '괜찮은데?'라고 생각했지만, 바로 구매하지는 않습니다. 가격을 비교하고, 후기를 찾아보고, 며칠 뒤에 다시 생각합니다. 이 과정에서 대부분의 잠재 고객이 이탈합니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2] mb-6">
                CRM 마케팅은 이 이탈 구간을 메웁니다. 관심을 보인 사람에게 <strong className="text-t-strong font-medium">적절한 타이밍에, 적절한 메시지를, 적절한 채널로</strong> 자동 발송합니다. '관심만 있는 사람'을 '구매하는 사람'으로, 한 번 구매한 사람을 '다시 오는 사람'으로 바꿉니다.
              </p>
              <p className="text-[15px] text-t-secondary leading-[2]">
                카카오 알림톡, 이메일, 문자를 조합한 자동화 시퀀스를 설계하고, 리드의 행동과 관심사에 따라 다음 메시지를 자동으로 분기합니다. 수동으로 한 명 한 명에게 메시지를 보내는 게 아니라, 시스템이 24시간 자동으로 육성하고 전환합니다.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-[180px] rounded-xl overflow-hidden sticky top-24">
                <img src={charFemale} alt="PIXELPAGE CRM" className="w-full object-cover object-top scale-[1.15] origin-top" loading="lazy" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 4-step funnel */}
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">CRM Flow</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            리드부터 팬덤까지, 4단계 자동화
          </h2>
          <p className="text-[14px] text-t-secondary mt-3 max-w-[520px] leading-[1.9]">
            광고에서 유입된 리드가 구매하고, 재구매하고, 추천하는 팬이 되기까지의 전체 여정을 자동화합니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { s: "01", t: "리드 수집", d: "광고 클릭 → 랜딩 페이지 → 폼 작성 → DB 자동 연동. 유입 소스(Meta, Google, 블로그 등)별로 리드를 자동 분류합니다. 어떤 광고에서 온 리드가 가장 전환율이 높은지 바로 확인할 수 있습니다. 중복 리드 제거, 유효성 검증도 자동입니다.", color: "border-gold/30" },
            { s: "02", t: "육성 자동화", d: "리드가 수집되면 즉시 자동 육성 시퀀스가 시작됩니다. 카카오 알림톡으로 첫 인사 → 3일 후 교육 콘텐츠 이메일 → 7일 후 후기 영상 문자 → 14일 후 프로모션 알림. 시간, 행동(열어봤는지, 클릭했는지), 관심사에 따라 다음 메시지가 자동 분기됩니다.", color: "border-gold/50" },
            { s: "03", t: "전환 최적화", d: "어떤 메시지가, 어떤 타이밍에, 어떤 채널로 보내야 구매로 이어지는지를 데이터로 확인합니다. 메시지 A/B 테스트, 발송 시간 최적화, CTA 문구 테스트를 자동으로 실행하고 최적 조합을 찾습니다. 전환율을 매주 개선합니다.", color: "border-gold/70" },
            { s: "04", t: "리텐션 · 팬덤", d: "한 번 구매한 고객이 다시 오게 만듭니다. 수강 완료 후 후속 과정 안내, 생일·기념일 메시지, VIP 전용 혜택, 추천인 리워드 등 장기 관계를 설계합니다. 재구매율을 높이고, 고객이 자발적으로 추천하는 팬으로 전환합니다.", color: "border-gold" },
          ].map(p => (
            <div key={p.s} className={`bg-background rounded-lg shadow-card p-6 border-t-2 ${p.color} hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`}>
              <span className="text-[11px] font-display text-gold tracking-[0.1em]">{p.s}</span>
              <h3 className="text-[15px] font-medium text-t-strong mt-3 mb-3">{p.t}</h3>
              <p className="text-[13px] text-t-secondary leading-[1.9]">{p.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Channels detail */}
    <section className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-4">Channels & Tools</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-cream/90 leading-[1.25] tracking-[-0.02em]">
            어떤 채널과 도구를 사용하나요?
          </h2>
          <p className="text-[14px] text-cream/40 mt-3 max-w-[520px] leading-[1.9]">
            브랜드와 타겟에 맞는 채널을 선택하고, 자동화 도구를 연동합니다.
          </p>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: "카카오 알림톡", d: "국내 메시지 채널 중 가장 높은 90%+ 오픈율을 자랑합니다. 예약 확인, 결제 안내, 수강 안내 등 중요한 메시지를 빠짐없이 전달합니다. 변수(이름, 상품명, 날짜 등)를 자동 삽입해 개인화된 메시지를 대량 발송합니다." },
            { t: "이메일 마케팅", d: "뉴스레터, 프로모션, 교육 시퀀스, 온보딩 안내 등 다양한 형태의 이메일을 설계합니다. 세그먼트별(신규/기존/VIP/이탈 위험) 맞춤 메시지를 보내고, 오픈율·클릭률·전환율을 추적합니다." },
            { t: "문자 (SMS/LMS)", d: "짧은 한 줄로 즉각적인 행동을 유도합니다. 시간 민감한 프로모션(마감 임박, 한정 할인)에 최적입니다. 카카오 알림톡이 안 읽혔을 때의 백업 채널로도 활용합니다." },
            { t: "푸시 알림", d: "앱 푸시 또는 웹 푸시로 실시간 리인게이지먼트를 합니다. 장바구니 이탈, 수강 미완료, 새 콘텐츠 알림 등에 활용합니다. 이탈 방지에 매우 효과적입니다." },
            { t: "리드 대시보드", d: "리드 상태(신규/육성 중/상담 완료/구매), 채널별 전환율, 시퀀스별 성과를 한눈에 볼 수 있는 대시보드를 제공합니다. 어디서 병목이 생기는지 바로 확인하고 개선합니다." },
            { t: "A/B 테스트 자동화", d: "메시지 문구, 발송 타이밍, CTA 문구, 이메일 제목을 자동으로 A/B 테스트합니다. 통계적으로 유의미한 차이가 확인되면 자동으로 승자 버전을 채택합니다. 매주 전환율이 개선됩니다." },
          ].map(f => (
            <div key={f.t} className="bg-cream/4 border border-cream/8 rounded-lg p-6 hover:border-gold/20 transition-colors">
              <h4 className="text-[14px] font-medium text-cream/80 mb-2">{f.t}</h4>
              <p className="text-[13px] text-cream/45 leading-[1.9]">{f.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Use cases */}
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-t-disabled mb-4">Use Cases</p>
          <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-light text-t-strong leading-[1.25] tracking-[-0.02em]">
            이런 상황에서 효과적입니다
          </h2>
        </Reveal>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { t: "광고는 돌리는데, 구매까지 이어지지 않을 때", d: "광고 클릭은 많은데 실제 구매(수강 신청, 상담 예약)로 이어지는 비율이 낮다면, 리드 육성 자동화가 필요합니다. 관심을 보인 사람에게 적절한 타이밍에 후속 메시지를 보내면 전환율이 2-3배 올라갑니다." },
            { t: "한 번 온 고객이 재구매하지 않을 때", d: "첫 수강은 했지만 다음 과정으로 이어지지 않는다면, 리텐션 시퀀스가 필요합니다. 수강 완료 시점에 맞춰 후속 과정을 안내하고, 재구매 혜택을 제공하면 고객 생애가치(LTV)가 크게 올라갑니다." },
            { t: "리드는 많은데, 수동으로 관리가 안 될 때", d: "엑셀로 리드를 관리하고, 한 명 한 명에게 카톡을 보내고 있다면, 자동화가 시급합니다. CRM 자동화를 도입하면 리드 관리에 쓰는 시간을 90% 줄이면서 전환율은 높일 수 있습니다." },
            { t: "여러 채널의 성과를 통합해서 보고 싶을 때", d: "Meta 광고, Google 광고, 블로그, 유튜브 등 다양한 채널에서 유입되는 리드를 하나의 대시보드에서 통합 관리합니다. 어떤 채널에서 온 리드가 가장 전환율이 높은지 한눈에 확인할 수 있습니다." },
          ].map(item => (
            <div key={item.t} className="bg-card rounded-lg shadow-card p-7 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
              <h4 className="text-[15px] font-medium text-t-strong mb-3">{item.t}</h4>
              <p className="text-[13px] text-t-secondary leading-[1.9]">{item.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-dark text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-[24px] font-light text-cream/80 mb-3">CRM 자동화가 필요하신가요?</h2>
          <p className="text-[13px] text-cream/35 mb-6 max-w-[400px] mx-auto leading-[1.8]">무료 상담에서 현재 리드 관리 현황을 진단하고, 최적의 CRM 자동화 전략을 제안드립니다.</p>
          <a href="mailto:contact@pixelpage.co.kr" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground text-[13px] font-bold rounded-md hover:bg-gold-light transition-colors">
            무료 상담 신청 <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </Reveal>
      </div>
    </section>
  </div>
);

export default CrmPage;
