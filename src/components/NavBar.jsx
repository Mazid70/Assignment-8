import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Link = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "#131313CC",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "#131313CC",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
            };
          }}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/read"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#23BE0A" : "#131313CC",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
            };
          }}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="mt-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu text-lg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl sm:text-base lg:text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg ">{Link}</ul>
        </div>
        <div className="navbar-end space-x-4">
          <a className="btn bg-green-500 font-semibold text-white text-lg">Sign In</a>
          <a className="btn bg-sky-500 font-semibold text-white text-lg">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
