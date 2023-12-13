import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jpg"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {

    //navigate
    const navigate = useNavigate()

    //location for navigate
    const location = useLocation()
    console.log(location);

    //get context
    const { createUser } = useContext(AuthContext)

    //register
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const password = form.password.value
        console.log(name, email, image, password);

        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                toast.success('user created successfully')
                form.reset()

                //update profile
                updateProfile(user, {
                    displayName: name,
                    photoURL: image
                })
                    .then(() => {
                        navigate(location?.state ? location.state : "/")
                    })
                    .catch(e => {
                        console.log(e);
                    })
            })
            .catch(e => {
                toast.error(e.message.slice(10, e.message.length))
            })
    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse  w-full">
                <img
                    src={loginImg}
                    className="hidden md:block lg:w-1/2 h-[80vh] rounded-lg shadow-2xl"
                />
                <div className="w-full">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                required
                                name="name"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="imgbb/tanvir.jpg"
                                className="input input-bordered"
                                required
                                name="image"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                                name="email"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                                name="password"
                            />
                        </div>

                        <div className='mt-2'>
                            <input type="checkbox" required name='terms' className='mr-3' />
                            <label htmlFor="">Allow terms and condition</label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff4605] text-white">Register</button>
                        </div>
                    </form>

                    <p className=" font-semibold px-7 italic">Already have an account <Link to={"/login"} className="text-[#ff4605] underline">login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;