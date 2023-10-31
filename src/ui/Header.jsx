import { BsCart3 } from "react-icons/bs";
import Search from "../features/Search";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <header className="sticky top-0 flex items-center justify-between bg-black px-[20rem] py-4 text-2xl text-white">
      <Link to="/">Logo</Link>
      <Search />
      <nav>
        <NavLink to="/cart" className="flex items-center gap-1">
          <BsCart3 />
          {cart?.length}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
