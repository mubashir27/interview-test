import { ISvg } from "@/src/types/home";

export const Tictok = ({ icon_color }: ISvg) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 9.03334V6.66667C14.8917 6.66667 14.0458 6.37084 13.5 5.79584C12.9398 5.13961 12.6259 4.30857 12.6125 3.44584V3.27501L10.375 3.22084V12.8333C10.2982 13.2527 10.0947 13.6385 9.79173 13.9385C9.48879 14.2386 9.1011 14.4384 8.68098 14.5111C8.26086 14.5838 7.82854 14.5259 7.4424 14.3451C7.05625 14.1643 6.73487 13.8694 6.52163 13.5002C6.3084 13.131 6.21358 12.7053 6.24997 12.2805C6.28637 11.8556 6.45223 11.4522 6.72517 11.1247C6.9981 10.7971 7.36497 10.5612 7.77624 10.4487C8.1875 10.3363 8.62337 10.3527 9.025 10.4958V8.20417C8.79083 8.1658 8.55396 8.1463 8.31667 8.14584C7.46291 8.14584 6.62833 8.39901 5.91846 8.87333C5.20858 9.34765 4.65531 10.0218 4.32859 10.8106C4.00187 11.5994 3.91639 12.4673 4.08295 13.3046C4.24951 14.142 4.66063 14.9112 5.26432 15.5149C5.86802 16.1185 6.63718 16.5297 7.47453 16.6962C8.31188 16.8628 9.17982 16.7773 9.96859 16.4506C10.7574 16.1239 11.4315 15.5706 11.9058 14.8607C12.3802 14.1508 12.6333 13.3163 12.6333 12.4625C12.6329 12.2856 12.6217 12.1089 12.6 11.9333V8.12084C13.6174 8.75623 14.8012 9.07393 16 9.03334Z"
        fill={icon_color || "#6E7CA0"}
      />
    </svg>
  );
};