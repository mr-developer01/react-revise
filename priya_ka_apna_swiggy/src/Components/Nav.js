import {LOGO_URL} from "../utils/constant";
const Nav = () => {
    const links = ["Home", "About Us", "Offers", "Help"];
    return (
      <div className="nav">
        <img
          src={LOGO_URL}
          alt="logo"
        />
        <div className="links">
          {links.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </div>
    );
  };

//   Named export
  const r = "Rahul"
  const p = "Priya"

  export {r, p}

  export default Nav;