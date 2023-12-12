import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ProductForm = ({ handleSubmit }) => {

    //aos useEffect
    useEffect(() => {
        AOS.init({
            duration: 1600, // Animation duration 

        });
    }, []);



    return (
        <div>
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold">Add <span className="text-[#ff4605]">Listing!</span></h1>
                        <p className="py-6 text-lg">Ready to enhance your listing experience? What awesome features would you like in your listing to make every drive <span className="text-[#ff4605] font-bold">unforgettable?</span></p>
                    </div>
                    <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 p-10" data-aos="fade-up">
                        <form onSubmit={handleSubmit} className="card-body" data-aos="fade-right">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Listing Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Toyota Avalon" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Listing Image</span>
                                </label>
                                <input type="text" name='image' placeholder="imgbb/toyota.png" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name='brand' placeholder="BMW" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Car Type</span>
                                </label>
                                <input type="text" name='type' placeholder="SUV" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' placeholder="" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name='rating' placeholder="4" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <textarea className="border-2 p-3 rounded-lg" name='details' rows="4" ></textarea>
                            </div>
                            <div className='mt-2'>
                                <input type="checkbox" name='featured' className='mr-3' /> 
                                <label htmlFor="">Featured</label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline bg-[#ff4605] text-white">Add Listing</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;