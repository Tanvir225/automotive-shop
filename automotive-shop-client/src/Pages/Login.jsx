import { useContext } from "react";
import {
  AiOutlineGoogle
} from "react-icons/ai";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jpg"

const Login = () => {


  //navigate
  const navigate = useNavigate()

  //location for navigate
  const location = useLocation()
  console.log(location);

  //get googleLogin and password from a context
  const { handleGoogleLogin, logUser } = useContext(AuthContext)


  //login functionality
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);

    logUser(email, password)
      .then(res => {
        const user = res.user
        console.log(user);
        toast.success('user login successfully')
        form.reset()
        navigate(location?.state ? location.state : "/")
      })
      .catch(e => {
        toast.error(e.message.slice(10, e.message.length))
      })
  }
  //handleLogin
  const handleLogin = (media) => {
    media()
      .then(res => {
        const user = res.user
        console.log(user);
        toast.success('login successful')
        navigate(location?.state ? location.state : "/")
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

          <p className="text-right font-semibold px-7 italic">Don't have any account <Link to={"/register"} className="text-[#ff4605] underline">register</Link ></p>

          <h2 className="font-bold text-2xl divider px-7 ">OR</h2>
          <div className="px-7 py-5">
            <button onClick={() => handleLogin(handleGoogleLogin)} className="btn btn-outline bg-[#ff4605] text-white w-full"><AiOutlineGoogle></AiOutlineGoogle>Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
Login;
