"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {KumarLogo} from "../KumarLogo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    
    "Our Services",
    "Privacy Policy",
    "Book Apointment",
    "AboutUs",
    "FAQ",
    "Help & Feedback",
    "Log Out",
  ];

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <KumarLogo />
          <Link href="/">
          <p className="font-bold text-inherit">Kumar PolyClinic</p>
          </Link>
         
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="Services">
          Our Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="Appointment" aria-current="page">
          Book Apointment
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="Help">
          Help & Feedback
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
