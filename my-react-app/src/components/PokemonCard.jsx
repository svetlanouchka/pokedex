function PokemonCard () {
    const pokemon = pokemonList[1];
    
return (
    <>
    <figure>
    <img src={pokemon.imgSrc}/>
    </figure>
    <figcaption>{pokemon.name}</figcaption> ? <p>???</p>
    </>
);

}

const pokemonList = [
    {
    name: "bulbasaur",
    imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
    name: "mew",
    },
];


export default PokemonCard;