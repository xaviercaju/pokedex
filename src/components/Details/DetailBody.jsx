function DetailBody({ pokemon }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Abilities</h2>
      <ul className="mb-4">
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name} className="text-gray-700">
            {ability.ability.name}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Attributes</h2>
          <p className="text-gray-700">
            Base Experience: {pokemon.base_experience}
          </p>
          <p className="text-gray-700">
            Height: {pokemon.height / 10} meters
          </p>
          <p className="text-gray-700">
            Weight: {pokemon.weight / 10} kilograms
          </p>
          {/* Add more attributes here */}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Attacks</h2>
          <ul>
            {pokemon.moves.slice(0, 5).map((move) => (
              <li key={move.move.name} className="text-gray-700">
                {move.move.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailBody;