"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  Phone,
  ChevronRight,
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
    { name: "Humanitarian Efforts", link: "/activities" },
    { name: "Volunteer", link: "/volunteer" },
    { name: "Mentorship", link: "/mentees" },
    { name: "Information ", link: "/information " },
  ];

const toggleDrawer = (open) => () => {
  setDrawerOpen(open);
};


  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs md:text-sm py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
            <span>info@example.org</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
            <span>+91-9876543210</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#1B1E5B] text-white py-3 shadow-lg">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-md">
            <Image
              src="/logo.png"
              alt="AD Trust Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <span className="font-bold text-xl text-[#1B1E5B] hidden sm:block">
              Life
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1 items-center font-medium">
              {navItems.map(({ name, link }) => (
                <li key={name} className="px-3 py-2">
                  <Link href={link} className="hover:text-[#E51C23] transition-colors duration-200 relative group">
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E51C23] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="ml-6">
              <Link href="/donate">
                <button className="bg-gradient-to-r from-[#E51C23] to-[#c2181e] text-white px-6 py-2 rounded-md font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-red-500/30 flex items-center space-x-2">
                  <span>Donate Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <IconButton onClick={toggleDrawer(true)} aria-label="Open Menu">
              <Menu className="text-white" />
            </IconButton>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260 }} role="presentation">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="font-bold text-lg text-[#1B1E5B]">Menu</span>
            <IconButton onClick={toggleDrawer(false)}>
              <X className="text-red-500" />
            </IconButton>
          </div>
          <List>
            {navItems.map(({ name, link }) => (
              <ListItem key={name} disablePadding>
                <ListItemButton onClick={toggleDrawer(false)} component={Link} href={link}>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem className="mt-2 px-4">
              <Link href="/donate" className="w-full">
                <button
                  onClick={toggleDrawer(false)}
                  className="w-full bg-gradient-to-r from-[#E51C23] to-[#c2181e] text-white py-3 rounded-md font-semibold hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Donate Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

export default Navbar;
