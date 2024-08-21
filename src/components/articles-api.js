// src/articles-api.js
// import axios from "axios";

// axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

// export const fetchArticlesWithTopic = async (topic) => {
//   const response = await axios.get(`/search?query=${topic}`);
//   return response.data.hits;
// };

import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "qH8j5fE0Y5KUkqSW4UqA4CFTcBGOUJ4AnLFOk5HjnUs";
//fetchImages
export const fetchArticlesWithTopic = async (searchQuery, page) => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchQuery,
      per_page: 12,
      page: page,
      orientation: "landscape",
      client_id: ACCESS_KEY,
    },
  });
  if (!response.data.total) {
    toast.error("No images found for this query.");
  }

  return {
    data: response.data.results,
    totalPages: response.data.total_pages,
  };
};
