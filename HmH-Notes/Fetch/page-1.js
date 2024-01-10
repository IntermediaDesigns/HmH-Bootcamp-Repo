// https://pokeapi.co/api/v2/pokemon/
// https://baconipsum.com/json-api/

export default async function Home() {
  // i want to send a request to get some pokemon
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const info = await response.json();
  const pokemon = info.results;

  return (
    <div>
      {pokemon.map((pokemon) => {
        return <div key={pokemon.id}>{pokemon.name}</div>;
      })}
    </div>
  );
}
