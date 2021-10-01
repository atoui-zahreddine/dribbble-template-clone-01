import Logo from "../../assets/logo.png";
import Nav from "../Nav/Nav";
import "./Header.css";
import ProfileImg from "../ProfileImg/ProfileImg";


function Header() {
    return (
        <header className="App-header">
            <img className="App-header-logo" src={Logo} alt="logo-img"/>
            <Nav/>
            <ProfileImg style={{width: "55px", height: "55px"}}/>
        </header>
    );
}

export default Header;
