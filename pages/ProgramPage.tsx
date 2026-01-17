import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, User, Brain, Music, PlayCircle, Star, Target, CheckCircle, ArrowRight, Sparkles, HeartHandshake, Zap, Puzzle, Activity } from 'lucide-react';

const ProgramPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans pb-24">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-slate-50 rounded-b-[4rem]">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/50 rounded-l-full -mr-20 z-0"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 font-bold text-sm mb-6 animate-fade-in-up">
                <BookOpen size={16} className="text-amber-500" />
                <span>Chương trình giáo dục chuẩn quốc tế</span>
             </div>
             <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Lộ Trình <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Khoa Học</span> <br/>
                Cho Tương Lai <span className="relative inline-block">
                  Vững Chắc
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
             </h1>
             <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Chúng tôi xây dựng Kế hoạch Giáo dục Cá nhân (IEP) dựa trên năng lực riêng biệt của từng trẻ, kết hợp đa phương pháp để đạt hiệu quả tối ưu.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-emerald-200/50 transition-all hover:-translate-y-1">
                   Xem lộ trình can thiệp
                </button>
                <Link to="/lien-he" className="px-8 py-4 bg-white text-emerald-800 border border-emerald-100 font-bold rounded-full shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all">
                   Đăng ký đánh giá
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Roadmap Section - The Journey */}
      <section id="roadmap" className="py-24 relative">
        <div className="container mx-auto px-4">
           <div className="text-center mb-20">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Quy Trình Tiếp Nhận & Can Thiệp</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Quy trình 5 bước khép kín, chuyên nghiệp giúp xác định chính xác khó khăn và đưa ra giải pháp phù hợp nhất.</p>
           </div>

           <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -translate-y-1/2 rounded-full z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                 {[
                    { step: "01", title: "Sàng lọc & Đánh giá", icon: <Activity size={24}/>, desc: "Sử dụng các bộ công cụ chuẩn quốc tế (Denver II, ASQ-3...)." },
                    { step: "02", title: "Chẩn đoán", icon: <Brain size={24}/>, desc: "Xác định mức độ phát triển và các vấn đề cốt lõi của trẻ." },
                    { step: "03", title: "Xây dựng IEP", icon: <BookOpen size={24}/>, desc: "Lập Kế hoạch Giáo dục Cá nhân hóa theo từng giai đoạn." },
                    { step: "04", title: "Can thiệp", icon: <HeartHandshake size={24}/>, desc: "Triển khai dạy học 1:1 hoặc nhóm với giáo cụ trực quan." },
                    { step: "05", title: "Lượng giá", icon: <CheckCircle size={24}/>, desc: "Đánh giá lại sau mỗi 3-6 tháng để điều chỉnh mục tiêu." }
                 ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                       <div className="w-16 h-16 bg-white border-4 border-emerald-100 rounded-2xl rotate-45 flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:rotate-0 transition-all duration-500 mb-8 relative">
                          <div className="-rotate-45 group-hover:rotate-0 transition-all duration-500 text-emerald-600 group-hover:text-white">
                             {item.icon}
                          </div>
                          <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-xs font-bold text-amber-900 shadow-sm z-20">
                             {item.step}
                          </div>
                       </div>
                       <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                       <p className="text-sm text-gray-500 leading-relaxed px-2">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 3. Methods Grid - Colorful & engaging */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         {/* Decor */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <div className="lg:w-1/3 sticky top-24">
                  <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Phương pháp cốt lõi</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-6">Đa Dạng Hóa <br/> Hoạt Động Trị Liệu</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                     Tại Thiên Thần, không có một phương pháp nào là duy nhất. Chúng tôi kết hợp linh hoạt các mô hình tiên tiến nhất để phù hợp với "kênh học tập" của từng trẻ.
                  </p>
                  <Link to="/lien-he" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:gap-4 transition-all">
                     Tìm hiểu chi tiết <ArrowRight size={20}/>
                  </Link>
               </div>

               <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                        { title: "Phương pháp ABA", desc: "Phân tích hành vi ứng dụng, giúp thay đổi hành vi tích cực.", icon: <User/>, color: "bg-blue-50 text-blue-600 border-blue-100" },
                        { title: "Phương pháp TEACCH", desc: "Trị liệu và giáo dục cho trẻ tự kỷ và khuyết tật giao tiếp.", icon: <Puzzle/>, color: "bg-amber-50 text-amber-600 border-amber-100" },
                        { title: "Âm ngữ trị liệu", desc: "Cải thiện khả năng ngôn ngữ, giao tiếp lời nói và không lời.", icon: <Activity/>, color: "bg-purple-50 text-purple-600 border-purple-100" },
                        { title: "Tâm vận động", desc: "Phát triển kỹ năng vận động thô, tinh và điều hòa cảm giác.", icon: <Zap/>, color: "bg-red-50 text-red-600 border-red-100" },
                        { title: "Trị liệu Âm nhạc", desc: "Sử dụng âm nhạc để kết nối và giải tỏa cảm xúc cho trẻ.", icon: <Music/>, color: "bg-pink-50 text-pink-600 border-pink-100" },
                        { title: "Kỹ năng xã hội", desc: "Học cách tương tác, chơi luân phiên và hòa nhập nhóm bạn.", icon: <Users/>, color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                     ].map((method, i) => (
                        <div key={i} className={`p-6 rounded-3xl border-2 ${method.color} hover:bg-white hover:shadow-xl transition-all duration-300 group`}>
                           <div className="flex items-center gap-4 mb-3">
                              <div className="p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">{method.icon}</div>
                              <h3 className="font-extrabold text-lg">{method.title}</h3>
                           </div>
                           <p className="text-sm opacity-80 font-medium leading-relaxed">{method.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Learning Models - Pricing/Feature Cards */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-extrabold text-gray-900">Hình Thức Tổ Chức Lớp Học</h2>
               <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {/* Card 1 */}
               <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <User size={120} />
                  </div>
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                     <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-800 mb-2">Can Thiệp Cá Nhân</h3>
                  <div className="text-blue-600 font-bold text-sm bg-blue-50 inline-block px-3 py-1 rounded-lg mb-6">Mô hình 1:1</div>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                        Giáo án riêng biệt cho từng trẻ
                     </li>
                     <li className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                        Tập trung tối đa sự chú ý
                     </li>
                     <li className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                        Phù hợp giai đoạn mới bắt đầu
                     </li>
                  </ul>
                  <Link to="/lien-he" className="block w-full py-3 rounded-xl bg-gray-50 text-gray-800 font-bold text-center hover:bg-blue-600 hover:text-white transition-colors">Đăng ký tư vấn</Link>
               </div>

               {/* Card 2 - Featured */}
               <div className="bg-emerald-900 rounded-[2.5rem] p-8 shadow-2xl border-4 border-emerald-500/30 transform md:-translate-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-bl-xl">PHỔ BIẾN NHẤT</div>
                  <div className="w-14 h-14 bg-emerald-700 text-emerald-300 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                     <Sparkles size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Bán Trú Hòa Nhập</h3>
                  <div className="text-emerald-200 font-bold text-sm bg-emerald-800 inline-block px-3 py-1 rounded-lg mb-6">Cả ngày / Nửa ngày</div>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start gap-3 text-emerald-100 text-sm font-medium">
                        <CheckCircle size={18} className="text-amber-400 flex-shrink-0" />
                        Can thiệp cá nhân + Nhóm
                     </li>
                     <li className="flex items-start gap-3 text-emerald-100 text-sm font-medium">
                        <CheckCircle size={18} className="text-amber-400 flex-shrink-0" />
                        Chăm sóc dinh dưỡng & Giấc ngủ
                     </li>
                     <li className="flex items-start gap-3 text-emerald-100 text-sm font-medium">
                        <CheckCircle size={18} className="text-amber-400 flex-shrink-0" />
                        Rèn nề nếp sinh hoạt tự lập
                     </li>
                  </ul>
                  <Link to="/lien-he" className="block w-full py-3 rounded-xl bg-amber-400 text-amber-900 font-bold text-center hover:bg-amber-300 transition-colors shadow-lg">Đăng ký ngay</Link>
               </div>

               {/* Card 3 */}
               <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Users size={120} />
                  </div>
                  <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                     <Users size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-800 mb-2">Lớp Tiền Học Đường</h3>
                  <div className="text-amber-600 font-bold text-sm bg-amber-50 inline-block px-3 py-1 rounded-lg mb-6">Nhóm nhỏ</div>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                        Trang bị kỹ năng học tập
                     </li>
                     <li className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                        Làm quen nội quy lớp học
                     </li>
                     <li className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                        <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                        Tương tác xã hội & Kết bạn
                     </li>
                  </ul>
                  <Link to="/lien-he" className="block w-full py-3 rounded-xl bg-gray-50 text-gray-800 font-bold text-center hover:bg-amber-500 hover:text-white transition-colors">Đăng ký tư vấn</Link>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Special Program CTA */}
      <section className="container mx-auto px-4">
         <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute -top-20 -left-20 w-60 h-60 bg-white opacity-10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-emerald-50 mb-4 border border-white/30">Dành cho trẻ 6 - 14 tuổi</div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Chương Trình Hỗ Trợ Kỹ Năng Học Đường</h2>
                <p className="text-lg text-emerald-50 mb-10 leading-relaxed font-medium">
                   Giúp trẻ vượt qua rào cản tâm lý, quản lý cảm xúc và trang bị các kỹ năng cần thiết để tự tin hòa nhập vào môi trường phổ thông.
                </p>
                <Link to="/lien-he" className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-extrabold px-10 py-4 rounded-full shadow-lg hover:bg-amber-300 hover:scale-105 transition-all">
                   <Sparkles size={20}/>
                   Nhận tư vấn chuyên sâu
                </Link>
             </div>
         </div>
      </section>

    </div>
  );
};

export default ProgramPage;