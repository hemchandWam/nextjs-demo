// utils/api.ts
import axios from 'axios';

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

export const fetchNavbar = async () => {
  const res = await axios.get(`${CMS_URL}/api/navbar`);
  const docs = res.data.docs;

  console.log('Navbar data:', docs); // Log the fetched data for debugging
  const logoItem = docs.find((doc: any) => doc.title === 'LOGO');
  const menuItems = docs
    .filter((doc: any) => doc.title !== 'LOGO')
    .map((doc: any) => ({
      label: doc.title,
      url: doc.links[0]?.url || '#',
      logo: doc.logo?.url ? `${CMS_URL}${doc.logo.url}` : null,
    }));

  return {
    logo: logoItem?.logo
      ? {
          url: `${CMS_URL}${logoItem.logo.url}`,
          alt: logoItem.logo.alt || 'Logo',
        }
      : null,
    links: menuItems.map(({ label, url }) => ({ label, url })),
  };
};
