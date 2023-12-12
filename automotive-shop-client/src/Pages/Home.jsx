import heroImg from '../assets/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import bmw from "../assets/bmw.png"
import toyota from "../assets/toyota.png"
import ford from "../assets/ford.png"
import tesla from "../assets/tesla.png"
import mercedes from "../assets/mercedes.png"
import { useLoaderData } from 'react-router-dom';
import ListingCard from '../Components/ListingCard';


const Home = () => {

    //aos useEffect
    useEffect(() => {
        AOS.init({
            duration: 1600, // Animation duration 

        });
    }, []);


    //state for manage listings
    const [listings, setListings] = useState([])

    //useEffect 
    useEffect(() => {
        fetch('http://localhost:5000/listings')
            .then(res => res.json())
            .then(data => setListings(data))
    }, [])

    //filter listing for get featured
    const featuredListings = listings.filter(listing => listing.featured === true)
    console.log(featuredListings);



    return (
        <div>


            <div className="hero h-[80vh]" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div className="text-center text-neutral-content ">
                    <div className="w-[350px]  md:w-[600px] space-y-16 " data-aos="fade-down">
                        <h1 className="mb-5 text-5xl font-bold">Find Your <span className='text-[#ff4605]'>Perfect</span> Car</h1>
                        <form >
                            <div className="join flex text-black">
                                <input className="input input-bordered join-item w-full" placeholder="BMW" />
                                <button className="btn join-item rounded-r-full bg-[#ff4605] text-white ">search</button>
                            </div>
                        </form>
                        <div className='flex justify-between items-center '>
                            <div className='space-y-5'>
                                <img src={bmw} className='w-16 rounded-full' alt="BMW" />
                                <p>BMW</p>
                            </div>
                            <div className='space-y-5'>
                                <img src={toyota} className='w-16 rounded-full' alt="BMW" />
                                <p>Toyota</p>
                            </div>
                            <div className='space-y-5'>
                                <img src={mercedes} className='w-16 rounded-full' alt="BMW" />
                                <p>Mercedes</p>
                            </div>
                            <div className='space-y-5'>
                                <img src={tesla} className='w-16 rounded-full' alt="BMW" />
                                <p>Tesla</p>
                            </div>
                            <div className='space-y-5'>
                                <img src={ford} className='w-16 rounded-full' alt="BMW" />
                                <p>Ford</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            {/* featured section */}
            <div className='container mx-auto'>
                <div>
                    <p className="font-semibold text-[#ff4605]">Handy Picked</p>
                    <h2 className="text-5xl font-bold">Featured Listing</h2>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='w-[50%] '>
                        {
                            featuredListings.length > 0 && <ListingCard listing={featuredListings[0]}></ListingCard>
                        }
                    </div>
                    <div className='w-[50%] flex justify-center items-center flex-wrap'>
                        {
                            featuredListings.slice(1,5).map(data => <ListingCard key={data._id} listing={data} ></ListingCard>)
                        }
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Home;