import { CARD_DATA } from "@/src/_mock/constant-data";
import { MaxWidth } from "@/src/components";
import Card from "@/src/components/card";

export default function SectionTwo() {
  return (
    <div className="bg-gray-light-shade dark:bg-transparent py-36 ">
      <MaxWidth>
        <div className="bg-blue-100 w-fit m-auto py-3 px-5">
          <p className="text-blue-600 ">-What We Do-</p>
        </div>
        <div className="text m-auto w-2/4">
          <h1 className="text-2xl font-bold text-gray-dark dark:text-light py-4 m-auto w-max ">
            We’re Offering Diverse Influencer Services
          </h1>
          <p className="text-gray-light dark:text-light text-xl">
            Arabia Talents is an agency that offers 360° marketing and operation
            services to brands seeking to increase their presence in the Arab
            world.
          </p>
        </div>
        <div className="flex justify-around ">
          {CARD_DATA.map((renderCard) => (
            <Card
              heading={renderCard.heading}
              subHeading={renderCard.subHeading}
              content={renderCard.content}
              linkText={renderCard.linkText}
            />
          ))}
        </div>
      </MaxWidth>
    </div>
  );
}
