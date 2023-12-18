import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MobileNav = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="md:hidden">
      <div className="navbar bg-[#1a1f26] px-8 py-5">
        <div className="flex-1">
          <Link to={"/"}>
            <div className="flex text-white items-center gap-3">
              <img src={logo} className="w-20 rounded-full" alt="logo" />
              <h2 className="font-extrabold  text-2xl">
                Drive<span className="text-[#ff4605]">-Ease</span>
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex-none gap-2">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-16 rounded-full">
                    <img
                      alt={`${user.displayName} image`}
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                        <button onClick={()=> logOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to={"/login"} className="btn btn-outline text-[#ff4605] w-24">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
