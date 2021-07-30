import CharacterCard from "./CharacterCard"

export default function FavoritesContainer({characters,favorites,removeFromFavorites}) {
    
    const displayFavorites = () => favorites.map(character => {
        return <CharacterCard key={character.id} character={character} removeFromFavorites={removeFromFavorites} />
    })
    
    return <section className='favorite-container'>
        <div>
            {displayFavorites()}
        </div>
    </section>
}
