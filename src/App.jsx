// import { FaGithub, FaLinkedin, FaBriefcase, FaCode, FaDownload, FaEnvelope, FaExternalLinkAlt, FaCompass } from 'react-icons/fa';
// import UpdatePrompt from './components/UpdatePrompt';

// function App() {
//   const projects = [
//     {
//       title: "Common Admission Portal (CAP)",
//       desc: "A unified, state-level admission platform handling applications and processing for major entrance exams (EAPCET, ECET, ICET, PGCET, LAWCET) utilized by lakhs of students.",
//       tech: ["React.js", "RBAC Auth", "Payment API"],
//       link: "https://cap.apcfss.in"
//     },
//     {
//       title: "JNB Nivas Management",
//       desc: "A centralized workflow management system tracking the lifecycle, biometric attendance, and daily operations (like Diet processing) for various AP residential schools.",
//       tech: ["React.js", "JWT Auth", "Dynamic UI"],
//       link: "https://nivas.apcfss.in"
//     },
//     {
//       title: "AP Universities Recruitment",
//       desc: "End-to-end recruitment and admission portals for AP Universities and multiple residential societies including APSWREIS, BCREIS, Tribal, AP Model Schools, and KGBV",
//       tech: ["React.js", "Redux", "REST APIs"],
//       link: "https://apuniversitiesrecruitment.apcfss.in/"
//     }
//   ];

//   const infiniteProjects = [...projects, ...projects];

//   return (
//     <>
//       <div className="min-h-screen w-full bg-[#F2EDE4] text-[#2D2A26] font-sans flex flex-col lg:items-center lg:justify-center p-4 lg:p-6 overflow-y-auto selection:bg-[#D9CDB8] selection:text-[#2D2A26]">

//         <div className="w-full max-w-7xl flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 min-h-[92vh] my-auto">

//           <div className="col-span-1 lg:col-span-4 bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-6 lg:p-8 flex flex-col justify-between shadow-xl shadow-[#D9CDB8]/30 relative overflow-hidden group h-auto lg:h-full">
//             <div className="relative z-10">
//               <h1 className="text-3xl lg:text-4xl font-extrabold text-[#2D2A26] tracking-tight mb-3">
//                 Chennamsetti Venkata Teja
//               </h1>
//               <div className="flex items-center gap-2 mb-6 text-xs lg:text-sm font-bold text-[#9C6644] bg-[#F2EDE4] w-fit px-3 lg:px-4 py-2 rounded-xl border border-[#E8E3D9]">
//                 <FaBriefcase className="text-[#9C6644]" />
//                 <span>Software Engineer @ APCFSS</span>
//               </div>
//               <p className="text-[#7A756D] text-sm lg:text-base leading-relaxed font-medium">
//                 Frontend Developer with <strong className="text-[#2D2A26]">~4 years of hands-on experience</strong> in building scalable, secure, and high-performance web applications using React.js. Proven expertise in developing e-governance platforms handling <strong className="text-[#2D2A26]">lakhs of concurrent users</strong>. Specialized in complex form handling, state management, secure authentication flows, and dynamic reporting. Strong problem-solving skills with a track record of delivering end-to-end user interfaces for state-wide centralized portals.
//               </p>
//             </div>

//             <div className="space-y-3 mt-8 relative z-10">
//               <a href="mailto:venkatateja1435@gmail.com" className="w-full bg-[#9C6644] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#855537] hover:shadow-lg hover:shadow-[#9C6644]/30 transition-all">
//                 <FaEnvelope /> Email Me
//               </a>

//               <div className="flex gap-3">
//                 <a href="/resume.pdf" download="Venkata_Teja_Resume.pdf" className="flex-[2] bg-[#3A352F] text-[#F2EDE4] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#2D2A26] hover:shadow-lg transition-all">
//                   <FaDownload /> Resume
//                 </a>
//                 <a href="https://www.linkedin.com/in/chennamsetti-venkatateja-7a21a7325" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#0a66c2] hover:bg-[#E8E3D9] transition-all border border-[#E8E3D9]">
//                   <FaLinkedin />
//                 </a>
//                 <a href="https://github.com/venkatateja1435" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#F2EDE4] rounded-xl flex items-center justify-center text-xl text-[#7A756D] hover:text-[#2D2A26] hover:bg-[#E8E3D9] transition-all border border-[#E8E3D9]">
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="col-span-1 lg:col-span-8 flex flex-col gap-4 lg:gap-6 h-auto lg:h-full">

