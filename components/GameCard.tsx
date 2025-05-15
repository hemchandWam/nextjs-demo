const GameCard = ({ game }: { game: any }) => {
  const imageUrl = game.image.startsWith('http')
    ? game.image
    : `http://localhost:3000${game.image}`; // fallback if image is not absolute

  return (
    <div className="game-card">
      <img src={imageUrl} alt={game.name} />
      <p>{game.name}</p>
    </div>
  );
};

export default GameCard;
