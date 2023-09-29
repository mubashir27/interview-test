import { IChildren } from "../types/home";

export default function MaxWidth(props: IChildren) {
  const { children } = props;
  return <main className="max-w-screen-xl m-auto">{children}</main>;
}
