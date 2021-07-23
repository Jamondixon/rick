import CharacterCard from "./CharacterCard"

export default function FavoritesContainer({characters,favorites,removeFavorite}) {
    
    const displayFavorites = () => favorites.map(character => {
        return <CharacterCard key={character.id} character={character} removeFavorite={removeFavorite} />
    })
    
    return <section className='favorite-container'>
        {displayFavorites()}
    </section>
}
