import { ISvg } from "@/src/types/home";

export const RightFilledArrow = ({ icon_color }: ISvg) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.3461 15.5666L12.0211 12.8916L13.6628 11.2583C14.3544 10.5666 14.3544 9.44164 13.6628 8.74998L9.3461 4.43331C8.77944 3.86664 7.81277 4.27498 7.81277 5.06664V9.74164L7.81277 14.9333C7.81277 15.7333 8.77944 16.1333 9.3461 15.5666Z"
        fill={icon_color || "#2D3958"}
      />
    </svg>
  );
};
