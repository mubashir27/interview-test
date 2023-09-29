"use client";

// types
import { IChildren } from "../types/home";
// constant pages
import Footer from "./Footer";
import Header from "./Header";
import TopBar from "./TopBar";

export default function MainLayout(props: IChildren) {
  // destructure children properties form props
  const { children } = props;

  return (
    <div>
      <TopBar />
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
