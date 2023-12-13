import { useContext } from "react";
import {
    AiOutlineGoogle
  } from "react-icons/ai";
import { AuthContext } from "../AuthProvider/Authprovider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Login = () => {

    //navigate
    const navigate = useNavigate()

    //get googleLogin from a context
    const {handleGoogleLogin} = useContext(AuthContext)


    //handleLogin

    const handleLogin = (media)=>{
        media()
        .then(res =>{
            const user = res.user
            console.log(user);
            toast.success('login successfull')
            navigate("/")
        })
        .catch(e =>{
            toast.error(e.message.slice(10,e.message.length))
        })
    }



  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse  w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="hidden md:block lg:w-1/2 h-[80vh] rounded-lg shadow-2xl"
        />
        <div className="w-full">
          <form className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ff4605] text-white">Login</button>
            </div>
          </form>


          <h2 className="font-bold text-2xl divider px-7 ">OR</h2>
            <div className="px-7 py-5">
                <button onClick={()=> handleLogin(handleGoogleLogin)} className="btn btn-outline bg-[#ff4605] text-white w-full"><AiOutlineGoogle></AiOutlineGoogle>Google</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
Login;
