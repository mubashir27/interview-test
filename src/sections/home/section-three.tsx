import { MaxWidth, SectionHeader } from "@/src/components";
import Slider from "@/src/layouts/slider";

export default function SectionThree() {
  return (
    <div className="bg-yellow dark:bg-transparent py-36">
      <MaxWidth>
        <SectionHeader
          introText="-Case Studies-"
          heading="Best Work Showcase"
          content="Driven by our passion for the industry, and our team’s, Arabia Talents have created some of the most engaging influencer campaigns in gaming, sports, technology and more."
          section={3}
        />
        {/* Slider */}
        {/* multiple images side arrows bottom buttons */}
        <Slider />
      </MaxWidth>
    </div>
  );
}
