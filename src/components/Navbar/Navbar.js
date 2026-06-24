"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Activities", link: "/activities" },
    { name: "Mental Health", link: "/activities/mental-health" },
    { name: "Volunteer", link: "/volunteer" },
    { name: "About Us", link: "/about-us" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a
                href="mailto:director@adlifetrust.org.in"
                className="flex items-center gap-2 hover:text-red-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span>director@adlifetrust.org.in</span>
              </a>

              <a
                href="tel:+918019037799"
                className="flex items-center gap-2 hover:text-red-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>+91 8019037799</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/adlifetrust?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500">
                  <Instagram className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/adlife-trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#0A66C2]">
                  <Linkedin className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1B1E5B] text-white shadow-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-[86px]">
            <Link href="/">
              <div className="bg-white rounded-xl p-1.5 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                <Image
                  src="/ad_life_adding_value_to_life_logo.png"
                  alt="AD Life Trust Logo"
                  width={78}
                  height={78}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-2 font-medium">
                {navItems.map(({ name, link }) => (
                  <li key={name}>
                    <Link
                      href={link}
                      className="relative px-3 py-2 text-[15px] hover:text-[#ffb4b7] transition-colors duration-300 group"
                    >
                      {name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E51C23] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href="https://bridge-to-brilliance.register.epravesh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative overflow-hidden bg-gradient-to-r from-[#E51C23] via-[#ff3b42] to-[#c2181e] px-8 py-3 rounded-xl font-bold shadow-[0_10px_30px_rgba(229,28,35,0.45)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>

                  <span className="relative z-10">
                    Register Now
                  </span>

                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-70 animate-ping"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <IconButton onClick={toggleDrawer(true)}>
                <Menu className="text-white" />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: 290 }}>
          <div className="flex items-center justify-between p-5 border-b">
            <h3 className="font-bold text-xl text-[#1B1E5B]">
              Menu
            </h3>

            <IconButton onClick={toggleDrawer(false)}>
              <X className="text-red-500" />
            </IconButton>
          </div>

          <List>
            {navItems.map(({ name, link }) => (
              <ListItem key={name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem className="px-4 mt-3">
              <a
                href="https://bridge-to-brilliance.register.epravesh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#E51C23] via-[#ff3b42] to-[#c2181e] text-white py-3.5 rounded-xl font-bold text-center shadow-xl hover:scale-105 transition-all duration-300"
              >
                Register Now
              </a>
            </ListItem>
          </List>

          <div className="px-6 pt-4 pb-8">
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/adlifetrust?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/adlife-trust/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </Box>
      </Drawer>
    </header>
  );
};

export default Navbar;