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
    title: <h2>JustDoc</h2>,
    description: (
      <p>
        Monitored production effectiveness and identified areas for improvement
        to increase productivity and streamline processes. I collaborated with
        cross-functional teams to implement solutions and improve system
        efficiency, using my analytical skills and attention to detail to
        quickly identify and resolve issues.{" "}
      </p>
    ),
    image: (
      <Image
        src="/justdoc.png"
        alt="Vercel Logo"
        width={200}
        height={200}
        priority
      />
    ),
  },
  {
    title: <h2>Netmeds</h2>,
    description: (
      <p>
        Developed and maintained key features such as Algolia Search, Available
        Slots, and Order Status Tracking for multiple lab aggregators. Achieved
        this by integrating new APIs and implementing an efficient operation
        flow in the backend using Node.js and AngularJS.
      </p>
    ),
    image: (
      <Image
        src="/netmeds.jpeg"
        alt="Vercel Logo"
        width={200}
        height={200}
        priority
      />
    ),
  },
  {
    title: <h2>DoctorOnCall</h2>,
    description: (
      <p>
        Improved the system's efficiency and execution time by integrating a
        logical module that handles user customizations and implementing
        Sequelize in NodeJS. Also, successfully reduced security bugs in legacy
        code by 60% through revamping.
      </p>
    ),
    image: (
      <Image
        src="/doctoroncall.jpeg"
        alt="Vercel Logo"
        width={200}
        height={200}
        priority
      />
    ),
  },
  {
    title: <h2>Tech Agrim</h2>,
    description: (
      <p>
        Creating a security-based product using the PERN stack.My role includes
        developing and maintaining the backend infrastructure using Node.js and
        Express.js, creating responsive user interfaces using NextJs, and
        managing the PostgreSQL database. 
      </p>
    ),
    image: (
      <Image
        src="/agrim.png"
        alt="Vercel Logo"
        width={200}
        height={200}
        priority
      />
    ),
  },
];
const Experience = () => {
  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      <Box sx={{ textAlign: "center", m: "10% 0 5% 0" }}>
        <Typography variant="body2">EXPERIENCE</Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Career Highlights
        </Typography>
      </Box>
      <Grid container spacing={2} className="container-size">
        {gridItems.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ background: "white", textAlign: "center" }}>
              <Card className={styles.card}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Box style={{ minWidth: "20px" }}>{item.image}</Box>
                  {item.title}
                  {item.description}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
