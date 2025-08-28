"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes, FaCode, FaMobile } from "react-icons/fa";
import { webProjects, appProjects } from "@/data";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-black-100 rounded-2xl border border-white/[0.1] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
              
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple/20 to-blue-500/20"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="background" className="w-full h-full object-cover opacity-30" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full object-contain"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-sm border border-purple/30">
                    {project.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                
                <p className="text-white-100 text-lg leading-relaxed mb-6">
                  {project.des}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple rounded-full"></div>
                        <span className="text-white-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full bg-black-200 border border-white/[0.1] flex items-center justify-center"
                      >
                        <img src={icon} alt="tech" className="w-6 h-6" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple/25 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View Live Project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-black-100 rounded-2xl border border-white/[0.1] overflow-hidden cursor-pointer group hover:shadow-xl hover:shadow-purple/10 transition-all duration-300"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple/20 to-blue-500/20"
          style={{ backgroundColor: "#13162D" }}
        >
          <img src="/bg.png" alt="background" className="w-full h-full object-cover opacity-30" />
        </div>
        <img
          src={project.img}
          alt={project.title}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-purple rounded-full text-sm border border-purple/30">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white-200 text-sm line-clamp-2 mb-4">
          {project.des}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center -space-x-2">
            {project.iconLists.slice(0, 4).map((icon, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-black-200 border-2 border-black-100 flex items-center justify-center"
              >
                <img src={icon} alt="tech" className="w-4 h-4" />
              </div>
            ))}
            {project.iconLists.length > 4 && (
              <div className="w-8 h-8 rounded-full bg-black-200 border-2 border-black-100 flex items-center justify-center text-xs text-white">
                +{project.iconLists.length - 4}
              </div>
            )}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-purple/20 rounded-full text-purple group-hover:bg-purple group-hover:text-white transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const currentProjects = activeTab === "web" ? webProjects : appProjects;

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mt-12 mb-8">
        <div className="bg-black-100 p-2 rounded-2xl border border-white/[0.1]">
          <button
            onClick={() => setActiveTab("web")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              activeTab === "web"
                ? "bg-purple text-white shadow-lg"
                : "text-white-200 hover:text-white"
            }`}
          >
            <FaCode className="w-4 h-4" />
            Web Projects
          </button>
          <button
            onClick={() => setActiveTab("app")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
              activeTab === "app"
                ? "bg-purple text-white shadow-lg"
                : "text-white-200 hover:text-white"
            }`}
          >
            <FaMobile className="w-4 h-4" />
            App Projects
          </button>
        </div>
      </div>
      
      {/* Projects Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} onClick={handleProjectClick} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Projects;