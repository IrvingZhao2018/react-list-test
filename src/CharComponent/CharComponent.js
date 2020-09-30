import React from "react";
import './CharComponent.css'

const CharComponent = (props) => {
    return(
        <div className={"CharComponent"} onClick={props.delete} key={props.key}>
            {props.text}
            {props.index}
        </div>
    );
}

export default CharComponent;