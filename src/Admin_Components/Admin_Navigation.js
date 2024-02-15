import logo from '../images/logo_colored.png'
import { Outlet, NavLink, Link } from 'react-router-dom';
import { IoStorefrontSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { VscNewFolder } from "react-icons/vsc";
import { FaUserPlus } from "react-icons/fa6";



function Admin_Navigation() {
  return (
    <div className='App dashboard-container'>
    <div className="dashboard-menu">
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul className='nav-menu'>
          <li className='nav-item' > <NavLink to="dashboard" className='nav-link' > <IoHome/>Dashboard</NavLink> </li>
          <li className='nav-item' > <NavLink to="product" className='nav-link' > <IoStorefrontSharp/> Products</NavLink> </li>
          <li className='nav-item' > <NavLink to="user" className='nav-link' ><FaUserGroup/>Users</NavLink> </li>
          <li className='nav-item' > <NavLink to="create-product" className='nav-link'> <VscNewFolder/>Create product</NavLink> </li>
          <li className='nav-item' > <NavLink to="create-user" className='nav-link'> <FaUserPlus/>Create user</NavLink> </li>
        </ul>
      </div>

        <div className="logout">
        <Link to="/" className='link'>Log Out</Link>
        </div>

    </div>
    <div className='pages'>

      <Outlet/>
    </div>
    </div>

  )
}

export default Admin_Navigation