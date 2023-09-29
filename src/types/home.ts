export interface IChildren {
  children: React.ReactNode;
}
export interface IButton extends IChildren {
  isLarge?: boolean;
}

export interface IClick extends IChildren {
  onClick?: void;
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

export interface ICard {
  heading: string;
  subHeading: string;
  content: string;
  linkText: string;
}
export interface ILogo {
  footer?: boolean;
}
export interface ISectionHeader {
  introText: string;
  heading: string;
  content: string;
  section: number;
}
