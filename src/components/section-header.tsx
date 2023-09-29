import { ISectionHeader } from "../types/home";

export default function SectionHeader(props: ISectionHeader) {
  const { introText, heading, content, section } = props;

  // CONSTANTS
  const colorCategoryBg = `${section === 2 ? "bg-blue-100" : "bg-blue-200"}`;
  const colorCategoryText = section === 2 ? "text-blue-600" : "text-white";

  return (
    <>
      <div className={colorCategoryBg + " w-fit m-auto py-3 px-5"}>
        <p className={colorCategoryText}>{introText}</p>
      </div>
      <div className="text m-auto w-2/4">
        <h1 className="text-2xl font-bold text-gray-dark dark:text-light py-4 m-auto w-max ">
          {heading}
        </h1>
        <p className="text-gray-light dark:text-light text-xl">{content}</p>
      </div>
    </>
  );
}
