import { BsCart3 } from "react-icons/bs";
import Search from "../features/Search";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black px-[20rem] py-4 text-2xl text-white">
      <h1>Logo</h1>
      <Search />
      <nav>
        <BsCart3 />
      </nav>
    </header>
  );
};

export default Header;
