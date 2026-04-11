import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import iconOk from "@/assets/icon-ok.svg";

/* ── Notion-style Brand Strategy Mockup ── */
const NotionMockup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: "⭐", text: "브랜드 전략 (USP 개발)", indent: 1 },
    { icon: "🎯", text: "콘텐츠 전략 · 메시지 설계", indent: 1 },
    { icon: "📂", text: "채널 기획 · 타겟 세그먼트", indent: 1 },
    { icon: "❗", text: "[필독] 경쟁사 분석 리포트", indent: 1 },
  ];

  const items2 = [
    { icon: "📄", text: "고객 페르소나 정의", indent: 1 },
    { icon: "📄", text: "핵심 메시지 프레임워크", indent: 1 },
    { icon: "📄", text: "포지셔닝 맵 · 차별화 전략", indent: 1 },
  ];

  return (
    <div ref={ref} className="rounded-xl overflow-hidden shadow-2xl bg-white border border-neutral-200">
      {/* Notion header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#fbfbfa] border-b border-neutral-200">
        <div className="flex gap-[7px]">
          <div className="w-[13px] h-[13px] rounded-full bg-[#ff5f57]" />
          <div className="w-[13px] h-[13px] rounded-full bg-[#febc2e]" />
          <div className="w-[13px] h-[13px] rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-3 text-[13px] text-neutral-400 font-sans">Notion — 브랜드 전략</span>
      </div>

      <div className="p-6 pb-5">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700 flex items-center justify-center">
            <span className="text-white text-[18px]">✦</span>
          </div>
          <span className="text-[22px] font-bold text-neutral-900">차별화 전략</span>
        </motion.div>

        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-4"
        >
          <div className="bg-[#fef9e7] rounded-t-lg px-4 py-2 border-l-4 border-[#f5c842]">
            <span className="text-[15px] font-semibold text-neutral-800">1. 시장 조사 · USP 개발</span>
          </div>
          <div className="bg-[#edf4fc] rounded-b-lg px-4 py-3 space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[14px]">🧑‍💼</span>
              <span className="text-[14px] font-medium text-neutral-800">브랜드 전략 워크스페이스</span>
            </div>
            {items.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 pl-4"
              >
                <span className="text-[13px]">{item.icon}</span>
                <span className="text-[13px] text-neutral-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <div className="px-4 py-2">
            <span className="text-[15px] font-semibold text-neutral-800">메시지 프레임워크</span>
          </div>
          <div className="bg-[#edf4fc] rounded-lg px-4 py-3 space-y-1">
            {items2.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
                className="flex items-center gap-2 pl-4"
              >
                <span className="text-[13px]">{item.icon}</span>
                <span className="text-[13px] text-neutral-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ── Spreadsheet Data Analysis Mockup ── */
const SpreadsheetMockup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const headers = ["collected_date", "channel", "followers", "type", "likes", "engagement", "views", "caption"];
  const rows = [
    ["2026-03-06", "aim_ing_", "100,865", "Sidecar", "247", "0.26%", "0", "🏠 원달러 환율 1500원 돌파..."],
    ["2026-03-06", "sorasoid", "277,782", "Video", "143", "0.06%", "5,612", "89.36 #MadeWithEver..."],
    ["2026-03-06", "storyboard.co", "175,382", "Video", "111", "0.07%", "7,702", "99.4 Grok Imagine × Midj..."],
    ["2026-03-06", "aim_ing_", "100,865", "Sidecar", "81", "0.08%", "0", "💡 종류 종류별 금융상품 분류..."],
    ["2026-03-06", "ai_ing_", "46,036", "Sidecar", "68", "0.15%", "0", "✅ 렌디아가 할 갈고 준비한..."],
    ["2026-03-07", "aim_ing_", "100,865", "Sidecar", "39", "0.04%", "0", "코스피 5500선 뚫기 코스닥..."],
    ["2026-03-07", "aitrenz.xyz", "321,993", "Video", "-1", "0.02%", "6,092", "27.06 Like & comment..."],
    ["2026-03-07", "ai.trend.kr", "105,288", "Video", "15,956", "15.19%", "497,997", "129.67 업로드 10일 만에..."],
  ];

  const typeColors: Record<string, string> = {
    Sidecar: "bg-[#f4c77b] text-neutral-800",
    Video: "bg-[#6ba4e0] text-white",
  };

  return (
    <div ref={ref} className="rounded-xl overflow-hidden shadow-2xl border border-neutral-200">
      {/* Google Sheets header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#f0f4f8] border-b border-neutral-200">
        <div className="flex gap-[7px]">
          <div className="w-[13px] h-[13px] rounded-full bg-[#ff5f57]" />
          <div className="w-[13px] h-[13px] rounded-full bg-[#febc2e]" />
          <div className="w-[13px] h-[13px] rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 ml-3">
          <div className="w-5 h-5 rounded bg-[#0f9d58] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">S</span>
          </div>
          <span className="text-[13px] text-neutral-700 font-medium">레드캣픽_인스타수집</span>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="grid grid-cols-8 text-[9px] lg:text-[10px] font-semibold text-neutral-600 bg-[#f8f9fa] border-b border-neutral-200"
        >
          {headers.map((h, i) => (
            <div key={h} className={`px-2 py-2 border-r border-neutral-200 truncate ${i === 0 ? 'col-span-1' : ''}`}>
              {h}
            </div>
          ))}
        </motion.div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.25, delay: 0.3 + i * 0.08 }}
            className="grid grid-cols-8 text-[8px] lg:text-[10px] text-neutral-700 border-b border-neutral-100 hover:bg-blue-50/30"
          >
            {row.map((cell, j) => (
              <div key={j} className={`px-2 py-1.5 border-r border-neutral-100 truncate ${j === 3 ? '' : ''}`}>
                {j === 3 ? (
                  <span className={`text-[8px] lg:text-[9px] px-1.5 py-0.5 rounded ${typeColors[cell] || 'bg-neutral-100'}`}>
                    {cell}
                  </span>
                ) : cell}
              </div>
            ))}
          </motion.div>
        ))}

        {/* Highlight row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="grid grid-cols-8 text-[8px] lg:text-[10px] text-neutral-700 border-b-2 border-emerald-400 bg-emerald-50/50"
        >
          {["2026-03-07", "ai.trend.kr", "105,288", "Video", "15,956", "15.19%", "497,997", "129.67 업로드 10일 만에..."].map((cell, j) => (
            <div key={j} className={`px-2 py-1.5 border-r border-neutral-100 truncate font-medium ${j === 5 ? 'text-emerald-700 font-bold' : ''}`}>
              {j === 3 ? (
                <span className="text-[8px] lg:text-[9px] px-1.5 py-0.5 rounded bg-[#6ba4e0] text-white">{cell}</span>
              ) : cell}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/* ── Meta Ads Notification Popups (Apple-style) ── */
const MetaNotificationsMockup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const notifications = [
    { percent: "83%", time: "오전 12:37" },
    { percent: "80%", time: "오전 12:47" },
    { percent: "79%", time: "오전 12:51" },
    { percent: "73%", time: "오전 12:55" },
    { percent: "70%", time: "오후 1:00" },
    { percent: "65%", time: "오전 12:08" },
  ];

  return (
    <div ref={ref} className="relative h-[420px] w-full flex items-center justify-center">
      {notifications.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.3 + i * 0.25,
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
          className="absolute w-[320px] lg:w-[360px]"
          style={{
            top: `${20 + i * 56}px`,
            left: `${50 + (i % 2 === 0 ? 0 : 24)}px`,
            zIndex: notifications.length - i,
          }}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-neutral-200/60 px-4 py-3 flex items-center gap-3">
            {/* Meta icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-white text-[16px]">📊</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-neutral-500">광고 관리자</span>
                <span className="text-[11px] text-neutral-400">{n.time}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[15px]">👍</span>
                <span className="text-[13px] font-semibold text-neutral-800">광고 성과가 좋습니다</span>
              </div>
              <p className="text-[12px] text-neutral-500 mt-0.5">
                결과당 비용이 동종 업계보다 <span className="font-bold text-neutral-700">{n.percent}</span> 낮습니다.
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Philosophy Section ── */
const PhilosophySection = () => {
  const rows = [
    {
      num: "01",
      title: "하나의 메시지를 만듭니다.",
      body: "철저한 시장 조사와 경쟁사 분석으로 브랜드만의 USP를 개발합니다. 타겟을 정밀하게 세분화하고, 시장 안에서 단 하나의 차별화된 메시지를 설계합니다. 전략이 없는 마케팅은 예산 낭비입니다.",
      mockup: <NotionMockup />,
      direction: "image-text" as const,
    },
    {
      num: "02",
      title: "사람들이 반응하는 포맷을 찾습니다.",
      body: "자체 데이터 수집·분석 기술로 지금 가장 트렌디하고, 사람들이 실제로 반응하는 콘텐츠 유형을 선별합니다. 감이 아니라 데이터로 포맷을 결정합니다.",
      mockup: <SpreadsheetMockup />,
      direction: "text-image" as const,
    },
    {
      num: "03",
      title: "동종 업계보다 나은 결과를 만듭니다.",
      body: "이렇게 설계된 전략과 포맷으로 광고를 집행하면, 결과는 따라옵니다. 함께한 브랜드들은 동종 업계 평균보다 꾸준히 낮은 결과당 비용을 기록하고 있습니다.",
      mockup: <MetaNotificationsMockup />,
      direction: "image-text" as const,
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-surface-white border-t border-border">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <Reveal className="text-center mb-20">
          <img src={iconOk} alt="Philosophy" className="w-10 h-10 mb-5 mx-auto" />
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-foreground leading-[1.2] tracking-[-0.02em]">
            일반 마케팅 회사와는<br />조금 다릅니다.
          </h2>
        </Reveal>

        <div className="space-y-24 lg:space-y-32">
          {rows.map((row) => (
            <Reveal key={row.num}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${row.direction === "text-image" ? "lg:[direction:rtl]" : ""}`}>
                {/* Mockup */}
                <div className={`${row.direction === "text-image" ? "lg:[direction:ltr]" : ""}`}>
                  {row.mockup}
                </div>
                {/* Text */}
                <div className={`${row.direction === "text-image" ? "lg:[direction:ltr]" : ""}`}>
                  <span className="text-[13px] text-primary tracking-[0.15em] uppercase font-medium">{row.num}</span>
                  <h3 className="font-serif text-[clamp(26px,3.5vw,36px)] font-semibold text-foreground mt-3 mb-5 leading-[1.3] tracking-[-0.01em]">
                    {row.title}
                  </h3>
                  <p className="text-[17px] text-muted-foreground leading-[2] max-w-[480px]">
                    {row.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
