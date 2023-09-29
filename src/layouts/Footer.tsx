import { FOOTER_LEFT, FOOTER_RIGHT } from "../_mock/constant-data";
import { Logo, MaxWidth } from "../components";
import { FooterSection } from "../sections";

export default function Footer() {
  return (
    <main className="bg-dark">
      <MaxWidth>
        <div className="flex justify-around items-center">
          <div className="">
            <FooterSection dataToDisplay={FOOTER_LEFT} />
          </div>
          <Logo footer />
          <div className="">
            <FooterSection dataToDisplay={FOOTER_RIGHT} />
          </div>
        </div>
      </MaxWidth>
    </main>
  );
}
