import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="w-6 h-6 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight text-white">AP<span className="text-indigo-500">Infotech</span></span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering businesses through innovative technology solutions and strategic IT consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@apinfotech.com</span>
              </li>
              <li>123 Tech Avenue, Silicon Valley, CA 94025</li>
              <li>+1 (555) 000-0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-900 text-xs text-center">
          © {new Date().getFullYear()} AP Infotech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
