// Navbar.jsx
import Link from 'next/link';
import { navigation } from '../../lib/dataset.json';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src="/csc-logo.png" alt="CSC Logo" width={40} />
        <span>CSC PNJ</span>
      </div>
      <div className={styles.links}>
        {navigation.map((nav, index) => (
          <Link key={index} href={nav.destination} className={styles.link}>
            {nav.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
