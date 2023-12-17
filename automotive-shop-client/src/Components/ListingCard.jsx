import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
  //aos useEffect
  useEffect(() => {
    AOS.init({
      duration: 1600, // Animation duration
    });
  }, []);

  //destructure
  const { _id,image, name, brand, type, price, rating } = listing || {};

  return (
    <div
      className="card w-full lg:min-w-[40%] flex-1 bg-base-100 shadow-xl py-1"
      data-aos="fade-up"
    >
      <figure className="h-[35vh]">
        <img src={image} alt={`${name} image`} className="h-full" />
      </figure>

      <div className="card-body">
        <h2 className="card-title border-b-2">
          {name}
          <div className="badge bg-[#ff4605] text-white">Featured</div>
          <Link to={`/${_id}`} className="badge bg-[#ff4605] text-white">Details</Link>
        </h2>

        <div className="flex justify-between items-center text-lg font-semibold">
          <span className="border px-3 py-1 rounded-lg bg-[#ff4605] text-white">
            {brand}
          </span>

          {/* <span className="">{type}</span> */}

          {/* <p className="flex items-center">
            {rating}
            <AiFillStar></AiFillStar>
          </p> */}

          <span className="text-[#ff4605]">{price} $</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
