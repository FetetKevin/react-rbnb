import './Navbar.css'
import Logo from '../../assets/images/airbnb-logo.svg';

export default function Navbar() {
    return(
        <nav className="navbar">
            <img className="logo" src={Logo} alt="logo" />
        </nav>
    )
}