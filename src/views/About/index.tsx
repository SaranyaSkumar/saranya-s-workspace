import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  Grid,
  Box,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      <Box sx={{ textAlign: "center", m: "10% 0 5% 0" }}>
        <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
          About Me
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Get to know me better!
        </Typography>
      </Box>
      <Grid container spacing={2} className="container-size">
        <Grid item xs={12} md={6} sx={{textAlign:'center'}}>
          <Image
            src="/Image.jpeg"
            alt="Image"
            className={styles.pic}
            width={500}
            height={500}
            priority
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{mt: '2%'}}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            👋 Hi there! I&rsquo;m a fullstack developer with almost 5 years of
            experience. 🎓 Graduated from College of Engineering Munnar with a
            B.Tech in Computer Science and Engineering, and started my journey
            as an operation analyst at JustDoc, which was later acquired by
            Netmeds where I worked as a software engineer. 💻 I learned a lot
            about Node.js and AngularJS from the amazing team there, from the
            basics of buttons to server management.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            🚀Later, I joined Turing Test as a fullstack developer and
            thoroughly enjoyed building exciting projects that helped me hone my
            software engineering skills even further. Then I joined
            DoctorOnCall, a Malaysian-based company, where I not only sharpened
            my software engineering skills but also developed leadership skills.
            💪 Finally, I landed at TechAgrim, where I am enjoying every bit of
            building applications using the Node.js and Next.js stack.
          </Typography>
          <Typography variant="body1">
            👨‍💻 Besides these experiences, I have skills in frontend technologies
            like React.js and Angular, database management using PostgreSQL and
            MongoDB, and cloud services like AWS and GCP. I love coding,
            exploring new technologies, and writing about them on Medium and
            Blogger. 📝 When I&rsquo;m not coding, you can find me hanging out with
            friends, enjoying good food, and binge-watching Netflix to cheer
            myself up. 🍔🍕🍟🍿
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
