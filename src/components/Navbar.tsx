'use client'
// Import necessary libraries and components
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

// Types for navigation
type Navigation = { title: string; route: string; children?: Navigation[] };
type NavChildren = Pick<Navigation, 'title' | 'route' >

// Navigation data
export const EventList: NavChildren[] = [
  {
    title: "CSC Farewell 2022/2023",
    route: "/csc-farewell-2022-2023",
  },
];

export const DivisionList: NavChildren[] = [
  {
    title: "Cyber Security",
    route: "/cyber-security"
  },
  {
    title: "Software Development",
    route: "/softdev"
  },
  {
    title: "Explore",
    route: "/explore"
  },
];

export const NavLinks: Navigation[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Join Us",
    route: "/join-us",
  },
  {
    title: "About Us",
    route: "/about-us",
  },
  {
    title: "Events",
    route: "/events",
    children: EventList
  },
  {
    title: "FAQ",
    route: "/faq",
  },
  {
    title: "Contact Us",
    route: "/contact-us",
  },
  {
    title: "Divisi",
    route: "/lainnya",
    children: DivisionList
  },
  {
    title: "Activities",
    route: "/activities",
  },
];

export default function Navbar() {
  // State to manage dropdown visibility
  const [activeButton, setActiveButton] = useState<string | null>(null);
  let dropdownTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = (navLink: Navigation) => {
    setActiveButton(navLink.title);

    // Clear any existing timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
  };

  const handleMouseLeave = () => {
    // Set a timeout before hiding the dropdown
    dropdownTimeout = setTimeout(() => {
      setActiveButton(null);
    }, 500); // Adjust the delay (in milliseconds) as needed
  };

  return (
    <nav>
      <div className="flex justify-center space-x-4 mb-3">
        {NavLinks.map((navLink) => (
          <div
            key={navLink.title}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(navLink)}
            onMouseLeave={handleMouseLeave}
          >
            <Button variant='ghost' style={activeButton === navLink.title ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}}>
              <Link href={navLink.route}>
                {navLink.title}
              </Link>
            </Button>

            {/* Dropdown menu */}
            {activeButton === navLink.title && navLink.children && (
              <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-md p-2">
                {navLink.children.map((childLink) => (
                  <Button
                    key={childLink.title}
                    variant='ghost'
                    onMouseEnter={() => handleMouseEnter(navLink)}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <Link href={childLink.route}>
                      {childLink.title}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}