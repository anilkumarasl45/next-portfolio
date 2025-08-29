"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { FaBars, FaTimes } from "react-icons/fa";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed z-[5000] top-4 inset-x-0 mx-auto px-4 md:px-10",
          className
        )}
      >
        {/* Desktop Navigation */}
        <div
          className="hidden md:flex max-w-fit mx-auto py-4 px-8 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-6"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-200"
            >
              <span className="text-sm !cursor-pointer font-medium">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <div
            className="flex justify-end"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.75)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-white hover:text-purple transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="mt-2 py-4 px-6 rounded-lg border border-white/[0.1] shadow-lg"
                style={{
                  backdropFilter: "blur(16px) saturate(180%)",
                  backgroundColor: "rgba(17, 25, 40, 0.9)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`mobile-link=${idx}`}
                      href={navItem.link}
                      onClick={handleNavClick}
                      className="text-white hover:text-purple transition-colors duration-200 text-center py-2"
                    >
                      <span className="text-sm font-medium">
                        {navItem.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};