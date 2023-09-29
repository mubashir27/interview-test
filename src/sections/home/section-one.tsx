import { DFlex, MaxWidth } from "@/src/components";
import { RightFilledArrow } from "@/src/images";
import Image from "next/image";

export default function SectionOne() {
  return (
    <div className="py-36">
      <MaxWidth>
        <DFlex>
          <Image
            src={"/sideImageSection1.png"}
            alt="side-bar-image"
            width={500}
            height={500}
          />
          <div className="text ml-20 w-2/4">
            <div className="bg-red-light py-3 px-5 w-fit">
              <p className="text-red text-sm font-medium">
                -About Our Company-
              </p>
            </div>
            <h1 className="text-4xl font-bold text-gray-dark dark:text-light py-4 ">
              MENA's Leading ROI-focused Influencer Marketing Agency.
            </h1>
            <p className="text-gray-light dark:text-light text-xl  ">
              Our group of marketing experts will guide your company with clear
              direction and actionable steps to achieve its goals and boost your
              business's growth in the region. This is made possible by
              identifying KPIs, goals, and other requirements that might have
              slipped under your radar. We follow by building you a custom
              marketing campaign meant to improve brand reputation, increase
              brand presence and optimize brand positioning thanks to our
              growing network of influencers. All these campaigns are tracked
              and reported in an honest and transparent way that answers all of
              your burning inquiries.
            </p>
            <button className="text-sm font-bold text-gray-dark dark:text-light py-4 flex items-center  ">
              VIEW OUR SERVICES <RightFilledArrow />
            </button>
          </div>
        </DFlex>
      </MaxWidth>
    </div>
  );
}
