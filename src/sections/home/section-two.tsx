import { CARD_DATA } from "@/src/_mock/constant-data";
import { MaxWidth, SectionHeader, Card } from "@/src/components";

export default function SectionTwo() {
  return (
    <div className="bg-gray-light-shade dark:bg-transparent py-36 ">
      <MaxWidth>
        <SectionHeader
          introText="-What We Do-"
          heading="We’re Offering Diverse Influencer Services"
          content=" Arabia Talents is an agency that offers 360° marketing and operation
            services to brands seeking to increase their presence in the Arab
            world."
          section={2}
        />
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
