'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-portfolio-bg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
          >
            {/* The user can replace this with their actual image. I'm using a placeholder from picsum */}
            <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-portfolio-light shadow-lg">
              <Image
                src="/img/img-myself/in-circle.jpg"
                alt="Profile Picture"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-portfolio-dark tracking-tight mb-4">
              Hi, I&apos;m <span className="text-portfolio-medium">Mark Kengie Aldabon</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-dark/80 mb-6">
              Aspiring Cloud Engineer / Backend Developer / IT Student / AI Enthusiast
            </h2>
            <p className="text-base md:text-lg text-portfolio-dark/70 leading-relaxed mb-8">
              I am a passionate IT student with a strong interest in cloud computing, software development, and artificial intelligence. I am constantly learning and growing to become a skilled professional in the tech industry.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-portfolio-dark text-portfolio-bg rounded-none font-medium hover:bg-portfolio-medium hover:text-portfolio-dark transition-colors duration-300 border border-portfolio-dark"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent text-portfolio-dark border border-portfolio-dark rounded-none font-medium hover:bg-portfolio-light transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
