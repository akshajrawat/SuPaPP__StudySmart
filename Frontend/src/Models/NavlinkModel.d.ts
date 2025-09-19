import type { ReactElement } from "react";

interface DashboardLinkType {
  id: number;
  name: string;
  icon?: ReactElement;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  link?: string;
  title?: string;
  type?: string;
}

interface LandingLinkType {
  id: number;
  name: string;
  icon?: ReactElement;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  title?: string;
  type?: string;
}
