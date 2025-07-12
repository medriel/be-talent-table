import searchIcon from "../../assets/search.svg";
import "./styles.css";

const SearchInput = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Pesquisar" className="search-input" />
      <img src={searchIcon} alt="Logo BeTalent" className="search-icon " />
    </div>
  );
};

export default SearchInput;
