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
      { title: "검색엔진 최적화", sub: "네이버 SEO · 구글 SEO", href: "/services/seo", badge: "준비중" },
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-[400ms] ${
        scrolled ? "bg-background/95 backdrop-blur-xl shadow-sm" : ""
      }`}
    >
      <div className="max-w-[1240px] mx-auto h-[72px] flex items-center gap-10">
        <Link to="/" className="font-display text-xl tracking-[0.3em] text-foreground hover:text-gold transition-colors">
          PIXELPAGE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className="text-sm text-foreground tracking-wide hover:text-gold transition-colors py-2"
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-card border border-border shadow-xl w-[300px] p-2 rounded-md">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.href}
                        to={d.href}
                        className="block px-4 py-3 rounded hover:bg-background transition-colors"
                      >
                        <span className="block text-sm font-medium text-foreground">
                          {d.title}
                          {d.badge && (
                            <span className="inline-block ml-2 text-[9px] font-bold bg-gold text-dark px-1.5 py-0.5 rounded-sm">
                              {d.badge}
                            </span>
                          )}
                        </span>
                        <span className="block text-[11px] text-muted-foreground tracking-wide">{d.sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            to="/#contact"
            className="inline-block px-6 py-2.5 bg-gold text-dark text-[13px] font-bold tracking-wide hover:bg-gold-light transition-colors"
          >
            무료 상담 신청
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border pb-6">
          <div className="max-w-[1240px] mx-auto px-4 pt-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link to={item.href} className="block py-2 text-sm font-medium text-foreground">
                  {item.label}
                </Link>
                {item.dropdown?.map((d) => (
                  <Link
                    key={d.href}
                    to={d.href}
                    className="block py-2 pl-4 text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {d.title}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/#contact"
              className="mt-4 inline-block text-center px-6 py-3 bg-gold text-dark text-sm font-bold"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
