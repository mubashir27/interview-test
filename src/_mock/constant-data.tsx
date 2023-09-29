import { FB, LinkedIn, Tictok, Tweet, Youtube } from "../images";

export const NAV_PAGES = [
  { text: "Home", route: "/" },
  { text: "Services", route: "/service" },
  { text: "Talents", route: "/talents" },
  { text: "Case Studies", route: "/case-studies" },
  { text: "About Us", route: "/about" },
  { text: "Branches", route: "/branches" },
];

export const FOOTER_LEFT = {
  TOP: ["Find Talent", "Case Studies"],
  BOTTOM: ["Copyright 2022 Arabia Talents, All rights reserved."],
};

export const FOOTER_RIGHT = {
  TOP: [
    <FB icon_color="white" />,
    <LinkedIn icon_color="white" />,
    <Tictok icon_color="white" />,
    <Tweet icon_color="white" />,
    <Youtube icon_color="white" />,
  ],
  BOTTOM: ["Terms & Conditions", "Privacy Policy"],
};
