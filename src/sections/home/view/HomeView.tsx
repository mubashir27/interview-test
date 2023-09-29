// layout with header and footer
import MainLayout from "@/src/layouts/MainLayout";
import SectionOne from "../section-one";
import SectionTwo from "../section-two";
import SectionThree from "../section-three";

export default function HomeView() {
  return (
    <MainLayout>
      {/* main layout with top bar, header, and footer */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <div className="m-3">HomePage</div>
    </MainLayout>
  );
}
