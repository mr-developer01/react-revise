import { LOGO_URL } from "../../utils/constant";
import * as rahul from "./Nav.module.css";
// console.log(rahul);
const Nav = () => {
  const links = ["Home", "About Us", "Offers", "Help"];
  return (
    <div className={rahul.nav}>
      <img className={rahul.navImg} src={LOGO_URL} alt="img" />
      <div className={`${rahul.links} ${rahul.footer}`}>
        {links.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default Nav;
