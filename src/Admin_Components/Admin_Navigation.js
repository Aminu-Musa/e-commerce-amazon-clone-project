import logo from '../images/logo_colored.png'
import { Outlet, NavLink, Link } from 'react-router-dom';
import { IoStorefrontSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { VscNewFolder } from "react-icons/vsc";
import { FaUserPlus } from "react-icons/fa6";
import { useState } from 'react';

// =================================================================
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";




function Admin_Navigation() {

const [navBtn, setnavBtn] = useState(false)
const [navlink, setNavlink] = useState(true)

const handleClick = ()=>{
  setnavBtn(!navBtn)
  setNavlink(!navlink)
}




return (
<div className='App dashboard-container'>

<div className="dashboard-menu">

<div className="open_close_menu" onClick={handleClick}>
{navBtn ? <HiOutlineMenuAlt2 size={30} className='open_menu'/>:
<IoMdClose size={30} className='close_menu'/>}

</div>
      <div className="menu">
        <ul className='nav-menu'>
          <li className='nav-item' > <NavLink to="dashboard" className='nav-link' onClick={()=> setNavlink(!navlink)} > <IoHome/> {navlink? "Dashboard": null}  </NavLink> </li>
          <li className='nav-item' > <NavLink to="product" className='nav-link' onClick={()=> setNavlink(!navlink)}> <IoStorefrontSharp/>{navlink? "Products": null}   </NavLink> </li>
          <li className='nav-item' > <NavLink to="user" className='nav-link' onClick={()=> setNavlink(!navlink)}><FaUserGroup/> {navlink? "Users ": null}  </NavLink> </li>
          <li className='nav-item' > <NavLink to="create-product" className='nav-link' onClick={()=> setNavlink(!navlink)}> <VscNewFolder/>{navlink? "Create product": null}    </NavLink> </li>
          <li className='nav-item' > <NavLink to="create-user" className='nav-link' onClick={()=> setNavlink(!navlink)}> <FaUserPlus/> {navlink? "Create user ": null}  </NavLink> </li>
        </ul>
      </div>




  {/* <div className="logout">
    <div className="brand">
        <img src={logo} alt="" />
    </div>
        {<Link to="/" className='link'>Log Out</Link>}
  </div> */}

</div>

    <div className='pages'>
      <Outlet/>
    </div>


  </div>

  )
}

export default Admin_Navigation