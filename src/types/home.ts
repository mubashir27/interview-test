export interface IChildren {
  children: React.ReactNode;
}
export interface IButton extends IChildren {
  isLarge?: boolean;
}
// header nav interface
export interface IHeaderNav {
  text: string;
  route: string;
  currentPage?: boolean;
}

export interface IFooter {
  dataToDisplay: { TOP: []; BOTTOM: [] };
}
export interface ISvg {
  icon_color?: string;
}
export interface ILogo {
  footer?: boolean;
}
