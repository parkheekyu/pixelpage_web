import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import charCurly from "@/assets/char-curly.png";

const services = [
  { num: "01", name: "퍼포먼스 마케팅", platforms: "Meta · Google · 토스 · 당근 · TikTok", desc: "의향이 있는 사람만 남도록 퍼널 상단부터 메시지를 거릅니다.", href: "/services/performance", stages: ["인지", "전환"], color: "bg-gold/10 text-gold border-gold/25" },
  { num: "02", name: "브랜디드 콘텐츠", platforms: "브랜디드 유튜브 · 숏폼", desc: "감각을 번역하는 서사형 영상. 브랜드 고유의 톤을 지킵니다.", href: "/services/branded", stages: ["인지", "신뢰"], color: "bg-purple-500/10 text-purple-600 border-purple-400/20" },
  { num: "03", name: "검색엔진 최적화", platforms: "네이버 SEO · 구글 SEO", desc: "찾아오게 만드는 콘텐츠 기반 신뢰 구축.", href: "/services/seo", stages: ["인지", "신뢰"], badge: "준비중", color: "bg-green-500/10 text-green-700 border-green-400/20" },
  { num: "04", name: "CRM 마케팅", platforms: "이메일 · 카카오 · 문자 자동화", desc: "관심객을 고객으로, 고객을 팬으로. 퍼널 자동화와 리텐션 설계.", href: "/services/crm", stages: ["신뢰", "전환", "유지"], color: "bg-pink-500/10 text-pink-600 border-pink-400/20" },
  { num: "05", name: "웹 빌드", platforms: "랜딩 페이지 · 브랜드 사이트", desc: "광고와 연동되는 전환 최적화 웹. 보여주기 위한 웹이 아닌 파는 웹.", href: "/services/webbuild", stages: ["전환", "유지"], color: "bg-blue-500/10 text-blue-600 border-blue-400/20" },
];

const cases = [
  { cat: "온라인 교육 · 지식 커머스", name: "디지털노마드 하이클래스", tagline: "국내 디지털노마드 카테고리 커뮤니티 TOP 1%", stats: [{ num: "70,000+", label: "카페 회원" }, { num: "280+", label: "캠페인" }, { num: "3.93%", label: "Avg. CTR" }], desc: "국내 지식 크리에이터 280+ 캠페인. 업계 최상위권 규모의 지식 커머스 브랜드로 성장시킨 전담 광고 파트너.", dark: true },
  { cat: "B2B 지식 · 퍼포먼스 런칭", name: "부트스트래퍼", tagline: "단기 집행 ₩40M · 해외 풀빌라 전략 상품 흥행", stats: [{ num: "₩40M", label: "테스트 집행" }, { num: "500%", label: "ROAS" }, { num: "High-Ticket", label: "상품 유형" }], desc: "고단가 B2B 지식 상품도 짧은 사이클 안에 수익 구간에 진입.", dark: false },
  { cat: "오프라인 학원 · 다지점 확장", name: "플러스 스피치 학원", tagline: "월 매출 ₩30M → ₩200M · 지점 4개 확장", stats: [{ num: "₩200M", label: "월 매출 After" }, { num: "×4", label: "신규 지점" }, { num: "≈6.6×", label: "성장률" }], desc: "오프라인 체험 서비스가 광고만으로도 다지점 사업으로 확장될 수 있다는 것을 증명.", dark: false },
  { cat: "가맹 · 오프라인 학원 네트워크", name: "라 컴퍼니", tagline: "전국 7개 지점 네트워크로 확장한 실용음악 가맹", stats: [{ num: "7+", label: "전국 지점" }, { num: "Franchise", label: "사업 모델" }, { num: "National", label: "커버리지" }], desc: "라실용음악학원을 전국 7개 지점 규모의 가맹 네트워크로 성장.", dark: true },
];

