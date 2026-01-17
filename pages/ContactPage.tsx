import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen relative overflow-hidden font-sans pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 z-0"></div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 font-bold text-sm mb-6 animate-fade-in-up">
            <MessageCircle size={16} className="text-amber-500" />
            <span>Hỗ trợ tư vấn 24/7</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-900 mb-6 tracking-tight">
            Liên Hệ Với <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Thiên Thần</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe, chia sẻ và đồng hành cùng gia đình để tìm ra giải pháp giáo dục tốt nhất cho con yêu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Cards */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-emerald-50 relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-800 mb-4">Hệ Thống Cơ Sở</h3>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold mt-0.5 shadow-sm">1</span>
                            <p className="text-gray-600 text-sm font-medium">416/65 Dương Quảng Hàm, P. An Nhơn, TP.HCM</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold mt-0.5 shadow-sm">2</span>
                            <p className="text-gray-600 text-sm font-medium">286/5 Thống Nhất, P. An Hội Đông, TP.HCM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform">
                    <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Phone size={80} /></div>
                    <Phone size={28} className="mb-4 text-amber-300" />
                    <p className="text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1">Hotline</p>
                    <p className="text-2xl font-extrabold">0986 77 6878</p>
                    <p className="text-sm opacity-80 font-medium">(028) 3622 5431</p>
                 </div>

                 <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-gray-100 group hover:border-amber-200 transition-all hover:-translate-y-1">
                    <Mail size={28} className="mb-4 text-amber-500" />
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-gray-800 font-bold text-sm break-words">trungtamthienthan @gmail.com</p>
                 </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                </div>
                <div>
                    <p className="text-gray-800 font-bold">Giờ làm việc</p>
                    <p className="text-gray-500 text-sm font-medium">Thứ 2 - Thứ 7: 7:30 - 17:30</p>
                </div>
            </div>
          </div>

          {/* Right Column: Large Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-gray-100 relative">
               {/* Decor */}
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"></div>

               <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">Gửi Thông Tin Tư Vấn</h2>
               <p className="text-gray-500 mb-8 font-medium">Để lại thông tin, chuyên gia tâm lý sẽ liên hệ đánh giá sơ bộ miễn phí cho bé.</p>

               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Họ tên phụ huynh</label>
                        <input type="text" placeholder="Ví dụ: Nguyễn Văn A" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all font-medium placeholder-gray-400" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Số điện thoại</label>
                        <input type="tel" placeholder="Ví dụ: 0909..." className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all font-medium placeholder-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Email (nếu có)</label>
                        <input type="email" placeholder="email@example.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all font-medium placeholder-gray-400" />
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Độ tuổi của bé</label>
                        <div className="relative">
                            <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all font-medium appearance-none text-gray-700 cursor-pointer">
                                <option>Dưới 24 tháng</option>
                                <option>2 - 4 tuổi</option>
                                <option>4 - 6 tuổi</option>
                                <option>6 - 12 tuổi</option>
                                <option>Trên 12 tuổi</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <ArrowRight size={20} className="rotate-90"/>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Nội dung cần hỗ trợ</label>
                      <textarea rows={5} placeholder="Chia sẻ sơ lược về các khó khăn của bé (chậm nói, kém tập trung, tăng động...)" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all font-medium placeholder-gray-400 resize-none"></textarea>
                  </div>

                  <button type="button" className="w-full bg-emerald-600 text-white font-extrabold text-lg py-5 rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                     <Send size={22} />
                     Gửi Đăng Ký Ngay
                  </button>
                  <p className="text-center text-xs text-gray-400 font-medium mt-4">Chúng tôi cam kết bảo mật thông tin cá nhân của quý phụ huynh.</p>
               </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;