import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Image as ImageIcon, Video, Filter, Heart, Share2, Newspaper } from 'lucide-react';

const NewsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Dummy News Data
  const newsItems = [
    {
      id: 1,
      title: "Lễ Tổng Kết Năm Học 2024 - Hành Trình Yêu Thương",
      category: "Sự kiện",
      date: "28 Tháng 5, 2024",
      image: "https://picsum.photos/800/600?random=101",
      excerpt: "Một năm học khép lại với biết bao cảm xúc. Chúc mừng các thiên thần nhỏ đã hoàn thành xuất sắc chặng đường vừa qua với nhiều tiến bộ vượt bậc.",
      featured: true
    },
    {
      id: 2,
      title: "Hội thảo: Hiểu về Rối loạn phổ tự kỷ cùng chuyên gia",
      category: "Kiến thức",
      date: "15 Tháng 4, 2024",
      image: "https://picsum.photos/800/600?random=102",
      excerpt: "Buổi chia sẻ chuyên sâu dành cho phụ huynh với sự góp mặt của ThS. Tâm lý Lê Minh Công.",
      featured: false
    },
    {
      id: 3,
      title: "Hoạt động ngoại khóa: Bé tập làm nông dân",
      category: "Hoạt động",
      date: "02 Tháng 4, 2024",
      image: "https://picsum.photos/800/600?random=103",
      excerpt: "Các con được hòa mình vào thiên nhiên, tự tay trồng rau và tìm hiểu về thế giới thực vật đầy màu sắc.",
      featured: false
    },
    {
      id: 4,
      title: "Nâng cấp phòng Tâm vận động cơ sở 2",
      category: "Thông báo",
      date: "10 Tháng 3, 2024",
      image: "https://picsum.photos/800/600?random=104",
      excerpt: "Trung tâm hoàn thiện lắp đặt hệ thống thang leo và sàn nhún mới, đảm bảo an toàn tuyệt đối cho trẻ.",
      featured: false
    }
  ];

  // Dummy Gallery Data
  const galleryItems = [
    { id: 1, category: 'class', img: 201, title: 'Giờ học cá nhân' },
    { id: 2, category: 'outdoor', img: 202, title: 'Dã ngoại công viên' },
    { id: 3, category: 'event', img: 203, title: 'Sinh nhật tháng 5' },
    { id: 4, category: 'class', img: 204, title: 'Hoạt động nhóm' },
    { id: 5, category: 'outdoor', img: 205, title: 'Trò chơi vận động' },
    { id: 6, category: 'event', img: 206, title: 'Vui hội trăng rằm' },
  ];

  const filteredGallery = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white min-h-screen font-sans pb-24">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-slate-50 rounded-b-[4rem] mb-20 shadow-sm">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/50 rounded-l-full -mr-20 z-0"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-40 animate-blob"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 font-bold text-sm mb-6 animate-fade-in-up">
            <Newspaper size={16} className="text-amber-500" />
            <span>Cập nhật liên tục</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Nhịp Sống <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Thiên Thần</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
             Nơi lưu giữ những khoảnh khắc đáng nhớ, chia sẻ kiến thức hữu ích và cập nhật các hoạt động mới nhất tại trung tâm.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
             <input type="text" placeholder="Tìm kiếm bài viết, hoạt động..." className="w-full pl-6 pr-14 py-4 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all" />
             <button className="absolute right-2 top-2 p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                <Search size={20} />
             </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-24">
        
        {/* 2. Featured & Latest News */}
        <section>
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-800">Tin Tức & Sự Kiện</h2>
                <div className="w-20 h-1.5 bg-emerald-500 rounded-full mt-3"></div>
              </div>
              <div className="flex gap-2">
                 {['Tất cả', 'Kiến thức', 'Sự kiện', 'Thông báo'].map((tag, i) => (
                    <button key={i} className={`px-4 py-2 rounded-xl text-sm font-bold border ${i === 0 ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'} transition-all`}>
                       {tag}
                    </button>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Featured Article (Left - Large) */}
              <div className="lg:col-span-7">
                 <div className="group relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer">
                    <img src={newsItems[0].image} alt={newsItems[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
                       <span className="bg-amber-500 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                          {newsItems[0].category}
                       </span>
                       <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight group-hover:text-emerald-300 transition-colors">
                          {newsItems[0].title}
                       </h3>
                       <p className="text-gray-200 mb-6 line-clamp-2 font-medium text-lg">
                          {newsItems[0].excerpt}
                       </p>
                       <div className="flex items-center gap-6 text-sm font-bold text-gray-300">
                          <span className="flex items-center gap-2"><Calendar size={16}/> {newsItems[0].date}</span>
                          <span className="flex items-center gap-2"><Clock size={16}/> 5 phút đọc</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Side Articles (Right - List) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                 {newsItems.slice(1).map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-[2rem] border border-gray-100 shadow-md hover:shadow-lg hover:border-emerald-200 transition-all flex gap-4 group cursor-pointer h-full">
                       <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       </div>
                       <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold mb-2">
                             <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                             {item.category}
                          </div>
                          <h4 className="font-bold text-gray-800 leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                             {item.title}
                          </h4>
                          <span className="text-xs text-gray-400 font-bold">{item.date}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 3. Activity Gallery */}
        <section className="bg-emerald-50 -mx-4 px-4 py-20 rounded-[4rem]">
           <div className="container mx-auto">
              <div className="text-center mb-12">
                 <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm bg-white px-4 py-1 rounded-full shadow-sm mb-3 inline-block">Thư viện ảnh</span>
                 <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8">Khoảnh Khắc Đáng Nhớ</h2>
                 
                 {/* Filters */}
                 <div className="flex flex-wrap justify-center gap-3">
                    {[
                       { id: 'all', label: 'Tất cả' },
                       { id: 'class', label: 'Lớp học' },
                       { id: 'outdoor', label: 'Ngoại khóa' },
                       { id: 'event', label: 'Sự kiện' }
                    ].map((filter) => (
                       <button 
                          key={filter.id}
                          onClick={() => setActiveFilter(filter.id)}
                          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                             activeFilter === filter.id 
                             ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                             : 'bg-white text-gray-600 hover:bg-emerald-100'
                          }`}
                       >
                          {filter.label}
                       </button>
                    ))}
                 </div>
              </div>

              {/* Masonry Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredGallery.map((item) => (
                    <div key={item.id} className="group relative rounded-[2rem] overflow-hidden bg-white shadow-lg cursor-pointer animate-fade-in-up">
                       <img src={`https://picsum.photos/600/500?random=${item.img}`} alt={item.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
                       
                       {/* Overlay */}
                       <div className="absolute inset-0 bg-emerald-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                          <button className="p-3 bg-white rounded-full text-emerald-600 hover:bg-amber-400 hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                             <Heart size={20} />
                          </button>
                          <button className="p-3 bg-white rounded-full text-emerald-600 hover:bg-amber-400 hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                             <Share2 size={20} />
                          </button>
                       </div>

                       <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-sm transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="text-xs font-bold text-amber-500 uppercase tracking-wide mb-1">{item.category}</p>
                          <h4 className="font-bold text-gray-800">{item.title}</h4>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="text-center mt-12">
                 <button className="inline-flex items-center gap-2 text-emerald-700 font-extrabold hover:gap-3 transition-all">
                    Xem toàn bộ thư viện <ArrowRight size={20} />
                 </button>
              </div>
           </div>
        </section>

        {/* 4. Newsletter Signup */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold mb-4">Đăng Ký Nhận Bản Tin</h2>
              <p className="text-emerald-50 mb-8 font-medium">
                 Nhận các bài viết chuyên môn về giáo dục hòa nhập và thông báo sự kiện mới nhất từ Thiên Thần mỗi tháng.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <input type="email" placeholder="Nhập địa chỉ email của bạn" className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-300" />
                 <button className="bg-amber-400 text-amber-900 font-extrabold px-8 py-4 rounded-full hover:bg-amber-300 shadow-lg transition-colors">
                    Đăng Ký
                 </button>
              </div>
              <p className="text-emerald-100 text-xs mt-4 opacity-80">Chúng tôi không spam. Bạn có thể hủy đăng ký bất cứ lúc nào.</p>
           </div>
        </section>

      </div>
    </div>
  );
};

export default NewsPage;