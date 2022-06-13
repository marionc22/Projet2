import React from 'react';


const Cases = (props) => {
    return (
        <div className={props.nom}>
        <h2 >{props.nom}</h2>
        <div className= "playerPlace">
        <p>{props.player1Place}</p>
        <p>{props.player2Place}</p>
        <p>{props.player3Place}</p>
        </div>
        </div>
    );
};

export default Cases;