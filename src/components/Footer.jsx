import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/hazzy-19', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://x.com/_lovelydesign', icon: <FaTwitter />, label: 'Twitter / X' },
  { href: 'https://www.instagram.com/lovely.desighns/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://web.facebook.com/profile.php?id=61589732825630', icon: <FaFacebook />, label: 'Facebook' },
  { href: 'mailto:anyonaonchoke@gmail.com', icon: <FaEnvelope />, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0b1221] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left Side: Info */}
        <div className="flex flex-col items-center md:items-start text-slate-400 space-y-3 text-sm">
          <p className="text-slate-200 font-bold text-lg mb-2">Peter Anyona</p>
          <div className="flex items-center gap-2">
            <FaPhone className="text-emerald-500" />
            <span>0757 611 486</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-emerald-500" />
            <span>anyonaonchoke@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-emerald-500" />
            <span>Nakuru, Kenya</span>
          </div>
        </div>

        {/* Right Side: Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-5 text-slate-400">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-emerald-400 transition-colors text-xl"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-slate-500 text-sm">© 2026 Peter Anyona. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
