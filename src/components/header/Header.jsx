import './Header.css'
import { FcSearch } from 'react-icons/fc';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
 

    return <div className="Header">
        {/* <img className='logo' src={logo} /> */}
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h2>E-Bazar.com</h2>
        <div className='search-box'>
            <input className='search' style={{marginLeft: "20px" ,width: "450px", padding: "10px 10px"}} placeholder='Search here' />

            <FcSearch className='iconSearch' />
        </div>
        </div>
 

        <ul className='ul'>
            <Link className='li' to="/">
                <li > Home </li>
            </Link>

            <Link className='li' to="/product">
                <li  > Products</li>
            </Link>

            <Link className='li' to="about">
                <li >About </li>

            </Link>
            <Link className='li' to="/cart">

                <li >Contact us </li>
            </Link>

        </ul>
        <Link className='li' to="/cart">
        <button className='button'>
            <ShoppingCartIcon/>
            </button>
            </Link>
    </div>
}
export default Header