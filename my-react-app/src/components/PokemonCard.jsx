function PokemonCard ( { pokemon } ) {
    
return (
    <>
    <figure>
    <img src={pokemon.imgSrc}/>
    </figure>
    <figcaption>{pokemon.name}</figcaption>
    </>
);

}



export default PokemonCard;