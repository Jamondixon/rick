import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer({characters, addFavorite}) {
    const displayCharacters = () => characters.map(character => {
        return <CharacterCard key={character.id} character={character} addFavorite={addFavorite}/>
    })
    return (
        <div className="character-container">
            {displayCharacters()}
        </div>
    )
}
