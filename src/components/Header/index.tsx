import logo from '../../assets/logo.svg';
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo BeTalent" className="logo" />
      </div>
    </header>
  );
};

export default Header;
