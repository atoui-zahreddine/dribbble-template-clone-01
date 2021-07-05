import Logo from "../../assets/logo.png";
import Nav from "../Nav/Nav";
import ProfileImg from "../../assets/profile-logo.png";

function Header() {
  return (
    <header className="App-header">
      <img className="App-header-logo" src={Logo} alt="logo-img" />
      <Nav />
      <img src={ProfileImg} alt="" />
    </header>
  );
}

export default Header;
