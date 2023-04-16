import React from "react";
import styles from "@/styles/Home.module.css";
import { Grid, Box, Button } from "@mui/material";

const Footer = () => {
  return (
    <Grid className="footer">
      <Box className={styles.new_footer_top}>
        <Grid container spacing={2} sx={{ ml: "2%", fontFamily: "sans-serif", display:'flex', justifyContent:'flex-end' }}>
          <Grid item xs={12} md={4}>
            <h3 className={styles.footer_title}>For More details</h3>
            <Button variant="contained" color="secondary">
              <a href="mailto:saranyasasikumar06@gmail.com">Email me</a>
            </Button>
          </Grid>
        </Grid>
        <Box className={styles.footer_bg}>
          <Box className={styles.footer_bg_one}></Box>
          <Box className={styles.footer_bg_two}></Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;
