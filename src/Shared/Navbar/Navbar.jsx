import navLogo from "../../assets/navLogo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="px-0 lg:px-16 pb-24 max-w-[1536px]"
      // style={}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Solutions</a>
                <ul className="p-2">
                  <li>
                    <a>Solutions 1</a>
                  </li>
                  <li>
                    <a>Solutions 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Features</a>
                <ul className="p-2">
                  <li>
                    <a>Features 1</a>
                  </li>
                  <li>
                    <a>Features 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a>About 1</a>
                  </li>
                  <li>
                    <a>About 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={navLogo} className="logo mr-2" alt="logo" />
          </Link>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-lg space-x-2">
              <li tabIndex={0}>
                <details>
                  <summary>Solutions</summary>
                  <ul className="p-2">
                    <li>
                      <a>Solutions 1</a>
                    </li>
                    <li>
                      <a>Solutions 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Features</summary>
                  <ul className="p-2">
                    <li>
                      <a>Features 1</a>
                    </li>
                    <li>
                      <a>Features 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>About</summary>
                  <ul className="p-2">
                    <li>
                      <a>About 1</a>
                    </li>
                    <li>
                      <a>About 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline font-bold text-base rounded-xl  text-[#0076ce] border-[1.5px] hover:bg-[#0076ce] w-16 sm:w-auto">
            Login
          </a>
          <a className="btn bg-[#0076ce] hover:bg-[#0076ce] text-white font-bold  text-base rounded-xl ml-4 w-16 sm:w-auto">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
