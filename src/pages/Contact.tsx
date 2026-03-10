import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 mb-8 leading-tight">
                Let's build something <span className="text-indigo-600">extraordinary</span> together.
              </h1>
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                Have a project in mind or just want to say hello? We'd love to hear from you. Our team typically responds within 24 hours.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-indigo-50 p-4 rounded-2xl">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">Email Us</h4>
                    <p className="text-zinc-600">hello@apinfotech.com</p>
                    <p className="text-zinc-600">support@apinfotech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-indigo-50 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">Call Us</h4>
                    <p className="text-zinc-600">+1 (555) 000-0000</p>
                    <p className="text-zinc-600">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-indigo-50 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">Visit Us</h4>
                    <p className="text-zinc-600">123 Tech Avenue, Suite 500</p>
                    <p className="text-zinc-600">Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-50 p-10 lg:p-16 rounded-[3rem] border border-zinc-200"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Service Needed</label>
                  <select className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none">
                    <option>Software Development</option>
                    <option>Cloud Solutions</option>
                    <option>Cybersecurity</option>
                    <option>IT Consulting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center group shadow-lg shadow-indigo-200"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-zinc-600 max-w-xl mx-auto">Quick answers to common questions about our process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { q: 'How long does a typical project take?', a: 'Project timelines vary based on complexity, but most initial phases are completed within 4-12 weeks.' },
              { q: 'Do you offer ongoing support?', a: 'Yes, we provide 24/7 maintenance and support packages for all our solutions.' },
              { q: 'What industries do you specialize in?', a: 'We have deep expertise in FinTech, Healthcare, Retail, and Logistics.' },
              { q: 'Can you work with our existing team?', a: 'Absolutely. We often work alongside internal IT teams to provide specialized expertise.' },
            ].map((faq, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm">
                <h4 className="text-lg font-bold text-zinc-900 mb-3 flex items-start">
                  <MessageSquare className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-zinc-600 pl-8 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
