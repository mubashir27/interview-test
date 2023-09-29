// layout with header and footer
import MainLayout from "@/src/layouts/MainLayout";
import SectionOne from "../section-one";

export default function HomeView() {
  return (
    <MainLayout>
      {/* main layout with top bar, header, and footer */}
      <SectionOne />
      <div className="m-3">HomePage</div>
    </MainLayout>
  );
}
