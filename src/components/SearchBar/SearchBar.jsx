import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";

export const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.elements.search.value;
    console.log("search", search);
    

    if (search.trim() === "") {
      toast.error("Enter text to search for images.");
    }
    onSearch (search);
    form.reset();
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
