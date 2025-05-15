const GameCard = ({ game }: { game: any }) => {
  const imageUrl = game.image.startsWith('http')
    ? game.image
    : `http://localhost:3000${game.image}`; // fallback if image is not absolute

  return (
    <div className="w-[150px] flex-shrink-0 text-center">
    <img
      src={game.image}
      alt={game.name}
      width={150}
      height={150}
      className="object-cover rounded-md"
    />
    <p className="mt-2 text-sm font-medium">{game.name}</p>
    </div>
  );
};

export default GameCard;
