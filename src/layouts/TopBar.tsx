import { ThemeSwitcher } from "../theme";
import { ICON_BUTTON } from "../_mock/app-bar-data";
import { MaxWidth } from "../components";
import { Ic_down, Ic_world } from "../images";

export default function TopBar() {
  return (
    <main className="bg-gray h-12 ">
      <MaxWidth>
        <div className="flex justify-between py-2">
          <div className="flex">
            <button className="flex items-center ">
              <Ic_world />
              <p className="text-gray-dark mx-1">English</p>
              <Ic_down />
            </button>
          </div>
          <div className="flex">
            <ThemeSwitcher />
          </div>
          <div className="flex">
            {ICON_BUTTON.map((icons) => (
              <button className="my-2">{icons}</button>
            ))}
          </div>
        </div>
      </MaxWidth>
    </main>
  );
}
