import { useEffect, useMemo, useState, useRef } from "react";
import PacmanBackground from "./components/PacmanBackground";

const projects = [
  {
    name: "Library Front Redux",
    desc: "Frontend library management system using Redux for state management.",
    tech: ["React", "Redux", "JavaScript"],
    highlights: ["Global state", "CRUD flows", "Reusable components"],
    link: "https://library-frontend-final.netlify.app/",
    githubFront: "https://github.com/shakedgoren/Library_front_redux",
    githubBack: "https://github.com/shakedgoren/library-backend-final",
    type: "Academic",
    featured: true,
    caseStudy: {
      problem: "Manage books and users with clear UI and consistent state.",
      solution: "Built a React app with Redux slices, reusable components and CRUD flows.",
      learnings: ["Redux patterns", "Component reuse", "UI state consistency"],
    },
  },
  {
    name: "Future Prophet AI",
    desc: "A modernized AI-powered web app generating personalized and sophisticated predictions based on user data.",
    tech: ["React", "Tailwind CSS", "Generative AI", "Vite"],
    highlights: ["AI Integration", "Prompt Engineering", "Modern UI/UX"],
    link: "https://future-prophet-app.netlify.app/",
    githubFront: "https://github.com/shakedgoren/future-prophet-app.git",
    type: "Personal",
    featured: true,
    caseStudy: {
      problem: "Upgrade a legacy prediction script into a modern, sophisticated AI application.",
      solution: "Built a responsive frontend with React and Tailwind CSS, leveraging current Generative AI capabilities for dynamic outcomes.",
      learnings: ["AI API Integration", "Prompt Design", "Modern Frontend Architecture"],
    },
  },
  {
    name: "Jahnon On Wheels (Backend)",
    desc: "Django backend for managing orders and services.",
    tech: ["Python", "Django", "REST"],
    highlights: ["REST API", "Models & relations", "Business logic"],
    url: "https://github.com/shakedgoren/jahnonOnWeels_back_django",
    type: "Personal",
    featured: true,
    caseStudy: {
      problem: "Explore basic AI concepts.",
      solution: "Built small Python experiments to understand AI-assisted logic.",
      learnings: ["AI workflows", "Python experimentation"],
    },
  },
];

const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "SQL"] },
  { label: "Frameworks", items: ["React", "Redux", "Django", "Flask"] },
  { label: "Tools & DevOps", items: ["Git", "Docker (basic)", "REST APIs", "HTML", "CSS"] },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="rounded-2xl px-4 py-2 text-sm font-semibold border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:scale-[1.03] active:scale-[0.99] transition"
    >
      {dark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}

function Chip({ children }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/10 text-black/80 dark:text-white/80">
      {children}
    </span>
  );
}

function Card({ children, className }) {
  return (
    <div className={cn("rounded-3xl p-6 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:-translate-y-1 hover:shadow-2xl transition-all duration-300", className)}>
      {children}
    </div>
  );
}

