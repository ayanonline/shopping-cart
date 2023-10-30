import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const ProductCard = ({ product }) => {
  const { title, price, description, image, rating } = product;

  const dispatch = useDispatch();

  return (
    <div className="my-2 flex w-[20rem] flex-col items-center gap-4 rounded-md border p-4 shadow-lg">
      <img
        src={image}
        alt="product image"
        className=" h-[15rem] w-[20rem] object-contain"
      />

      <div className="flex w-full flex-col gap-2">
        <h1 className="text-xl">{title.slice(0, 20)}...</h1>
        <p className="text-sm text-gray-500">{description.slice(0, 60)}...</p>

        <div className="flex items-center justify-between">
          <div className="mr-1 flex items-center">
            <AiFillStar className="mr-1 text-xl text-green-600" />
            {rating.rate}
            <span className="text-gray-500">({rating.count})</span>
          </div>
          <span className="ml-4 font-bold text-green-500">${price}</span>
        </div>

        <button
          onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          className="w-full rounded-md border border-black py-3 text-lg hover:border-none hover:bg-green-500 hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
