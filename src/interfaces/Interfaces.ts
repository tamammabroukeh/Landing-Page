import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes: string;
  children: ReactNode;
}
export interface ILink {
  id?: string | undefined;
  to: string;
  title: string;
  classes?: string;
}
export interface ILinks {
  links: ILink[];
  classes: string;
}
export interface IMenuState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}
export interface IParagraph {
  classes: string;
  title: string;
}
export interface IHeadingTwo {
  classes: string;
  title?: string;
  children?: ReactNode;
}
export interface IBlogging {
  id: string;
  title: string;
  description: string;
}
export interface IFooter {
  id: string;
  parent: string;
  children: string[];
}
export interface IImage {
  ImageURL: string;
  altText: string;
  classes?: string;
}
export interface IColor extends HTMLAttributes<HTMLSpanElement> {
  classes: string;
  title: string;
}
export interface ITestimonials {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
}
