import { ISvg } from "@/src/types/home";

export const FB = ({ icon_color }: ISvg) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.1642 17.4975V10.6675H13.4683L13.8108 7.99334H11.1642V6.29C11.1642 5.51834 11.3792 4.99 12.4867 4.99H13.89V2.60584C13.2072 2.53266 12.5209 2.49733 11.8342 2.5C9.79749 2.5 8.39915 3.74334 8.39915 6.02584V7.98834H6.10999V10.6625H8.40415V17.4975H11.1642Z"
        fill={icon_color || "#6E7CA0"}
      />
    </svg>
  );
};
