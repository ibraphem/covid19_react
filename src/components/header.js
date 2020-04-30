import React from 'react';
import covid from "../image/covid.png";
import "../css/styles.css";
import moment from 'moment';

import { Today } from "../config";

const Header = (props) => {

    const formatDate = (date) => {
        return moment(date).format(' MMM Do YYYY')
    }
   // console.log(props)
    return ( 
        <header>
        <img src={covid} alt="covid19"/>
            <p>{formatDate(Today) }</p>
            <div className="logo"><i>Covid19 Fact Check</i></div>
            <input 
                type="text" onChange={props.keywords} placeholder="Enter your country"
                
            />
        </header>
    )
};

export default Header;