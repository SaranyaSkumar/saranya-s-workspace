import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import profile from "@/assets/images/profile.json";

const MainBanner = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");

  const [text, setText] = useState(" ");
  const sentenceToType =
    " with a fun mind and trying to find a space in the internet world";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const nextChar = sentenceToType.charAt(text.length);
      setText((prevText) => prevText + nextChar);
      if (text.length === sentenceToType.length) {
        setText("");
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <Grid container spacing={3} className={styles.section}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{  mt: isMobile ? "6rem" : "2rem" }}
        >
          <Typography>Hi, I&rsquo;m</Typography>
          <Typography sx={{ fontSize: "50px" }} variant="h1">
            Saranya S Kumar
          </Typography>
          <Box>
            <Typography variant="body1" sx={{ fontFamily: "monospace" }}>
              I&rsquo;m a fullstack javascript developer
            </Typography>
            <Typography
              variant="subtitle1"
              className="typing-text"
              sx={{ fontFamily: "monospace" }}
            >
              {text ? text : " "}
            </Typography>
          </Box>

          <h1>
            <Grid container spacing={6} sx={{ mt: '4px' }}>
              <Grid item>
                <a href="https://github.com/SaranyaSkumar" target="_blank">
                  <FontAwesomeIcon
                    className="social-icon main"
                    icon={faGithub}
                  />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/saranya-s-kumar/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-icon main"
                    icon={faLinkedin}
                  />
                </a>
              </Grid>
              <Grid item>
                <a href="https://twitter.com/SaranyaSKumar06" target="_blank">
                  <FontAwesomeIcon
                    className="social-icon main"
                    icon={faTwitter}
                  />
                </a>
              </Grid>
              <Grid item>
                <a href="https://medium.com/@saranyasasikumar06" target="_blank">
                  <FontAwesomeIcon
                    className="social-icon main"
                    icon={faMedium}
                  />
                </a>
              </Grid>
            </Grid>
          </h1>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} className='container-size'>
        <Box sx={{ transform: "scaleX(-1)" }}>
          <Lottie animationData={profile} style={{ transform: "scale(1.2)" }}/>
        </Box>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />{" "} */}
      </Grid>
    </Grid>
  );
};

export default MainBanner;
