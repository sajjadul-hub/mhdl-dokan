import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import navicon from '../../../assets/icons/navicon.png'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }
  const menuItems = <React.Fragment>
    <li><Link to='/' className=' rounded-lg font-semibold btn btn-ghost normal-case'>Home</Link></li>
    <li><Link to='/services' className=' font-semibold btn btn-ghost normal-case'>Products</Link></li>
    <li><Link to='/blog' className=' font-semibold btn btn-ghost normal-case'>Blog</Link></li>

    {
      user?.uid ?
        <>
          <li><Link to='/dashboard' className=' font-semibold btn btn-ghost normal-case '>Dashboard</Link></li>
          <li><button onClick={handleLogOut} className=' font-semibold btn btn-ghost normal-case'>Log Out</button></li>
          <li><p className=' font-semibold btn btn-ghost normal-case rounded-lg'>{user?.displayName}</p></li>
        </>
        : <>
          <li><Link to='/login' className=' font-semibold btn btn-ghost normal-case'>Login</Link></li>
          <li><Link to='/signup' className=' font-semibold btn btn-ghost normal-case rounded-lg'>Sign Up</Link></li>
        </>
    }
  </React.Fragment>
  return (
    <div className="navbar bg-gradient-to-r from-primary to-secondary flex justify-between rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              menuItems
            }
          </ul>
        </div>
        <img style={{ width: '60px', height: '60px' }} src={navicon} alt=''></img>
        <Link to='/' className="btn btn-ghost normal-case text-xl" href='/'>MHDL-Dokan</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {
            menuItems
          }
        </ul>
      </div>
      <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
  );
};

export default Navbar;