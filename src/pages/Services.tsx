import { motion } from 'motion/react';
import { Cloud, Shield, Code, BarChart, Database, Smartphone, Globe, Cpu } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migration, management, and optimization of cloud environments (AWS, Azure, Google Cloud).',
    features: ['Serverless Architecture', 'Cloud Migration', 'DevOps Automation'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'End-to-end security audits, threat monitoring, and incident response strategies.',
    features: ['Penetration Testing', 'Compliance Audits', '24/7 Monitoring'],
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Full-stack web and mobile applications built with scalability and performance in mind.',
    features: ['React & Node.js', 'Mobile Apps', 'API Integration'],
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights through advanced BI and ML models.',
    features: ['Predictive Analytics', 'Data Visualization', 'Big Data Processing'],
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Design, optimization, and maintenance of high-availability database systems.',
    features: ['SQL & NoSQL', 'Data Warehousing', 'Performance Tuning'],
  },
  {
    icon: Cpu,
    title: 'IT Consulting',
    description: 'Strategic technology roadmaps to align your IT infrastructure with business goals.',
    features: ['Digital Strategy', 'Cost Optimization', 'Tech Stack Audit'],
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-zinc-900 mb-6">Our Services</h1>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We provide a wide range of IT services designed to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm font-medium text-zinc-700">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Our proven methodology ensures project success from start to finish.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 -z-0" />
            
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements.' },
              { step: '02', title: 'Planning', desc: 'Designing the architecture and roadmap.' },
              { step: '03', title: 'Execution', desc: 'Agile development and implementation.' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and support.' },
            ].map((item, index) => (
              <div key={index} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-zinc-950">
                  <span className="font-bold text-xl">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
