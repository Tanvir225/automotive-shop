import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import ListingCard from "../Components/ListingCard";
import { useEffect, useState } from "react";

const BrandListing = () => {
  //load brand data
  const brandListing = useLoaderData();
  //console.log(brandListing);

  //state  for load data
  const [brandCar, setBrandCar] = useState([]);

  useEffect(() => {
    setBrandCar(brandListing);
  }, [brandListing]);

 
  return (
    <div>
      <div>
        {brandListing.length > 0 ? (
          <div className="space-y-10">
            <Slider brand={brandListing ? brandListing[0]?.brand : "Zero"}></Slider>
            <div className="container mx-auto text-right mt-10 px-5 ">
              <div className="join">
                <input
                  className="input join-item md:w-96 bg-blue-50"
                  placeholder="search your car"
                  name="search"
                 
                />
                <button className="btn join-item rounded-r-full btn-outline text-white bg-[#ff4605]">
                  search
                </button>
              </div>
            </div>

            {/* card */}
            <div className=" px-5 container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {brandCar.map((listing) => (
                <ListingCard key={listing?._id} listing={listing}></ListingCard>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[100vh]">
            <h1 className="text-5xl font-bold">
              This brand related car{" "}
              <span className="text-[#ff4605]">Out of Stock</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandListing;
