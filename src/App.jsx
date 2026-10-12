// import { FaGithub, FaLinkedin, FaBriefcase, FaCode, FaDownload } from 'react-icons/fa';
// import UpdatePrompt from './components/UpdatePrompt';

// function App() {
//   const projects = [
//     {
//       title: "Common Admission Portal (CAP)",
//       desc: "Unified state-level platform handling multi-step applications and huge traffic for AP entrance exams.",
//       tech: ["React.js", "RBAC Auth", "Payment API"]
//     },
//     {
//       title: "JNB Nivas Management",
//       desc: "Centralized workflow system for AP residential schools to track lifecycle, diet, and biometrics.",
//       tech: ["React.js", "JWT Auth", "Dynamic UI"]
//     },
//     {
//       title: "AP Universities Recruitment",
//       desc: "End-to-end recruitment portals for AP universities with complex multi-step forms.",
//       tech: ["React.js", "Redux", "REST APIs"]
//     },
//     {
//       title: "Employee HRMS Portal",
//       desc: "Comprehensive employee management system handling thousands of concurrent requests.",
//       tech: ["React.js", "react-hook-form", "SessionStorage"]
//     }
//   ];

//   const infiniteProjects = [...projects, ...projects];

//   return (<>
//     <div className="min-h-screen md:h-screen w-full bg-[#F2EDE4] text-[#2D2A26] font-sans overflow-x-hidden md:overflow-hidden flex items-center justify-center p-4 md:p-6 selection:bg-[#D9CDB8] selection:text-[#2D2A26]">
//       <div className="w-full max-w-7xl h-auto md:h-[92vh] flex flex-col md:grid md:grid-cols-12 gap-6 my-4 md:my-0">
//         <div className="col-span-1 md:col-span-4 bg-[#FCFAF8] border border-[#E8E3D9] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between shadow-xl shadow-[#D9CDB8]/30 relative overflow-hidden group">
//           <div className="relative z-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D2A26] tracking-tight mb-3">
//               Chennamsetti Venkata Teja
//             </h1>
//             <div className="flex items-center gap-2 mb-6 text-xs md:text-sm font-bold text-[#9C6644] bg-[#F2EDE4] w-fit px-3 md:px-4 py-2 rounded-xl border border-[#E8E3D9]">
//               <FaBriefcase className="text-[#9C6644]" /> 
//               <span>Software Engineer @ APCFSS</span>
//             </div>
//             <p className="text-[#7A756D] text-sm md:text-base leading-relaxed font-medium">
//               SOFTWARE ENGINEER Frontend Developer with ~4 years of hands-on experience in building scalable, secure, and high-performance web applications using React.js. Proven expertise in developing e-governance platforms handling lakhs of concurrent users. Specialized in complex form handling, state management, secure authentication flows, and dynamic reporting. Strong problem-solving skills with a track record of delivering end-to-end user interfaces for state-wide centralized portals.
//             </p>
//           </div>
//           <div className="space-y-4 mt-8 relative z-10">
//             <a href="/resume.pdf" download="Venkata_Teja_Resume.pdf" className="w-full bg-[#3A352F] text-[#F2EDE4] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#2D2A26] hover:shadow-lg hover:shadow-[#3A352F]/20 transition-all">
//               <FaDownload /> Download Resume
//             </a>
//             <div className="flex gap-4">
//               <a href="https://www.linkedin.com/in/chennamsetti-venkatateja-7a21a7325" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] py-3.5 rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#0a66c2] hover:bg-[#E8E3D9] hover:border-[#0a66c2]/30 transition-all border border-[#E8E3D9]">
//                 <FaLinkedin />
//               </a>
//               <a href="https://github.com/venkatateja1435" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] py-3.5 rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#2D2A26] hover:bg-[#E8E3D9] transition-all border border-[#E8E3D9]">
//                 <FaGithub />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-span-1 md:col-span-8 flex flex-col gap-6 h-full">
//           <div className="flex-1 min-h-[380px] md:min-h-0 bg-[#FCFAF8] border border-[#E8E3D9] rounded-[2rem] p-6 md:p-8 flex flex-col overflow-hidden relative shadow-xl shadow-[#D9CDB8]/30">
//             <h2 className="text-xs md:text-sm font-bold text-[#8C857B] mb-6 flex items-center gap-2 uppercase tracking-widest">
//               <FaCode className="text-[#9C6644]" /> Featured Projects
//             </h2>
//             <div className="w-full h-full overflow-hidden relative">
//               <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>
//               <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>
//               <div className="animate-scroll gap-4 md:gap-6 h-full cursor-pointer flex items-center">
//                 {infiniteProjects.map((proj, idx) => (
//                   <div key={idx} className="w-[280px] md:w-[350px] h-full md:h-[90%] bg-[#F2EDE4] rounded-2xl p-5 md:p-6 border border-[#E8E3D9] flex flex-col justify-between hover:border-[#D9CDB8] hover:shadow-md hover:shadow-[#D9CDB8]/40 transition-all group shrink-0">
//                     <div>
//                       <h3 className="text-[#2D2A26] font-bold mb-3 text-base md:text-lg group-hover:text-[#9C6644] transition-colors">{proj.title}</h3>
//                       <p className="text-[#7A756D] text-xs md:text-sm leading-relaxed">{proj.desc}</p>
//                     </div>
//                     <div className="flex gap-2 mt-4 md:mt-6 flex-wrap">
//                       {proj.tech.map((t, i) => (
//                         <span key={i} className="text-[10px] md:text-[11px] font-bold bg-[#FCFAF8] text-[#9C6644] border border-[#E8E3D9] px-2 md:px-3 py-1 md:py-1.5 rounded-md shadow-sm">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="h-auto md:h-44 bg-[#FCFAF8] border border-[#E8E3D9] rounded-[2rem] p-6 md:p-8 flex flex-col justify-center shadow-xl shadow-[#D9CDB8]/30">
//             <h2 className="text-xs md:text-sm font-bold text-[#8C857B] mb-4 md:mb-5 uppercase tracking-widest">Core Tech Stack</h2>
//             <div className="flex flex-wrap gap-2 md:gap-3">
//               {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'react-hook-form', 'REST APIs', 'SessionStorage', 'Git/GitHub'].map((skill, i) => (
//                 <span key={i} className="bg-[#F2EDE4] border border-[#E8E3D9] text-[#5C554D] text-xs md:text-sm font-bold px-3 md:px-5 py-2 md:py-2.5 rounded-xl hover:border-[#D9CDB8] hover:bg-[#E8E3D9] hover:text-[#2D2A26] transition-colors cursor-default shadow-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <UpdatePrompt />
//   </>);
// }

