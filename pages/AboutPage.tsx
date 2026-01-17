import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, History, Target, Eye, ShieldCheck, Star, Heart, Users, Award, Sparkles, Quote, BookOpen, Smile, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans pb-24">
      
      {/* 1. HERO SECTION - Synchronized Style */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50 rounded-b-[4rem] mb-20 shadow-sm">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-100 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 font-bold text-sm mb-6 animate-fade-in-up">
            <Sparkles size={16} className="text-amber-500" />
            <span>Hơn 10 năm kiến tạo nụ cười</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ngôi Nhà Của Những <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Thiên Thần Nhỏ</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Chúng tôi tin rằng mỗi đứa trẻ đều mang trong mình một hạt giống tiềm năng. Nhiệm vụ của Thiên Thần là tưới tắm hạt giống ấy bằng tình yêu thương và phương pháp khoa học.
          </p>
          
          {/* Stats Bar Floating */}
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-20 hover:-translate-y-1 transition-transform duration-300">
             {[
                { num: "2013", label: "Thành lập", icon: <History className="text-amber-500"/> },
                { num: "1000+", label: "Trẻ hòa nhập", icon: <Users className="text-blue-500"/> },
                { num: "20+", label: "Chuyên gia", icon: <Award className="text-emerald-500"/> },
                { num: "100%", label: "Tận tâm", icon: <Heart className="text-red-500"/> },
             ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                   <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                   <div className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-1">{stat.num}</div>
                   <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-28">

        {/* 2. OUR STORY - Image & Text */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                 <img src="https://picsum.photos/400/500?random=50" className="rounded-[2.5rem] shadow-lg w-full h-auto object-cover mt-12 transform -rotate-2 hover:rotate-0 transition-all duration-500" alt="Giờ học 1" />
                 <img src="https://picsum.photos/400/500?random=51" className="rounded-[2.5rem] shadow-lg w-full h-auto object-cover mb-12 transform rotate-2 hover:rotate-0 transition-all duration-500" alt="Giờ học 2" />
              </div>
              {/* Decorative Circle */}
              <div className="absolute inset-0 m-auto w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10"></div>
           </div>
           
           <div className="order-1 lg:order-2">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm bg-emerald-50 px-4 py-1 rounded-full inline-block mb-4">Câu chuyện của chúng tôi</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">Khởi Nguồn Từ Trái Tim <span className="text-emerald-600">Người Mẹ & Người Thầy</span></h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                 <p>
                    Trung tâm Thiên Thần được thành lập vào năm 2013, xuất phát từ trăn trở của những nhà giáo dục đặc biệt trước thực trạng thiếu hụt môi trường can thiệp chất lượng cao cho trẻ em có nhu cầu đặc biệt tại TP.HCM.
                 </p>
                 <p>
                    Hơn một thập kỷ qua, chúng tôi đã kiên trì với triết lý: <strong>"Không có đứa trẻ nào bị bỏ lại phía sau"</strong>. Mỗi bước tiến nhỏ của con là niềm hạnh phúc to lớn của đội ngũ Thiên Thần.
                 </p>
              </div>
              
              <div className="mt-8 bg-amber-50 p-6 rounded-3xl border border-amber-100 flex gap-4 items-start">
                 <Quote size={40} className="text-amber-400 flex-shrink-0 fill-current opacity-50" />
                 <div>
                    <p className="italic text-gray-700 font-medium mb-2">"Giáo dục đặc biệt không chỉ là dạy kỹ năng, mà là hành trình đánh thức những giác quan và cảm xúc ngủ quên."</p>
                    <p className="font-bold text-gray-900 text-sm">- Ban Giám Đốc Trung Tâm</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. VISION & MISSION - Big Cards */}
        <section>
           <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Tầm Nhìn & Sứ Mệnh</h2>
              <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-4"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-emerald-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl group border-4 border-emerald-900 hover:border-emerald-500 transition-colors">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-emerald-700">
                       <Eye size={32} className="text-emerald-300" />
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4">Tầm Nhìn</h3>
                    <p className="text-emerald-100 text-lg leading-relaxed opacity-90">
                       Trở thành hệ thống giáo dục hòa nhập uy tín hàng đầu, tiên phong trong việc ứng dụng các phương pháp can thiệp khoa học quốc tế tại Việt Nam.
                    </p>
                 </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-[2.5rem] p-10 text-gray-800 relative overflow-hidden shadow-xl border border-gray-100 group hover:border-amber-400 transition-colors">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-40"></div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-amber-600">
                       <Target size={32} />
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4">Sứ Mệnh</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                       Đồng hành cùng gia đình để thấu hiểu và chia sẻ. Cung cấp môi trường giáo dục an toàn, tôn trọng sự khác biệt và phát huy tối đa tiềm năng của từng trẻ.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. CORE VALUES - Grid with Icons */}
        <section className="bg-slate-50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
           {/* Decor */}
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           
           <div className="relative z-10">
              <div className="text-center mb-16">
                 <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm bg-white px-4 py-1 rounded-full shadow-sm mb-3 inline-block">Văn hóa Thiên Thần</span>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Giá Trị Cốt Lõi</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                    { title: "Yêu Thương", icon: <Heart/>, desc: "Tình yêu thương là gốc rễ của mọi sự chuyển biến tích cực.", color: "bg-red-50 text-red-600" },
                    { title: "Tôn Trọng", icon: <Users/>, desc: "Tôn trọng cá tính và sự khác biệt của mỗi đứa trẻ.", color: "bg-blue-50 text-blue-600" },
                    { title: "Khoa Học", icon: <BookOpen/>, desc: "Phương pháp can thiệp dựa trên bằng chứng khoa học.", color: "bg-purple-50 text-purple-600" },
                    { title: "Kiên Nhẫn", icon: <History/>, desc: "Bền bỉ đồng hành cùng từng bước tiến nhỏ của con.", color: "bg-emerald-50 text-emerald-600" },
                    { title: "Trung Thực", icon: <ShieldCheck/>, desc: "Minh bạch trong đánh giá và trao đổi với phụ huynh.", color: "bg-amber-50 text-amber-600" },
                    { title: "Hạnh Phúc", icon: <Smile/>, desc: "Mang lại niềm vui và sự tự tin cho trẻ mỗi ngày đến lớp.", color: "bg-pink-50 text-pink-600" },
                 ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                       <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                          {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28, fill: "currentColor", className: "opacity-80" })}
                       </div>
                       <h3 className="text-xl font-extrabold text-gray-800 mb-3">{item.title}</h3>
                       <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. HISTORY LINE - Fixed Layout */}
        <section className="container mx-auto max-w-5xl">
           <div className="text-center mb-20">
              <h2 className="text-3xl font-extrabold text-gray-900">Chặng Đường Phát Triển</h2>
              <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-4"></div>
           </div>

           <div className="relative">
              {/* Central Line: Left on mobile, Center on desktop */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-100 via-emerald-400 to-emerald-100 md:-translate-x-1/2"></div>

              <div className="space-y-12">
                {[
                   { year: "2013", title: "Thành lập Trung tâm", desc: "Tiền thân là Trung tâm tư vấn và giáo dục trẻ em Thiên Thần tại Gò Vấp, bắt đầu hành trình gieo hạt giống yêu thương." },
                   { year: "2015", title: "Cấp phép hoạt động", desc: "Nhận quyết định chính thức từ Sở GD&ĐT TP.HCM (Số 123/QD-SGDDT), khẳng định vị thế pháp lý và chất lượng chuyên môn." },
                   { year: "2018", title: "Mở rộng Cơ sở 2", desc: "Khánh thành cơ sở mới tại Thống Nhất với trang thiết bị hiện đại, đáp ứng nhu cầu ngày càng cao của phụ huynh." },
                   { year: "2024", title: "Đổi mới toàn diện", desc: "Nâng cấp chương trình học, ứng dụng công nghệ trong giảng dạy và chuẩn hóa quy trình đánh giá theo chuẩn quốc tế." }
                ].map((item, idx) => (
                   <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      
                      {/* Spacer for Desktop Alignment */}
                      <div className="hidden md:block w-1/2"></div>
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-md z-10 md:-translate-x-1/2 transform -translate-x-1/2 flex items-center justify-center">
                         <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-1/2 pl-20 pr-4 md:px-12`}>
                         <div className={`bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:border-emerald-300 relative ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            
                            {/* Connector Line (Decorative) */}
                            <div className={`hidden md:block absolute top-1/2 w-8 h-[2px] bg-emerald-200 ${idx % 2 === 0 ? '-right-8' : '-left-8'}`}></div>

                            <div className={`inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-extrabold rounded-lg text-sm mb-3 border border-emerald-100`}>
                               {item.year}
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                         </div>
                      </div>
                   </div>
                ))}
              </div>
           </div>
        </section>

        {/* 6. LEGAL & TRUST - Badge */}
        <section className="bg-amber-400 rounded-[3rem] p-8 md:p-12 text-amber-900 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-amber-500">
                 <ShieldCheck size={48} />
              </div>
              <div>
                 <h3 className="text-2xl font-extrabold mb-2">Đơn Vị Giáo Dục Được Cấp Phép</h3>
                 <p className="text-amber-900/80 font-medium text-lg max-w-2xl">
                    Trung tâm hoạt động dưới sự quản lý và cấp phép chính thức của <strong>Sở Giáo dục & Đào tạo TP.HCM</strong>. Chúng tôi cam kết tuân thủ mọi quy định về chuyên môn và đạo đức nghề nghiệp.
                 </p>
              </div>
              <div className="md:ml-auto">
                 <Link to="/lien-he" className="bg-white text-amber-600 font-extrabold px-8 py-4 rounded-full shadow-lg hover:bg-amber-50 transition-colors inline-block">
                    Liên hệ ngay
                 </Link>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;