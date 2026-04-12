import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import iconOk from "@/assets/icon-ok.svg";

const items = [
  { label: "광고 세팅", agency: true, pixel: true },
  { label: "노출 · 클릭 관리", agency: true, pixel: true },
  { label: "랜딩페이지 최적화", agency: false, pixel: true },
  { label: "전환 퍼널 설계", agency: false, pixel: true },
  { label: "CRM · 리텐션 자동화", agency: false, pixel: true },
  { label: "매출 성장까지 책임", agency: false, pixel: true },
];

const Check = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/15 text-primary text-sm font-bold">✓</span>
);
const Cross = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-muted-foreground/40 text-sm">✕</span>
);

const ComparisonSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 lg:py-36 bg-surface-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-16 lg:mb-20">
          <img src={iconOk} alt="" className="w-10 h-10 mb-5 mx-auto" />
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em]">
            광고 세팅만 하고<br />끝나는 대행이 아닙니다.
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-[480px] mx-auto leading-[1.9] mt-6">
            클릭 이후가 진짜 시작입니다.<br />
            우리는 매출이 오를 때까지 함께 뜁니다.
          </p>
        </Reveal>

        <Reveal>
          <div ref={ref} className="max-w-[680px] mx-auto">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px] lg:grid-cols-[1fr_120px_120px] items-end gap-2 pb-4 border-b border-border mb-1">
              <div />
              <div className="text-center">
                <span className="text-[12px] text-muted-foreground/60 tracking-wide">보통 대행사</span>
              </div>
              <div className="text-center">
                <span className="text-[12px] text-primary font-semibold tracking-wide">픽셀페이지</span>
              </div>
            </div>

            {/* Rows */}
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.08 * i }}
                className="grid grid-cols-[1fr_100px_100px] lg:grid-cols-[1fr_120px_120px] items-center gap-2 py-4 border-b border-border/50"
              >
                <span className="text-[15px] lg:text-[16px] text-foreground font-medium">{item.label}</span>
                <div className="flex justify-center">{item.agency ? <Check /> : <Cross />}</div>
                <div className="flex justify-center"><Check /></div>
              </motion.div>
            ))}

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-center text-[13px] text-muted-foreground mt-8"
            >
              AARRR 풀퍼널 — 데이터로 측정하고, 결과로 증명합니다.
            </motion.p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ComparisonSection;
