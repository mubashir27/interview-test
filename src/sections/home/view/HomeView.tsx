// layout with header and footer
import MainLayout from "@/src/layouts/MainLayout";
import SectionOne from "../section-one";
import SectionTwo from "../section-two";

export default function HomeView() {
  return (
    <MainLayout>
      {/* main layout with top bar, header, and footer */}
      <SectionOne />
      <SectionTwo />
      <div className="m-3">HomePage</div>
    </MainLayout>
  );
}
