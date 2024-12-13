const NavBar = ({pokemonList, setPokemonIndex}) => {
    return (
    <nav>
        {pokemonList.map((pokemon, index) => (
        <button
            key={pokemon.name}
            type="button"
            onClick={() => setPokemonIndex(index)}
        >
            {pokemon.name}
        </button>
        ))};
    </nav>
    );
}


export default NavBar;