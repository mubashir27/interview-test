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

export const CARD_DATA = [
  {
    heading: "01",
    subHeading: "Influencer Marketing",
    content:
      "We have the right knowledge, tools, and expertise to help your company succeed in influencer marketing campaigns.",
    linkText: "LEARN MORE",
  },
  {
    heading: "02",
    subHeading: "Talent Management",
    content:
      "We can help turn your dreams into a long-term, full-time career, filled with endless opportunities that will provide you with a lucrative income and stability.",
    linkText: "LEARN MORE",
  },
  {
    heading: "03",
    subHeading: "Celebrity Collaboration",
    content:
      "We are an authentic Celebrity Influencer Marketing agency specialise in matching brands with the Arab world’s top influencers and celebrities.",
    linkText: "LEARN MORE",
  },
];
