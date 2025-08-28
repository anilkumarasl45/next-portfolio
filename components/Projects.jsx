"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black-100 rounded-xl border border-white/[0.1] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-xl">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple/10 to-blue-500/10"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="background" className="w-full h-full object-cover opacity-20" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full object-contain"
                />
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                
                <p className="text-white-100 leading-relaxed mb-6">
                  {project.des}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-lg bg-black-200 border border-white/[0.1] flex items-center justify-center"
                      >
                        <img src={icon} alt="tech" className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple/80 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View Project
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
      whileHover={{ y: -5 }}
      className="bg-black-100 rounded-xl border border-white/[0.1] overflow-hidden cursor-pointer group hover:border-white/[0.2] transition-all duration-300"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple/10 to-blue-500/10"
          style={{ backgroundColor: "#13162D" }}
        >
          <img src="/bg.png" alt="background" className="w-full h-full object-cover opacity-20" />
        </div>
        <img
          src={project.img}
          alt={project.title}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full object-contain"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-white-200 text-sm mb-4 line-clamp-2">
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
          
          <div className="p-2 text-purple group-hover:text-white transition-colors duration-300">
            <FaExternalLinkAlt className="w-4 h-4" />
          </div>
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
        <div className="flex bg-black-100 p-1 rounded-lg border border-white/[0.1]">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              activeTab === "web"
                ? "bg-purple text-white"
                : "text-white-200 hover:text-white"
            }`}
          >
            Web Projects
          </button>
          <button
            onClick={() => setActiveTab("app")}
            className={`px-6 py-2 rounded-md transition-all duration-300 ${
              activeTab === "app"
                ? "bg-purple text-white"
                : "text-white-200 hover:text-white"
            }`}
          >
            App Projects
          </button>
        </div>
      </div>
      
      {/* Projects Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
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