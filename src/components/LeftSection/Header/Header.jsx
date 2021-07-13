import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header className="App-left-section-header">
      <h1 onClick={props.onClick}>
        Flows list{" "}
        {!props.collapsed ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
      </h1>
      <AiOutlineInfoCircle className="App-left-section-header-info-icon" />
    </header>
  );
}

Header.propTypes = {
  onClick: PropTypes.func,
  collapsed: PropTypes.bool,
};

export default Header;
