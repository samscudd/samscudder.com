import React from 'react';

function CardInfo(props) {

    return(
        <div className="p-card-info">
            <p className="p-card-info">{props.title}</p>
            <p className="p-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </div>
    );
}

export default CardInfo;