// export default App;

import { FaGithub, FaLinkedin, FaBriefcase, FaCode, FaDownload, FaEnvelope, FaExternalLinkAlt, FaCompass } from 'react-icons/fa';
import UpdatePrompt from './components/UpdatePrompt';

function App() {
  const projects = [
    {
      title: "Common Admission Portal (CAP)",
      desc: "Unified state-level platform handling multi-step applications and huge traffic for AP entrance exams.",
      tech: ["React.js", "RBAC Auth", "Payment API"],
      link: "https://cap.apcfss.in"
    },
    {
      title: "JNB Nivas Management",
      desc: "Centralized workflow system for AP residential schools to track lifecycle, diet, and biometrics.",
      tech: ["React.js", "JWT Auth", "Dynamic UI"],
      link: "https://nivas.apcfss.in"
    },
    {
      title: "AP Universities Recruitment",
      desc: "End-to-end recruitment portals for AP universities with complex multi-step forms.",
      tech: ["React.js", "Redux", "REST APIs"],
      link: "https://apuniversitiesrecruitment.apcfss.in/"
    } 
  ];

  return (
    <>
      <div className="min-h-screen w-full bg-[#F2EDE4] text-[#2D2A26] font-sans flex flex-col lg:items-center lg:justify-center p-4 lg:p-6 overflow-y-auto selection:bg-[#D9CDB8] selection:text-[#2D2A26]">
        
        <div className="w-full max-w-7xl flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 min-h-[92vh] my-auto">
          
          {/* PROFILE SECTION */}
          <div className="col-span-1 lg:col-span-4 bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-xl shadow-[#D9CDB8]/30 relative overflow-hidden group h-auto lg:h-full">
            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-[#2D2A26] tracking-tight mb-3">
                Chennamsetti Venkata Teja
              </h1>
              <div className="flex items-center gap-2 mb-6 text-xs lg:text-sm font-bold text-[#9C6644] bg-[#F2EDE4] w-fit px-3 lg:px-4 py-2 rounded-xl border border-[#E8E3D9]">
                <FaBriefcase className="text-[#9C6644]" />
                <span>Software Engineer @ APCFSS</span>
              </div>
              <p className="text-[#7A756D] text-sm lg:text-base leading-relaxed font-medium">
                Frontend Developer with <strong className="text-[#2D2A26]">~4 years of hands-on experience</strong> in building scalable, secure, and high-performance web applications using React.js. Proven expertise in developing e-governance platforms handling <strong className="text-[#2D2A26]">lakhs of concurrent users</strong>. Specialized in complex form handling, state management, secure authentication flows, and dynamic reporting. Strong problem-solving skills with a track record of delivering end-to-end user interfaces for state-wide centralized portals.
              </p>
            </div>
            
            <div className="space-y-3 mt-8 relative z-10">
              <a href="mailto:venkatateja1435@gmail.com" className="w-full bg-[#9C6644] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#855537] hover:shadow-lg hover:shadow-[#9C6644]/30 transition-all">
                <FaEnvelope /> Email Me
              </a>
              
              <div className="flex gap-3">
                <a href="/resume.pdf" download="Venkata_Teja_Resume.pdf" className="flex-[2] bg-[#3A352F] text-[#F2EDE4] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#2D2A26] hover:shadow-lg transition-all">
                  <FaDownload /> Resume
                </a>
                <a href="https://www.linkedin.com/in/chennamsetti-venkatateja-7a21a7325" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#0a66c2] hover:bg-[#E8E3D9] transition-all border border-[#E8E3D9]">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/venkatateja1435" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#2D2A26] hover:bg-[#E8E3D9] transition-all border border-[#E8E3D9]">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-4 lg:gap-6 h-auto lg:h-full">
            
            {/* PROJECTS SECTION */}
            <div className="flex-1 bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-5 lg:p-8 flex flex-col relative shadow-xl shadow-[#D9CDB8]/30 min-h-[360px] lg:min-h-0 overflow-hidden">
              <h2 className="text-xs lg:text-sm font-bold text-[#8C857B] mb-4 lg:mb-6 flex items-center gap-2 uppercase tracking-widest z-20 relative">
                <FaCode className="text-[#9C6644]" /> Featured Projects
              </h2>
              
              {/* Added w-full flex-1 relative to contain the absolute gradients and scrolling track */}
              <div className="w-full flex-1 relative overflow-x-auto lg:overflow-x-hidden snap-x snap-mandatory lg:snap-none" style={{ scrollbarWidth: 'none' }}>
                <div className="hidden lg:block absolute inset-y-0 left-0 w-12 lg:w-16 bg-gradient-to-r from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>
                <div className="hidden lg:block absolute inset-y-0 right-0 w-12 lg:w-16 bg-gradient-to-l from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>
                
                {/* The scrolling track: w-max ensures it extends beyond container to animate */}
                <div className="flex gap-4 lg:gap-6 h-full items-center lg:animate-scroll w-max pr-4 lg:pr-0 hover:[animation-play-state:paused]">
                  {[...projects, ...projects].map((proj, idx) => (
                    <div key={idx} className="w-[80vw] sm:w-[320px] lg:w-[350px] h-[95%] lg:h-[90%] bg-[#F2EDE4] rounded-2xl p-5 lg:p-6 border border-[#E8E3D9] flex flex-col justify-between hover:border-[#D9CDB8] lg:hover:-translate-y-1 lg:hover:shadow-xl hover:shadow-[#D9CDB8]/40 transition-all duration-300 group/card shrink-0 relative snap-center">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="absolute top-5 right-5 text-[#8C857B] hover:text-[#9C6644] lg:opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <FaExternalLinkAlt />
                      </a>
                      <div>
                        <h3 className="text-[#2D2A26] font-bold mb-3 text-base lg:text-lg group-hover/card:text-[#9C6644] transition-colors pr-6">{proj.title}</h3>
                        <p className="text-[#7A756D] text-xs lg:text-sm leading-relaxed">{proj.desc}</p>
                      </div>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {proj.tech.map((t, i) => (
                          <span key={i} className="text-[10px] lg:text-[11px] font-bold bg-[#FCFAF8] text-[#9C6644] border border-[#E8E3D9] px-2 lg:px-3 py-1.5 rounded-md shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM SECTION - Items Stretch adds equal auto height */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 items-stretch">
              
              <div className="flex-[2] bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-6 lg:p-8 flex flex-col justify-center shadow-xl shadow-[#D9CDB8]/30">
                <h2 className="text-xs lg:text-sm font-bold text-[#8C857B] mb-4 uppercase tracking-widest">Core Tech Stack</h2>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'react-hook-form', 'REST APIs', 'SessionStorage', 'Git'].map((skill, i) => (
                    <span key={i} className="bg-[#F2EDE4] border border-[#E8E3D9] text-[#5C554D] text-xs lg:text-sm font-bold px-3 lg:px-4 py-2 rounded-xl hover:border-[#D9CDB8] hover:bg-[#E8E3D9] hover:text-[#2D2A26] transition-colors shadow-sm cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-6 lg:p-8 flex flex-col justify-center shadow-xl shadow-[#D9CDB8]/30">
                <h2 className="text-xs lg:text-sm font-bold text-[#8C857B] mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <FaCompass className="text-[#9C6644]" /> Beyond Code
                </h2>
                <div className="flex flex-wrap gap-2">
                  {['Trekking (Western Ghats)', 'Cricket', 'Historical Architecture'].map((hobby, i) => (
                    <span key={i} className="text-[#7A756D] text-xs font-semibold px-3 py-1.5 bg-[#F2EDE4] border border-[#E8E3D9] rounded-lg">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <UpdatePrompt />
    </>
  );
}

export default App;