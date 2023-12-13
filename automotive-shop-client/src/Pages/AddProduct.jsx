
import { Helmet } from 'react-helmet-async';
import ProductForm from '../Components/ProductForm';
import toast from 'react-hot-toast';

const AddProduct = () => {



    //handle submit 
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const image = form.image.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const details = form.details.value
        const featured = form.featured.checked

        const listing = {
            name,
            image,
            brand,
            type,
            price,
            rating,
            details,
            featured
        }
        console.log(listing);

        fetch('http://localhost:5000/listings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(listing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    form.reset()
                    toast.success('listing added successfully')
                }
            })
    }



    return (
        <div>
             
           
            <ProductForm handleSubmit={handleSubmit}></ProductForm>
        </div>
    );
};


export default AddProduct;