import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, BookOpen, Smile, ArrowRight, Star, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  // Generate high-res image lists
  // Duplicating the array to ensure smooth infinite loop
  const row1 = [10, 11, 12, 13, 14, 15, 16, 17, 10, 11, 12, 13, 14, 15, 16, 17]; 
  const row2 = [20, 21, 22, 23, 24, 25, 26, 27, 20, 21, 22, 23, 24, 25, 26, 27];
  const row3 = [30, 31, 32, 33, 34, 35, 36, 37, 30, 31, 32, 33, 34, 35, 36, 37];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Vivid Moving Wall */}
      <section className="relative h-screen min-h-[800px] overflow-hidden flex items-center justify-center">
        
        {/* Animated Background - Vivid & Sharp */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center gap-6 md:gap-8 bg-slate-50 overflow-hidden py-10">
            {/* Row 1 - Moving Left */}
            <div className="flex gap-6 md:gap-8 animate-marquee w-max opacity-90 hover:opacity-100 transition-opacity duration-500">
              {row1.map((img, i) => (
                <div key={`r1-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 transform transition-transform hover:scale-105">
                  <img src={`https://picsum.photos/800/600?random=${img}`} className="w-full h-full object-cover" alt="Activities" loading="eager" />
                </div>
              ))}
            </div>

            {/* Row 2 - Moving Right (Reverse) */}
            <div className="flex gap-6 md:gap-8 animate-marquee-reverse w-max opacity-90 hover:opacity-100 transition-opacity duration-500">
              {row2.map((img, i) => (
                <div key={`r2-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 transform transition-transform hover:scale-105">
                  <img src={`https://picsum.photos/800/600?random=${img}`} className="w-full h-full object-cover" alt="Activities" loading="eager" />
                </div>
              ))}
            </div>

            {/* Row 3 - Moving Left */}
            <div className="flex gap-6 md:gap-8 animate-marquee w-max opacity-90 hover:opacity-100 transition-opacity duration-500">
              {row3.map((img, i) => (
                <div key={`r3-${i}`} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-3xl overflow-hidden shadow-md flex-shrink-0 transform transition-transform hover:scale-105">
                   <img src={`https://picsum.photos/800/600?random=${img}`} className="w-full h-full object-cover" alt="Activities" loading="eager" />
                </div>
              ))}
            </div>
        </div>

        {/* Content Card - Solid & Clean to stand out against busy background */}
        <div className="relative z-10 container mx-auto px-4 flex justify-center">
            <div className="max-w-4xl w-full bg-white/95 backdrop-blur-sm p-8 md:p-14 rounded-[3rem] shadow-2xl text-center border-4 border-white/50 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 font-bold text-sm mb-6 animate-bounce">
                    <Heart size={16} fill="currentColor" /> 
                    <span>Nơi tình yêu bắt đầu</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-emerald-900 mb-6 leading-tight">
                    Cùng Con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Vững Bước</span> <br/>
                    Tương Lai <span className="text-amber-500">Rạng Ngời</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                    Trung tâm Thiên Thần chuyên về can thiệp sớm và giáo dục hòa nhập, giúp trẻ đánh thức tiềm năng và tự tin hòa nhập cộng đồng.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <Link to="/lien-he" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 px-10 rounded-full shadow-lg shadow-emerald-200 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                        Đăng ký tư vấn ngay <ArrowRight size={20} />
                    </Link>
                    <Link to="/chuong-trinh" className="bg-white text-emerald-800 font-extrabold py-4 px-10 rounded-full border-2 border-emerald-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg">
                        Xem chương trình
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-12">
                   <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-full text-blue-600"><Star size={20} fill="currentColor"/></div>
                      <span className="font-bold text-gray-700">10+ Năm uy tín</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="bg-amber-100 p-2 rounded-full text-amber-600"><Smile size={20} fill="currentColor"/></div>
                      <span className="font-bold text-gray-700">1000+ Trẻ hòa nhập</span>
                   </div>
                </div>
            </div>
        </div>
      </section>

      {/* Feature Section - Clean Cards */}
      <section className="bg-slate-50 py-24 -mt-20 relative z-20 rounded-t-[4rem]">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Giải Pháp Giáo Dục Toàn Diện</h2>
               <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Chúng tôi cung cấp lộ trình can thiệp khoa học được cá nhân hóa cho từng trẻ.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Can Thiệp Sớm", 
                  desc: "Giai đoạn vàng 0-6 tuổi là thời điểm then chốt để hỗ trợ trẻ phát triển.",
                  icon: <Activity size={36} />,
                  color: "bg-blue-500",
                  bg: "bg-blue-50",
                  text: "text-blue-600"
                },
                { 
                  title: "Giáo Dục Chuyên Biệt", 
                  desc: "Chương trình 1:1 và nhóm nhỏ giúp trẻ khắc phục khó khăn đặc thù.",
                  icon: <BookOpen size={36} />,
                  color: "bg-amber-500",
                   bg: "bg-amber-50",
                  text: "text-amber-600"
                },
                { 
                  title: "Hòa Nhập Cộng Đồng", 
                  desc: "Trang bị kỹ năng xã hội, tiền học đường để trẻ tự tin đến trường.",
                  icon: <Smile size={36} />,
                  color: "bg-emerald-500",
                   bg: "bg-emerald-50",
                  text: "text-emerald-600"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${item.bg} ${item.text} shadow-inner group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed font-medium">{item.desc}</p>
                  <Link to="/chuong-trinh" className={`inline-flex items-center gap-2 ${item.text} font-bold text-lg hover:gap-4 transition-all`}>
                    Tìm hiểu thêm <ArrowRight size={20}/>
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* About Summary with modern layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2 order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://picsum.photos/400/500?random=2" className="rounded-3xl shadow-lg mt-12 w-full object-cover" alt="Activity 1" />
                   <img src="https://picsum.photos/400/500?random=3" className="rounded-3xl shadow-lg mb-12 w-full object-cover" alt="Activity 2" />
                </div>
                {/* Decorative circle */}
                <div className="absolute inset-0 m-auto w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
             </div>
             <div className="lg:w-1/2 order-1 lg:order-2">
                <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm bg-emerald-50 px-3 py-1 rounded-full">Về chúng tôi</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-800 mt-4 mb-6">Ngôi nhà thứ hai của <span className="text-emerald-600">Những Thiên Thần</span></h2>
                <div className="space-y-6 text-gray-600 text-lg font-medium">
                  <p className="leading-relaxed">
                    Được thành lập từ năm 2013, Trung tâm Thiên Thần tự hào là đơn vị uy tín hàng đầu tại TP.HCM trong lĩnh vực giáo dục đặc biệt. 
                  </p>
                  <p className="leading-relaxed">
                    Chúng tôi tin rằng "Mỗi trẻ em là một thiên thần", và nhiệm vụ của chúng tôi là đánh thức những tiềm năng ẩn giấu bên trong các em bằng tình yêu thương và phương pháp khoa học.
                  </p>
                </div>
                
                <div className="mt-10 flex gap-6 items-center">
                   <div className="flex -space-x-4">
                      {[1,2,3,4].map(i => (
                        <img key={i} className="w-14 h-14 rounded-full border-4 border-white shadow-md" src={`https://picsum.photos/100/100?random=${i+10}`} alt="avatar" />
                      ))}
                   </div>
                   <div className="flex flex-col justify-center">
                      <span className="font-extrabold text-gray-800 text-xl">20+ Chuyên gia</span>
                      <span className="text-sm text-gray-500 font-bold">Tâm huyết & Giàu kinh nghiệm</span>
                   </div>
                </div>

                <div className="mt-10">
                  <Link to="/gioi-thieu" className="inline-block bg-gray-900 text-white font-bold py-4 px-8 rounded-full hover:bg-emerald-600 hover:shadow-lg transition-all">
                    Câu chuyện của chúng tôi
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-emerald-900 mb-4">Góc Tin Tức & Sự Kiện</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">Cập nhật những hoạt động nổi bật và kiến thức bổ ích dành cho phụ huynh.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tuyển dụng giáo viên năm 2026", date: "29 Th12", img: 10, category: "Tuyển dụng" },
              { title: "Dấu hiệu nhận biết trẻ tự kỷ sớm", date: "24 Th7", img: 11, category: "Kiến thức" },
              { title: "Nâng cấp cơ sở vật chất mới", date: "05 Th7", img: 12, category: "Tin tức" },
              { title: "Hoạt động ngoại khóa hè 2025", date: "05 Th7", img: 13, category: "Hoạt động" }
            ].map((news, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-extrabold text-emerald-700 z-10 shadow-sm uppercase tracking-wide">
                     {news.category}
                   </div>
                   <img src={`https://picsum.photos/600/400?random=${news.img}`} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-bold mb-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span> {news.date}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-emerald-600 transition-colors leading-snug">{news.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="text-emerald-600 font-bold hover:text-emerald-800 flex items-center gap-2 mx-auto transition-all hover:gap-3 border-b-2 border-transparent hover:border-emerald-600 pb-1">
              Xem tất cả bài viết <ArrowRight size={20}/>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;