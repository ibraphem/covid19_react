import React from 'react';
import InfoItems from "./infoItems";

const InfoList = (props) => {
   console.log(props)

    const items = props.list.map((item, index)=>{
        //console.log(item)
        return(<InfoItems item={item} ind={index} key={index}/>)
    });

    //console.log(items)

    return (
       
        <div>
            {props.children}
            {items}
        </div>
    );
};

export default InfoList;