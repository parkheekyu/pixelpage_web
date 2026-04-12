import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MockupBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white shadow-card overflow-hidden mx-auto">
    {children}
  </div>
);

/* ── 1. Campaign 3-tier Structure ── */
export const CampaignStructureMockup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MockupBox>
      <div ref={ref} className="p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center mb-2"
        >
          <span className="text-[13px] text-neutral-400">하나의 캠페인 안에 광고세트 여러 개, 광고세트 안에 광고 여러 개</span>
        </motion.div>

        <div className="flex flex-col items-center gap-0">
          {/* Campaign */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="bg-[#6366f1] text-white rounded-xl px-8 py-4 text-center shadow-sm">
              <span className="text-[17px] font-bold block">Campaign</span>
              <span className="text-[12px] text-white/70">목표 설정</span>
            </div>
            <div className="w-px h-6 bg-neutral-300" />
            <div className="flex items-center">
              <div className="w-[120px] h-px bg-neutral-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              <div className="w-[120px] h-px bg-neutral-300" />
            </div>
          </motion.div>

          {/* Ad Sets */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex gap-8"
          >
            {[1, 2].map(i => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-5 bg-neutral-300" />
                <div className="bg-[#10b981] text-white rounded-xl px-6 py-3.5 text-center shadow-sm">
                  <span className="text-[15px] font-bold block">Ad Set</span>
                  <span className="text-[11px] text-white/70">타겟 · 예산 · 일정</span>
                </div>
                <div className="w-px h-5 bg-neutral-300" />
                <div className="flex items-center">
                  <div className="w-[48px] h-px bg-neutral-300" />
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  <div className="w-[48px] h-px bg-neutral-300" />
                </div>
                <div className="flex gap-3 mt-0">
                  {[1, 2].map(j => (
                    <div key={j} className="flex flex-col items-center">
                      <div className="w-px h-4 bg-neutral-300" />
                      <div className="bg-[#f59e0b] text-white rounded-lg px-4 py-2.5 text-center shadow-sm">
                        <span className="text-[13px] font-bold block">Ad</span>
                        <span className="text-[10px] text-white/80">크리에이티브</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </MockupBox>
  );
};

/* ── 2. Audience Overlap (Venn) ── */
export const AudienceOverlapMockup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MockupBox>
      <div ref={ref} className="p-6 lg:p-8">
        <div className="grid grid-cols-2 gap-4">
          {/* Left: separate */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <span className="text-[14px] font-semibold text-neutral-700 mb-4">A와 B를 따로 운영할 때</span>
            <div className="relative h-[160px] w-full flex items-center justify-center">
              <div className="absolute left-[15%] w-[110px] h-[110px] rounded-full border-2 border-[#93c5fd] bg-[#93c5fd]/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-[16px] font-bold text-[#3b82f6] block">A</span>
                  <span className="text-[10px] text-neutral-500">광고세트 A</span>
                </div>
              </div>
              <div className="absolute right-[15%] w-[110px] h-[110px] rounded-full border-2 border-[#93c5fd] bg-[#93c5fd]/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-[16px] font-bold text-[#3b82f6] block">B</span>
                  <span className="text-[10px] text-neutral-500">광고세트 B</span>
                </div>
              </div>
              {/* Overlap zone label */}
              <div className="absolute z-10 bg-white/80 px-2 py-0.5 rounded">
                <span className="text-[11px] font-bold text-red-500">겹침</span>
                <span className="block text-[9px] text-red-400">자기 경쟁</span>
              </div>
            </div>
            <span className="text-[11px] text-red-500 font-medium mt-2">같은 사람에게 두 광고가 입찰 경쟁</span>
          </motion.div>

          {/* Right: merged */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-col items-center border-l border-neutral-200 pl-4"
          >
            <span className="text-[14px] font-semibold text-neutral-700 mb-4">하나로 합치면</span>
            <div className="relative h-[160px] w-full flex items-center justify-center">
              <div className="w-[130px] h-[130px] rounded-full border-2 border-[#10b981] bg-[#10b981]/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-[20px] font-bold text-[#10b981] block">C</span>
                  <span className="text-[10px] text-neutral-500">통합 오디언스</span>
                  <span className="text-[9px] text-[#10b981] block">자기 경쟁 없음</span>
                </div>
              </div>
            </div>
            <span className="text-[11px] text-[#10b981] font-medium mt-2">입찰 경쟁 제거 · CPA 자연 하락</span>
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.55 }}
          className="mt-5 grid grid-cols-2 gap-3"
        >
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 text-center">
            <span className="text-[12px] font-semibold text-red-600">오디언스 70%+ 중복 시</span>
            <span className="block text-[10px] text-red-400 mt-0.5">예산 대부분이 자기 경쟁에 소비</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2.5 text-center">
            <span className="text-[12px] font-semibold text-emerald-600">중복 제거 후</span>
            <span className="block text-[10px] text-emerald-400 mt-0.5">같은 예산으로 더 넓은 도달</span>
          </div>
        </motion.div>
      </div>
    </MockupBox>
  );
};

/* ── 3. Budget Scaling Timeline ── */
export const BudgetScalingMockup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const phases = [
    { label: "① 테스트", sub: "$10~20 / 3~5일", x: "8%", color: "#6366f1" },
    { label: "② 안정화", sub: "CPA 목표 달성 확인", x: "30%", color: "#6366f1" },
    { label: "③ 수직 확장", sub: "20%씩 증액", x: "55%", color: "#f59e0b" },
    { label: "④ 수평 확장", sub: "새 광고세트 복제", x: "78%", color: "#10b981" },
  ];

  return (
    <MockupBox>
      <div ref={ref} className="p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center mb-6"
        >
          <span className="text-[15px] font-semibold text-neutral-800">예산 스케일링 타임라인</span>
          <span className="block text-[12px] text-neutral-400 mt-1">예산을 올릴 때마다 CPA는 일시적으로 오른다. 3~5일 후 안정되면 정상이다</span>
        </motion.div>

        {/* Chart area */}
        <div className="relative h-[200px] border-l-2 border-b-2 border-neutral-200 ml-8 mr-4">
          {/* Y axis labels */}
          <div className="absolute -left-9 top-0 bottom-0 flex flex-col justify-between text-[10px] text-neutral-400">
            <span>$120</span><span>$90</span><span>$60</span><span>$30</span><span>$10</span>
          </div>

          {/* Budget line (blue, stepping up) */}
          <motion.svg
            viewBox="0 0 400 180"
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.path
              d="M 10,165 L 80,165 L 100,140 L 160,135 L 180,100 L 220,95 L 240,70 L 300,65 L 320,30 L 390,25"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            {/* CPA line (green dashed) */}
            <motion.path
              d="M 10,30 L 60,35 L 100,55 L 140,70 L 180,80 L 200,65 L 220,75 L 260,85 L 300,100 L 340,110 L 390,120"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </motion.svg>

          {/* CPA spike annotation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1 }}
            className="absolute top-[28%] left-[42%]"
          >
            <span className="text-[10px] font-semibold text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 rounded">스케일 시 CPA 상승</span>
          </motion.div>
        </div>

        {/* X axis */}
        <div className="flex justify-between ml-8 mr-4 mt-2 text-[10px] text-neutral-400">
          <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Week 6~8</span>
        </div>

        {/* Phase labels */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="grid grid-cols-4 gap-2 mt-5"
        >
          {phases.map(p => (
            <div key={p.label} className="text-center">
              <span className="text-[12px] font-bold" style={{ color: p.color }}>{p.label}</span>
              <span className="block text-[10px] text-neutral-400 mt-0.5">{p.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mt-4">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-[#6366f1] rounded" />
            <span className="text-[10px] text-neutral-500">일 예산</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 border-t-2 border-dashed border-[#10b981]" />
            <span className="text-[10px] text-neutral-500">CPA 추이</span>
          </div>
        </div>
      </div>
    </MockupBox>
  );
};

/* ── 4. Creative Lifecycle ── */
export const CreativeLifecycleMockup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const phases = [
    { label: "학습", color: "#ede9fe", textColor: "#7c3aed" },
    { label: "최고 성과", color: "#dcfce7", textColor: "#16a34a" },
    { label: "피로 진행", color: "#fef9c3", textColor: "#ca8a04" },
    { label: "교체 필요", color: "#fee2e2", textColor: "#dc2626" },
  ];

  return (
    <MockupBox>
      <div ref={ref} className="p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-center mb-6"
        >
          <span className="text-[15px] font-semibold text-neutral-800">소재 성과 생애주기</span>
          <span className="block text-[12px] text-neutral-400 mt-1">같은 소재도 시간이 지나면 성과가 떨어진다</span>
        </motion.div>

        {/* Chart */}
        <div className="relative h-[200px] border-l-2 border-b-2 border-neutral-200 ml-10 mr-4">
          {/* Y axis */}
          <div className="absolute -left-11 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-neutral-400 whitespace-nowrap">
            광고 효율 지수
          </div>

          {/* Phase backgrounds */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="absolute inset-0 flex"
          >
            {phases.map(p => (
              <div key={p.label} className="flex-1 flex items-start justify-center pt-2" style={{ backgroundColor: p.color + "60" }}>
                <span className="text-[10px] font-bold" style={{ color: p.textColor }}>{p.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Lifecycle curve */}
          <motion.svg
            viewBox="0 0 400 180"
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {/* Threshold line */}
            <line x1="0" y1="110" x2="400" y2="110" stroke="#9ca3af" strokeWidth="1" strokeDasharray="6 4" />
            <text x="360" y="105" fill="#9ca3af" fontSize="9">교체 기준선</text>

            <motion.path
              d="M 10,160 C 40,155 60,130 100,60 C 130,10 150,15 180,25 C 210,35 240,70 270,100 C 300,130 330,150 390,165"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
            />

            {/* Annotations */}
            <circle cx="10" cy="160" r="4" fill="#6366f1" />
            <circle cx="150" cy="18" r="5" fill="#10b981" />
            <circle cx="270" cy="100" r="4" fill="#dc2626" />
            <circle cx="390" cy="165" r="4" fill="#dc2626" />
          </motion.svg>

          {/* Point labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <span className="absolute bottom-[12%] left-[1%] text-[10px] text-[#10b981] font-medium">게재 시작</span>
            <span className="absolute top-[2%] left-[32%] text-[10px] text-[#10b981] font-bold">↑ 최저 CPA</span>
            <span className="absolute top-[48%] left-[60%] text-[10px] text-[#dc2626] font-bold">교체 신호 ↗</span>
            <span className="absolute bottom-[4%] right-[0%] text-[10px] text-[#dc2626] font-medium">소재 소진</span>
          </motion.div>
        </div>

        {/* X axis */}
        <div className="flex justify-between ml-10 mr-4 mt-2 text-[10px] text-neutral-400">
          <span>0일</span><span>7일</span><span>14일</span><span>21일</span><span>28일</span>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 1.4 }}
          className="mt-5 bg-neutral-800 text-white rounded-xl px-5 py-3 text-center"
        >
          <span className="text-[13px] font-bold">CPA가 최저점 대비 30~50% 오르면 교체 시점</span>
          <span className="block text-[11px] text-neutral-400 mt-0.5">더 기다리면 예산 낭비 — 새 소재를 준비해둬야 한다</span>
        </motion.div>
      </div>
    </MockupBox>
  );
};