const Index = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="min-h-screen bg-background relative flex items-center pt-[120px] pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, hsl(38 40% 55% / 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(38 40% 55% / 0.06) 0%, transparent 40%)"
        }} />
        <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          <div>
            <p className="font-display text-[13px] tracking-[0.25em] text-gold uppercase mb-6 opacity-0 animate-fade-up">
              교육 · 지식 · 경험 · 문화
            </p>
            <h1 className="font-serif text-[clamp(52px,7vw,96px)] font-normal leading-[1.1] tracking-tight text-foreground mb-7 opacity-0 animate-fade-up delay-200">
              만질 수 없는 것을<br />
              <em className="not-italic text-gold">파는 일.</em>
            </h1>
            <p className="text-[17px] text-muted-foreground leading-relaxed mb-10 max-w-[460px] opacity-0 animate-fade-up delay-300">
              무형의 가치를 파는 브랜드의 전담 마케팅 파트너.<br />
              짧은 사이클 안에, 관객이 '한 번 경험해 보고 싶다'고<br />
              느끼는 그 순간까지 설계합니다.
            </p>
            <div className="flex gap-4 flex-wrap mb-14 opacity-0 animate-fade-up delay-400">
              <Link to="/#contact" className="inline-block px-9 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-all hover:-translate-y-0.5">
                무료 상담 신청
              </Link>
              <Link to="/#cases" className="inline-block px-8 py-[15px] border border-foreground/20 text-foreground text-sm font-medium hover:border-gold hover:text-gold transition-all">
                성과 보기
              </Link>
            </div>
            <div className="flex items-center gap-8 opacity-0 animate-fade-up delay-500">
              {[{ num: "100%", label: "무형 서비스 전담" }, { num: "5+", label: "시그니처 브랜드" }, { num: "TOP 1%", label: "니치 마켓 포지션" }].map((s, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-9 bg-foreground/10" />}
                  <div>
                    <span className="block font-display text-[28px] text-foreground tracking-tight">{s.num}</span>
                    <span className="block text-[11px] text-muted-foreground tracking-widest mt-0.5">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start opacity-0 animate-fade-up delay-500">
            <div className="flex items-end gap-4">
              <img src={charCurly} alt="픽셀페이지" className="w-[210px] rounded-3xl bg-cream-dark animate-float1 object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-md overflow-hidden w-full">
              {[{ num: "3.93%", label: "Avg. CTR" }, { num: "500%", label: "Peak ROAS" }, { num: "×6.6", label: "매출 성장" }, { num: "280+", label: "캠페인" }].map((k, i) => (
                <div key={i} className="bg-background p-4 text-center">
                  <span className="block font-display text-[22px] text-foreground tracking-tight">{k.num}</span>
                  <span className="block text-[10px] text-muted-foreground tracking-widest mt-0.5 uppercase">{k.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-12 hidden lg:flex items-center gap-4">
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground uppercase">스크롤</span>
          <div className="w-[60px] h-px bg-gold animate-scroll-pulse" />
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal className="max-w-[900px]">
            <SectionHeader label="01 · Philosophy" title="만질 수 없는 것을<br/>파는 일은, 조금 다릅니다." dark />
            <div className="w-[60px] h-0.5 bg-gold my-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <p className="text-base text-cream/75 leading-relaxed">
                교육·지식·체험·문화 — 무형의 가치를 파는 브랜드는 '공급의 질'만큼
                <strong className="text-cream">'의향을 가진 관객과 어떻게 만나는가'가 전부입니다.</strong>
              </p>
              <p className="text-base text-cream/75 leading-relaxed">
                Pixelpage는 이 낯선 시장에서만 일해 왔습니다. 예산의 크기가 아니라 짧은 시간 안에 얼마나 또렷한 결과를 만들 수 있는가 — 상품이 아니라 서사, 숫자가 아니라 태도를 다루는 브랜드들의 전담 파트너입니다.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Intangible First", body: "무형 서비스 전담. 제품 기반 이커머스와 완전히 다른 의사결정 구조를 이해합니다." },
                { num: "02", title: "Narrative Creative", body: "감각을 번역하는 크리에이티브. 브랜드 고유의 톤을 해치지 않는 서사를 설계합니다." },
                { num: "03", title: "Short-Cycle Wins", body: "짧은 사이클 안에 유의미한 결과. 단기 집행만으로 브랜드가 다음 단계로 넘어갑니다." },
                { num: "04", title: "Category Leaders", body: "함께한 브랜드들은 각자의 카테고리 상위권으로 올라섰습니다." },
              ].map((p) => (
                <div key={p.num} className="border-t border-cream/10 pt-6">
                  <span className="block font-display text-xs text-gold tracking-[0.15em] mb-3">{p.num}</span>
                  <h3 className="font-accent text-lg font-bold text-cream mb-3">{p.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICES ECOSYSTEM ─── */}
      <section className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <SectionHeader label="02 · Services" title="유기적으로 연결된<br/>마케팅 설계" subtitle="5가지 서비스는 각각 독립적으로 강하고, 함께할 때 가장 강력합니다." />
          </Reveal>
          <Reveal className="flex items-center gap-0 mt-14 mb-8">
            {["인지", "신뢰", "전환", "유지"].map((f, i) => (
              <div key={f} className="flex items-center gap-0">
                {i > 0 && <div className="flex-1 h-px bg-foreground/10 max-w-[48px] min-w-4" />}
                <span className={`text-xs font-semibold tracking-[0.12em] uppercase px-5 py-2 border rounded-full whitespace-nowrap transition-all ${
                  i === 0 ? "bg-dark text-gold border-dark" : "text-muted-foreground border-foreground/10"
                }`}>{f}</span>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc) => (
                <Link
                  key={svc.num}
                  to={svc.href}
                  className="block p-7 bg-card border border-border rounded-md transition-all hover:-translate-y-1 hover:shadow-lg hover:border-gold group relative overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-display text-[11px] text-muted-foreground tracking-[0.15em]">{svc.num}</span>
                    <span className="text-lg text-border group-hover:text-gold group-hover:translate-x-1 transition-all">→</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-1">{svc.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2.5 tracking-wide">
                    {svc.platforms}
                    {svc.badge && <span className="ml-2 inline-block text-[10px] bg-gold/15 text-gold px-2 py-0.5 rounded-full border border-gold/30">{svc.badge}</span>}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{svc.desc}</p>
                  <div className="flex gap-1.5 mt-4 pt-4 border-t border-border">
                    {svc.stages.map((s) => (
                      <span key={s} className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold tracking-wide border ${svc.color}`}>{s}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section id="cases" className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <SectionHeader label="03 · Case Studies" title="짧은 기간 안에<br/>만들어 낸 또렷한 결과." subtitle="5개의 시그니처 브랜드, 각자의 카테고리 상위권." />
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cases.map((c, i) => (
                <div key={i} className={`p-8 rounded-lg ${c.dark ? "bg-dark" : "bg-card border border-border"}`}>
                  <div className="mb-6">
                    <div className={`text-[11px] tracking-widest uppercase mb-2 ${c.dark ? "text-gold" : "text-muted-foreground"}`}>{c.cat}</div>
                    <h3 className={`font-serif text-2xl font-medium mb-1 ${c.dark ? "text-cream" : "text-foreground"}`}>{c.name}</h3>
                    <p className={`text-sm ${c.dark ? "text-cream/50" : "text-muted-foreground"}`}>{c.tagline}</p>
                  </div>
                  <div className="flex gap-6 mb-4">
                    {c.stats.map((s, j) => (
                      <div key={j}>
                        <span className={`block font-display text-2xl ${c.dark ? "text-cream" : "text-foreground"}`}>{s.num}</span>
                        <span className={`block text-[10px] tracking-widest mt-1 ${c.dark ? "text-cream/40" : "text-muted-foreground"}`}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className={`text-sm leading-relaxed ${c.dark ? "text-cream/60" : "text-foreground/70"}`}>{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY PIXELPAGE ─── */}
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-2">
                <SectionHeader label="04 · Why Pixelpage" title="왜 우리인가." dark />
                <div className="flex flex-col gap-8 mt-8">
                  {[
                    { num: "01", title: "무형의 경험만 다뤄 왔습니다.", body: "관람객이 사는 것은 작품 자체가 아니라, 그 공간에서 자신이 겪게 될 한 시간의 감각입니다. Pixelpage는 '한 번 경험해 보고 싶다'는 감정을 설계해 온 경험이 가장 깊은 에이전시입니다." },
                    { num: "02", title: "짧은 사이클 안에 또렷한 결과.", body: "기간이 정해진 서비스와 전시는 예산을 오래 투입할 수 없습니다. 저희는 단기 집행만으로 월 매출을 6배 만들고, 단 ₩40M로 고단가 상품을 수익 구간에 올려본 팀입니다." },
                    { num: "03", title: "의향이 있는 관객만을 찾는 타겟팅.", body: "'전시에 관심 있는 사람'이 아니라 '이번 전시를 보러 올 사람'을 정의하고 찾는 일을 합니다." },
                  ].map((r) => (
                    <div key={r.num} className="flex gap-6">
                      <span className="font-display text-sm text-gold tracking-wide shrink-0">{r.num}</span>
                      <div>
                        <h3 className="font-serif text-lg font-medium text-cream mb-2">{r.title}</h3>
                        <p className="text-sm text-cream/60 leading-relaxed">{r.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={charCurly} alt="픽셀페이지 팀" className="w-[200px] rounded-3xl animate-float2" />
                <span className="text-xs text-cream/40 tracking-widest">Meta Business Partner</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <div className="max-w-[700px]">
              <SectionHeader label="05 · Contact" title="한 번 얘기해봐요." />
              <p className="text-muted-foreground mb-8">
                지금 당장 계약이 목표가 아닙니다.<br />
                어떻게 팔 수 있는지 함께 생각해 보는 것부터 시작합니다.
              </p>
              <a href="mailto:contact@pixelpage.co.kr" className="block font-serif text-2xl text-foreground hover:text-gold transition-colors mb-2">
                contact@pixelpage.co.kr
              </a>
              <p className="text-sm text-muted-foreground mb-8">* 보통 24시간 이내 회신드립니다.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="mailto:contact@pixelpage.co.kr" className="inline-block px-9 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-all">
                  이메일 문의
                </a>
                <a href="https://pixelpage.co.kr" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-[15px] border border-foreground/20 text-foreground text-sm font-medium hover:border-gold hover:text-gold transition-all">
                  웹사이트 방문
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
