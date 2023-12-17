import heroImg from "../assets/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import bmw from "../assets/bmw.png";
import toyota from "../assets/toyota.png";
import ford from "../assets/ford.png";
import tesla from "../assets/tesla.png";
import mercedes from "../assets/mercedes.png";
import {
  AiFillStar,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import ListingCard from "../Components/ListingCard";
import { Link, useNavigate } from "react-router-dom";
import Swipper from "../Components/Swipper/Swipper";
import ChooseUs from "../Components/ChooseUs";
import Team from "../Components/Team";

const Home = () => {
  //aos useEffect
  useEffect(() => {
    AOS.init({
      duration: 1600, // Animation duration
    });
  }, []);

  //state for manage listings
  const [featuredListings, setfeaturedListings] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("http://localhost:5000/listings")
      .then((res) => res.json())
      .then((data) => setfeaturedListings(data));
  }, []);

 

  //navigate
  const navigate = useNavigate()

  //brand query
  const handleCategory = (event) => {
    const brand = event.target.value
    console.log(brand);
    navigate(`/listing/${brand}`)


  }

  return (
    <div className="">
      <div
        className="hero h-[80vh]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="text-center text-neutral-content ">
          <div
            className="w-[350px]  md:w-[600px] space-y-16 "
            data-aos="fade-down"
          >
            <h1 className="mb-5 text-5xl font-bold">
              Find Your <span className="text-[#ff4605]">Perfect</span> Car
            </h1>

            <div className="flex justify-between gap-5 flex-wrap items-center font-semibold text-[#ff4605]">
              <div className="space-y-5 ">
                <img src={bmw} className="w-16 h-[66px] ml-1 rounded-full" alt="BMW" />

                <input onClick={handleCategory} type="submit" value="BMW" className="py-2 px-5 hover:bg-slate-900 bg-blue-50 rounded-lg" />

              </div>
              <div className="space-y-5 ">
                <img src={toyota} className="w-16 ml-2  h-[66px]  rounded-full" alt="toyota" />

                <input onClick={handleCategory} type="submit" value="Toyota" className="py-2 px-5 hover:bg-slate-900 bg-blue-50 rounded-lg" />
              </div>
              <div className="space-y-5 ">
                <img src={mercedes} className="w-16  h-[66px] ml-5 rounded-full" alt="mercedes" />
                <input onClick={handleCategory} type="submit" value="Mercedes" className="py-2 px-5 hover:bg-slate-900 bg-blue-50 rounded-lg" />
              </div>
              <div className="space-y-5 ">
                <img src={tesla} className="w-16  h-[66px] ml-1  rounded-full" alt="Tesla" />
                <input onClick={handleCategory} type="submit" value="Tesla" className="py-2 px-5 hover:bg-slate-900 bg-blue-50 rounded-lg" />
              </div>
              <div className="space-y-5 ">
                <img src={ford} className="w-16  h-[66px]  rounded-full" alt="Ford" />
                <input onClick={handleCategory} type="submit" value="Ford" className="py-2 px-5 hover:bg-slate-900 bg-blue-50 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured section */}
      <div className="container mx-auto px-2 lg:p-0 mt-16">
        <div className="mb-10 divider">
          <h2 className="text-4xl font-bold  text-[#ff4605]">
            Featured Listing
          </h2>
        </div>

        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="lg:w-[50%]" data-aos="zoom-in">
            {featuredListings.length > 0 && (
              <div className="card bg-base-100 shadow-lg p-5 space-y-5 rounded-lg">
                <figure className="h-[100vh]">
                  <img
                    src={featuredListings[0].image}
                    className="h-full"
                    alt={`${featuredListings[0].name} image`}
                  />
                </figure>

                <div className="space-y-5">
                  <h2 className="card-title border-b-2">
                    {featuredListings[0].name}
                    <div className="badge bg-[#ff4605] text-white">
                      Featured
                    </div>
                    <Link to={`/${featuredListings[0]._id}`} className="badge bg-[#ff4605] text-white">
                      Details
                    </Link>
                  </h2>

                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span className="border px-3 py-1 rounded-lg bg-[#ff4605] text-white">
                      {featuredListings[0].brand}
                    </span>

                    <span className="">{featuredListings[0].type}</span>

                    <p className="flex items-center">
                      {featuredListings[0].rating}
                      <AiFillStar></AiFillStar>
                    </p>

                    <span className="text-[#ff4605]">
                      {featuredListings[0].price} $
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-[50%] flex flex-col lg:flex-row justify-center items-center flex-wrap gap-2">
            {featuredListings.slice(1, 5).map((data) => (
              <ListingCard key={data._id} listing={data}></ListingCard>
            ))}
          </div>
        </div>
      </div>

      {/* follow us on  section*/}

      <div className="container mx-auto mt-16 flex justify-between items-center flex-col-reverse gap-5 p-2 md:flex-row">
        <div className="flex items-center gap-5">
          <h2 className="text-gray-500 font-semibold">Follow Us On</h2>
          <div className="text-2xl flex gap-5">
            <AiOutlineFacebook></AiOutlineFacebook>
            <AiOutlineInstagram></AiOutlineInstagram>
            <AiOutlineTwitter></AiOutlineTwitter>
          </div>
        </div>

        <div>
          <button className="btn bg-[#ff4605] text-white px-16">
            View 29 New
          </button>
        </div>
      </div>

      <div className="mt-16 container mx-auto">
        <Swipper></Swipper>
      </div>

      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center">Why Choose Us!</h2>
        <ChooseUs></ChooseUs>
      </div>

      <div className="mt-20">
      <h2 className="text-4xl font-bold text-center">Our Team!</h2>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
