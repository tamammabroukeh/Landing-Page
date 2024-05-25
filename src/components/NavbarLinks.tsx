import CustomLink from "./CustomLink";
import { ILinks } from "../interfaces/Interfaces";
const NavbarLinks = ({ classes, links }: ILinks) => {
  return links.map((link) => {
    return <CustomLink {...link} classes={classes} />;
  });
};

export default NavbarLinks;
