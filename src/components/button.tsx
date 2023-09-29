import { IButton } from "../types/home";

export default function Button(props: IButton) {
  const { children, isLarge } = props;
  // STYLING
  const buttonClasses = `${isLarge ? "py-3 px-6" : "py-2 px-4"}   `;

  return (
    <button
      className={
        buttonClasses +
        "bg-blue-500 hover:bg-blue-700 text-white font-bold flex justify-center items-center rounded"
      }>
      {children}
    </button>
  );
}
