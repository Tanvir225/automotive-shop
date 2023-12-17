import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import Swipper from "../Components/Swipper/Swipper";


const ListingDetails = () => {
  //get single listing from useloaderData
  const listing = useLoaderData();

  //handle add to cart
  const handleAddCart = () => {
    //fetch for post data
    fetch('http://localhost:5000/cart', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(listing)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('product added to cart')
        }

      })

  }




  //aos useEffect
  useEffect(() => {
    AOS.init({
      duration: 1600, // Animation duration
    });
  }, []);

  return (
    <>
      <div className="container mx-auto mt-16 flex gap-5 flex-col-reverse lg:flex-row px-5">
      <div className="lg:w-[60%]  space-y-6">
        <img
          src={listing.image}
          alt={`${listing.name} image`}
          className="w-full" data-aos="zoom-in"
        />
        <h2 className="text-gray-600 text-2xl font-bold">Description</h2>
        <p className="lg:w-[80%]">{listing.details}</p>
      </div>

      <div className="lg:w-[40%]  flex flex-col justify-between bg-blue-100 shadow-md rounded-lg p-10 ">
        <div className="space-y-3" data-aos="zoom-out">
          <h2 className="text-gray-600 text-2xl font-bold divider">
            Listing Name :<span className="text-[#ff4605]">{listing.name}</span>
          </h2>
          <h2 className="text-gray-600 text-lg font-semibold ">
            Brand Name : <span className="text-[#ff4605]">{listing.brand}</span>
          </h2>
          <h2 className="text-gray-600 text-lg font-semibold">
            Car type : <span className="text-[#ff4605]">{listing.type}</span>
          </h2>
          <h2 className="text-gray-600 text-lg font-semibold">
            Car Rating :
            <span className="text-[#ff4605]"> {listing.rating} stars</span>
          </h2>

          <div className="w-[80%] mx-auto ">
            <img
              src={listing.image}
              alt={`${listing.name} image`}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <h2 className="text-gray-600 text-2xl py-10 font-bold divider">
            Listing Price :
            <span className="text-[#ff4605]">{listing.price} $</span>
          </h2>
          <button id="addToCartBtn" onClick={handleAddCart} className="btn btn-outline bg-[#ff4605] text-white w-full">
            Add to cart
          </button>
        </div>
      </div>
    </div>
     <div className="mt-20">
        <Swipper></Swipper>
      </div> 
    </>
  );
};

export default ListingDetails;
