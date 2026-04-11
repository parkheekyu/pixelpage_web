import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, Video, Search, Mail, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const services = [
  {
    id: "performance",
    icon: Megaphone,
    tab: "퍼포먼스",
    name: "퍼포먼스 마케팅",
    sub: "Performance Marketing",
    desc: "Meta · Google · 토스 · 당근 · TikTok — 주요 광고 플랫폼에서 '구매 의향이 있는 사람'을 정밀하게 찾아냅니다.",
    href: "/services/performance",
    tags: ["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"],
    mockup: {
      title: "campaign-dashboard.tsx",
      lines: [
        { indent: 0, text: "// 퍼포먼스 광고 캠페인 대시보드", color: "text-neutral-500" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "const channels = [", color: "text-sky-400" },
        { indent: 1, text: '{ name: "Meta Ads",    ROAS: 4.2,  budget: "₩12M" },', color: "text-emerald-400" },
        { indent: 1, text: '{ name: "Google Ads",  ROAS: 3.8,  budget: "₩8M"  },', color: "text-emerald-400" },
        { indent: 1, text: '{ name: "토스애즈",     ROAS: 5.1,  budget: "₩5M"  },', color: "text-emerald-400" },
        { indent: 1, text: '{ name: "당근마켓",     ROAS: 3.5,  budget: "₩3M"  },', color: "text-emerald-400" },
        { indent: 1, text: '{ name: "TikTok",      ROAS: 4.7,  budget: "₩6M"  },', color: "text-emerald-400" },
        { indent: 0, text: "];", color: "text-sky-400" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "// 실시간 최적화 엔진", color: "text-neutral-500" },
        { indent: 0, text: "optimizeByROAS(channels, { target: 4.0 });", color: "text-amber-400" },
        { indent: 0, text: '→ 평균 CTR: 3.93%  |  전환율: 2.8%', color: "text-primary" },
      ],
    },
  },
  {
    id: "branded",
    icon: Video,
    tab: "브랜디드",
    name: "브랜디드 콘텐츠",
    sub: "Branded Content",
    desc: "무형을 파는 일은 결국 감각을 번역하는 일입니다. 브랜디드 유튜브와 숏폼으로 24시간 일하는 영업사원을 만듭니다.",
    href: "/services/branded",
    tags: ["브랜디드 유튜브", "숏폼", "광고 소재 제작"],
    mockup: {
      title: "content-pipeline.yml",
      lines: [
        { indent: 0, text: "# 브랜디드 콘텐츠 파이프라인", color: "text-neutral-500" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "pipeline:", color: "text-sky-400" },
        { indent: 1, text: "strategy:", color: "text-amber-400" },
        { indent: 2, text: '- 브랜드 톤 분석', color: "text-emerald-400" },
        { indent: 2, text: '- 핵심 서사 도출', color: "text-emerald-400" },
        { indent: 2, text: '- 타겟 페르소나 매핑', color: "text-emerald-400" },
        { indent: 1, text: "production:", color: "text-amber-400" },
        { indent: 2, text: '- 유튜브 롱폼 (8-15분)', color: "text-emerald-400" },
        { indent: 2, text: '- 숏폼 리패키징 (15-60초)', color: "text-emerald-400" },
        { indent: 2, text: '- 광고 소재 변환', color: "text-emerald-400" },
        { indent: 1, text: "result:", color: "text-amber-400" },
        { indent: 2, text: '→ 24시간 작동하는 브랜드 자산', color: "text-primary" },
      ],
    },
  },
  {
    id: "seo",
    icon: Search,
    tab: "SEO",
    name: "검색엔진 최적화",
    sub: "SEO",
    desc: "SEO는 돈을 쓰지 않아도 찾아오게 만드는 것입니다. 네이버 생태계 전체를 활용해 콘텐츠 기반 장기 신뢰를 구축합니다.",
    href: "/services/seo",
    tags: ["네이버 SEO", "구글 SEO"],
    mockup: {
      title: "seo-audit-report.md",
      lines: [
        { indent: 0, text: "# SEO 성과 리포트", color: "text-neutral-500" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "## 네이버 블로그 최적화", color: "text-sky-400" },
        { indent: 0, text: '키워드 "온라인 교육"', color: "text-emerald-400" },
        { indent: 1, text: '순위: 32위 → 3위  ✓', color: "text-emerald-400" },
        { indent: 0, text: '키워드 "자기계발 강의"', color: "text-emerald-400" },
        { indent: 1, text: '순위: 미노출 → 5위  ✓', color: "text-emerald-400" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "## 구글 검색 최적화", color: "text-sky-400" },
        { indent: 0, text: '도메인 권한: 12 → 45', color: "text-amber-400" },
        { indent: 0, text: '월간 유입: 340 → 8,200', color: "text-amber-400" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: '→ 광고비 ₩0으로 월 8,200명 유입', color: "text-primary" },
      ],
    },
  },
  {
    id: "crm",
    icon: Mail,
    tab: "CRM",
    name: "CRM 마케팅",
    sub: "CRM Automation",
    desc: "퍼포먼스 광고가 관객을 데려온다면, CRM은 그들이 떠나지 않도록 붙잡습니다. 4단계 자동화 퍼널을 설계합니다.",
    href: "/services/crm",
    tags: ["카카오 알림톡", "이메일 시퀀스", "문자 자동화"],
    mockup: {
      title: "crm-funnel.flow",
      lines: [
        { indent: 0, text: "// CRM 4단계 자동화 퍼널", color: "text-neutral-500" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "Step 1 → 첫 방문", color: "text-sky-400" },
        { indent: 1, text: "카카오 알림톡: 환영 메시지", color: "text-emerald-400" },
        { indent: 0, text: "Step 2 → 48시간 후", color: "text-sky-400" },
        { indent: 1, text: "이메일: 무료 체험 안내", color: "text-emerald-400" },
        { indent: 0, text: "Step 3 → 7일 후", color: "text-sky-400" },
        { indent: 1, text: "문자: 한정 할인 제안", color: "text-emerald-400" },
        { indent: 0, text: "Step 4 → 14일 후", color: "text-sky-400" },
        { indent: 1, text: "이메일: 후기 + 재구매 유도", color: "text-emerald-400" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "전환율: 기존 1.2% → 4.8%", color: "text-amber-400" },
        { indent: 0, text: "→ 이탈률 67% 감소", color: "text-primary" },
      ],
    },
  },
  {
    id: "webbuild",
    icon: Globe,
    tab: "웹 빌드",
    name: "웹 빌드",
    sub: "Web Build",
    desc: "보여주기 위한 웹이 아닌, 파는 웹. 전환이 일어나도록 설계합니다.",
    href: "/services/webbuild",
    tags: ["랜딩 페이지", "브랜드 사이트", "엔터프라이즈"],
    mockup: {
      title: "landing-page.config",
      lines: [
        { indent: 0, text: "// 전환 최적화 랜딩 페이지", color: "text-neutral-500" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "sections:", color: "text-sky-400" },
        { indent: 1, text: "hero       → 핵심 가치 전달 (3초)", color: "text-emerald-400" },
        { indent: 1, text: "social     → 신뢰 지표 배치", color: "text-emerald-400" },
        { indent: 1, text: "benefits   → 문제 → 해결 구조", color: "text-emerald-400" },
        { indent: 1, text: "pricing    → 명확한 CTA", color: "text-emerald-400" },
        { indent: 1, text: "faq        → 이탈 방지", color: "text-emerald-400" },
        { indent: 0, text: "", color: "" },
        { indent: 0, text: "performance:", color: "text-sky-400" },
        { indent: 1, text: "Lighthouse: 98/100", color: "text-amber-400" },
        { indent: 1, text: "LCP: 1.2s  |  CLS: 0.01", color: "text-amber-400" },
        { indent: 0, text: "→ 전환율 평균 3.2배 상승", color: "text-primary" },
      ],
    },
  },
];

