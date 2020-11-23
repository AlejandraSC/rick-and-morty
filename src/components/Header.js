import headerLogo from '../images/headerLogo.png';
import '../stylesheets/header.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={headerLogo} alt="Rick and Morty logo" className="header__logo" />
    </div>
  );
};

export default Header;
