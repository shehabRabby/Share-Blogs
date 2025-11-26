import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2025 StoryNest. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={25} height={25} className={styles.icon} alt="Shere nest" />
        <Image src="/2.png" width={25} height={25} className={styles.icon} alt="Shere nest" />
        <Image src="/3.png" width={25} height={25} className={styles.icon} alt="Shere nest" />
        <Image src="/4.png" width={25} height={25} className={styles.icon} alt="Shere nest" />
      </div>
    </div>
  );
};

export default Footer;