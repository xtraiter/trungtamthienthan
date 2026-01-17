import React from 'react';
import { Award, GraduationCap, Star, Heart, Sparkles, Users, UserCheck } from 'lucide-react';
import { StaffMember } from '../types';

const TeamPage: React.FC = () => {
  const staffMembers: StaffMember[] = [
    { name: "Hà Thị Thanh Hoa", role: "Chuyên viên Công tác xã hội", imageUrl: "https://picsum.photos/300/300?random=1", qualifications: ["Giáo dục đặc biệt"] },
    { name: "Nguyễn Thị Ngọc Bích", role: "Chuyên viên Tâm lý", imageUrl: "https://picsum.photos/300/300?random=2", qualifications: ["Giáo dục đặc biệt"] },
    { name: "Hoàng Thị Thanh Huyền", role: "Chuyên viên Tâm lý", imageUrl: "https://picsum.photos/300/300?random=3", qualifications: ["Giáo dục đặc biệt"] },
    { name: "Huỳnh Thị Như Huỳnh", role: "Chuyên viên Tâm lý", imageUrl: "https://picsum.photos/300/300?random=4", qualifications: ["Giáo dục đặc biệt"] },
    { name: "Võ Thị Thúy Hương", role: "Chuyên viên Tâm lý", imageUrl: "https://picsum.photos/300/300?random=5" },
    { name: "Nguyễn Anh Quốc", role: "Trung cấp y sỹ đa khoa", imageUrl: "https://picsum.photos/300/300?random=6" },
    { name: "Trần Thuỵ Thuý Loan", role: "Chuyên viên xã hội", imageUrl: "https://picsum.photos/300/300?random=7" },
    { name: "Nguyễn Phúc Nguyên", role: "Chuyên viên Tâm lý", imageUrl: "https://picsum.photos/300/300?random=8" },
    { name: "Đỗ Ngọc Minh Thư", role: "Chuyên viên CTXH", imageUrl: "https://picsum.photos/300/300?random=9", qualifications: ["Giáo dục đặc biệt"] },
    { name: "Cao Chức Chương", role: "Chuyên viên Tâm lý", imageUrl: "https://picsum.photos/300/300?random=10", qualifications: ["Giáo dục đặc biệt"] },
  ];

  return (
    <div className="bg-white min-h-screen font-sans pb-24">
       
       {/* 1. New Hero Section - Synchronized with About/Program Pages */}
       <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-slate-50 rounded-b-[4rem] mb-20 shadow-sm">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-50/50 rounded-l-full -mr-20 z-0"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-40 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 font-bold text-sm mb-6 animate-fade-in-up">
            <Users size={16} className="text-amber-500" />
            <span>Đội ngũ chuyên gia hàng đầu</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Người Gieo Mầm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hạnh Phúc</span> <br/>
            Bằng Trái Tim <span className="relative inline-block">
              Yêu Thương
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-0 max-w-2xl mx-auto leading-relaxed">
            Hội tụ những chuyên gia tâm huyết, giàu kinh nghiệm và yêu trẻ. Chúng tôi cam kết đồng hành cùng sự phát triển của từng thiên thần nhỏ.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-28">
        
        {/* Director Profile - Refined for consistency */}
        <section className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition-transform duration-500 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"></div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative min-h-[500px] group">
              <img 
                src="https://picsum.photos/600/800?grayscale" 
                alt="ThS. NCS. Bùi Thị Hương" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-800/60 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 w-full p-10 text-white z-10">
                <div className="w-20 h-1.5 bg-amber-400 mb-6 rounded-full"></div>
                <h2 className="text-3xl font-extrabold mb-2">ThS. NCS. Bùi Thị Hương</h2>
                <p className="text-emerald-200 text-lg mb-4 font-medium">(Bùi Ngát Hương)</p>
                <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/30 shadow-sm">
                  Giám đốc Trung tâm
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>

              <div className="mb-10 relative z-10">
                 <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
                  <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600 shadow-sm"><GraduationCap size={28}/></div>
                  Hồ sơ chuyên môn
                </h3>
                <blockquote className="text-gray-500 italic mb-8 border-l-4 border-amber-400 pl-4 py-1 text-lg">
                  "Tận tâm cống hiến vì sự phát triển bình đẳng của trẻ em Việt Nam."
                </blockquote>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-gray-800 text-sm uppercase tracking-wider text-emerald-600 border-b border-gray-100 pb-2">Học vấn</h4>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex gap-3 items-start"><span className="text-emerald-500 mt-1">●</span> NCS Quản lý giáo dục - ĐH KHXH&NV</li>
                      <li className="flex gap-3 items-start"><span className="text-emerald-500 mt-1">●</span> Thạc sĩ Tâm lý học - Viện Hàn lâm KHXH</li>
                      <li className="flex gap-3 items-start"><span className="text-emerald-500 mt-1">●</span> Cử nhân Tâm lý học - ĐH Văn Hiến</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-gray-800 text-sm uppercase tracking-wider text-emerald-600 border-b border-gray-100 pb-2">Thành tựu</h4>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex gap-3 items-start"><Star size={16} className="text-amber-400 mt-1 fill-current"/> Tác giả 3 cuốn sách giáo dục</li>
                      <li className="flex gap-3 items-start"><Star size={16} className="text-amber-400 mt-1 fill-current"/> Bằng Khen Hội tâm lý học VN (2018)</li>
                      <li className="flex gap-3 items-start"><Star size={16} className="text-amber-400 mt-1 fill-current"/> Giải thưởng Chu Văn An (2014)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="font-bold text-gray-800 mb-4">Chứng chỉ & Nghiệp vụ</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Giáo dục hòa nhập", 
                    "Test Wechler / Bayley-III", 
                    "Âm ngữ trị liệu", 
                    "Phương pháp ABA",
                    "Quản lý giáo dục"
                  ].map((tag, idx) => (
                    <span key={idx} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-600 hover:text-white transition-colors cursor-default shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team - Clean & Airy */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Ban Quản Lý Chuyên Môn</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                 name: "Lê Anh Tuấn", role: "Phó giám đốc chuyên môn", img: 20,
                 desc: "Chuyên gia đánh giá Wisc-4, Bayley-III, STAT, Ycat",
                 color: "bg-blue-50 text-blue-600"
              },
              {
                 name: "Bùi Thị Ngát", role: "Tổ trưởng GDHN", img: 21,
                 desc: "Cử nhân Ngữ văn & Tâm lý, Chuyên gia Ngôn ngữ trị liệu",
                 color: "bg-emerald-50 text-emerald-600"
              },
              {
                 name: "Diệp Thị Thu", role: "Tổ trưởng Chuyên biệt", img: 22,
                 desc: "Cử nhân Giáo dục đặc biệt, nhiều năm kinh nghiệm quản lý",
                 color: "bg-amber-50 text-amber-600"
              }
            ].map((leader, i) => (
               <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group relative overflow-hidden">
                  {/* Hover effect background */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-current transition-colors duration-300"></div>
                  
                  <div className="w-32 h-32 rounded-full p-1.5 bg-white shadow-lg mb-6 relative z-10">
                    <img src={`https://picsum.photos/200/200?random=${leader.img}`} alt={leader.name} className="w-full h-full object-cover rounded-full" />
                    <div className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
                        <UserCheck size={16} className="text-emerald-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-gray-800 mb-2">{leader.name}</h3>
                  <div className={`px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-wide mb-4 ${leader.color}`}>
                    {leader.role}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{leader.desc}</p>
               </div>
            ))}
          </div>
        </section>

        {/* Staff List Grid - Synchronized with Program Page Cards */}
        <section className="relative py-10">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -skew-y-2 -z-10 rounded-[4rem]"></div>
          
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm bg-white px-4 py-1 rounded-full shadow-sm mb-3 inline-block">Đội ngũ giáo viên</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Chuyên Viên & Giáo Viên</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Được đào tạo bài bản, kiên nhẫn và yêu thương trẻ như con của mình.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
                   <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   
                   {/* Overlay Content on Hover */}
                   <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                        {member.role}
                      </span>
                   </div>
                </div>
                
                <div className="p-6 text-center relative">
                   {/* Qualification Badge floating */}
                   <div className="absolute -top-5 right-6 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300 border-2 border-white">
                      {member.qualifications ? <Award size={18} /> : <Heart size={18} fill="currentColor"/>}
                   </div>

                   <h4 className="font-extrabold text-gray-800 text-lg mb-1 group-hover:text-emerald-600 transition-colors">{member.name}</h4>
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3 line-clamp-1">{member.role}</p>
                   
                   {/* Divider */}
                   <div className="w-10 h-1 bg-gray-100 mx-auto rounded-full group-hover:bg-emerald-400 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
              <button className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-full shadow-lg border border-emerald-100 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 flex items-center gap-2 mx-auto">
                 <Sparkles size={18} />
                 Xem thêm thành viên
              </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TeamPage;