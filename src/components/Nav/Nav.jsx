import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom"    // para los botones


const Nav = ({onSearch}) =>{
    return(
<div>
<SearchBar onSearch={onSearch}></SearchBar>    
<button>
<NavLink to='/about'>About</NavLink> 
</button>
<button>
 <NavLink to='/home'>Home</NavLink> 
        </button>
</div>
    )
}


export default Nav;