import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const Navbar = () => {

  const {user, logout}=useContext(AuthContext)

  const navigate = useNavigate();

  const onLogout= ()=>{

    navigate('/login',{
      replace:true
    })
    
    logout();
    
  }
  

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link' to='/marvel'>
            Marvel
          </NavLink>

          <NavLink className='nav-item nav-link' to='/dc'>
            DC
          </NavLink>

          <NavLink className='nav-item nav-link' to='/search'>
            Search
          </NavLink>

          {/* <NavLink className='nav-item nav-link' to='/hero'>
            Hero
          </NavLink> */}
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>{user?.name}</span>
          <button aria-label="button" onClick={onLogout} className='nav-item nav-link btn'>Logout</button>
        </ul>
      </div>
    </nav>
  );
};
