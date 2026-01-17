import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock, Home, Info, Users, BookOpen, Building, Newspaper, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ProgramPage from './pages/ProgramPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll to adjust header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'TRANG CHỦ', path: '/' },
    { name: 'GIỚI THIỆU', path: '/gioi-thieu' },
    { name: 'CHƯƠNG TRÌNH', path: '/chuong-trinh' },
    { name: 'ĐỘI NGŨ', path: '/doi-ngu' },
    { name: 'CSVC', path: '/co-so-vat-chat' },
    { name: 'TIN TỨC', path: '/tin-tuc' },
  ];

  return (
    <>
      {/* 1. TOP BAR - Sleek & Dark for high contrast */}
      <div className="bg-emerald-950 text-emerald-50 py-2 text-xs font-medium relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
             <a href="tel:02836225431" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone size={14} className="text-amber-400 fill-amber-400" /> 
                <span className="tracking-wide">(028) 3622 5431</span>
             </a>
             <a href="mailto:trungtamthienthan@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail size={14} className="text-amber-400" />
                <span>trungtamthienthan@gmail.com</span>
             </a>
          </div>
          <div className="hidden md:flex items-center gap-2 text-emerald-200/80">
             <Clock size={14} />
             <span>Mon - Sat: 7:30 - 17:30</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER - Glassmorphism & Modern Navigation */}
      <header className={`sticky top-0 w-full z-40 transition-all duration-500 ease-in-out border-b border-transparent ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2 border-emerald-100/50' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
          
            {/* LOGO - More Prominent */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-emerald-200 group-hover:rotate-6 transition-transform duration-300">
                  TT
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white animate-bounce"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl font-extrabold text-gray-800 leading-none tracking-tight group-hover:text-emerald-600 transition-colors font-sans">
                  THIÊN THẦN
                </h1>
                <p className="text-[10px] md:text-[11px] font-bold text-emerald-600 uppercase tracking-[0.2em] mt-1">Giáo dục hòa nhập</p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION - Visible on LG screens now */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100/50 mx-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 xl:px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 relative overflow-hidden ${
                      isActive
                        ? 'text-white bg-emerald-600 shadow-md shadow-emerald-200'
                        : 'text-gray-600 hover:text-emerald-700 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Call Button (Hidden on Mobile) */}
              <a 
                href="tel:0986776878"
                className="hidden xl:flex w-11 h-11 rounded-full border-2 border-emerald-100 text-emerald-600 items-center justify-center hover:bg-emerald-50 transition-colors"
                title="Gọi ngay"
              >
                <Phone size={20} />
              </a>

              {/* CTA Button */}
              <Link 
                to="/lien-he" 
                className="hidden sm:flex bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-amber-200 hover:shadow-amber-300 hover:-translate-y-0.5 transition-all items-center gap-2 group"
              >
                <span>Tư vấn ngay</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </Link>

              {/* Mobile Toggle */}
              <button 
                className="lg:hidden p-2.5 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN - Improved Animation & Style */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-emerald-100 shadow-2xl transition-all duration-500 ease-in-out origin-top ${isOpen ? 'max-h-[80vh] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 overflow-hidden'}`}>
          <div className="container mx-auto p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${
                   location.pathname === item.path 
                   ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 pl-6' 
                   : 'text-gray-600 hover:bg-gray-50 hover:pl-6'
                }`}
              >
                <span className="flex items-center gap-3">
                  {location.pathname === item.path && <Sparkles size={16} className="text-amber-400"/>}
                  {item.name}
                </span>
                <ChevronRight size={18} className="opacity-30" />
              </Link>
            ))}
            
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
               <a href="tel:02836225431" className="flex flex-col items-center justify-center gap-1 p-4 bg-emerald-50 text-emerald-800 rounded-2xl font-bold text-sm active:scale-95 transition-transform">
                  <Phone size={20} className="mb-1"/> Gọi điện
               </a>
               <Link to="/lien-he" onClick={() => setIsOpen(false)} className="flex flex-col items-center justify-center gap-1 p-4 bg-amber-400 text-amber-950 rounded-2xl font-bold text-sm active:scale-95 transition-transform shadow-lg shadow-amber-100">
                  <Mail size={20} className="mb-1"/> Liên hệ
               </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white mt-auto relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-inner border border-emerald-400">TT</div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight leading-none">THIÊN THẦN</span>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Giáo dục đặc biệt</span>
              </div>
            </div>
            <p className="text-emerald-100/70 text-sm leading-relaxed font-medium">
              Đơn vị tiên phong trong lĩnh vực can thiệp sớm và giáo dục hòa nhập tại TP.HCM. Nơi mỗi đứa trẻ là một thiên thần cần được đánh thức.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-emerald-800 hover:border-blue-500 hover:-translate-y-1">
                <span className="font-bold text-lg">f</span>
              </a>
              <a href="mailto:trungtamthienthan@gmail.com" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all border border-emerald-800 hover:border-amber-400 hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <span className="w-1 h-6 bg-amber-400 rounded-full"></span>
               Liên Hệ
            </h3>
            <ul className="space-y-5 text-sm text-emerald-100/80">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-amber-900 transition-colors">
                   <MapPin size={14} />
                </div>
                <div>
                  <strong className="text-white block mb-1">Cơ sở 1</strong> 
                  <span className="group-hover:text-white transition-colors">416/65 Dương Quảng Hàm, P. An Nhơn, Gò Vấp, TP.HCM</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-amber-900 transition-colors">
                   <MapPin size={14} />
                </div>
                <div>
                  <strong className="text-white block mb-1">Cơ sở 2</strong> 
                  <span className="group-hover:text-white transition-colors">286/5 Thống Nhất, P. An Hội Đông, TP.HCM</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-amber-900 transition-colors">
                   <Phone size={14} />
                </div>
                <span className="font-bold text-white text-lg tracking-wide group-hover:text-amber-400 transition-colors">0986 77 6878</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <span className="w-1 h-6 bg-amber-400 rounded-full"></span>
               Về Chúng Tôi
            </h3>
             <ul className="space-y-3 text-sm text-emerald-100/70">
                {['Giới thiệu chung', 'Đội ngũ chuyên gia', 'Cơ sở vật chất', 'Tin tức & Sự kiện', 'Tuyển dụng nhân sự'].map((item, i) => (
                   <li key={i}>
                      <Link to="/" className="hover:text-amber-400 transition-all flex items-center gap-2 hover:pl-2">
                         <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full"></div> {item}
                      </Link>
                   </li>
                ))}
             </ul>
          </div>

          {/* Legal/Certificate */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <span className="w-1 h-6 bg-amber-400 rounded-full"></span>
               Chứng Nhận
            </h3>
            <p className="text-sm text-emerald-100/70 mb-5 leading-relaxed">
              Đơn vị hoạt động giáo dục đặc biệt được cấp phép chính thức, đảm bảo tiêu chuẩn chuyên môn cao nhất.
            </p>
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 p-5 rounded-2xl border border-emerald-700/50 flex items-center gap-4 group hover:border-amber-400/50 transition-colors">
                <Building size={32} className="text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider mb-1">Giấy phép hoạt động</p>
                  <p className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Số: 123/QD-SGDDT</p>
                  <p className="text-[10px] text-emerald-400 mt-1">Sở GD&ĐT TP.HCM</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-emerald-950 border-t border-emerald-900/50 py-6 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-400/50 font-medium">
          <p>&copy; {new Date().getFullYear()} Thiên Thần Education. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
             <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/doi-ngu" element={<TeamPage />} />
            <Route path="/chuong-trinh" element={<ProgramPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/co-so-vat-chat" element={<FacilitiesPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;