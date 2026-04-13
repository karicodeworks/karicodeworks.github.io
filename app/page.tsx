'use client'
import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function ResponsiveNav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 },
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const linkClass = (id: string) =>
    `transition-all duration-300 hover:text-indigo-400 ${
      active === id ? 'text-indigo-400' : 'text-gray-300'
    }`

  return (
    <nav className='p-6 sticky top-0 backdrop-blur-md bg-white/5 z-50'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>James.dev</h1>

        {/* Desktop */}
        <div className='hidden md:flex space-x-6 text-sm'>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={linkClass(s.id)}>
              {s.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className='md:hidden text-gray-300'
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-40 mt-4' : 'max-h-0'
        }`}
      >
        <div className='flex flex-col space-y-4 text-sm'>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={linkClass(s.id)}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

const projects = [
  {
    title: 'Task Manager Platform',
    description:
      'Designed and built a scalable task management system for efficient workflows.',
    details:
      'Implemented a modern frontend with Next.js and a backend API using Node.js and Express. Focused on clean architecture, responsiveness and performance optimisation.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Prisma'],
    live: '#',
    github: '#',
  },
  {
    title: 'Data Processing Pipeline',
    description:
      'Built a high-performance data processing system for structured datasets.',
    details:
      'Developed modular data pipelines using Python, enabling efficient data transformation and analysis. Integrated FastAPI for API exposure and PostgreSQL for storage.',
    tech: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'NumPy'],
    live: '#',
    github: '#',
  },
]

export default function Home() {
  return (
    <main className='bg-[#0B0F19] text-gray-200 min-h-screen px-6'>
      <div className='max-w-5xl mx-auto'>
        {/* Navbar */}
        <ResponsiveNav />

        {/* Hero */}
        <section id='home' className='py-24'>
          <p className='text-sm text-indigo-400 mb-4'>
            TypeScript • Python • Scalable Systems
          </p>

          <h1 className='text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>
            I build scalable, high-performance software.
          </h1>

          <p className='mt-6 text-lg text-gray-400 max-w-xl'>
            Software Engineer working across web and backend systems using
            TypeScript and Python, focused on performance, reliability and clean
            architecture.
          </p>

          <div className='mt-8 flex gap-4'>
            <a href='#projects' className='bg-indigo-500 px-6 py-3 rounded-xl'>
              View Projects
            </a>
            <a
              href='#contact'
              className='border border-gray-600 px-6 py-3 rounded-xl'
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About */}
        <section id='about' className='py-20'>
          <h2 className='text-3xl font-semibold mb-6'>About Me</h2>

          <p className='text-gray-400 max-w-2xl'>
            I am a software engineer focused on building scalable, efficient and
            reliable systems across both web and backend environments. I work
            primarily with TypeScript and Python, using modern tools and
            frameworks to design and develop applications that are maintainable
            and performant. My approach emphasises clean architecture,
            simplicity and solving real-world problems effectively. I am
            continuously improving my skills and exploring better ways to build
            software that delivers meaningful value.
          </p>
        </section>

        {/* Projects */}
        <section id='projects' className='py-20'>
          <h2 className='text-3xl font-semibold mb-10'>Projects</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {projects.map((project, i) => (
              <div
                key={i}
                className='bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition hover:scale-105'
              >
                <h3 className='text-xl font-semibold'>{project.title}</h3>

                <p className='text-gray-400 mt-2'>{project.description}</p>

                <p className='text-gray-500 text-sm mt-3'>{project.details}</p>

                <div className='mt-4 flex gap-2 flex-wrap'>
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className='text-xs bg-gray-800 px-2 py-1 rounded'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className='mt-6 flex gap-4 text-sm'>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study 
        <section id='case-study' className='py-20'>
          <h2 className='text-3xl font-semibold mb-10'>Case Study</h2>

          <div className='bg-gray-900 p-8 rounded-2xl border border-gray-800'>
            <h3 className='text-2xl font-semibold mb-4'>
              Task Manager Platform
            </h3>

            <p className='text-gray-400 mb-4'>
              Built a scalable task management system to handle dynamic user
              interactions and real-time updates.
            </p>

            <h4 className='font-semibold mt-6 mb-2'>Architecture</h4>
            <p className='text-gray-400'>
              Designed a frontend using Next.js and a backend API with Node.js
              and Express. Structured the application with clear separation of
              concerns to ensure maintainability.
            </p>

            <h4 className='font-semibold mt-6 mb-2'>Key Decisions</h4>
            <ul className='text-gray-400 list-disc ml-5'>
              <li>Used TypeScript for type safety across the stack</li>
              <li>Optimised API calls to reduce latency</li>
              <li>Structured components for reusability</li>
            </ul>

            <h4 className='font-semibold mt-6 mb-2'>Outcome</h4>
            <p className='text-gray-400'>
              Delivered a responsive, scalable application with improved
              performance and clean, maintainable code.
            </p>
          </div>
        </section>
        */}

        {/* Skills */}
        <section id='skills' className='py-20'>
          <h2 className='text-3xl font-semibold mb-10'>Skills</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              'TypeScript',
              'Python',
              'Next.js',
              'React',
              'Node.js',
              'Express',
              'FastAPI',
              'PostgreSQL',
              'MongoDB',
              'Tailwind CSS',
              'Prisma',
            ].map((skill, i) => (
              <div key={i} className='p-4 bg-gray-900 rounded-xl text-center'>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id='contact' className='py-20 text-center'>
          <h2 className='text-3xl font-semibold'>Get in touch</h2>
          <p className='text-gray-400 mt-4'>
            Feel free to reach out for collaborations or opportunities.
          </p>
          <a
            href='mailto:youremail@example.com'
            className='mt-6 inline-block bg-indigo-500 px-6 py-3 rounded-xl'
          >
            Email Me
          </a>
        </section>

        {/* Footer */}
        <footer className='py-10 text-center text-gray-500 text-sm'>
          © 2026 James. Built with Next.js
        </footer>
      </div>
    </main>
  )
}
