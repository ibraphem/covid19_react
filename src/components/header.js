import React from 'react';
import covid from "../image/covid.png";
import "../css/styles.css";

const Header = (props) => {
   // console.log(props)
    return ( 
        <header>
            <img src={covid} alt="covid19"/>
            <div className="logo">Covid 19 Fact Check</div>
            <input 
                type="text" onChange={props.keywords} placeholder="Enter your country"
                
            />
        </header>
    )
};

export default Header;