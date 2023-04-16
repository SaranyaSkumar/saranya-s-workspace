import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";


const Header = () => {
  const isMobile = useMediaQuery("(max-width: 960px)");
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState("navbar");

  const reset = (nav: any) => {
    setNav(nav);
    setToggle(!toggle);
  };

  const navLinks = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "About", path: "/about", icon: <PersonIcon /> },
    { title: "Projects", path: "/projects", icon: <AccountTreeIcon /> },
  ];

  const navLinksList = (
    <List>
      {navLinks.map((link) => (
        <Link href={link.path} key={link.title}>
          <ListItem button onClick={() => reset("navbar")}>
            <ListItemText primary={link.title} />
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <div className={styles.description}>
      {isMobile ? (
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navLinks.map((item) => (
            <Button key={item.title} sx={{ color: "black", m: "0px 3%" }}>
              <Link href={item.path} key={item.title}>
                {item.icon}
              </Link>
            </Button>
          ))}
        </Box>
      ) : (
        <>
          <div>
            <a
              // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={150}
                height={150}
                priority
              />
            </a>
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button key={item.title} sx={{ color: "black", m: 3 }}>
                <Link href={item.path} key={item.title}>
                  {item.title}
                </Link>
              </Button>
            ))}
          </Box>
        </>
      )}

      <Drawer anchor="right" open={toggle} onClose={() => reset("navbar")}>
        {navLinksList}
      </Drawer>
    </div>
  );
};

export default Header;
