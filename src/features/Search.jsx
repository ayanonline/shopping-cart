import { LiaSearchSolid } from "react-icons/lia";

const Search = () => {
  return (
    <div className="flex items-center rounded-md border p-2">
      <LiaSearchSolid />
      <input type="text" className="bg-black px-2 text-base outline-none" />
    </div>
  );
};

export default Search;
