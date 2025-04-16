import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserCircleIcon,
  FolderIcon,
  EnvelopeIcon
} from "@heroicons/react/24/solid";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "About",
    href: "/about",
    icon: <UserCircleIcon className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <EnvelopeIcon className="w-6 h-6" />,
  },
];

export default function Navbar() {
  return (
    <nav className="fixed mx-auto left-1/2 -translate-x-1/2 z-50 flex items-center justify-around gap-6 my-4 md:my-8 bg-[#1c1a19] py-2 px-4 md:px-8 rounded-xl shadow-md shadow-white/5">
      {navItems.map(({ label, href, icon }) => (
        <NavLink
          key={label}
          to={href}
          className={({ isActive }) =>
            `group flex flex-col items-center gap-3 p-2 transition-all duration-300 rounded-md ${
              isActive ? "bg-white/10 text-white font-medium border border-white" : "text-gray-400"
            } hover:text-white`
          }
        >
          <div className="flex flex-col items-center relative">
            {icon}
            <span className="text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute top-full mt-1">
              {label}
            </span>
          </div>
        </NavLink>
      ))}
    </nav>
  );
}
