import "./ProfileImg.css"

function ProfileImg(props) {
    return <div style={props.style} >
        <img className="App-header-profile-img" src={`https://randomuser.me/api/portraits/med/men/${Math.round(Math.random()*100)}.jpg`} alt="profile-img"/>
    </div>;
}

export default ProfileImg;