import React from 'react';
import { Home, Music, Dumbbell, Utensils, ShieldCheck, Sun, Wind, Video, Sparkles, Building, Play } from 'lucide-react';

const FacilitiesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans pb-24">
      
      {/* 1. Hero Section - Consistent with others */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-slate-50 rounded-b-[4rem] mb-20 shadow-sm">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/50 rounded-l-full -mr-20 z-0"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 font-bold text-sm mb-6 animate-fade-in-up">
            <Building size={16} className="text-amber-500" />
            <span>Không gian học tập lý tưởng</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Cơ Sở Vật Chất <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hiện Đại</span> <br/>
            Khơi Nguồn <span className="relative inline-block">
              Sáng Tạo
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-0 max-w-2xl mx-auto leading-relaxed">
             Mỗi không gian tại Thiên Thần đều được thiết kế tỉ mỉ, tuân thủ nghiêm ngặt các tiêu chuẩn an toàn giáo dục và kích thích đa giác quan cho trẻ.
          </p>
        </div>
      </section>

      {/* 2. Featured Room Types */}
      <div className="container mx-auto px-4 space-y-24">
        
        {/* Section 1: Learning Spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           <div className="lg:col-span-5 relative group">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 group-hover:rotate-0 transition-transform duration-500 z-10">
                 <img src="https://picsum.photos/600/800?random=100" alt="Phòng học cá nhân" className="w-full h-auto object-cover" />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent p-8 text-white">
                    <h3 className="text-2xl font-bold mb-1">Không Gian Chuyên Biệt</h3>
                    <p className="opacity-90 font-medium text-sm">Thiết kế tối ưu cho sự tập trung</p>
                 </div>
              </div>
              {/* Decorative elements behind */}
              <div className="absolute top-10 -left-6 w-full h-full bg-amber-100 rounded-[3rem] -z-10 -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl -z-10"></div>
           </div>

           <div className="lg:col-span-7 space-y-8">
              <div>
                 <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Hệ Thống Phòng Học Đa Chức Năng</h2>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   Chúng tôi hiểu rằng môi trường vật lý ảnh hưởng trực tiếp đến hiệu quả can thiệp. Vì vậy, các phòng học được phân chia khoa học theo từng chức năng chuyên biệt để tối ưu hóa trải nghiệm học tập.
                 </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                    { title: "Phòng Cá Nhân (1:1)", desc: "Trang bị bàn ghế chuyên dụng, đồ dùng trực quan, không gian yên tĩnh hạn chế xao nhãng.", icon: <Home/>, color: "bg-blue-50 text-blue-600" },
                    { title: "Phòng Nhóm & Xã Hội", desc: "Không gian rộng rãi, bố trí theo mô hình lớp học để trẻ làm quen với môi trường học đường.", icon: <Building/>, color: "bg-amber-50 text-amber-600" },
                    { title: "Phòng Tâm Vận Động", desc: "Sàn gỗ, thang leo, nhà bóng, thảm gai... giúp phát triển vận động thô và điều hòa cảm giác.", icon: <Dumbbell/>, color: "bg-red-50 text-red-600" },
                    { title: "Phòng Âm Nhạc & Nghệ Thuật", desc: "Đầy đủ đàn organ, trống và các nhạc cụ gõ giúp trẻ thư giãn, giải tỏa căng thẳng và cảm thụ.", icon: <Music/>, color: "bg-purple-50 text-purple-600" },
                 ].map((room, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-emerald-50 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group hover:-translate-y-1">
                       <div className={`w-14 h-14 ${room.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner`}>
                          {React.cloneElement(room.icon as React.ReactElement<any>, { size: 28 })}
                       </div>
                       <h3 className="font-extrabold text-gray-800 text-lg mb-2 group-hover:text-emerald-700 transition-colors">{room.title}</h3>
                       <p className="text-sm text-gray-500 font-medium leading-relaxed">{room.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Section 2: Safety & Amenities - New Horizontal Scroll or Grid */}
        <section className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
             {/* Background Patterns */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
             
             <div className="relative z-10">
                <div className="text-center mb-16">
                   <div className="inline-block bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-4">TIÊU CHUẨN 5 SAO</div>
                   <h2 className="text-3xl md:text-4xl font-extrabold mb-4">An Toàn & Tiện Nghi Tuyệt Đối</h2>
                   <p className="text-emerald-100 max-w-2xl mx-auto text-lg">Sự an toàn của trẻ là ưu tiên hàng đầu trong mọi thiết kế của chúng tôi, mang lại sự an tâm tuyệt đối cho phụ huynh.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   {[
                      { icon: <Video size={32}/>, title: "Camera Giám Sát", desc: "Hệ thống camera an ninh 24/7 tại các khu vực chung và hành lang." },
                      { icon: <Wind size={32}/>, title: "Không Gian Thoáng Khí", desc: "Cửa sổ lớn đón ánh sáng tự nhiên và hệ thống đối lưu không khí tươi." },
                      { icon: <ShieldCheck size={32}/>, title: "Thiết Kế An Toàn", desc: "Góc cạnh bo tròn, lưới bảo vệ cầu thang, sàn chống trượt, ổ điện cao." },
                      { icon: <Utensils size={32}/>, title: "Bếp Ăn Một Chiều", desc: "Quy trình chế biến thực phẩm vệ sinh, thực đơn đa dạng dinh dưỡng." },
                      { icon: <Sun size={32}/>, title: "Ánh Sáng Chuẩn", desc: "Hệ thống đèn chống cận thị và tận dụng tối đa ánh sáng mặt trời." },
                      { icon: <Sparkles size={32}/>, title: "Vệ Sinh Hằng Ngày", desc: "Khử khuẩn đồ chơi, dụng cụ học tập và phòng học sạch sẽ mỗi ngày." },
                   ].map((item, idx) => (
                      <div key={idx} className="bg-emerald-800/50 backdrop-blur-md p-8 rounded-3xl border border-emerald-600/30 hover:bg-emerald-700/50 hover:border-amber-400/50 transition-all duration-300 group">
                         <div className="mb-6 text-amber-400 p-3 bg-emerald-900/80 rounded-2xl inline-block shadow-lg group-hover:scale-110 transition-transform">{item.icon}</div>
                         <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                         <p className="text-sm text-emerald-100 opacity-80 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
        </section>

        {/* Section 3: Gallery - Polished Masonry */}
        <section>
          <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold text-gray-800">Thư Viện Hình Ảnh</h2>
             <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-4"></div>
             <p className="text-gray-500 mt-4">Một vòng tham quan thực tế không gian tại Trung tâm Thiên Thần.</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-lg group relative cursor-pointer border border-gray-100">
                <img 
                  src={`https://picsum.photos/600/${i % 2 === 0 ? '800' : '500'}?random=${100+i}`} 
                  alt={`CSVC ${i}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2 block">Cơ sở vật chất</span>
                      <h3 className="text-white font-bold text-xl flex items-center gap-2">
                        Không gian sáng tạo {i}
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Play size={12} fill="white"/></div>
                      </h3>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-6 py-3 rounded-full font-bold text-sm border border-emerald-100">
                <Sparkles size={16} className="text-amber-500"/>
                Cơ sở vật chất được nâng cấp và bảo trì định kỳ hàng năm
             </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FacilitiesPage;