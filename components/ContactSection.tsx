'use client';

import { useState } from 'react';
import { mutate } from 'swr';
import { motion } from 'motion/react';
import { Github, Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ editSaving, setEditSaving ] = useState(false);

  const handleSubmitFeedback = async () => {
    if (!name || !email || !subject || !message) return;
    setEditSaving(true)
    try{
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      mutate('api/contact');

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    } catch (err){
      console.log(err);
      setEditSaving(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-medium mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Contact Information</h3>
            <p className="text-portfolio-dark/70 mb-8 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-portfolio-light/50 rounded-full text-portfolio-dark">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-dark">Email</h4>
                  <p className="text-portfolio-dark/70 text-sm">aldabon.mark.kengie@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-portfolio-light/50 rounded-full text-portfolio-dark">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-portfolio-dark">Location</h4>
                  <p className="text-portfolio-dark/70 text-sm">Quezon City, Philippines</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-portfolio-dark mb-4 uppercase tracking-wider text-sm">Follow Me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/mark-kengie-aldabon-a765763b5" className="w-10 h-10 flex items-center justify-center border border-portfolio-light rounded-full text-portfolio-dark hover:bg-portfolio-dark hover:text-portfolio-bg transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/tambayNgOrtigasAvenue" className="w-10 h-10 flex items-center justify-center border border-portfolio-light rounded-full text-portfolio-dark hover:bg-portfolio-dark hover:text-portfolio-bg transition-all duration-300">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-portfolio-light rounded-full text-portfolio-dark hover:bg-portfolio-dark hover:text-portfolio-bg transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/kamuningningning/" className="w-10 h-10 flex items-center justify-center border border-portfolio-light rounded-full text-portfolio-dark hover:bg-portfolio-dark hover:text-portfolio-bg transition-all duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <form className="space-y-6 bg-portfolio-bg border border-portfolio-light p-8 rounded-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-portfolio-bg border border-portfolio-light rounded-none focus:outline-none focus:border-portfolio-medium focus:ring-1 focus:ring-portfolio-medium transition-colors text-portfolio-dark placeholder:text-portfolio-medium"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-portfolio-bg border border-portfolio-light rounded-none focus:outline-none focus:border-portfolio-medium focus:ring-1 focus:ring-portfolio-medium transition-colors text-portfolio-dark placeholder:text-portfolio-medium"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-dark mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-portfolio-bg border border-portfolio-light rounded-none focus:outline-none focus:border-portfolio-medium focus:ring-1 focus:ring-portfolio-medium transition-colors text-portfolio-dark placeholder:text-portfolio-medium"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-portfolio-bg border border-portfolio-light rounded-none focus:outline-none focus:border-portfolio-medium focus:ring-1 focus:ring-portfolio-medium transition-colors text-portfolio-dark placeholder:text-portfolio-medium resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-portfolio-dark text-portfolio-bg font-medium rounded-none hover:bg-portfolio-medium hover:text-portfolio-dark transition-colors duration-300 border border-portfolio-dark"
                onClick={() => handleSubmitFeedback()}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
