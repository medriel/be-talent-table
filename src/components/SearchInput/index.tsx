import searchIcon from "../../assets/search.svg";
import "./styles.css";

type SearchInputProps = {
  onSearch: (term: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Pesquisar" className="search-input" onChange={(e) => onSearch(e.target.value)} />
      <img src={searchIcon} alt="Logo BeTalent" className="search-icon " />
    </div>
  );
};

export default SearchInput;
