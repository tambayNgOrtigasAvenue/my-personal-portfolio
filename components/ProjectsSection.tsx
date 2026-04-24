'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Barangay Health Care Appointment System - Commonwealth',
    description: 'A comprehensive appointment booking system for local health centers allowing patients to schedule visits and access health services online.',
    image: '/img/img-projects/brgycommonwealth-hcas.png',
  },
  {
    id: 2,
    title: 'Quezon City University Library System',
    description: 'A management system for university libraries, featuring book cataloging, reservations, and student dashboards.',
    image: '/img/img-projects/qcu-library-system.png',
  },
  {
    id: 3,
    title: 'Gymnazo Christian Academy - Teacher Portal',
    description: 'A secure login portal for academy teachers and students to access academic records and announcements.',
    image: '/img/img-projects/gca-teacher-login.png',
  },
  {
    id: 4,
    title: 'QCU Visitrack',
    description: 'An interactive campus map for visitors providing directions to various university buildings and facilities.',
    image: '/img/img-projects/qcu-visitrack.png',
  },
  {
    id: 5,
    title: 'PAWS Veterinary Clinic',
    description: 'A modern landing page for a veterinary clinic highlighting services, products, and online booking options.',
    image: '/img/img-projects/paws-vet.png',
  },
  {
    id: 6,
    title: 'Plant Monitoring with Alert System',
    description: 'This aims to provide a hardware device that monitors a plant alerting an individual about the state whether it is dry or wet. The device monitors the plant base on the soil state, room humidity, and temperature.',
    image: '/img/img-projects/plant-monitoring-arduino.png',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">Selected Works</h2>
          <div className="h-1 w-20 bg-portfolio-medium mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-portfolio-bg border border-portfolio-light hover:border-portfolio-medium transition-colors rounded-lg overflow-hidden"
            >
              <div className="relative h-64 w-full overflow-hidden bg-portfolio-light">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-sm text-portfolio-dark/70 leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
