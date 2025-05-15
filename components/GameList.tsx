import { useEffect, useState } from 'react';
import GameCard from './GameCard';

type Game = {
  id: string;
  name: string;
  image: string;
  isPopular?: boolean;
};

const GameList = ({
  fetchGames,
  pageSize = 5,
}: {
  fetchGames: (page: number, pageSize: number) => Promise<{ data: Game[]; total: number }>;
  pageSize?: number;
}) => {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const load = async () => {
      const { data, total } = await fetchGames(page, pageSize);
      setGames(data);  // ✅ now valid
      setTotal(total);
    };
    load();
  }, [page, pageSize, fetchGames]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div>
      <div className="flex gap-4 overflow-x-auto p-4 bg-gray-50 rounded-lg">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Previous</button>
        <span> Page {page} of {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default GameList;
