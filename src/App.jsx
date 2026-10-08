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
    // Pure black theesesi, manchi Slate-900 background pettanu
    <div className="h-screen w-full bg-slate-900 text-slate-200 font-sans overflow-hidden flex items-center justify-center p-4 md:p-8 selection:bg-blue-500 selection:text-white">
      
      <div className="w-full max-w-6xl h-[90vh] grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Left Side: Profile Card */}
        <div className="col-span-1 md:col-span-4 bg-slate-800/60 border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-between shadow-xl shadow-black/20">
          <div>
            <img 
              src={profilePic} 
              alt="Venkata Teja" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Venkata+Teja&background=3b82f6&color=fff&size=256" }}
              className="w-24 h-24 rounded-2xl mb-6 object-cover border border-slate-600 shadow-lg shadow-blue-500/10" 
            />
            
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Chennamsetti V Teja</h1>
            <p className="text-blue-400 font-semibold flex items-center gap-2 mb-6 text-sm bg-blue-500/10 w-fit px-3 py-1.5 rounded-lg border border-blue-500/20">
              <FaBriefcase /> Software Engineer @ APCFSS
            </p>
            
            {/* Text color bright chesanu */}
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Frontend developer with ~4 years of experience building scalable e-governance platforms handling lakhs of concurrent users.
            </p>
          </div>
          
          <div className="space-y-3 mt-6">
            <button className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
              <FaDownload /> Download Resume
            </button>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/chennamsetti-venkatateja-7a21a7325" target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-700/50 py-3.5 rounded-xl flex items-center justify-center text-xl text-slate-300 hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] transition-all border border-slate-600">
                <FaLinkedin />
              </a>
              <a href="https://github.com/venkatateja1435" target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-700/50 py-3.5 rounded-xl flex items-center justify-center text-xl text-slate-300 hover:bg-white hover:text-black hover:border-white transition-all border border-slate-600">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Projects and Skills */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-5 h-full">
          
          {/* Projects Section */}
          <div className="flex-1 bg-slate-800/60 border border-slate-700/50 rounded-3xl p-6 md:p-8 flex flex-col overflow-hidden relative shadow-xl shadow-black/20">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FaCode className="text-blue-400" /> Featured Projects
            </h2>
            
            <div className="w-full h-full overflow-hidden relative">
              {/* Fade gradients updated to match new background */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-800 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-800 to-transparent z-10 pointer-events-none"></div>
              
              <div className="animate-scroll gap-5 h-full cursor-pointer flex items-center">
                {infiniteProjects.map((proj, idx) => (
                  <div key={idx} className="w-[320px] h-[90%] bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50 flex flex-col justify-between hover:border-blue-400/50 hover:bg-slate-700/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all group shrink-0">
                    <div>
                      <h3 className="text-white font-bold mb-3 group-hover:text-blue-300 transition-colors text-lg">{proj.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{proj.desc}</p>
                    </div>
                    {/* Tags got proper colors */}
                    <div className="flex gap-2 mt-5 flex-wrap">
                      {proj.tech.map((t, i) => (
                        <span key={i} className="text-[11px] font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-md">
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
          <div className="h-auto md:h-44 bg-slate-800/60 border border-slate-700/50 rounded-3xl p-6 md:p-8 flex flex-col justify-center shadow-xl shadow-black/20">
            <h2 className="text-sm font-bold text-slate-400 mb-5 uppercase tracking-wider">Core Tech Stack</h2>
            <div className="flex flex-wrap gap-2.5 md:gap-3.5">
              {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'react-hook-form', 'REST APIs', 'SessionStorage', 'Git/GitHub'].map((skill, i) => (
                <span key={i} className="bg-slate-700/50 border border-slate-600 text-slate-200 text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all cursor-default shadow-sm">
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