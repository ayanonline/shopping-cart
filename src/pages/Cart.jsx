import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  if (cart.length === 0)
    return (
      <div className="mt-[10rem] text-center">
        <h1 className="text-2xl">Your cart is empty</h1>
        <Link to="/" className="text-blue-500 underline">
          Go to home page
        </Link>
      </div>
    );

  return (
    <div className="mx-[42rem] my-5">
      <div className="flex justify-between text-xl">
        <span>Cart</span>
        <span>Total Price: {totalPrice.toFixed(2)}</span>
      </div>

      <div className="flex flex-col items-center gap-4 p-4">
        {cart.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
