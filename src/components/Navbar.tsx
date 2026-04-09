import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "서비스",
    href: "/services",
    dropdown: [
      { title: "퍼포먼스 마케팅", sub: "Meta · Google · 토스 · 당근 · TikTok", href: "/services/performance" },
      { title: "브랜디드 콘텐츠", sub: "브랜디드 유튜브 · 숏폼", href: "/services/branded" },
      { title: "검색엔진 최적화", sub: "네이버 SEO · 구글 SEO", href: "/services/seo" },
      { title: "CRM 마케팅", sub: "퍼널 자동화 · 리텐션", href: "/services/crm" },
      { title: "웹 빌드", sub: "랜딩 · 브랜드 사이트", href: "/services/webbuild" },
    ],
  },
  { label: "성과", href: "/#cases" },
  { label: "연락", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-card/95 backdrop-blur-lg shadow-subtle" : ""
    }`}>
      <div className="max-w-[1200px] mx-auto h-16 flex items-center px-6 lg:px-8">
        <Link to="/" className="font-display text-[18px] tracking-[0.35em] text-t-strong mr-auto">
          PIXELPAGE
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link to={item.href} className="text-[13px] font-medium text-t-secondary hover:text-t-strong transition-colors">
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-card shadow-card-hover border border-border w-[280px] p-1.5 rounded-lg">
                    {item.dropdown.map((d) => (
                      <Link key={d.href} to={d.href} className="block px-3.5 py-2.5 rounded-md hover:bg-background transition-colors">
                        <span className="block text-[13px] font-medium text-t-strong">{d.title}</span>
                        <span className="block text-[11px] text-t-tertiary mt-0.5">{d.sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/#contact" className="text-[12px] font-bold tracking-[0.04em] px-5 py-2 bg-gold text-primary-foreground rounded-md hover:bg-gold-light transition-colors">
            상담 신청
          </Link>
        </div>

        <button className="lg:hidden p-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5 text-t-primary" /> : <Menu className="w-5 h-5 text-t-primary" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link to={item.href} className="block py-2 text-[14px] font-medium text-t-strong">{item.label}</Link>
                {item.dropdown?.map((d) => (
                  <Link key={d.href} to={d.href} className="block py-1.5 pl-4 text-[13px] text-t-secondary hover:text-gold transition-colors">
                    {d.title}
                  </Link>
                ))}
              </div>
            ))}
            <Link to="/#contact" className="mt-3 text-center text-[13px] font-bold px-5 py-2.5 bg-gold text-primary-foreground rounded-md">
              상담 신청
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
