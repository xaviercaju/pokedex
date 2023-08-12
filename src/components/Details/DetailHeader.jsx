function DetailHeader({pokemon}) {
  const getTypeColors = (type) => {
    const typeColors = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-400",
      ice: "bg-blue-300",
      fighting: "bg-red-600",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-400",
      bug: "bg-green-600",
      rock: "bg-gray-600",
      ghost: "bg-indigo-700",
      dragon: "bg-purple-600",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
      // Add more type colors here
    };

    return typeColors[type] || "bg-gray-500";
  };

  return (
    <div>
      <img
        className="md:w-1/2 w-3/4 h-auto rounded-md my-4 p-6 m-auto"
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={`${pokemon.name} sprite`}
      />
      <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center capitalize">
        {pokemon.name}
      </h1>
      <div className="flex justify-center mb-4 capitalize">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColors(
              type.type.name
            )} text-white mx-1`}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DetailHeader ;