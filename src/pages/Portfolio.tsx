import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Software Development',
    img: 'https://picsum.photos/seed/coding-screen/800/600',
    desc: 'A real-time financial analytics platform for a leading European bank.',
  },
  {
    title: 'SecureCloud Migration',
    category: 'Cloud Solutions',
    img: 'https://picsum.photos/seed/network-cables/800/600',
    desc: 'Migrating a legacy infrastructure to a secure, multi-cloud environment.',
  },
  {
    title: 'HealthTrack App',
    category: 'Mobile Development',
    img: 'https://picsum.photos/seed/digital-health/800/600',
    desc: 'A HIPAA-compliant mobile app for patient monitoring and data tracking.',
  },
  {
    title: 'Retail AI Engine',
    category: 'Data Analytics',
    img: 'https://picsum.photos/seed/artificial-intelligence/800/600',
    desc: 'Implementing AI-driven inventory management for a global retail chain.',
  },
  {
    title: 'CyberShield Audit',
    category: 'Cybersecurity',
    img: 'https://picsum.photos/seed/cyber-security/800/600',
    desc: 'Comprehensive security overhaul for a government agency.',
  },
  {
    title: 'SmartCity IoT',
    category: 'IoT Solutions',
    img: 'https://picsum.photos/seed/smart-city-tech/800/600',
    desc: 'Developing an IoT platform for urban traffic and energy management.',
  },
];

export default function Portfolio() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped our clients achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/3]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-zinc-900">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-indigo-200 font-serif mb-8">“</div>
            <p className="text-3xl font-medium text-zinc-800 italic leading-relaxed mb-12">
              AP Infotech transformed our legacy systems into a modern, high-performance cloud infrastructure. Their expertise and dedication were instrumental in our digital success.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://picsum.photos/seed/tech-executive/100/100"
                alt="Client"
                className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <div className="font-bold text-zinc-900">James Wilson</div>
                <div className="text-sm text-zinc-500">CEO, Global Logistics Corp</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
