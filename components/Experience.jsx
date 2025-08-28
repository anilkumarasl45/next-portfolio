"use client";

import { experiences } from "@/data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work</span> experience
      </h1>
      
      <div className="w-full mt-12">
        <div className="relative">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-8 w-px h-full bg-gradient-to-b from-purple/50 to-transparent"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-6 w-4 h-4 bg-purple rounded-full border-4 border-black-100 shadow-lg"></div>
              
              {/* Content */}
              <div className="bg-black-100 p-6 rounded-xl border border-white/[0.1] ml-8 hover:border-white/[0.2] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {experience.title}
                  </h3>
                  <span className="text-sm text-purple font-medium">
                    {experience.duration}
                  </span>
                </div>
                
                <h4 className="text-lg text-white-100 mb-3">
                  {experience.company}
                </h4>
                
                <p className="text-white-200 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-white/[0.05] text-white-100 rounded-full border border-white/[0.1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;