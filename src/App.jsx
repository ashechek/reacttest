
import { useState } from "react";
import { useEffect } from "react";
import { fetchArticles } from "./services/api";
import ArticlesList from "./assets/components/articlesList";
import Loader from "./assets/components/Loader/loader";
import SearchBar from "./assets/components/SearchBar/SearchBar";


const App = () => {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIstLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  useEffect(() => {

    if (!query) { return };

    const getData = async () => {
      try {
        setIsError(false);
        setIstLoading(true);
        const data = await fetchArticles(page, query);
        setArticles(prev => [...prev, ...data.hits]);
      } catch {
        setIsError(true);
      } finally {
        setIstLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  const handleSetQuery = (topik) => {
    setQuery(topik);
    setArticles([]);
    setPage(0);
  };

  return (
    <div>
      <h2>HTTP</h2>
      <SearchBar setQuery={handleSetQuery} />
      {articles.length > 0 && <ArticlesList articles={articles} />}
      {isLoading && <Loader />}
      {isError && <h2>Oops... Something is going wrong...</h2>}
      <button onClick={handleChangePage}>Load more</button>
    </div>
  );
};

export default App;




//    axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => console.log(res.data))
