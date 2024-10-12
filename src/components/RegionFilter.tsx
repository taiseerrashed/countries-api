import { useRegions } from "../hooks/useRegions";

interface IRegionProps {
    region: string;
    setRegion: (region: string) => void
}
const RegionFilter = ({region, setRegion}: IRegionProps) => {
    const { data: regions, isLoading, isError, error} = useRegions();

    const uniqueRegions:string[] = [];
    regions?.forEach((region) => {
        if(!uniqueRegions.includes(region)){
            uniqueRegions.push(region)
        }
    })
    console.log(uniqueRegions);
    
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error fetching region: {error.message}</div>

  return (
    <select className="w-full md:w-auto p-2 border border-gray-300 rounded bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-600" value={region} onChange={(e) => setRegion(e.target.value)} >
        <option value="" >All Regions</option>
        {uniqueRegions?.map((region) => (
            <option key={region} value={region}>{region}</option>
        ))}
    </select>
  );
};

export default RegionFilter;
