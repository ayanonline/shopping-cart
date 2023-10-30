import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseQuantituy,
  increaseQuantituy,
  removeItem,
} from "../store/slices/cartSlice";
const CartCard = ({ item }) => {
  const { title, price, description, image, rating, quantity } = item;
  const dispatch = useDispatch();

  return (
    <div className="flex w-[35rem] items-center border-2 px-2 py-3">
      <img
        src={image}
        alt="Product image"
        className="h-[10rem] min-w-[10rem] max-w-[10rem] object-contain"
      />
      <div className="flex w-full flex-col gap-4 px-4">
        <div className="flex justify-between text-xl">
          <h1>{title.slice(0, 20)}...</h1>{" "}
          <span className="font-bold text-green-500">
            ${(quantity * price).toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-gray-500">{description.slice(0, 60)}...</p>

        <div className="mr-1 flex items-center">
          <AiFillStar className="mr-1 text-xl text-green-600" />
          <span className="text-gray-500">{rating.rate}</span>
        </div>

        <div className="flex justify-between">
          <div>
            <button
              onClick={() => dispatch(decreaseQuantituy(item.id))}
              className="border px-2 text-xl"
            >
              -
            </button>
            <span className="p-2">{quantity}</span>
            <button
              onClick={() => dispatch(increaseQuantituy(item.id))}
              className="border px-2 text-xl"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="px-2 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
