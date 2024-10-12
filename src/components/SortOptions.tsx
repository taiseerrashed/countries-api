interface ISortProps {
    sortOption: string;
    setSortOption: (sortOption: string) => void
}
const SortOptions = ({sortOption, setSortOption}: ISortProps) => {
  return (
    <select className="w-full md:w-auto p-2 border border-gray-300 rounded bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-600" value={sortOption} onChange={(e) => setSortOption(e.target.value)} >
        <option value="" hidden>Sort by</option>
        <option value="population">Population</option>
        <option value="area">Area</option>
        <option value="name">Name</option>
    </select>
  );
};

export default SortOptions;
