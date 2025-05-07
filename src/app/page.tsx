// app/page.tsx
import Navbar from '@/components/Navbar';
import { fetchNavbar } from '@/utils/api';

export default async function Home() {
  const navbar = await fetchNavbar();

  return (
    <main>
      <Navbar logo={navbar.logo} links={navbar.links} />
      <div className="p-4">List of games</div>
    </main>
  );
}
