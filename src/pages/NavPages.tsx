import Link from "next/link";
import { IHeaderNav } from "@/src/types/home";

export default function NavPages(props: IHeaderNav) {
  const { text, route, currentPage } = props;
  // STYLING
  const underlineStyling = ` ${currentPage && "text-blue-300"}  `;
  return (
    <Link
      href={route}
      className={
        " no-underline decoration-5 decoration-blue text-gray-dark dark:text-light no-underline hover:underline px-4"
      }>
      <p className={underlineStyling}>{text}</p>
    </Link>
  );
}
