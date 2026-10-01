import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/hazzy-19', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://x.com/_lovelydesign', icon: <FaTwitter />, label: 'Twitter / X' },
  { href: 'https://www.instagram.com/lovely.desighns/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://web.facebook.com/profile.php?id=61589732825630', icon: <FaFacebook />, label: 'Facebook' },
  { href: 'mailto:hello@peteranyona.co.ke', icon: <FaEnvelope />, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">© 2025 Peter Anyona (Lovely Design). All rights reserved.</p>
        <div className="flex gap-4 text-slate-400">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-slate-700 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
