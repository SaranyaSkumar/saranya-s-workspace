import About from "@/views/About";
import Experience from "@/views/Experience";
import React from "react";
import styles from "@/styles/Home.module.css";
import Header from "@/views/Header";

const index = () => {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Experience />
    </main>
  );
};

export default index;
