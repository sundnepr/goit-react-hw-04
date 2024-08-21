import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";

const SearchBar = ({ setSearchBar }) => {
  console.log("2222");
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.search.value;
    
    if (search.trim() === "") {
      toast.error("Enter text to search for images.");
    }

    form.reset();

    setSearchBar(search);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSearch}>
        <button type="submit">
          {" "}
          <CiSearch width="22" height="22" className="searchFormButton" />{" "}
        </button>
        <input
          name="search"
          type="text"
          className={css.searchFormInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
