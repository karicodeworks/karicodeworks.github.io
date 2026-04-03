import Link from 'next/link'
import { title } from 'process'

const projects = [
  {
    title: '',
    description: '',
    tech: ['', ''],
    live: '#',
    github: '#',
  },
  {
    title: '',
    description: '',
    tech: ['', ''],
    live: '#',
    github: '#',
  },
]

export default function Home() {
  return (
    <main className='bg-[#0B0F19] text-gray-200 min-h-screen px-6'>
      <div className='max-w-5xl mx-auto'>
        {/* Navbar */}
        <nav className='flex justify-between items-center py-6 sticky top-0 backdrop-blur-md bg-white/5'>
          <h1 className='text-xl font-bold'>James.dev</h1>
          <div className='space-x-6 text-sm'>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <section className='py-24'>
          <h1 className='text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>
            I build fast, scalable web applications.
          </h1>
          <p className='mt-6 text-lg text-gray-400 max-w-xl'>
            Junior Software Engineer specialising in modern web technologies.
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
        <section className='py-20'>
          <h2 className='text-3xl font-semibold mb-6'>About Me</h2>
          <p className='text-gray-400 max-w-2xl'>
            I focus on building efficient, scalable and user-friendly
            applications using modern technologies.
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
                  <Link href={project.live}>Live</Link>
                  <Link href={project.github}>GitHub</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className='py-20'>
          <h2 className='text-3xl font-semibold mb-10'>Skills</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {['TypeScript', 'Next.js', 'Node.js', 'Tailwind'].map(
              (skill, i) => (
                <div key={i} className='p-4 bg-gray-900 rounded-xl text-center'>
                  {skill}
                </div>
              ),
            )}
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
