import logo from "../../assets/logo-white.png";
import Switch from "../Switch/Switch";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" width={200} />
      <div className="nav__links">
        <div className="nav__link">Home</div>
        <div className="nav__line"></div>
        <div className="nav__link">About</div>
        <div className="nav__line"></div>
        <div className="nav__link">Contact</div>
        <div className="nav__line"></div>
        <div className="nav__link">Projects</div>
      </div>
      <Switch></Switch>
    </nav>
  );
};

export default Nav;
