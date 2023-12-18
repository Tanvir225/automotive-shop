
import { useEffect, useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai"
import swal from 'sweetalert';
import Swipper from '../Components/Swipper/Swipper';

const Cart = () => {

    //state for manage cart
    const [cart, setCart] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/cart')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    //handle delete
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this listing!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/cart/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                swal("Your listing has been deleted!", {
                                    icon: "success",
                                })

                            }

                            //remaining cartItem
                            const remainingCartItem = cart.filter(listing => listing._id !== id)
                            setCart(remainingCartItem)
                        })


                }
            });
        console.log(id);
    }

    return (
        <div className='mx-auto container mt-16'>
            <h2 className="text-2xl font-bold text-center divider">Total Listing in<span>Cart : </span>{cart.length}</h2>

            <div className='flex flex-col-reverse md:flex-row justify-between  gap-10 px-5'>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 md:w-[70%]'>
                    {
                        cart.length > 0 ? cart.map(listing =>
                            <div key={listing._id} className="card bg-base-100 shadow-xl image-full">
                                <figure><img src={listing.image} alt={`${listing.name} image`} className='w-full' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{listing.name}</h2>
                                    <p>{listing.brand} || {listing.type}</p>
                                    <p className=' font-bold'>{listing.price}$</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleDelete(listing._id)} className="btn btn-outline bg-red-600 text-white text-lg"><AiOutlineDelete></AiOutlineDelete></button>
                                    </div>
                                </div>
                            </div>) :
                            <div>
                                <p className='text-2xl font-bold text-center'>Your cart is <span className='text-[#ff4605]'>empty</span></p>
                            </div>
                    }
                </div>

                <div className='md:w-[30%]'>
                    {
                        cart.length > 0 && <h2 className="font-bold text-center text-xl divider">Listing<span className='text-[#ff4605]'>Name</span></h2>
                    }
                    {
                        cart.length > 0 && cart.map((listing, index) =>
                            <div key={listing._id} className='bg-blue-100 shadow-md p-3'>

                                <ul className='font-bold text-lg'>
                                    <li><span className='text-[#ff4605]'>{index + 1}</span> {listing.name}</li>
                                </ul>
                                
                            </div>
                        )
                    }
                    {
                        <div className='bg-blue-100 py-5 rounded-md divider w-full text-lg'>
                            <span className='text-[#ff4605] font-bold text-lg disabled'>Total :</span>
                        {
                            cart.reduce((preValue, currentValue) => {
                                return parseInt(preValue) + parseInt(currentValue.price )
                            },0) 
                        }  <span>$</span>
                    </div>
                    }
                </div>
            </div>

            <div className="mt-20">
                <Swipper></Swipper>
            </div>
        </div>
    );
};

export default Cart;