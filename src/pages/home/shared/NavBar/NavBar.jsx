import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch( error => console.log(error))
    }


    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>

    return (
        <div>
            <div className="navbar h-28 mb-3 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-lg text-purple-500 font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-lg text-purple-500 font-bold menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    { 
                        user?.email ?
                        <>
                            <Link to="/bookings" className="text-lg font-bold text-purple-500" >My Bookings</Link>
                            <button onClick={handleLogOut} className="ml-4 btn btn-primary btn-outline">Log Out</button>
                        </> 
                        : <Link to="/login" className="btn btn-error btn-outline">Login</Link>
                    }
                    <button className="ml-4 btn btn-outline btn-warning">Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;