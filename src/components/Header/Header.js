import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <NavLink to="/home" >Home</NavLink>
            <NavLink to="/products" >Products</NavLink>
            <NavLink to="/favorites" >Favorites</NavLink>
            <NavLink to="/cart" >My Cart</NavLink>
            <NavLink to="/form" >Login</NavLink>
        </div>
    )
}

export default Header;