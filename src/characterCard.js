import React from 'react'

export default function CharacterCard(props) {

    return (
        <div className="character-card">
            <h2 className="character-name" >{props.character.name}</h2>
            <img className="character-image" src={props.character.image} alt="characters" onClick={ ()=> props.addFavorite(props.character)} />
            {/* <h3 className="character-food">Favorite Food:  {props.character.favorite_food}</h3> */}
        </div>
    )
}
