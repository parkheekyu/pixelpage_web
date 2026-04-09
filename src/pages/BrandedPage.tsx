import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const BrandedPage = () => {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <SectionHeader label="Branded Content" title="브랜디드 콘텐츠" subtitle="감각을 번역하는 서사형 영상." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
              <div>
                <p className="text-base text-foreground/80 leading-relaxed mb-8">
                  강사의 목소리, 공간의 공기, 수강생의 표정 — 무형을 파는 일은 결국 <strong className="text-foreground">감각을 번역하는 일</strong>입니다. 숫자가 아니라 태도를, 상품이 아니라 서사를 담은 크리에이티브로 관객의 마음을 먼저 움직입니다.
                </p>
                <ul className="flex flex-col gap-3">
                  {["브랜드 고유 톤을 보존하는 서사 기반 기획", "브랜디드 유튜브 — 장편 스토리텔링", "숏폼 (Shorts · Reels · TikTok)", "광고 소재 제작 및 A/B 테스트 연동"].map((li) => (
                    <li key={li} className="text-sm text-muted-foreground pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-gold before:font-display">{li}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-card border border-border p-8 rounded-lg">
                  <div className="text-3xl mb-4">▶</div>
                  <h4 className="font-serif text-xl font-medium text-foreground mb-3">브랜디드 유튜브</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">창업자 서사, 강의 현장, 수강생 후기 — 신뢰를 쌓는 장편 콘텐츠. 런칭 직후의 낯선 브랜드도 빠르게 인지·신뢰를 형성합니다.</p>
                </div>
                <div className="bg-card border border-border p-8 rounded-lg">
                  <div className="text-3xl mb-4">⚡</div>
                  <h4 className="font-serif text-xl font-medium text-foreground mb-3">숏폼</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">15-60초 안에 임팩트. 퍼포먼스 광고와 연동되는 숏폼 소재로 상단 노출과 전환을 동시에 노립니다.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* YouTube Service Detail */}
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal>
            <SectionHeader label="YouTube Service" title="유튜브로 24시간<br/>영업사원을 만듭니다" subtitle="브랜드 유튜브 채널 운영 대행" dark />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎬", title: "올인원 유튜브 운영", desc: "기획·촬영·편집·업로드·썸네일·숏폼까지 원스톱 대행" },
                { icon: "📊", title: "알고리즘 기반 기획", desc: "감이 아니라 데이터로 운영. 시청 유지율, 검색 키워드, 반응 분석" },
                { icon: "🎯", title: "매출 연결 전략", desc: "단순 조회수가 아닌 상담·매출로 연결되는 유튜브 설계" },
                { icon: "📈", title: "채널 성장 설계", desc: "추천·검색 동시 유입 구조로 2개월 내 채널 성장" },
                { icon: "⚡", title: "숏폼 재가공", desc: "롱폼 → 숏폼 자동 재가공으로 콘텐츠 활용 극대화" },
                { icon: "🏆", title: "1등 포지션 구축", desc: "단기 광고가 아닌 장기적 신뢰가 쌓이는 브랜드 포지션" },
              ].map((feat) => (
                <div key={feat.title} className="bg-cream/5 border border-cream/10 p-6 rounded-lg hover:border-gold/50 transition-all">
                  <div className="text-2xl mb-3">{feat.icon}</div>
                  <h4 className="font-serif text-base font-medium text-cream mb-2">{feat.title}</h4>
                  <p className="text-sm text-cream/60 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark border-t border-cream/10">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ num: "9년+", label: "현장 경력" }, { num: "100만+", label: "누적 대행 구독자" }, { num: "4배", label: "상담 전환 증가" }, { num: "2개월", label: "채널 성장 기간" }].map((r) => (
                <div key={r.label} className="text-center">
                  <span className="block font-display text-4xl text-cream">{r.num}</span>
                  <span className="block text-xs text-cream/40 tracking-widest mt-2">{r.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-[120px] bg-background">
        <div className="container">
          <Reveal>
            <SectionHeader label="Case Studies" title="채널 성장 케이스" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-card border border-border p-8 rounded-lg">
                <span className="text-xs text-gold tracking-widest mb-4 block">사례 1 · 채널 성장</span>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-serif text-base font-medium text-foreground mb-4">BEFORE</h4>
                    <p className="text-sm text-muted-foreground">직원 직접 운영 (1년 6개월)</p>
                    <ul className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
                      <li>• 구독자 73명</li>
                      <li>• 총 조회수 4.4만</li>
                      <li>• 콘텐츠 방향성 불분명</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-medium text-gold mb-4">AFTER</h4>
                    <p className="text-sm text-muted-foreground">전문 대행 투입 (2개월)</p>
                    <ul className="mt-3 flex flex-col gap-1 text-sm text-foreground font-medium">
                      <li>• 구독자 2,500명</li>
                      <li>• 영상 44만 조회수</li>
                      <li>• 추천·검색 동시 유입</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border p-8 rounded-lg">
                <span className="text-xs text-gold tracking-widest mb-4 block">사례 2 · 매출 전환</span>
                <h4 className="font-serif text-xl font-medium text-foreground mb-4">유튜브 운영 2개월, 상담 건수 4배 증가</h4>
                <div className="flex items-end gap-8 mt-6">
                  <div>
                    <span className="block text-4xl font-display text-muted-foreground">30</span>
                    <span className="text-xs text-muted-foreground">이전 (월 30건)</span>
                  </div>
                  <div className="text-gold text-2xl font-bold">→</div>
                  <div>
                    <span className="block text-4xl font-display text-gold">120+</span>
                    <span className="text-xs text-muted-foreground">현재 (월 120건 이상)</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-[120px] bg-dark">
        <div className="container">
          <Reveal>
            <SectionHeader label="Algorithm-Driven" title="분석 데이터 기반<br/>유튜브 알고리즘 채널 기획" subtitle="감이 아니라 알고리즘 반응으로 운영합니다" dark />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {[
                { icon: "📊", title: "시청 유지", items: ["초반 이탈률 분석", "설명 구간 유지율", "끝까지 본 비율"] },
                { icon: "🔍", title: "검색/질문", items: ["검색 유입 키워드", "댓글 질문 분석", "상담 시 반복 질문"] },
                { icon: "💬", title: "반응", items: ["저장 / 공유 수", "구독 전환율", "좋아요 비율"] },
                { icon: "📈", title: "누적데이터", items: ["메시지 일관성", "반복 주제 효과", "채널 체류 시간"] },
              ].map((col) => (
                <div key={col.title} className="bg-cream/5 border border-cream/10 p-6 rounded-lg">
                  <div className="text-xl mb-2">{col.icon}</div>
                  <h4 className="font-serif text-sm font-medium text-cream mb-3">{col.title}</h4>
                  <ul className="flex flex-col gap-1.5">
                    {col.items.map((it) => (
                      <li key={it} className="text-xs text-cream/50">• {it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gold/10 border border-gold/20 rounded-lg">
              <p className="text-xs text-gold/80 leading-relaxed text-center">
                🔄 피드백 루프: 이탈 높은 구간 → 다음 영상 구조 수정 · 질문 많은 주제 → 다음 달 메인 콘텐츠 · 반응 좋은 영상 → 숏폼 재가공
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container">
          <Reveal>
            <h2 className="font-serif text-3xl text-foreground mb-4">브랜디드 콘텐츠가 필요하신가요?</h2>
            <p className="text-muted-foreground mb-8">무료 상담으로 시작해보세요.</p>
            <a href="mailto:contact@pixelpage.co.kr" className="inline-block px-9 py-4 bg-gold text-dark font-bold text-sm tracking-wide hover:bg-gold-light transition-all">
              무료 상담 신청
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default BrandedPage;