/* Mac-style window mockup */
const MacWindow = ({ title, lines }: { title: string; lines: typeof services[0]["mockup"]["lines"] }) => (
  <div className="rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-white/10">
    {/* Title bar */}
    <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
      <div className="flex gap-[7px]">
        <div className="w-[13px] h-[13px] rounded-full bg-[#ff5f57]" />
        <div className="w-[13px] h-[13px] rounded-full bg-[#febc2e]" />
        <div className="w-[13px] h-[13px] rounded-full bg-[#28c840]" />
      </div>
      <span className="ml-3 text-[13px] text-neutral-400 font-mono">{title}</span>
    </div>
    {/* Code content */}
    <div className="p-5 lg:p-6 font-mono text-[14px] lg:text-[15px] leading-[1.8] overflow-x-auto">
      {lines.map((line, i) => (
        <div key={i} className={line.color || "text-neutral-300"} style={{ paddingLeft: `${line.indent * 24}px` }}>
          {line.text || "\u00A0"}
        </div>
      ))}
    </div>
  </div>
);

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
                  className={`
                    inline-flex items-center gap-2 px-6 py-3 rounded-full text-[16px] font-medium
                    transition-all duration-300
                    ${isActive
                      ? "bg-foreground text-background shadow-lg"
                      : "bg-background/60 text-muted-foreground hover:bg-background hover:text-foreground border border-border"
                    }
                  `}
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
                className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start"
              >
                {/* Mac window */}
                <MacWindow title={active.mockup.title} lines={active.mockup.lines} />

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
                      <span
                        key={t}
                        className="text-[14px] text-foreground/80 bg-surface-beige border border-border px-4 py-1.5 rounded-full"
                      >
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
