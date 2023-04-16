import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Lottie from "lottie-react";
import frontend from "@/assets/images/frontend.json";
import backend from "@/assets/images/backend.json";
import database from "@/assets/images/database.json";

const inter = Inter({ subsets: ["latin"] });

const gridItems = [
  {
    title: <h2>React Portfolio</h2>,
    description: (
      <p>
        This is a simple React portfolio with three pages - a home page, an
        about me page, and a projects page. The home page introduces the
        portfolio owner and highlights the skills, while the about me page
        includes the experience. The projects page showcases a list of projects.
        The portfolio design is minimalistic and clean, with a simple color
        scheme. It is built using React components and styled using CSS.
      </p>
    ),
    image: (
      <Image
        src="/react.png"
        alt="Vercel Logo"
        width={500}
        height={250}
        className={styles.projects_image}
        priority
      />
    ),
    link: "https://saranya-s-workspace.web.app/",
  },
  {
    title: <h2>Angular- First Project</h2>,
    description: (
      <p>
        As a learning project, I built a basic landing page using Angular 8
        along time ago. The login page features Google SSO integration for
        secure access, and the landing page provides an overview of the
        website&rsquo;s purpose and features. The blog page is a skeleton template for
        future content. The design is intentionally simple, using basic CSS and
        a minimalist layout with no fancy animations.
      </p>
    ),
    image: (
      <Image
        src="/angular.png"
        alt="Vercel Logo"
        width={500}
        height={250}
        className={styles.projects_image}
        priority
      />
    ),
    link: "https://saranyasasikumar.web.app",
  },
];

const handleBoxClick = (link: any) => {
  window.open(link, "_blank");
};
const Projects = () => {
  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      <Box sx={{ textAlign: "center", m: "10% 0 5% 0" }}>
        <Typography variant="body2">PROJECTS</Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Featured Works
        </Typography>
        (In-progress)
      </Box>
      <Grid container spacing={2} className="container-size">
        {gridItems.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                background: "white",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={(e: any) => handleBoxClick(item.link)}
            >
              <Card className={styles.card}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Box style={{ minWidth: "20px", marginTop: 3 }}>
                    {item.image}
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    {item.title}
                    {item.description}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
        <Grid sx={{ m: 7 }}>adding more soon....</Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
