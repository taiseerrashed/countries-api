interface ISearchProps {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}
const Search = ({searchTerm, setSearchTerm}: ISearchProps) => {
  return (
    <input type="text" placeholder="Search Countries..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 border border-gray-300 rounded bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-600"/>
  );
};

export default Search;
