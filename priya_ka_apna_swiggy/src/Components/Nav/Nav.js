import { LOGO_URL } from "../../utils/constant";
import * as rahul from "./Nav.module.css";
import {useState} from "react"
// console.log(rahul);
const Nav = ({name, age}) => {
  console.log(name,age);
  const [toggle, setToggle] = useState(true)
  const kuchhV = () => {
    setToggle(!toggle);
    console.log(toggle);
  }
  const links = ["Home", "About Us", "Offers", "Help"];
  return (
    <div className={rahul.nav}>
      <img className={rahul.navImg} src={LOGO_URL} alt="img" />
      <div className={`${rahul.links} ${rahul.footer}`}>
        {/* {links.map((item, index) => {
          return <span key={index}>{item}</span>;
        })} */}
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
      </div>
      <button onClick={kuchhV}>{toggle ? "login" : "logout"}</button>
    </div>
  );
};

export default Nav;
