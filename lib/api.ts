import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000/api';  // Payload CMS

console.log('Requesting from:', `${API_BASE}/games`);

// Fetch popular games
export const fetchPopularGames = async (page = 1, limit = 5) => {
  const res = await axios.get(`${API_BASE}/games`, { 
    params: {
      where: JSON.stringify({
        isPopular: { equals: true },
      }),
      limit,
      page,
    },
  });

  console.log('Popular games response:', res.data);
  return {
    data: res.data.docs,
    total: res.data.totalDocs,
  };
};

// Fetch live casino games
export const fetchLiveCasinoGames = async (page = 1, limit = 10) => {
  const res = await axios.get(`${API_BASE}/games`, {
    params: {
      where: JSON.stringify({
        category: { equals: "live-casino" },  // adjust the key & value based on your schema
      }),
      limit,
      page,
    },
  });

  console.log('Live casino games response:', res.data);
  return {
    data: res.data.docs,
    total: res.data.totalDocs,
  };
};

// Fetch casino games
export const fetchCasinoGames = async (page = 1, limit = 10) => {
  const res = await axios.get(`${API_BASE}/games`, {
    params: {
      where: JSON.stringify({
        category: { equals: "casino" },  // adjust the key & value based on your schema
      }),
      limit,
      page,
    },
  });

  console.log('Casino games response:', res.data);
  return {
    data: res.data.docs,
    total: res.data.totalDocs,
  };
};