function ProjectCard({ p, onOpen }) {
  return (
    <div className="text-left w-full group outline-none perspective-1000">
      <Card className="relative overflow-hidden h-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-sky-500/50 group-hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]">

        {/* אפקטים ויזואליים */}
        <div className="absolute -inset-px bg-gradient-to-br from-sky-500/20 via-transparent to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(14,165,233,0.15)_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 flex flex-col h-full text-left p-6">

          {/* אזור לחיץ לפתיחת המודל */}
          <div className="cursor-pointer" onClick={() => onOpen(p)}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-black tracking-tight group-hover:text-sky-500 transition-colors duration-300">
                {p.name}
              </h3>
              <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4L7.5 4C7.22386 4 7 3.77614 7 3.5C7 3.22386 7.22386 3 7.5 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>

            <p className="text-sm text-black/60 dark:text-white/60 line-clamp-2 mb-6 font-medium leading-relaxed">
              {p.desc}
            </p>
          </div>

          {/* טכנולוגיות */}
          <div className="flex flex-wrap gap-2 mb-6">
            {p.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-black px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>

          {/* כפתור Demo בתחתית עם אור מהבהב */}
          {p.link && (
            <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 group/demo"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-black/50 dark:text-white/50 group-hover/demo:text-red-500 transition-colors">
                  Live Demo
                </span>
              </a>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function Modal({ open, onClose, project }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-[100000]">
      {/* Overlay */}
      <button onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative mx-auto mt-16 w-[92%] max-w-2xl">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0b0b12]/90 backdrop-blur shadow-2xl p-7">

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="text-left">
              <h3 className="text-2xl font-black tracking-tight">{project.name}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{project.desc}</p>
            </div>
            <button onClick={onClose} className="rounded-xl px-3 py-2 text-sm font-bold border border-black/10 dark:border-white/10 hover:scale-[1.03] transition">✕</button>
          </div>

          {/* Case Study Content */}
          {project.caseStudy && (
            <div className="mt-6 space-y-5 text-left">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider opacity-70">Problem</p>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70 leading-relaxed">{project.caseStudy.problem}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider opacity-70">Solution</p>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70 leading-relaxed">{project.caseStudy.solution}</p>
              </div>
              {project.caseStudy.learnings?.length > 0 && (
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider opacity-70">Learnings</p>
                  <ul className="mt-2 space-y-1 text-sm text-black/70 dark:text-white/70">
                    {project.caseStudy.learnings.map((l) => (
                      <li key={l} className="flex gap-2"><span className="text-emerald-500">▸</span><span>{l}</span></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Technologies Chips */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech?.map((t) => (<Chip key={t}>{t}</Chip>))}
          </div>

          {/* Action Buttons (The Updated Section) */}
          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col gap-4">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-50 text-left">Source Code</p>

            <div className="flex flex-wrap gap-3">
              {/* Frontend Link */}
              {project.githubFront && (
                <a
                  href={project.githubFront}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02] transition"
                >
                  <span>🎨</span> Frontend Code
                </a>
              )}

              {/* Backend Link */}
              {project.githubBack && (
                <a
                  href={project.githubBack}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold bg-zinc-100 dark:bg-white/10 text-black dark:text-white hover:scale-[1.02] transition border border-black/5 dark:border-white/10"
                >
                  <span>⚙️</span> Backend Code
                </a>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="rounded-2xl px-5 py-3 text-sm font-bold border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur hover:scale-[1.02] transition ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [selected, setSelected] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative font-rounded min-h-screen bg-white dark:!bg-[#06060a] text-black dark:text-white transition-colors duration-500">
      {/* HEADER עם הפרדה מוחלטת - התיקון כאן */}
      <header className="sticky top-0 left-0 w-full h-[80px] z-[9999] bg-zinc-50 dark:bg-[#06060a] border-b border-black/5 dark:border-white/10 shadow-xl overflow-hidden">
        {/* שינינו את ה-Grid ל-auto וצמצמנו את ה-max-width אם תרצי, או פשוט הוספנו gap */}
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-2 relative">

          {/* קיר שמאלי - השם */}
          <div className="relative z-30 bg-zinc-50 dark:bg-[#06060a] h-full flex items-center pr-2 shrink-0">
            <span className="text-sm font-black tracking-widest uppercase opacity-80 whitespace-nowrap">
              Shaked Liloz
            </span>
          </div>

          {/* המסלול של הפקמן - עכשיו הוא גמיש ומתכווץ בהתאם למרחק */}
          <div className="relative flex-1 h-full overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <PacmanBackground />
            </div>
          </div>

          {/* קיר ימני - הכפתור */}
          <div className="relative z-30 bg-zinc-50 dark:bg-[#06060a] h-full flex items-center justify-end pl-2 shrink-0">
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>

        </div>
      </header>

      {/* --- כל תוכן האתר --- */}
      <main className="relative z-10 pt-[0.5px]">

        <style>{`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-flow {
            background-size: 200% auto;
            animation: gradient-move 6s ease infinite;
          }
        `}</style>

        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-[10%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-sky-500/10 to-emerald-400/10 blur-[120px] opacity-40" />
        </div>

        {/* HERO SECTION */}
        <section id="top" className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-left">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <p className="text-sm font-bold tracking-widest text-sky-500 uppercase">
                Computer Science Student
              </p>
              <h1 className="mt-4 text-5xl sm:text-7xl font-black tracking-tighter leading-[1.1] text-black dark:text-white">
                Focused on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-fuchsia-500 to-emerald-400 animate-gradient-flow">
                  software development & core logic.
                </span> <br />
              </h1>
              <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-black/70 dark:text-zinc-400">
                I'm <span className="text-black dark:text-white font-semibold">Shaked Goren</span>.
                I specialize in solving complex problems through clean code and strong algorithmic foundations.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-2xl px-8 py-4 text-sm font-bold bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-all shadow-lg">
                  Explore Projects
                </a>
                <a href="/ShakedLiloz_CV.pdf" download className="group rounded-2xl px-8 py-4 text-sm font-bold border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur hover:bg-black/5 dark:hover:bg-white/10 transition-all flex items-center gap-2">
                  Download CV <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2 mt-4 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-emerald-400 animate-gradient-flow group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-emerald-400 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#06060a]">
                  <img
                    src="/profile.png"
                    alt="Shaked Goren"
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIDE SECTION - What I bring (Moved out of hero grid to below it) */}
        <section className="max-w-6xl mx-auto px-6 pb-10 text-left">
          <div className="flex justify-start">
            <div className="w-full lg:w-1/3">
              <div className="rounded-3xl p-6 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                <h3 className="text-xs font-black uppercase tracking-widest text-sky-500 mb-4">What I bring</h3>
                <ul className="space-y-4 text-sm text-black/70 dark:text-zinc-300">
                  <li className="flex gap-3"><span className="text-sky-500">▹</span><span>CS fundamentals & Algorithms</span></li>
                  <li className="flex gap-3"><span className="text-fuchsia-500">▹</span><span>Python, Java, React & Django proficiency</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500">▹</span><span>Rapid tech stack adaptation</span></li>
                  <li className="flex gap-3"><span className="text-amber-500">▹</span><span>Analytical problem-solving</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-left" id="about">
          <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-black tracking-tighter text-black dark:text-white leading-tight">
                The Mindset <br />
                <span className="text-sky-500 relative">
                  Behind the Code
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-sky-500/20 rounded-full"></span>
                </span>
              </h2>
            </div>

            <div className="lg:col-span-8 group relative">
              {/* הילה צבעונית עדינה מאחורי הכרטיס שנדלקת ב-Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <Card className="relative overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border-sky-500/20">
                <div className="p-8">
                  {/* שורת קוד דקורטיבית בסגנון טרמינל */}
                  <div className="flex gap-1.5 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                  </div>

                  <p className="text-xl leading-relaxed text-black/80 dark:text-zinc-200 font-normal">
                    <span className="text-sky-500 font-mono font-bold mr-2">{'>'}</span>
                    As a Computer Science student, I view programming languages as tools to solve real-world puzzles.
                    I thrive on the logic behind the software, focusing on building systems that are not just functional,
                    but <span className="text-white dark:text-white font-semibold">scalable and easy to maintain</span>.
                    My goal is to bridge the gap between complex theory and practical, efficient development.
                    <span className="inline-block w-2 h-5 ml-2 bg-sky-500 animate-[pulse_1s_infinite] vertical-middle"></span>
                  </p>

                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-black/5 dark:border-white/10 pt-8">
                    <div className="text-left group/item">
                      <p className="text-2xl font-black text-sky-500 transition-transform group-hover/item:-translate-y-1">B.Sc.</p>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">CS Student</p>
                    </div>
                    <div className="text-left group/item">
                      <p className="text-2xl font-black text-fuchsia-500 transition-transform group-hover/item:-translate-y-1">Agile</p>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Fast Learner</p>
                    </div>
                    <div className="text-left group/item">
                      <p className="text-2xl font-black text-emerald-500 transition-transform group-hover/item:-translate-y-1">Logic</p>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Driven</p>
                    </div>
                    <div className="text-left group/item">
                      <p className="text-2xl font-black text-amber-500 transition-transform group-hover/item:-translate-y-1">Clean</p>
                      <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Code</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-10 text-left" id="skills">
          <h2 className="text-2xl font-extrabold tracking-tight">Technical Toolbox</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <Card key={group.label} className="flex flex-col gap-4">
                <h3 className="text-xs font-black uppercase tracking-widest opacity-50">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => <Chip key={skill}>{skill}</Chip>)}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-10 text-left" id="projects">
          <h2 className="text-2xl font-extrabold tracking-tight">Featured Projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.name} p={p} onOpen={setSelected} />
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-left" id="contact">
          <Card className="relative overflow-hidden bg-gradient-to-br from-sky-500/10 via-transparent to-fuchsia-500/10 border-sky-500/20 p-8 md:p-12">
            {/* אלמנט עיצובי - עיגול אור ברקע */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-xl">
                <h2 className="text-4xl font-black tracking-tighter mb-4">
                  Ready to build <br />
                  <span className="text-sky-500">something great?</span>
                </h2>
                <p className="text-lg text-black/70 dark:text-zinc-400 font-medium">
                  I am always looking for new opportunities and challenging projects. <br />
                  Available for a chat on WhatsApp, phone or email.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">
                {/* כפתור וואטסאפ זוהר */}
                <a
                  href="https://wa.me/972522884992"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">💬</span>
                  WhatsApp Me
                </a>

                {/* כפתור התקשרות */}
                <a
                  href="tel:+972522884992"
                  className="group flex items-center justify-center gap-3 rounded-2xl px-8 py-4 font-bold bg-sky-500 text-white hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300"
                >
                  <span className="text-xl group-hover:animate-bounce">📞</span>
                  Call Me Now
                </a>
              </div>
            </div>

            {/* כפתורי משנה (Secondary Actions) */}
            <div className="relative z-10 mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-6 justify-center lg:justify-start">
              <button
                onClick={() => {
                  // 1. העתקה לקליפבורד
                  navigator.clipboard.writeText("Shaked.goren15@gmail.com");
                  setCopied(true);

                  // 2. השהיה קטנה של 100ms לפני פתיחת המייל
                  setTimeout(() => {
                    window.location.href = "mailto:Shaked.goren15@gmail.com";
                    setCopied(false);
                  }, 2000); // הבועית תישאר ל-2 שניות ואז תיעלם
                }}
                className="relative flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-sky-500 transition-all duration-300 active:scale-95 outline-none"
              >
                <span className="text-base">📧</span>
                <span>Shaked.goren15@gmail.com</span>

                {/* בועית הפידבק */}
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                    Copied! Opening Mail...
                  </span>
                )}
              </button>
              <a href="https://github.com/shakedgoren" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-fuchsia-500 transition-colors">
                <span>💻</span> GitHub Profile
              </a>
            </div>
          </Card>
        </section>

        <footer className="max-w-6xl mx-auto px-6 py-10 text-center text-sm opacity-50">
          © {year} Shaked Goren · Software Developer
        </footer>

        <Modal open={!!selected} project={selected} onClose={() => setSelected(null)} />
      </main>
    </div>
  );
}