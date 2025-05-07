// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';

type NavbarProps = {
  logo?: {
    url: string;
    alt?: string;
  };
  links: { label: string; url: string }[];
};

export default function Navbar({ logo, links }: NavbarProps) {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      <Link href="/">
        {logo?.url ? (
          <Image src={logo.url} alt={logo.alt || 'Logo'} width={120} height={40} />
        ) : (
          <span className="text-xl font-bold">Home</span>
        )}
      </Link>

      <ul className="flex gap-6">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.url} className="hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
