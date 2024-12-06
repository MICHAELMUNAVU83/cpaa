import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      children: [
        { label: "What We Stand For", path: "/" },
        { label: "What We Do", path: "/what-we-do" },
        { label: "Why Join CPAA", path: "/why-join" },
        { label: "Upcoming Events", path: "/events" },
        { label: "Our Impact", path: "/impact" },
        { label: "Our Team", path: "/team" },
      ],
    },
    {
      label: "About Us",
      children: [
        { label: "Who We Are", path: "/about" },
        { label: "Our Vision", path: "/about" },
        { label: "Our Mission", path: "/about" },
        { label: "Our Values", path: "/about" },
        { label: "Our Work", path: "/about" },
      ],
    },
    {
      label: "Programs",
      children: [
        { label: "Consciousness Building", path: "/programs" },
        { label: "Strategic Interventions", path: "/programs" },
        { label: "Become A Member", path: "/programs" },
      ],
    },
    {
      label: "Contact Us",
      children: [{ label: "Talk to us", path: "/contact" }],
    },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[80%] mx-auto px-4">
        <div className="flex justify-between items-center">
          <img
            src="/Center for Pan African Affairs. Logo.jpeg"
            alt="CPAA Logo"
            className="w-24 object-cover"
          />

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
              >
                <button className="font-semibold text-[18px] hover:text-red-600">
                  {item.label}
                </button>

                {hovered === index && item.children.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-8 left-0 bg-white shadow-lg rounded-xl w-[450px] z-20"
                  >
                    <ul className="grid grid-cols-2 gap-4 p-8 border border-gray-200 rounded-md">
                      {item.children.map((child, childIndex) => (
                        <li
                          key={childIndex}
                          className="border-2 border-red-300 rounded-xl"
                        >
                          <a
                            href={child.path}
                            className="block p-4 text-[12px] font-normal hover:bg-gray-100 rounded"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex">
            <a
              href="/donate"
              className="px-8 py-4 text-white bg-black rounded-xl text-16px[] shadow hover:bg-red-600 transition"
            >
              Donate
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <ul className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setHovered(index === hovered ? null : index)}
                    className="block w-full text-left py-2 font-semibold"
                  >
                    {item.label}
                  </button>
                  {hovered === index && item.children.length > 0 && (
                    <ul className="pl-4 pt-2 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a href={child.path} className="block text-sm">
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li>
                <a
                  href="/donate"
                  className="block w-full text-center py-2 text-white bg-black rounded-lg shadow hover:bg-red-600 transition"
                >
                  Donate
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
