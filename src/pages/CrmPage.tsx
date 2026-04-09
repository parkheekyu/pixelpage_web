import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const CrmPage = () => {
  return (
    <div className="pt-[72px]">
      <section className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <SectionHeader label="CRM Marketing" title="CRM 마케팅" subtitle="관심객을 고객으로, 고객을 팬으로." />
            <p className="text-base text-foreground/80 leading-relaxed max-w-[700px] mb-12">
              퍼포먼스 광고가 관객을 데려온다면, CRM은 <strong className="text-foreground">그들이 떠나지 않도록 붙잡습니다</strong>. 리드 수집부터 구매, 재구매까지 — 전 퍼널을 자동화합니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Flow */}
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal>
            <SectionHeader label="CRM Flow" title="리드부터 팬덤까지,<br/>전 퍼널 자동화" dark />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { step: "01", title: "리드 수집", desc: "광고 → 랜딩 → 폼 → DB 연동. 유입 소스별 리드를 자동 분류·관리합니다." },
                { step: "02", title: "육성 자동화", desc: "카카오 알림톡 · 이메일 · 문자 자동화 시퀀스로 관심에서 구매 의향으로." },
                { step: "03", title: "전환 최적화", desc: "타이밍별 메시지 A/B 테스트. 전환율을 데이터로 계속 높여갑니다." },
                { step: "04", title: "리텐션 · 팬덤", desc: "구매 후 고객 경험 설계. 재구매·추천·팬덤으로 이어지는 장기 관계를 만듭니다." },
              ].map((s, i) => (
                <div key={s.step} className="relative">
                  <div className="bg-cream/5 border border-cream/10 p-6 rounded-lg">
                    <span className="font-display text-xs text-gold tracking-[0.15em] block mb-3">{s.step}</span>
                    <h4 className="font-serif text-lg font-medium text-cream mb-3">{s.title}</h4>
                    <p className="text-sm text-cream/60 leading-relaxed">{s.desc}</p>
                  </div>
                  {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 text-gold text-xl">→</div>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 bg-dark border-t border-cream/10">
        <div className="container">
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {["📱 카카오 알림톡", "📧 이메일 마케팅", "💬 문자 자동화", "🔔 푸시 알림", "📊 리드 대시보드"].map((tag) => (
                <span key={tag} className="text-sm text-cream/70 bg-cream/5 border border-cream/10 px-5 py-2.5 rounded-full">{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground mb-4">CRM 자동화가 필요하신가요?</h2>
            <p className="text-muted-foreground mb-8">퍼널 전체를 자동화하는 방법을 알려드립니다.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-block px-9 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-all">
              무료 상담 신청
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CrmPage;
