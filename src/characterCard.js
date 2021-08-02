import React from 'react'

export default function CharacterCard({ clickAction, character }) {

    const handleClick = () => {
        clickAction(character)
    }

    return (
        <div className="character-card">
            <h2 className="character-name" >{character.name}</h2>
            <img className="character-image" src={character.image} alt="characters" onClick={handleClick} />
            <h3 className="character-food">Species:  {character.species}</h3>
        </div>
    )
}


