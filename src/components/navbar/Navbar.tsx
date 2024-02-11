"use client"

// Navbar.jsx
import Link from 'next/link';
import { navigation } from '@/lib/dataset.json';
import { useState } from "react";
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type Navigation = { title: string; route: string; children?: Navigation[] };

const Navbar = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  let dropdownTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = (nav: Navigation) => {
    setActiveButton(nav.title);

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
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src="/csc-logo.png" alt="CSC Logo" width={38} />
        <span>CSC PNJ</span>
      </div>
      <div className={styles.links}>
        {navigation.map((nav, index) => (
          <div
            key={nav.title}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(nav)}
            onMouseLeave={handleMouseLeave}
          >
            <Link key={index} href={nav.route} className={styles.link}>
              {nav.title} {nav.children ? <FontAwesomeIcon width={12} icon={faChevronDown} /> : null }
            </Link>

            {/* Dropdown menu */}
            {activeButton === nav.title && nav.children && (
              <div className="absolute right-0 mt-2 bg-blue-geo-pattern border rounded-b-lg shadow-md">
                {nav.children.map((child) => (
                  <Link href={child.route} key={child.title}>
                    <div
                      onMouseEnter={() => handleMouseEnter(nav)}
                      style={{ whiteSpace: 'nowrap' }}
                      className='mx-5 my-2'
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
