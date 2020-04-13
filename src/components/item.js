import React from 'react';

const Item = (props) => {
    console.log(props)
    return (
        <div>
            {props.cont}
        </div>
    );
};

export default Item;