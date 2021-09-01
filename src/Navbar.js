import { NavLink } from "react-router-dom";
import './Navbar.css';
function Navbar(){
    return (
        <nav class="navbar navbar-dark bg-secondary custom-nav">
            <NavLink exact to='/' className="nav-link" >Home</NavLink>
            <NavLink exact to='/login' className="nav-link" >Login</NavLink>
            <NavLink exact to='/signUp' className="nav-link" >Sign Up</NavLink>
            <NavLink exact to='/contactUs' className="nav-link">Contact Us</NavLink>
      </nav>
    );
}
export default Navbar;