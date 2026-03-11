import { motion } from 'motion/react';
import { ArrowRight, Code, Shield, Cloud, Zap, BarChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Clients Worldwide', value: '200+' },
  { label: 'Projects Completed', value: '500+' },
  { label: 'Expert Engineers', value: '50+' },
  { label: 'Years Experience', value: '12+' },
];

const features = [
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored applications built with modern frameworks to solve your unique business challenges.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with advanced threat detection and robust security protocols.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions that enhance collaboration and reduce operational overhead.',
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
                Next-Gen IT Solutions
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8">
                Accelerate Your <span className="text-indigo-600">Digital Transformation</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
                We bridge the gap between complex technology and business goals. Delivering scalable, secure, and innovative IT services for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all"
                >
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-indigo-600/10 rounded-[3rem] blur-3xl -z-10" />
              <img
                src="https://picsum.photos/seed/tech-abstract/800/800"
                alt="Technology Abstract"
                className="rounded-[3rem] shadow-2xl border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-zinc-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-xl">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-900">99.9% Uptime</div>
                    <div className="text-xs text-zinc-500">Guaranteed reliability</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-zinc-900 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Core Expertise</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
                Comprehensive solutions for a competitive edge.
              </h3>
            </div>
            <p className="text-zinc-600 max-w-md text-lg">
              Our multidisciplinary team combines deep technical knowledge with industry insights to deliver exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-4">{feature.title}</h4>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Link to="/services" className="text-indigo-600 font-semibold flex items-center group">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to transform your business?</h2>
              <p className="text-indigo-100 text-xl mb-12">
                Join hundreds of forward-thinking companies that trust AP Infotech for their technology needs.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
