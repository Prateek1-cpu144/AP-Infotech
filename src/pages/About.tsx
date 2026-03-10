import { motion } from 'motion/react';
import { Users, Target, Award, Coffee } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 mb-8 leading-tight">
                We are a team of <span className="text-indigo-600">innovators</span> and problem solvers.
              </h1>
              <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                Founded in 2012, AP Infotech was born out of a passion for technology and a commitment to helping businesses navigate the digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-50 p-3 rounded-xl">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Our Mission</h4>
                    <p className="text-sm text-zinc-500">To deliver excellence through innovation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-50 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Our Vision</h4>
                    <p className="text-sm text-zinc-500">To be the global leader in IT services.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/server-room/800/600"
                alt="Our Tech Infrastructure"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">12+</div>
                <div className="text-sm font-medium opacity-80">Years of Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Our Core Values</h2>
            <p className="text-zinc-600 max-w-xl mx-auto">The principles that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Client First', desc: 'We prioritize our clients goals and work as an extension of their team.' },
              { icon: Coffee, title: 'Integrity', desc: 'Honesty and transparency are at the heart of our business relationships.' },
              { icon: Award, title: 'Excellence', desc: 'We never settle for "good enough" and always strive for the best results.' },
            ].map((value, index) => (
              <div key={index} className="p-10 bg-white rounded-3xl border border-zinc-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <value.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{value.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Meet the Leadership</h2>
            <p className="text-zinc-600 max-w-xl mx-auto">The experts driving our vision forward.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Rivera', role: 'CEO & Founder', img: 'https://picsum.photos/seed/tech-leader-1/400/500' },
              { name: 'Sarah Chen', role: 'CTO', img: 'https://picsum.photos/seed/tech-leader-2/400/500' },
              { name: 'Marcus Thorne', role: 'Head of Security', img: 'https://picsum.photos/seed/tech-leader-3/400/500' },
              { name: 'Elena Vance', role: 'Lead Developer', img: 'https://picsum.photos/seed/tech-leader-4/400/500' },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-zinc-900">{member.name}</h4>
                <p className="text-zinc-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
