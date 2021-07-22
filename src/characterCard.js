import React from 'react'

export default function CharacterCard({character}) {
    return (
        <div className="character-card">
            <h2 className="character-name">{character.name}</h2>
            <img className="character-image" src={character.image} alt="characters"/>
            <h3 className="character-food">Favorite Food:  {character.favorite_food}</h3>
        </div>
    )
}
