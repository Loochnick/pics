import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID jZlBWi3xfigjuqc03bYzOdAK2wAXe4okdmkY00ANmoQ'
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
};

export default searchImages;