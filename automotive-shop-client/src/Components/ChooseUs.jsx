
import { FaAward,FaUserGraduate,FaDolly  } from "react-icons/fa";

const ChooseUs = () => {
    return (
        <div className="grid mt-16 grid-cols-1 gap-10 justify-center container mx-auto md:grid-cols-2 lg:grid-cols-3 text-center">
            <div className="space-y-5">
                <FaAward className="text-6xl mx-auto bg-[#ffece6] text-[#ff4605] rounded-full p-2"></FaAward>
                <h2 className="text-xl font-bold">Wide range of brands</h2>
                <p className="text-gray-500 w-[80%] mx-auto">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
            </div>
            <div className="space-y-5">
                <FaUserGraduate className="text-6xl mx-auto bg-[#ffece6] text-[#ff4605] rounded-full p-2"></FaUserGraduate>
                <h2 className="text-xl font-bold">Trusted by our clients</h2>
                <p className="text-gray-500  w-[80%] mx-auto">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
            </div>
            <div className="space-y-5">
                <FaDolly className="text-6xl mx-auto bg-[#ffece6] text-[#ff4605] rounded-full p-2"></FaDolly>
                <h2 className="text-xl font-bold">Fast & easy financing</h2>
                <p className="text-gray-500  w-[80%] mx-auto">We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
            </div>
        </div>
    );
};

export default ChooseUs;