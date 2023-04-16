import React from "react";
import styles from "@/styles/Home.module.css";
import Projects from "@/views/Projects";
import Header from "@/views/Header";

const index = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Projects />
    </main>
  );
};

export default index;
