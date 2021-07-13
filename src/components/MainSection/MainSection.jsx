import React, {useState} from 'react';
import {CgMenuGridR} from "react-icons/cg";
import {AiOutlineUnorderedList,AiOutlineFolderAdd ,AiOutlineSearch} from "react-icons/ai";



import "./MainSection.css"
import Chart from "./Chart/Chart";

const MainSection = () => {
    const [menuLayout, setMenuLayout] = useState(0);
    return (
        <div className="App-main-section">
            <header className="main-section-header">
                <span className="header-layout-btn">
                    <span className={`rounded-btn ${menuLayout === 0 ? "active" : ""}`} onClick={()=>setMenuLayout(0)}>
                        <CgMenuGridR size='1.5rem'/>
                    </span>
                    <span className={`rounded-btn ${menuLayout === 1 ? "active" : ""}`} onClick={()=>setMenuLayout(1)}>
                        <AiOutlineUnorderedList size='1.5rem'/>
                    </span>
                </span>

                <div className="header-search-container">

                    <input type="text" className="search-input"  placeholder="Try to find..."/>
                    <AiOutlineSearch className="search-icon" size="1.5rem"/>
                    <button className="search-btn">
                        <AiOutlineFolderAdd size="1.8rem" />
                    </button>

                </div>
            </header>
            <Chart/>
        </div>
    );
};

export default MainSection;
