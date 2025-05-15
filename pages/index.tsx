import dynamic from 'next/dynamic';
import { fetchPopularGames } from '../lib/api';

const GameList = dynamic(() => import('../components/GameList'), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1>Popular Games</h1>
      <GameList fetchGames={fetchPopularGames} pageSize={5} />
    </main>
  );
}