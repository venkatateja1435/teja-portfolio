import { FaGithub, FaLinkedin, FaBriefcase, FaCode, FaDownload } from 'react-icons/fa';
import profilePic from './assets/profile.jpg'; 

function App() {
  const projects = [
    {
      title: "Common Admission Portal (CAP)",
      desc: "Unified state-level platform handling multi-step applications and huge traffic for AP entrance exams.",
      tech: ["React.js", "RBAC Auth", "Payment API"]
    },
    {
      title: "JNB Nivas Management",
      desc: "Centralized workflow system for AP residential schools to track lifecycle, diet, and biometrics.",
      tech: ["React.js", "JWT Auth", "Dynamic UI"]
    },
    {
      title: "AP Universities Recruitment",
      desc: "End-to-end recruitment portals for AP universities with complex multi-step forms.",
      tech: ["React.js", "Redux", "REST APIs"]
    },
    {
      title: "Employee HRMS Portal",
      desc: "Comprehensive employee management system handling thousands of concurrent requests.",
      tech: ["React.js", "react-hook-form", "SessionStorage"]
    }
  ];

  const infiniteProjects = [...projects, ...projects];

  return (
    // 'min-h-screen' and 'overflow-x-hidden' allow mobile to scroll vertically, while 'md:overflow-hidden' locks it on desktop
    <div className="min-h-screen md:h-screen w-full bg-[#F2EDE4] text-[#2D2A26] font-sans overflow-x-hidden md:overflow-hidden flex items-center justify-center p-4 md:p-6 selection:bg-[#D9CDB8] selection:text-[#2D2A26]">
      
      {/* 'flex-col' for mobile (stacking), 'grid' for desktop (bento box) */}
      <div className="w-full max-w-7xl h-auto md:h-[92vh] flex flex-col md:grid md:grid-cols-12 gap-6 my-4 md:my-0">
        
        {/* Left Side: Profile Card */}
        <div className="col-span-1 md:col-span-4 bg-[#FCFAF8] border border-[#E8E3D9] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between shadow-xl shadow-[#D9CDB8]/30 relative overflow-hidden group">
          
          <div className="relative z-10">
            {/* <img 
              src={profilePic} 
              alt="Venkata Teja" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Venkata+Teja&background=9C6644&color=fff&size=256" }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl mb-6 object-cover border-4 border-[#F2EDE4] shadow-sm group-hover:scale-105 transition-transform duration-500" 
            /> */}
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2A26] tracking-tight mb-3">
              Chennamsetti Venkata Teja
            </h1>
            
            <div className="flex items-center gap-2 mb-6 text-xs md:text-sm font-bold text-[#9C6644] bg-[#F2EDE4] w-fit px-3 md:px-4 py-2 rounded-xl border border-[#E8E3D9]">
              <FaBriefcase className="text-[#9C6644]" /> 
              <span>Software Engineer @ APCFSS</span>
            </div>
            
            <p className="text-[#7A756D] text-sm md:text-base leading-relaxed font-medium">
              Frontend developer with ~4 years of experience building scalable e-governance platforms handling lakhs of concurrent users.
            </p>
          </div>
          
          <div className="space-y-4 mt-8 relative z-10">
            <a href="/resume.pdf" download="Venkata_Teja_Resume.pdf" className="w-full bg-[#3A352F] text-[#F2EDE4] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#2D2A26] hover:shadow-lg hover:shadow-[#3A352F]/20 transition-all">
              <FaDownload /> Download Resume
            </a>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/chennamsetti-venkatateja-7a21a7325" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] py-3.5 rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#0a66c2] hover:bg-[#E8E3D9] hover:border-[#0a66c2]/30 transition-all border border-[#E8E3D9]">
                <FaLinkedin />
              </a>
              <a href="https://github.com/venkatateja1435" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] py-3.5 rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#2D2A26] hover:bg-[#E8E3D9] transition-all border border-[#E8E3D9]">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-6 h-full">
          
          {/* Projects Section */}
          <div className="flex-1 min-h-[380px] md:min-h-0 bg-[#FCFAF8] border border-[#E8E3D9] rounded-[2rem] p-6 md:p-8 flex flex-col overflow-hidden relative shadow-xl shadow-[#D9CDB8]/30">
            <h2 className="text-xs md:text-sm font-bold text-[#8C857B] mb-6 flex items-center gap-2 uppercase tracking-widest">
              <FaCode className="text-[#9C6644]" /> Featured Projects
            </h2>
            
            <div className="w-full h-full overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>
              
              <div className="animate-scroll gap-4 md:gap-6 h-full cursor-pointer flex items-center">
                {infiniteProjects.map((proj, idx) => (
                  <div key={idx} className="w-[280px] md:w-[350px] h-full md:h-[90%] bg-[#F2EDE4] rounded-2xl p-5 md:p-6 border border-[#E8E3D9] flex flex-col justify-between hover:border-[#D9CDB8] hover:shadow-md hover:shadow-[#D9CDB8]/40 transition-all group shrink-0">
                    <div>
                      <h3 className="text-[#2D2A26] font-bold mb-3 text-base md:text-lg group-hover:text-[#9C6644] transition-colors">{proj.title}</h3>
                      <p className="text-[#7A756D] text-xs md:text-sm leading-relaxed">{proj.desc}</p>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-6 flex-wrap">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="text-[10px] md:text-[11px] font-bold bg-[#FCFAF8] text-[#9C6644] border border-[#E8E3D9] px-2 md:px-3 py-1 md:py-1.5 rounded-md shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Tech Stack Section */}
          <div className="h-auto md:h-44 bg-[#FCFAF8] border border-[#E8E3D9] rounded-[2rem] p-6 md:p-8 flex flex-col justify-center shadow-xl shadow-[#D9CDB8]/30">
            <h2 className="text-xs md:text-sm font-bold text-[#8C857B] mb-4 md:mb-5 uppercase tracking-widest">Core Tech Stack</h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'react-hook-form', 'REST APIs', 'SessionStorage', 'Git/GitHub'].map((skill, i) => (
                <span key={i} className="bg-[#F2EDE4] border border-[#E8E3D9] text-[#5C554D] text-xs md:text-sm font-bold px-3 md:px-5 py-2 md:py-2.5 rounded-xl hover:border-[#D9CDB8] hover:bg-[#E8E3D9] hover:text-[#2D2A26] transition-colors cursor-default shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;