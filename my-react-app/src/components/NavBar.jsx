const NavBar = ({ pokemonList, setPokemonIndex }) => {
    const handlePikachuClick = () => {
        alert('pika pikachu');
    };

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button
                    key={pokemon.name}
                    type="button"
                    onClick={() => {
                        setPokemonIndex(index);
                        if (pokemon.name === "pikachu") {
                            handlePikachuClick();
                        }
                    }}
                >
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
};

export default NavBar;
