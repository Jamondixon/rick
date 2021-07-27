import React from 'react'

export default function CharacterCard(props) {

    return (
        <div className="character-card">
            <h2 className="character-name" >{props.character.name}</h2>
            <img className="character-image" src={props.character.image} alt="characters" onClick={ ()=> props.addFavorite(props.character)} />
            <h3 className="character-food">Species:  {props.character.species}</h3>
        </div>
    )
}


