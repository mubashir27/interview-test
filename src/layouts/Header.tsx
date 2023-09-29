import { NAV_PAGES } from "../_mock/constant-data";
import { Button, Logo, MaxWidth } from "../components";
import { Ic_Right_Arrow } from "../images";
import { NavPages } from "../pages";

export default function Header() {
  // CONSTANT
  const currentPathname = window.location.pathname;

  return (
    <MaxWidth>
      <div className="flex justify-between items-center py-2">
        <div>
          <h4 className="text-2xl">
            <Logo />
          </h4>
        </div>
        <div className="flex">
          {NAV_PAGES.map((pages) => (
            <NavPages
              text={pages.text}
              route={pages.route}
              currentPage={currentPathname === pages.route}
            />
          ))}
        </div>
        <div className="flex">
          <Button>
            <p>Lets Talk</p> <Ic_Right_Arrow />{" "}
          </Button>
        </div>
      </div>
    </MaxWidth>
  );
}
