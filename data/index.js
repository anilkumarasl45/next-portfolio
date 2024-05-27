import { FaHome } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";

export const navItems = [
  { name: "Home", link: "/", icon: <FaHome />},
  { name: "About", link: "#about", icon: <IoMdInformationCircle /> },
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
    id: 1,
    title: "Keeper App - A Note taking App",
    des: "Take important notes with Keeper. Keeper app secures your notes, and removes the hustle of writing.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/mui.svg", "/js.svg", "/ex.svg", "/mdb.svg"],
    link: "https://keeper-app-xi-six.vercel.app",
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
    id: 3,
    title: "React Restaurant - A food ordering app",
    des: "Say goodbye to cravings. React Restaurant provides you dishes from all over the world",
    img: "/p4.png",
    iconLists: ["/re.svg", "/rzp.svg", "/js.svg", "/rem.svg", "/mdb.svg"],
    link: "https://react-restaurant-eta.vercel.app/",
  },
  {
    id: 4,
    title: "Online Bank - A online banking app",
    des: "A demo application of an online bank app, secured by passport.js",
    img: "/p3.png",
    iconLists: ["/ejs.svg", "/ex.svg", "/js.svg", "/ps.svg", "/mdb.svg"],
    link: "https://onlinebank.glitch.me/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/HarshSharmaIN"
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/harshsharmaasl/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/harshsharmaasl/"
  },
];
