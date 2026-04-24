'use client';

import { motion } from 'motion/react';
import { Server, Database, Code2, Wrench, CheckCircle2, Cloud } from 'lucide-react';

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    description: 'Server-side logic, API development, and architecture.',
    skills: ['Next.js', 'Laravel', 'PHP', 'RESTful APIs', 'Authentication'],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: Database,
    description: 'Data modeling, storage, and retrieval systems.',
    skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Database Design'],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    description: 'Core programming and scripting languages.',
    skills: ['TypeScript', 'PHP'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    description: 'Development, deployment, and version control tools.',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    icon: Cloud,
    description: 'Currently exploring and utilizing cloud services including S3, EC2, Lambda, and more.',
    skills: ['AWS', 'S3', 'EC2', 'Lambda', 'Cloud Services'],
  }
];

export function SkillsAndTools() {
  return (
    <section id="skills" className="py-24 bg-portfolio-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">Skills & Tools</h2>
          <div className="h-1 w-20 bg-portfolio-medium mx-auto rounded-full"></div>
          <p className="mt-6 text-portfolio-dark/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack as a backend developer and computer science student. I focus on building scalable systems and mastering modern development tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-portfolio-light hover:border-portfolio-medium transition-colors bg-portfolio-bg rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-portfolio-light/30 rounded-lg text-portfolio-dark">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-portfolio-dark">{category.title}</h3>
                </div>
                <p className="text-portfolio-dark/70 text-sm mb-6">{category.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 bg-portfolio-light/20 border border-portfolio-light rounded-full text-sm font-medium text-portfolio-dark"
                    >
                      <CheckCircle2 size={14} className="text-portfolio-medium" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
