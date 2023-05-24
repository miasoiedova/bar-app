import logo from '../assets/Logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='logotype'className='logo'/>
        </header>
    )
}

export default Header;