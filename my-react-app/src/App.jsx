import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
const [pokemonIndex, setPokemonIndex] = useState(0);
const pokemonList = [
    {
    name: "bulbasaur",
    imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const handlePrevious = () => {
  if (pokemonIndex>0) {
  setPokemonIndex(pokemonIndex - 1);
  }
};

const handleNext = () => {
  if (pokemonIndex < pokemonList.length - 1){
  setPokemonIndex(pokemonIndex + 1);
  }
};
  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button type="button" onClick={handlePrevious}>Précedent</button>
      <button type="button" onClick={handleNext}>Suivant</button>
    </>
  )
}


export default App