//             <div className="flex-1 bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-5 lg:p-8 flex flex-col relative shadow-xl shadow-[#D9CDB8]/30 min-h-[360px] lg:min-h-0 overflow-hidden">
//               <h2 className="text-xs lg:text-sm font-bold text-[#8C857B] mb-4 lg:mb-6 flex items-center gap-2 uppercase tracking-widest z-20 relative">
//                 <FaCode className="text-[#9C6644]" /> Featured Projects
//               </h2>

//               <div className="w-full flex-1 relative flex lg:hidden overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: 'none' }}>
//                 <div className="flex gap-4 h-full items-center">
//                   {projects.map((proj, idx) => (
//                     <div key={idx} className="w-[80vw] sm:w-[320px] h-[95%] bg-[#F2EDE4] rounded-2xl p-5 border border-[#E8E3D9] flex flex-col justify-between shrink-0 relative snap-center">
//                       <a href={proj.link} target="_blank" rel="noopener noreferrer" className="absolute top-5 right-5 text-[#8C857B] hover:text-[#9C6644]">
//                         <FaExternalLinkAlt />
//                       </a>
//                       <div>
//                         <h3 className="text-[#2D2A26] font-bold mb-3 text-base pr-6">{proj.title}</h3>
//                         <p className="text-[#7A756D] text-xs leading-relaxed">{proj.desc}</p>
//                       </div>
//                       <div className="flex gap-2 mt-4 flex-wrap">
//                         {proj.tech.map((t, i) => (
//                           <span key={i} className="text-[10px] font-bold bg-[#FCFAF8] text-[#9C6644] border border-[#E8E3D9] px-2 py-1.5 rounded-md shadow-sm">
//                             {t}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="w-full flex-1 relative hidden lg:flex overflow-hidden">
//                 <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>
//                 <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FCFAF8] to-transparent z-10 pointer-events-none"></div>

//                 <div className="flex gap-6 h-full items-center animate-scroll w-max hover:[animation-play-state:paused]">
//                   {infiniteProjects.map((proj, idx) => (
//                     <div key={idx} className="w-[350px] h-[90%] bg-[#F2EDE4] rounded-2xl p-6 border border-[#E8E3D9] flex flex-col justify-between hover:border-[#D9CDB8] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D9CDB8]/40 transition-all duration-300 group/card shrink-0">
//                       <a href={proj.link} target="_blank" rel="noopener noreferrer" className="absolute top-5 right-5 text-[#8C857B] hover:text-[#9C6644] opacity-0 group-hover/card:opacity-100 transition-opacity">
//                         <FaExternalLinkAlt />
//                       </a>
//                       <div>
//                         <h3 className="text-[#2D2A26] font-bold mb-3 text-lg group-hover/card:text-[#9C6644] transition-colors pr-6">{proj.title}</h3>
//                         <p className="text-[#7A756D] text-sm leading-relaxed">{proj.desc}</p>
//                       </div>
//                       <div className="flex gap-2 mt-4 flex-wrap">
//                         {proj.tech.map((t, i) => (
//                           <span key={i} className="text-[11px] font-bold bg-[#FCFAF8] text-[#9C6644] border border-[#E8E3D9] px-3 py-1.5 rounded-md shadow-sm">
//                             {t}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-4 lg:gap-6 items-stretch">

