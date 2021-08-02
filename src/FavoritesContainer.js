import CharacterCard from "./CharacterCard"

export default function FavoritesContainer({favorites,clickAction}) {
    
    const displayFavorites = () => favorites.map(character => {
        return <CharacterCard key={character.id} character={character} clickAction={clickAction} />
    })
    
    return <section className='favorite-container'>
        <div>
            {displayFavorites()}
        </div>
    </section>
}
