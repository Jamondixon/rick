import React from 'react'

export default function CharacterCard({character}) {
    return (
        <div>
            <img src={character.image} alt="characters"/>
        </div>
    )
}
