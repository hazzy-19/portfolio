import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setFormStatus('Message sent successfully!');
        event.target.reset();
      } else {
        console.error('Form error:', data);
        setFormStatus(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form error:', error);
      setFormStatus('Network error occurred. Please try again.');
    }

    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-[2px] bg-slate-800 dark:bg-emerald-500"></div>
        <span className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-emerald-400">Get In Touch</span>
      </div>

      <div className="flex flex-col md:flex-row gap-16 mt-6">
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Let's work together</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">Have a project in mind or just want to say hi? I'd love to hear from you.</p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 dark:text-emerald-400">
                <FaEnvelope />
              </div>
              <span>anyonaonchoke@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 dark:text-emerald-400">
                <FaPhoneAlt />
              </div>
              <span>0757 611 486</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 dark:text-emerald-400">
                <FaMapMarkerAlt />
              </div>
              <span>Nakuru, Kenya</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 dark:text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-emerald-500 transition-all"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 dark:text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-emerald-500 transition-all"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 dark:text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-emerald-500 transition-all resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-slate-800 dark:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 dark:hover:bg-emerald-500 transition-colors shadow-md hover:shadow-lg"
            >
              Send Message →
            </button>
            {formStatus && (
              <p
                className={`mt-4 text-sm font-medium ${
                  formStatus.includes('success')
                    ? 'text-emerald-600'
                    : formStatus === 'Sending...'
                    ? 'text-slate-600'
                    : 'text-red-500'
                }`}
              >
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
