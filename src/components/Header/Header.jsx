import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <Nav></Nav>
      <div className="header__content">
        <h1 className="header__title">
          Hello, I'm <span className="header__name">Owen Patterson</span>
        </h1>
        <h2 className="header__subtitle">React.js Developer</h2>
      </div>
    </header>
  );
};

export default Header;
