import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, Video, Search, Mail, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import illustPerformance from "@/assets/illust-performance-v3.png";
import illustBranded from "@/assets/illust-branded-v3.png";
import illustSeo from "@/assets/illust-seo-v3.png";
import illustCrm from "@/assets/illust-crm-v3.png";
import illustWeb from "@/assets/illust-web-v3.png";

const services = [
  {
    id: "performance",
    icon: Megaphone,
    tab: "퍼포먼스",
    name: "퍼포먼스 마케팅",
    sub: "Performance Marketing",
    desc: "Meta · Google · 토스 · 당근 · TikTok — 주요 광고 플랫폼에서 '구매 의향이 있는 사람'을 정밀하게 찾아냅니다.",
    img: illustPerformance,
    href: "/services/performance",
    tags: ["Meta Ads", "Google Ads", "토스애즈", "당근마켓", "TikTok"],
  },
  {
    id: "branded",
    icon: Video,
    tab: "브랜디드",
    name: "브랜디드 콘텐츠",
    sub: "Branded Content",
    desc: "무형을 파는 일은 결국 감각을 번역하는 일입니다. 브랜디드 유튜브와 숏폼으로 24시간 일하는 영업사원을 만듭니다.",
    img: illustBranded,
    href: "/services/branded",
    tags: ["브랜디드 유튜브", "숏폼", "광고 소재 제작"],
  },
  {
    id: "seo",
    icon: Search,
    tab: "SEO",
    name: "검색엔진 최적화",
    sub: "SEO",
    desc: "SEO는 돈을 쓰지 않아도 찾아오게 만드는 것입니다. 네이버 생태계 전체를 활용해 콘텐츠 기반 장기 신뢰를 구축합니다.",
    img: illustSeo,
    href: "/services/seo",
    tags: ["네이버 SEO", "구글 SEO"],
  },
  {
    id: "crm",
    icon: Mail,
    tab: "CRM",
    name: "CRM 마케팅",
    sub: "CRM Automation",
    desc: "퍼포먼스 광고가 관객을 데려온다면, CRM은 그들이 떠나지 않도록 붙잡습니다. 4단계 자동화 퍼널을 설계합니다.",
    img: illustCrm,
    href: "/services/crm",
    tags: ["카카오 알림톡", "이메일 시퀀스", "문자 자동화"],
  },
  {
    id: "webbuild",
    icon: Globe,
    tab: "웹 빌드",
    name: "웹 빌드",
    sub: "Web Build",
    desc: "보여주기 위한 웹이 아닌, 파는 웹. 전환이 일어나도록 설계합니다.",
    img: illustWeb,
    href: "/services/webbuild",
    tags: ["랜딩 페이지", "브랜드 사이트", "엔터프라이즈"],
  },
];

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
          <div className="bg-background/40 backdrop-blur-sm rounded-2xl border border-border overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                {/* Image side */}
                <div className="flex items-center justify-center p-10 lg:p-16 bg-surface-beige/50">
                  <img
                    src={active.img}
                    alt={active.name}
                    className="w-[240px] lg:w-[320px]"
                    loading="lazy"
                    width={800}
                    height={640}
                  />
                </div>

                {/* Text side */}
                <div className="flex flex-col justify-center p-10 lg:p-16">
                  <span className="text-[14px] tracking-[0.15em] uppercase text-muted-foreground">
                    {active.sub}
                  </span>
                  <h3 className="font-serif text-[clamp(28px,3vw,42px)] font-medium text-foreground mt-2 mb-5">
                    {active.name}
                  </h3>
                  <p className="text-[18px] text-muted-foreground leading-[1.9] mb-7 max-w-[440px]">
                    {active.desc}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[15px] text-foreground/80 bg-surface-beige border border-border px-5 py-2 rounded-full"
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
