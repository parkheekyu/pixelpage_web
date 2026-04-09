import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <span className="font-display text-xl tracking-[0.3em] text-cream">PIXELPAGE</span>
            <p className="font-display italic text-sm text-gold mt-2">Selling what you can't touch.</p>
            <p className="text-sm text-cream/50 mt-3">교육 · 지식 · 경험 — 무형의 가치를 파는 브랜드 전담 에이전시</p>
          </div>
          <div>
            <h5 className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-4">서비스</h5>
            <div className="flex flex-col gap-2">
              <Link to="/services/performance" className="text-sm text-cream/60 hover:text-gold transition-colors">퍼포먼스 마케팅</Link>
              <Link to="/services/branded" className="text-sm text-cream/60 hover:text-gold transition-colors">브랜디드 콘텐츠</Link>
              <Link to="/services/seo" className="text-sm text-cream/60 hover:text-gold transition-colors">검색엔진 최적화</Link>
              <Link to="/services/crm" className="text-sm text-cream/60 hover:text-gold transition-colors">CRM 마케팅</Link>
              <Link to="/services/webbuild" className="text-sm text-cream/60 hover:text-gold transition-colors">웹 빌드</Link>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-4">회사</h5>
            <div className="flex flex-col gap-2">
              <Link to="/#cases" className="text-sm text-cream/60 hover:text-gold transition-colors">성과</Link>
              <Link to="/#contact" className="text-sm text-cream/60 hover:text-gold transition-colors">연락</Link>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-bold tracking-[0.15em] uppercase text-gold mb-4">연락처</h5>
            <div className="flex flex-col gap-2">
              <a href="mailto:contact@pixelpage.co.kr" className="text-sm text-cream/60 hover:text-gold transition-colors">contact@pixelpage.co.kr</a>
              <a href="https://pixelpage.co.kr" target="_blank" rel="noopener noreferrer" className="text-sm text-cream/60 hover:text-gold transition-colors">pixelpage.co.kr</a>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30">© 2026 PIXELPAGE. All rights reserved.</p>
          <p className="text-xs text-cream/30">Meta Business Partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
