import { useParams } from "react-router-dom";
import ListingCard from "../Components/ListingCard";


const CategoryList = () => {
    //useParams
    const {category} = useParams()
    console.log(category);



    return (
        <div>
            
            {/* <ListingCard ></ListingCard> */}
        </div>
    );
};

export default CategoryList;