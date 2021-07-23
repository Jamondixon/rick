import CharacterCard from "./CharacterCard"

export default function FavoritesContainer({characters,favorites}) {
    
    const displayFavorites = () => favorites.map(character => {
        return <CharacterCard key={character.id} character={character} />
    })
    
    return <section className='favorite-container'>
        {displayFavorites()}
    </section>
}
