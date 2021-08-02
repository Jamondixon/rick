import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer({characters, clickAction}) {
    const displayCharacters = () => characters.map(character => {
        return <CharacterCard key={character.id} character={character} clickAction={clickAction}/>
    })
    return (
        <div className="character-container">
            {displayCharacters()}
        </div>
    )
}
