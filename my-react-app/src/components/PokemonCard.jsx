// interface PokemonCardProps {
//     pokemon: {
//         name: string;
//         imgSrc?: string;
//     }
function PokemonCard ( { pokemon } ) {
    
return (
    <>
    <figure>
    <img src={pokemon.imgSrc}/>
    </figure>
    <figcaption>{pokemon.name}</figcaption> ? <p>???</p>
    </>
);

}



export default PokemonCard;