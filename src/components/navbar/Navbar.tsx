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
  const [activeButton, setActiveButton] = useState < string | null > (null);
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
              {nav.title} {nav.children? <FontAwesomeIcon icon={faChevronDown} /> : null}
            </Link>

            {/* Dropdown menu */}
            {activeButton === nav.title && nav.children && (
              <div className="absolute right-0 mt-2 bg-blue-geo-pattern border divide-y rounded-b-lg shadow-md">
                {nav.children.map((child) => (
                  <div
                    key={child.title}
                    onMouseEnter={() => handleMouseEnter(nav)}
                    style={{ whiteSpace: 'nowrap' }}
                    className='px-5 py-2'
                  >
                    <Link href={child.route}>
                      {child.title}
                    </Link>
                  </div>
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
