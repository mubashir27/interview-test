import React from "react";
import { IChildren } from "../types/home";

export default function DFlex({ children }: IChildren) {
  return <div className="flex justify-between items-center">{children}</div>;
}
