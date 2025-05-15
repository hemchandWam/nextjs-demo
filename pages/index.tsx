import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchPopularGames } from '../lib/api';

const Home = () => {
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadGames = async () => {
      const { data } = await fetchPopularGames(1, 6); // Fetch 6 games
      setGames(data);
    };
    loadGames();
  }, []);

  return (
    <div className="p-4">
      {/* Navbar placeholder */}
      <nav className="mb-6">
        <h2 className="text-xl font-bold">Navbar</h2>
      </nav>
      <h2 className="text-xl font-semibold mb-4">Live Casino</h2>
      <div className="casino flex overflow-x-auto space-x-2">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => router.push('/live-casino')}
            className="min-w-[150px] flex-shrink-0"
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src={game.image}
                alt={game.name}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-1 text-sm text-center">{game.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
