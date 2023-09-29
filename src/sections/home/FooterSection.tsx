import { IFooter } from "@/src/types/home";

export default function FooterSection(props: IFooter) {
  const { dataToDisplay } = props;
  return (
    <div className="">
      <div className="flex justify-center items-center  w-auto">
        {dataToDisplay?.TOP.map((items) => (
          <p className="p-2 text-white ">{items}</p>
        ))}
      </div>
      <hr className="text-[#BDBDBD]" />
      <div className="flex justify-between items-center">
        {dataToDisplay?.BOTTOM.map((items) => (
          <p className="p-2 text-white ">{items}</p>
        ))}
      </div>
    </div>
  );
}
