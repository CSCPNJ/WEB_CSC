"use client"

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const userLanguage = window.navigator.language;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/csc-logo.png" alt="CSC Logo" width={50} height={50} />
          <h1 className={styles.logoText}>CSC PNJ</h1>
        </div>
        <p className={styles.desc}>
        Computer Student Club (CSC) adalah sebuah Kelompok Studi Mahasiswa yang didirikan oleh para mahasiswa TIK yang berfokus pada pengembangan teknologi, khususnya di bidang keamanan jaringan, pengembangan perangkat lunak, dan pengembangan perangkat keras, dengan dukungan dari Cisco Netacad ID.
        </p>
        <span>
          ©{new Date().getFullYear()} CSC PNJ
        </span>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.linkedin.com/company/computer-student-club/">LinkedIn</Link>
          <Link href="http://instagram.com/cscpnj">Instagram</Link>
          <Link href="mailto:csc.pnj@gmail.com">Email</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
