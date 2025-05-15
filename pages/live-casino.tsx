import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchLiveCasinoGames, fetchCasinoGames } from '../lib/api';
import { useRouter } from 'next/router';

type Game = {
  id: string;
  name: string;
  image: string;
};

export default function LiveCasino() {
  const [liveGames, setLiveGames] = useState<Game[]>([]);
  const [casinoGames, setCasinoGames] = useState<Game[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const live = await fetchLiveCasinoGames(1, 9);
      const casino = await fetchCasinoGames(1, 9);
      setLiveGames(live.data);
      setCasinoGames(casino.data);
    }
    load();
  }, []);

  return (
    <main className="p-6 bg-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="mb-6">
        <h1 className="text-xl font-bold">Navbar</h1>
      </nav>

      {/* Live Casino Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Live Casino</h2>
        <hr className="border-t border-gray-600 mb-4" />
        <div className="casino flex overflow-x-auto space-x-2">
          {[...liveGames].reverse().map((game) => (
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
      </section>

      {/* Casino Section */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Casino</h2>
        <hr className="border-t border-gray-600 mb-4" />
        <div className="casino flex overflow-x-auto space-x-2">
          {casinoGames.map((game) => (
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
      </section>
    </main>
  );
}