//               <div className="flex-[2] bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-6 lg:p-8 flex flex-col justify-center shadow-xl shadow-[#D9CDB8]/30">
//                 <h2 className="text-xs lg:text-sm font-bold text-[#8C857B] mb-4 uppercase tracking-widest">Core Tech Stack</h2>
//                 <div className="flex flex-wrap gap-2 lg:gap-3">
//                   {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'react-hook-form', 'REST APIs', 'SessionStorage', 'Git'].map((skill, i) => (
//                     <span key={i} className="bg-[#F2EDE4] border border-[#E8E3D9] text-[#5C554D] text-xs lg:text-sm font-bold px-3 lg:px-4 py-2 rounded-xl hover:border-[#D9CDB8] hover:bg-[#E8E3D9] hover:text-[#2D2A26] transition-colors shadow-sm cursor-default">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex-1 bg-[#FCFAF8] border border-[#E8E3D9] rounded-3xl p-6 lg:p-8 flex flex-col justify-center shadow-xl shadow-[#D9CDB8]/30">
//                 <h2 className="text-xs lg:text-sm font-bold text-[#8C857B] mb-4 flex items-center gap-2 uppercase tracking-widest">
//                   <FaCompass className="text-[#9C6644]" /> Beyond Code
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {['Trekking (Western Ghats)', 'Cricket', 'Historical Architecture'].map((hobby, i) => (
//                     <span key={i} className="text-[#7A756D] text-xs font-semibold px-3 py-1.5 bg-[#F2EDE4] border border-[#E8E3D9] rounded-lg">
//                       {hobby}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//       <UpdatePrompt />
//     </>
//   );
// }

// export default App;

import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import UpdatePrompt from './components/UpdatePrompt';

function App() {
  const projects = [
    {
      title: "Common Admission Portal (CAP)",
      desc: "A unified, state-level admission platform handling applications and processing for major entrance exams (EAPCET, ECET, ICET, PGCET, LAWCET) utilized by lakhs of students.",
      tech: ["React.js", "RBAC Auth", "Payment API"],
      link: "https://cap.apcfss.in"
    },
    {
      title: "JNB Nivas Management",
      desc: "A centralized workflow management system tracking the lifecycle, biometric attendance, and daily operations (like Diet processing) for various AP residential schools.",
      tech: ["React.js", "JWT Auth", "Dynamic UI"],
      link: "https://nivas.apcfss.in"
    },
    {
      title: "AP Universities Recruitment",
      desc: "End-to-end recruitment and admission portals for AP Universities and multiple residential societies including APSWREIS, BCREIS, Tribal, AP Model Schools, and KGBV",
      tech: ["React.js", "Redux", "REST APIs"],
      link: "https://apuniversitiesrecruitment.apcfss.in/"
    }
  ];

  return (
    <>
      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 min-h-screen">

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">

            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Chennamsetti Venkata Teja
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Software Engineer @ APCFSS
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  I build scalable, secure, and high-performance web applications handling lakhs of concurrent users.
                </p>

                <nav className="nav hidden lg:block mt-16">
                  <ul className="mt-8 w-max">
                    <li><a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 transition-colors">About</span></a></li>
                    <li><a className="group flex items-center py-3" href="#experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 transition-colors">Experience</span></a></li>
                    <li><a className="group flex items-center py-3" href="#projects"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 transition-colors">Projects</span></a></li>
                  </ul>
                </nav>
              </div>

              <ul className="ml-1 mt-8 flex items-center text-slate-400 gap-5">
                <li><a href="https://github.com/venkatateja1435" className="block hover:text-slate-200 transition-colors text-2xl" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/chennamsetti-venkatateja-7a21a7325" className="block hover:text-slate-200 transition-colors text-2xl" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
                <li><a href="mailto:venkatateja1435@gmail.com" className="block hover:text-slate-200 transition-colors text-2xl"><FaEnvelope /></a></li>
              </ul>
            </header>

            <main className="pt-24 lg:w-1/2 lg:py-24">

              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <p className="mb-4 text-slate-400">
                  Frontend Developer with <strong className="text-slate-200 font-medium">~4 years of hands-on experience</strong> in building e-governance platforms. Specialized in complex form handling, state management, and secure authentication flows. Strong problem-solving skills with a track record of delivering end-to-end user interfaces for state-wide centralized portals.
                </p>
                <p className="mb-4 text-slate-400">
                  Beyond coding, I enjoy trekking in the Western Ghats, playing <strong className="text-slate-200 font-medium">Cricket</strong>, and exploring Historical Architecture.
                </p>
              </section>

              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div>
                  <ol className="group/list">

                    {/* Role 1 */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          Jul 2022 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-tight text-slate-200">
                            <div>
                              <span className="text-slate-200 hover:text-teal-300">Software Engineer · APCFSS</span>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Developing and maintaining state-level e-governance platforms. Specialized in complex form handling, secure authentication flows, and dynamic reporting for lakhs of concurrent users.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            {['React.js', 'Redux', 'Tailwind CSS'].map((t, i) => (
                              <li key={i} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* Role 2 */}
                    <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          Dec 2021 — Jun 2022
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-tight text-slate-200">
                            <div>
                              <span className="text-slate-200 hover:text-teal-300">Trainee · APCFSS</span>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Started hands-on development in frontend architectures. Assisted in building UI components, integrating REST APIs, and optimizing the performance of centralized portals.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            {['JavaScript', 'React.js', 'HTML/CSS'].map((t, i) => (
                              <li key={i} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{t}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>

                  </ol>
                </div>
              </section>

              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div>
                  <ul className="group/list">
                    {projects.map((proj, idx) => (
                      <li key={idx} className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                          <div className="z-10 sm:col-span-8">
                            <h3 className="font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{proj.title} <FaExternalLinkAlt className="inline-block h-3 w-3 ml-1 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
                              </a>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">{proj.desc}</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {proj.tech.map((t, i) => (
                                <li key={i} className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {t}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>
      <UpdatePrompt />
    </>
  );
}

export default App;