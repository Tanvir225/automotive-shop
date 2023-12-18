import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import ListingCard from "../Components/ListingCard";
import { useState } from "react";

const AllListings = () => {
  //load data from useLoader
  const listings = useLoaderData();

  //state for all listings
  const [allListings,setAllListings] = useState(listings)

  //state for search 
  const [searchText,setSearchText] = useState('')

  //filter data form
  const handleFilter = (event)=>{
    event.preventDefault()
    const form = event.target
    const brand = form.brand.value
    const type = form.type.value
    const price = form.price.value

    const filterListing = listings.filter(listing => {
        return (listing.brand.toLowerCase() === brand.toLowerCase() && listing.type.toLowerCase() === type.toLowerCase() && listing.price <= price)
    })
    setAllListings(filterListing)
    form.reset()

  }


  //handle change
  const handleChange = (e)=>{
    const search = e.target.value
    setSearchText(search)
  }

  //handleSearch
  const handleSearch = ()=>{
    
    if (searchText) {
        const searchItem = listings.filter(listing => listing.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(searchItem);
        setAllListings(searchItem)
    }
  }

  return (
    <div>
      <Slider></Slider>

      <div className="container mx-auto px-2 my-16 flex justify-between items-center">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-outline md:w-36 text-[#ff4605] drawer-button"
            >
              Filter by
            </label>
          </div>
          <div className="drawer-side absolute top-16 z-20">
            <label htmlFor="my-drawer" aria-label="close sidebar"></label>

            <form onSubmit={handleFilter}>
              <ul className="md:w-80 space-y-5 p-7 rounded-lg bg-blue-100 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <input
                    className="input join-item w-full bg-base-100"
                    placeholder="brand : BMW "
                    name="brand"
                    required
                    
                  />
                </li>
                <li>
                  <input
                    className="input join-item w-full bg-base-100"
                    placeholder="car type : SUV"
                    name="type"
                    required
                  />
                </li>

                <li>
                  <input
                    className="input join-item w-full bg-base-100"
                    placeholder="price"
                    name="price"
                    required
                  />
                </li>

                <button className="btn btn-outline w-full text-[#ff4605]">Filter</button>
              </ul>

             
            </form>
          </div>
        </div>

        <div className="join">
          <input
            className="input join-item w-52 md:w-96 bg-blue-50"
            placeholder="search your car"
            name="search"
            onChange={handleChange}
            value={searchText}
          />
          <button onClick={handleSearch} className="btn join-item rounded-r-full btn-outline text-white bg-[#ff4605]">
            search
          </button>
        </div>
      </div>

      <div className="container px-3 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {allListings.length > 0 &&
          allListings.map((listing) => (
            <ListingCard key={listing._id} listing={listing}></ListingCard>
          ))}
      </div>
    </div>
  );
};

export default AllListings;
