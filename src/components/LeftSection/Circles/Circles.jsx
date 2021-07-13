import {BiStats} from "react-icons/bi";
import PropTypes from "prop-types";

function Circles(props) {
    return <div className="App-left-section-circles-container">
        <div className="circles">{props.children}</div>
        <span className="vertical-line"/>
        <div className="container-rating">
            <div className="circle">
                <BiStats color="white" size="1.5rem"/>
            </div>
            <div className="rating-info">
                <h2>85</h2>
                rating
            </div>
        </div>
    </div>;
}

Circles.propTypes = {children: PropTypes.arrayOf(PropTypes.any)};

export default Circles;