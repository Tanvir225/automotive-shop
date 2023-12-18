import { useLoaderData, useNavigate } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import ListingCard from "../Components/ListingCard";
import { useEffect, useState } from "react";

const BrandListing = () => {

  //navigate
  const navigate = useNavigate()

  //handleBack
  const handleBack = ()=>{
    navigate(-1)
  }

  //load brand data
  const brandListing = useLoaderData();
  //console.log(brandListing);

  //state  for load data
  const [brandCar, setBrandCar] = useState(brandListing);

  //state for hold search string
  const [searchItem,setSearchItem] = useState('')

  //search functionality
  const handleChange =  (e) =>{
    const search = e.target.value
    
    setSearchItem(search)
  }

  const handleSearch = ()=>{
    console.log(searchItem)
    const filterItem = brandListing.filter(car => car.name.toLowerCase().includes(searchItem.toLowerCase()))
    console.log(filterItem)
    setBrandCar(filterItem)
  }

 
  return (
    <div>
      <div>
        {brandCar.length > 0 ? (
          <div className="space-y-10">
            <Slider brand={brandCar ? brandCar[0]?.brand : "Zero"}></Slider>
            <div className="container mx-auto text-right mt-10 px-5 ">
              <div className="join">
                <input
                  onChange={handleChange}
                  value={searchItem}
                  className="input join-item md:w-96 bg-blue-50"
                  placeholder="search your car"
                  name="search"
                 
                />
                <button onClick={handleSearch} className="btn join-item rounded-r-full btn-outline text-white bg-[#ff4605]">
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
          <div className="flex flex-col gap-16 justify-center items-center h-[100vh]">
            <button className="btn btn-outline w-96" onClick={handleBack}>Back to home</button>
            <h1 className="text-5xl font-bold">
              This brand related car
              <span className="text-[#ff4605]"> Out of Stock</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandListing;
