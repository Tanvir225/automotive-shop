import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'

const Team = () => {
    return (
        <div className="grid mt-16 grid-cols-1 gap-10 justify-center container mx-auto md:grid-cols-2 lg:grid-cols-3 px-5 ">

            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border h-[60vh] rounded-xl">
                <div className="relative mt-5  overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-full w-24 mx-auto">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" className='w-full h-full' />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Natalie Paisley
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>
                <div className="flex text-xl justify-center p-6 pt-2 gap-7">
                    <a href="#facebook">
                    
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="#twitter">
                     
                        <FaTwitter></FaTwitter>
                    </a>
                    <a href="#instagram">   
                     
                        <FaInstagram></FaInstagram>
                    </a>
                </div>
            </div>

            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border h-[60vh] rounded-xl">
                <div className="relative mt-5  overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-full w-24 mx-auto">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture"  className='w-full h-full'/>
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Natalie Paisley
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>
                <div className="flex text-xl justify-center p-6 pt-2 gap-7">
                    <a href="#facebook">
                    
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="#twitter">
                     
                        <FaTwitter></FaTwitter>
                    </a>
                    <a href="#instagram">   
                     
                        <FaInstagram></FaInstagram>
                    </a>
                </div>
            </div>

            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border h-[60vh] rounded-xl">
                <div className="relative mt-5  overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-full w-24 mx-auto">
                    <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture"  className='w-full h-full'/>
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Natalie Paisley
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>
                <div className="flex text-xl justify-center p-6 pt-2 gap-7">
                    <a href="#facebook">
                    
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="#twitter">
                     
                        <FaTwitter></FaTwitter>
                    </a>
                    <a href="#instagram">   
                     
                        <FaInstagram></FaInstagram>
                    </a>
                </div>
            </div>


        </div>
    );
};

export default Team;