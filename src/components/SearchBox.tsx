
interface SearchTermProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBox: React.FC<SearchTermProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      value={searchTerm}
      placeholder="Search names"
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
}

export default SearchBox;
