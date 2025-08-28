import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";

export const navItems = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <IoMdInformationCircle /> },
  { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
  { name: "Projects", link: "#projects", icon: <GrProjects /> },
  { name: "Contact", link: "#contact", icon: <MdContacts /> },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on various projects",
    description: "Personal Projects",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 3,
    title: "Prescripto - Full Healthcare System",
    des: "A full Healthcare system, from appointments booking to consultation. Never worry about your health again.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/rzp.png", "/s.svg", "/tail.svg", "/mdb.svg"],
    link: "https://prescripto-griffin.netlify.app/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/s.svg", "/c.svg"],
    link: "https://next-video-taupe.vercel.app/",
  },
  {
    id: 1,
    title: "Keeper App - A Note taking App",
    des: "Take important notes with Keeper. Keeper app secures your notes, and removes the hustle of writing.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg", "/ex.svg", "/mdb.svg"],
    link: "https://keeper-app-xi-six.vercel.app",
  },
  {
    id: 4,
    title: "Store It - A Online Storage App",
    des: "StoreIt Drive is a cloud-based file storage and management app that lets users securely upload, access, and organize their files online. It offers a simple and responsive interface similar to Google Drive for seamless file handling.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/appw.svg", "/tail.svg", "/js.svg"],
    link: "https://storeit-drive.netlify.app/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/HarshSharmaIN",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/harshsharmaasl/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/harshsharmaasl/",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "2023 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
    technologies: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"],
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    duration: "2021 - 2023",
    description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with cross-functional teams.",
    technologies: ["React", "Express", "PostgreSQL", "Docker"],
    type: "work"
  },
  {
    id: 3,
    title: "Frontend Developer Intern",
    company: "StartupXYZ",
    duration: "2020 - 2021",
    description: "Built user interfaces for web applications, learned modern development practices, and contributed to open-source projects.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    type: "internship"
  },
  {
    id: 4,
    title: "Computer Science Degree",
    company: "University of Technology",
    duration: "2017 - 2021",
    description: "Bachelor's degree in Computer Science with focus on software engineering, algorithms, and data structures.",
    technologies: ["Java", "Python", "C++", "Database Systems"],
    type: "education"
  }
];

export const webProjects = [
  {
    id: 3,
    title: "Prescripto - Full Healthcare System",
    des: "A comprehensive healthcare platform enabling appointment booking, patient management, and online consultations with integrated payment processing.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/rzp.png", "/s.svg", "/tail.svg", "/mdb.svg"],
    link: "https://prescripto-griffin.netlify.app/",
    category: "Healthcare",
    features: ["Appointment Booking", "Payment Integration", "Real-time Chat", "Admin Dashboard"]
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Modern video conferencing solution with screen sharing, recording capabilities, and seamless user experience for remote collaboration.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/s.svg", "/c.svg"],
    link: "https://next-video-taupe.vercel.app/",
    category: "Communication",
    features: ["HD Video Calls", "Screen Sharing", "Recording", "Chat Integration"]
  },
  {
    id: 1,
    title: "Keeper App - Note Taking Platform",
    des: "Secure note-taking application with rich text editing, categorization, and cloud synchronization for seamless access across devices.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg", "/ex.svg", "/mdb.svg"],
    link: "https://keeper-app-xi-six.vercel.app",
    category: "Productivity",
    features: ["Rich Text Editor", "Cloud Sync", "Categories", "Search"]
  },
  {
    id: 4,
    title: "Store It - Cloud Storage Solution",
    des: "Comprehensive cloud storage platform with file management, sharing capabilities, and responsive design for optimal user experience.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/appw.svg", "/tail.svg", "/js.svg"],
    link: "https://storeit-drive.netlify.app/",
    category: "Storage",
    features: ["File Upload", "Sharing", "Folder Management", "Preview"]
  }
];

export const appProjects = [
  {
    id: 5,
    title: "FitTracker - Fitness Mobile App",
    des: "Comprehensive fitness tracking application with workout plans, progress monitoring, and social features for motivation.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "#",
    category: "Health & Fitness",
    features: ["Workout Tracking", "Progress Analytics", "Social Features", "Custom Plans"]
  },
  {
    id: 6,
    title: "TaskMaster - Productivity App",
    des: "Advanced task management application with team collaboration, time tracking, and intelligent scheduling features.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "#",
    category: "Productivity",
    features: ["Task Management", "Team Collaboration", "Time Tracking", "Analytics"]
  },
  {
    id: 7,
    title: "EcoTrack - Environmental App",
    des: "Environmental impact tracking application helping users monitor their carbon footprint and adopt sustainable practices.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/mdb.svg"],
    link: "#",
    category: "Environment",
    features: ["Carbon Tracking", "Eco Tips", "Progress Reports", "Community"]
  }
];
