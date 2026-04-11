import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Megaphone, Video, Search, Mail, Globe,
  TrendingUp, TrendingDown, Eye, MousePointerClick, DollarSign,
  Play, ThumbsUp, Users, Clock, BarChart3,
  FileText, ExternalLink, ArrowUpRight,
  Send, CheckCheck, MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

/* ── Mac Window Shell ── */
const MacWindow = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-white/10">
    <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
      <div className="flex gap-[7px]">
        <div className="w-[13px] h-[13px] rounded-full bg-[#ff5f57]" />
        <div className="w-[13px] h-[13px] rounded-full bg-[#febc2e]" />
        <div className="w-[13px] h-[13px] rounded-full bg-[#28c840]" />
      </div>
      <span className="ml-3 text-[13px] text-neutral-400 font-mono">{title}</span>
    </div>
    {children}
  </div>
);

/* ── 01. 퍼포먼스: 광고 관리자 대시보드 ── */
const PerformanceMockup = () => (
  <MacWindow title="ads-manager.pixelpage.io">
    <div className="p-5 lg:p-6 text-[13px] lg:text-[14px]">
      {/* Top metrics */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { label: "총 지출", value: "₩34.2M", icon: DollarSign, change: "+12%", up: true },
          { label: "노출수", value: "2.4M", icon: Eye, change: "+28%", up: true },
          { label: "클릭률", value: "3.93%", icon: MousePointerClick, change: "+0.8%", up: true },
          { label: "전환단가", value: "₩4,200", icon: TrendingDown, change: "-18%", up: false },
        ].map((m) => (
          <div key={m.label} className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1.5">
              <m.icon className="w-3.5 h-3.5" />
              <span>{m.label}</span>
            </div>
            <div className="text-white font-semibold text-[16px] lg:text-[18px]">{m.value}</div>
            <div className={`text-[12px] mt-1 flex items-center gap-0.5 ${m.up ? "text-emerald-400" : "text-emerald-400"}`}>
              {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {m.change}
            </div>
          </div>
        ))}
      </div>

      {/* Campaign table */}
      <div className="bg-white/5 rounded-lg overflow-hidden">
        <div className="grid grid-cols-[1fr_80px_80px_80px_80px] gap-2 px-4 py-2.5 text-neutral-500 border-b border-white/5 text-[12px] uppercase tracking-wider">
          <span>캠페인</span><span>상태</span><span>예산</span><span>CTR</span><span>ROAS</span>
        </div>
        {[
          { name: "Meta — 리타겟팅", status: "활성", budget: "₩12M", ctr: "4.2%", roas: "520%", active: true },
          { name: "Google — 검색", status: "활성", budget: "₩8M", ctr: "3.1%", roas: "480%", active: true },
          { name: "토스 — 신규 유입", status: "활성", budget: "₩5M", ctr: "5.1%", roas: "390%", active: true },
          { name: "TikTok — 숏폼", status: "학습중", budget: "₩6M", ctr: "2.8%", roas: "—", active: false },
          { name: "당근 — 지역 타겟", status: "활성", budget: "₩3M", ctr: "3.5%", roas: "410%", active: true },
        ].map((c) => (
          <div key={c.name} className="grid grid-cols-[1fr_80px_80px_80px_80px] gap-2 px-4 py-2.5 text-neutral-300 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors">
            <span className="text-white font-medium">{c.name}</span>
            <span>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] ${c.active ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${c.active ? "bg-emerald-400" : "bg-amber-400"}`} />
                {c.status}
              </span>
            </span>
            <span>{c.budget}</span>
            <span className="text-emerald-400">{c.ctr}</span>
            <span className="text-amber-400">{c.roas}</span>
          </div>
        ))}
      </div>
    </div>
  </MacWindow>
);

/* ── 02. 브랜디드: 유튜브 채널 관리 ── */
const BrandedMockup = () => (
  <MacWindow title="studio.youtube.com/channel/analytics">
    <div className="p-5 lg:p-6 text-[13px] lg:text-[14px]">
      {/* Channel header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white font-bold text-[14px]">P</div>
        <div>
          <div className="text-white font-semibold">PIXELPAGE Studio</div>
          <div className="text-neutral-500 text-[12px]">구독자 24.3K · 영상 86개</div>
        </div>
        <div className="ml-auto text-emerald-400 text-[12px] flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> 이번 달 +2,400</div>
      </div>

      {/* Video list */}
      <div className="space-y-0">
        {[
          { title: "[브랜디드] 온라인 교육, 왜 팔리지 않을까?", views: "142K", likes: "3.2K", duration: "12:34", status: "공개", time: "2주 전" },
          { title: "[숏폼] 3초 만에 사로잡는 교육 광고의 비밀", views: "89K", likes: "2.1K", duration: "0:58", status: "공개", time: "3주 전" },
          { title: "[브랜디드] 수강생 인터뷰 — 매출 6배의 비결", views: "67K", likes: "1.8K", duration: "8:22", status: "공개", time: "1달 전" },
          { title: "[숏폼] 무형 서비스 마케팅 5가지 실수", views: "210K", likes: "5.4K", duration: "0:45", status: "공개", time: "1달 전" },
        ].map((v) => (
          <div key={v.title} className="flex items-center gap-4 py-3 border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors px-1 rounded">
            {/* Thumbnail placeholder */}
            <div className="w-[100px] h-[56px] bg-white/10 rounded flex-shrink-0 flex items-center justify-center">
              <Play className="w-5 h-5 text-neutral-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-medium text-[13px] truncate">{v.title}</div>
              <div className="flex items-center gap-3 mt-1 text-[12px] text-neutral-500">
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{v.views}</span>
                <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" />{v.likes}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{v.duration}</span>
                <span>{v.time}</span>
              </div>
            </div>
            <span className="text-[11px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">{v.status}</span>
          </div>
        ))}
      </div>
    </div>
  </MacWindow>
);

/* ── 03. SEO: 검색 순위 트래커 ── */
const SeoMockup = () => (
  <MacWindow title="search-console.pixelpage.io">
    <div className="p-5 lg:p-6 text-[13px] lg:text-[14px]">
      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "월간 유기적 유입", value: "8,200", change: "+2,410%", color: "text-emerald-400" },
          { label: "1페이지 키워드", value: "23개", change: "+19", color: "text-sky-400" },
          { label: "도메인 권한", value: "45", change: "12 → 45", color: "text-amber-400" },
        ].map((m) => (
          <div key={m.label} className="bg-white/5 rounded-lg p-3">
            <div className="text-neutral-500 text-[12px] mb-1">{m.label}</div>
            <div className="text-white font-semibold text-[18px]">{m.value}</div>
            <div className={`text-[12px] mt-1 ${m.color}`}>{m.change}</div>
          </div>
        ))}
      </div>

      {/* Keyword rankings table */}
      <div className="bg-white/5 rounded-lg overflow-hidden">
        <div className="grid grid-cols-[1fr_60px_60px_60px_80px] gap-2 px-4 py-2.5 text-neutral-500 border-b border-white/5 text-[12px] uppercase tracking-wider">
          <span>키워드</span><span>이전</span><span>현재</span><span>변동</span><span>플랫폼</span>
        </div>
        {[
          { kw: "온라인 교육 추천", prev: "32", now: "3", platform: "네이버" },
          { kw: "자기계발 강의", prev: "—", now: "5", platform: "네이버" },
          { kw: "무형 서비스 마케팅", prev: "48", now: "2", platform: "구글" },
          { kw: "교육 브랜드 광고", prev: "21", now: "4", platform: "구글" },
          { kw: "스피치 학원 강남", prev: "15", now: "1", platform: "네이버" },
        ].map((k) => {
          const prev = k.prev === "—" ? 100 : parseInt(k.prev);
          const diff = prev - parseInt(k.now);
          return (
            <div key={k.kw} className="grid grid-cols-[1fr_60px_60px_60px_80px] gap-2 px-4 py-2.5 text-neutral-300 border-b border-white/[0.03]">
              <span className="text-white font-medium flex items-center gap-1.5">
                <Search className="w-3 h-3 text-neutral-500" />{k.kw}
              </span>
              <span className="text-neutral-500">{k.prev}</span>
              <span className="text-emerald-400 font-semibold">{k.now}위</span>
              <span className="text-emerald-400 flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" />+{diff}
              </span>
              <span className="text-neutral-400">{k.platform}</span>
            </div>
          );
        })}
      </div>
    </div>
  </MacWindow>
);

/* ── 04. CRM: 자동화 메시지 관리 ── */
const CrmMockup = () => (
  <MacWindow title="crm-automation.pixelpage.io">
    <div className="p-5 lg:p-6 text-[13px] lg:text-[14px]">
      {/* Funnel stats */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { label: "활성 시퀀스", value: "4", icon: Send },
          { label: "발송 완료", value: "12,840", icon: CheckCheck },
          { label: "오픈율", value: "68.2%", icon: Eye },
          { label: "전환율", value: "4.8%", icon: BarChart3 },
        ].map((m) => (
          <div key={m.label} className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-neutral-500 text-[12px] mb-1">
              <m.icon className="w-3.5 h-3.5" />{m.label}
            </div>
            <div className="text-white font-semibold text-[18px]">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Automation flow */}
      <div className="bg-white/5 rounded-lg p-4">
        <div className="text-neutral-400 text-[12px] uppercase tracking-wider mb-3">자동화 퍼널 · 온보딩 시퀀스</div>
        <div className="space-y-0">
          {[
            { step: "1", channel: "카카오", type: "알림톡", msg: "환영합니다! 무료 체험 안내 →", delay: "즉시", sent: "3,210", rate: "92%" },
            { step: "2", channel: "이메일", type: "시퀀스", msg: "다른 수강생들의 후기를 확인하세요", delay: "48시간 후", sent: "3,048", rate: "71%" },
            { step: "3", channel: "문자", type: "자동화", msg: "지금 등록하면 20% 할인!", delay: "7일 후", sent: "2,890", rate: "58%" },
            { step: "4", channel: "이메일", type: "시퀀스", msg: "마지막 기회 — 내일 마감됩니다", delay: "14일 후", sent: "2,692", rate: "44%" },
          ].map((s, i) => (
            <div key={s.step} className="flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[12px] font-bold">{s.step}</div>
                {i < 3 && <div className="w-[1px] h-6 bg-white/10 mt-1" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded">{s.channel}</span>
                  <span className="text-[11px] text-neutral-500">{s.delay}</span>
                </div>
                <div className="text-white text-[13px] mt-1 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                  <span className="truncate">{s.msg}</span>
                </div>
              </div>
              <div className="text-right text-[12px] flex-shrink-0">
                <div className="text-neutral-400">{s.sent}건</div>
                <div className="text-emerald-400">오픈 {s.rate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </MacWindow>
);

/* ── 05. 웹 빌드: 실제 코드 ── */
const WebBuildMockup = () => (
  <MacWindow title="landing-page.tsx">
    <div className="p-5 lg:p-6 font-mono text-[13px] lg:text-[14px] leading-[1.85] overflow-x-auto">
      {[
        { text: 'import { Hero, Social, CTA } from "@/components";', color: "text-sky-400" },
        { text: "", color: "" },
        { text: "// 전환 최적화 랜딩 페이지", color: "text-neutral-500" },
        { text: "export default function LandingPage() {", color: "text-amber-400" },
        { text: "  return (", color: "text-neutral-300" },
        { text: '    <main className="conversion-optimized">', color: "text-emerald-400" },
        { text: "      {/* 3초 안에 핵심 가치 전달 */}", color: "text-neutral-500" },
        { text: '      <Hero headline="만질 수 없는 것을 파는 일" />', color: "text-emerald-400" },
        { text: "", color: "" },
        { text: "      {/* 신뢰 지표 — 전환율 +40% */}", color: "text-neutral-500" },
        { text: "      <Social reviews={142} rating={4.9} />" , color: "text-emerald-400" },
        { text: "", color: "" },
        { text: "      {/* 명확한 CTA — 이탈 방지 */}", color: "text-neutral-500" },
        { text: '      <CTA label="무료 상담 신청" variant="primary" />', color: "text-emerald-400" },
        { text: "    </main>", color: "text-emerald-400" },
        { text: "  );", color: "text-neutral-300" },
        { text: "}", color: "text-amber-400" },
        { text: "", color: "" },
        { text: "// Lighthouse 98  |  LCP 1.2s  |  전환율 3.2× ↑", color: "text-primary" },
      ].map((line, i) => (
        <div key={i} className={line.color || "text-neutral-300"}>
          {line.text || "\u00A0"}
        </div>
      ))}
    </div>
  </MacWindow>
);

/* ── Services Data ── */
const services = [
  {
    id: "performance", icon: Megaphone, tab: "퍼포먼스",
    name: "퍼포먼스 마케팅", sub: "Performance Marketing",
    desc: "Meta · Google · 토스 · 당근 · TikTok — 주요 광고 플랫폼에서 '구매 의향이 있는 사람'을 정밀하게 찾아냅니다.",
    href: "/services/performance",
    tags: ["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"],
    Mockup: PerformanceMockup,
  },
  {
    id: "branded", icon: Video, tab: "브랜디드",
    name: "브랜디드 콘텐츠", sub: "Branded Content",
    desc: "무형을 파는 일은 결국 감각을 번역하는 일입니다. 브랜디드 유튜브와 숏폼으로 24시간 일하는 영업사원을 만듭니다.",
    href: "/services/branded",
    tags: ["브랜디드 유튜브", "숏폼", "광고 소재 제작"],
    Mockup: BrandedMockup,
  },
  {
    id: "seo", icon: Search, tab: "SEO",
    name: "검색엔진 최적화", sub: "SEO",
    desc: "SEO는 돈을 쓰지 않아도 찾아오게 만드는 것입니다. 네이버 생태계 전체를 활용해 콘텐츠 기반 장기 신뢰를 구축합니다.",
    href: "/services/seo",
    tags: ["네이버 SEO", "구글 SEO"],
    Mockup: SeoMockup,
  },
  {
    id: "crm", icon: Mail, tab: "CRM",
    name: "CRM 마케팅", sub: "CRM Automation",
    desc: "퍼포먼스 광고가 관객을 데려온다면, CRM은 그들이 떠나지 않도록 붙잡습니다. 4단계 자동화 퍼널을 설계합니다.",
    href: "/services/crm",
    tags: ["카카오 알림톡", "이메일 시퀀스", "문자 자동화"],
    Mockup: CrmMockup,
  },
  {
    id: "webbuild", icon: Globe, tab: "웹 빌드",
    name: "웹 빌드", sub: "Web Build",
    desc: "보여주기 위한 웹이 아닌, 파는 웹. 전환이 일어나도록 설계합니다.",
    href: "/services/webbuild",
    tags: ["랜딩 페이지", "브랜드 사이트", "엔터프라이즈"],
    Mockup: WebBuildMockup,
  },
];

/* ── Main Section ── */
const ServicesTabSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section className="py-28 lg:py-36 bg-surface-beige">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-[14px] tracking-[0.2em] uppercase text-muted-foreground mb-5">Services</p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium text-foreground leading-[1.2] tracking-[-0.02em]">
            5가지 서비스,<br />하나의 마케팅 설계.
          </h2>
          <p className="text-[19px] text-muted-foreground mt-4 max-w-[480px] leading-[1.9]">
            각각 독립적으로 강하고, 함께할 때 가장 강력합니다.
          </p>
        </Reveal>

        {/* Tab navigation */}
        <Reveal className="mt-14">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIndex(i)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-foreground text-background shadow-lg"
                      : "bg-background/60 text-muted-foreground hover:bg-background hover:text-foreground border border-border"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {s.tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Content showcase */}
        <div className="mt-12 relative">
          <div className="bg-background/30 backdrop-blur-sm rounded-2xl border border-border p-6 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-start"
              >
                {/* Mockup */}
                <active.Mockup />

                {/* Text side */}
                <div className="flex flex-col justify-start pt-2">
                  <span className="text-[14px] tracking-[0.15em] uppercase text-muted-foreground">
                    {active.sub}
                  </span>
                  <h3 className="font-serif text-[clamp(24px,2.5vw,36px)] font-medium text-foreground mt-2 mb-4">
                    {active.name}
                  </h3>
                  <p className="text-[17px] text-muted-foreground leading-[1.9] mb-6">
                    {active.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {active.tags.map((t) => (
                      <span key={t} className="text-[14px] text-foreground/80 bg-surface-beige border border-border px-4 py-1.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={active.href}
                    className="inline-flex items-center gap-2 text-[16px] font-medium text-primary hover:translate-x-1 transition-transform w-fit"
                  >
                    자세히 보기 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabSection;
