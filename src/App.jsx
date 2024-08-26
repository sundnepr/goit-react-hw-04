import { useEffect, useState } from "react";
// import axios from "axios";

// 1. Імпортуємо HTTP-функцію
import { fetchArticlesWithTopic } from "./components/articles-api";
// import { SearchForm } from "./components/SearchForm";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./components/ImageCard/ImageCard";
const ArticleList = ({ items }) => (
  <ul>

    {items.map(({ id, urls, alt_description }) => (
     
      <li key={id}>
        {id}
        <a href={urls} target="_blank" rel="noreferrer noopener">
          {alt_description}
        </a>
      </li>
    ))}
  </ul>
);

const App = () => {
  // 1. Оголошуємо стан
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  /* Код ефекту */

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      //const data = await fetchArticlesWithTopic(topic);
      const images = await fetchArticlesWithTopic(topic);
      console.log("images", images);
   
       setImages(prevState => [...prevState, ...images.data]);
      // console.log("data",data);
      // setArticles(data.data);


    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* <SearchForm onSearch={handleSearch} /> */}
       <ImageGallery>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} /> //onClick={openModal} 
        ))}
      </ImageGallery>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
export default App;
