import { RightFilledArrow } from "../images";
import { ICard } from "../types/home";

export default function Card(props: ICard) {
  const { heading, subHeading, content, linkText } = props;
  return (
    <div className="bg-white w-96 m-3 p-8 h-96 border-1 rounded-md dark:bg-black-mode ">
      <h1 className="text-3xl font-bold text-gray-dark dark:text-light py-4">
        {heading}
      </h1>
      <div className="flex flex-col justify-between items-start h-3/4">
        <div className="">
          <h4 className="text-2xl text-gray-dark dark:text-light ">
            {subHeading}
          </h4>
          <p className="text-gray-light dark:text-light text-lg">{content}</p>
        </div>
        <button className="flex items-center">
          {linkText} <RightFilledArrow />{" "}
        </button>
      </div>
    </div>
  );
}
