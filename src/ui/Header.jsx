import { BsCart3 } from "react-icons/bs";
import Search from "../features/Search";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <header className="sticky top-0 flex items-center justify-between bg-black p-2 text-white lg:px-[20rem] lg:py-4 lg:text-2xl">
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
