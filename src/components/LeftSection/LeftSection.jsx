import { useMemo, useState } from "react";

import Header from "./Header/Header";
import Tasks from "./Tasks/Tasks";
import Circles from "./Circles/Circles";


import ProfileImg from "../ProfileImg/ProfileImg";

import "./LeftSection.css";






function LeftSection() {
  const [collapsed, setCollapsed] = useState(false);
  const profileImgs = useMemo(
    () =>
      [1, 2, 3, 4].map((item, index) => (
        <div
          key={item}
          className="circle"
          style={{ left: `-${index * 20}px`, zIndex: `${index}` }}
        >
          <ProfileImg style={{ width: "100%", height: "100%" }} />
        </div>
      )),
    []
  );
  return (
    <section className="App-left-section">

        <Header onClick={() => setCollapsed((prevState) => !prevState)} collapsed={collapsed}/>

        <Circles >
            {profileImgs}
        </Circles>

        <Tasks />

        <button className="App-left-section-new-task-btn">
            New <span>+</span>
        </button>
    </section>
  );
}

export default LeftSection;
