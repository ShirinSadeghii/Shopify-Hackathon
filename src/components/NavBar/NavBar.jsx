import './NavBar.scss'
import Logo from '../../assets/shopify-logo.png';

function NavBar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={Logo} alt="logo"></img>
        </nav>
    )
}

export default NavBar