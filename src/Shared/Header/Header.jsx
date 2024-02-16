import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png" 

const Header = () => {
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/news'>News</NavLink></li>
    <li><NavLink to='/destination'>Destination</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-transparent">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <div className=" w-24">
    <img src={logo} alt="travel guru" />
    </div>
  </div>
  <div className="navbar-end text-black hidden lg:flex">
    <ul className="menu menu-horizontal space-x-4 px-1">
      {navLinks}
    </ul>
  </div>
  <div className="ml-4">
    <NavLink to="/login">
    <button className="px-8 bg-yellow-500 btn border-none">Login</button>
    </NavLink>
    
  </div>
</div>
);
};

export default Header;