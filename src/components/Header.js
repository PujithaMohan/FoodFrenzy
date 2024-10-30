import logo from '../logo.jpg';
import Title from './Title';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div >
    );
};

export default Header;