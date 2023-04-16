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
    title: <h2>Front End Development</h2>,
    description: (
      <p>
        Expertise in creating websites using HTML/CSS and JavaScript frameworks
        to enable seamless user interaction with the system.
      </p>
    ),
    animation: <Lottie animationData={frontend} height={140} width={140} />,
  },
  {
    title: <h2>Back End Development</h2>,
    description: (
      <p>
        Developing the logic as per the requirement, managing the server and
        building & maintaining APIs in Node.js.
      </p>
    ),
    animation: <Lottie animationData={backend} height={140} width={140} />,
  },
  {
    title: <h2>Database Management</h2>,
    description: (
      <p>
        Proficient in managing databases, ensuring data integrity and optimizing
        performance for scalability.
      </p>
    ),
    animation: <Lottie animationData={database} height={140} width={140} />,
  },
];
const Skills = () => {
  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      <Box sx={{ textAlign: "center", m: "10% 0 5% 0" }}>
        <Typography variant="body2">WHAT I DO</Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Skills and Experience
        </Typography>
      </Box>
      <Grid container spacing={2} className="container-size">
        {gridItems.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className={styles.card}>
              <CardContent sx={{ textAlign: "center" }}>
                <Box style={{ maxWidth: "400px", minWidth: "20px" }}>
                  {item.animation}
                </Box>
                {item.title}
                {item.description}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
