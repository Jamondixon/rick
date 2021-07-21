import React from 'react'

export default function CharacterCard({character}) {
    return (
        <div className="character-card">
            <h2>{character.name}</h2>
            <img src={character.image} alt="characters"/>
        </div>
    )
}
