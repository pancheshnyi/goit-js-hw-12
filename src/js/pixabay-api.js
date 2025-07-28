import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '51328108-e5351328d4cc0773f2b3617f5',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return response.data;
}
