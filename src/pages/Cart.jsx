import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, item) => {
    console.log(item.price);
    return acc + item.price * item.quantity;
  }, 0);

  console.log(totalPrice);
  return (
    <div className="mx-[42rem] my-5">
      <div className="flex justify-between text-xl">
        <span>Cart</span>
        <span>Total Price: {totalPrice}</span>
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
