import type { ReactElement } from "react";

export interface NavLinkType {
  id: number;
  name: string;
  icon?: ReactElement;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  link?: string;
  title?: string;
  type?: string;
}
