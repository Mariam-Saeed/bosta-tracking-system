import logo from '../assets/imgs/bosta-logo.png';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt='bosta-logo' className='logo' />
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>Contact Sales</a>
          </li>
          <li>
            <a href='#'>Track Shipment</a>
            <form className='drop-down'>
              <input type='text' value={1234} />
              <button>
                <FaSearch />
              </button>
            </form>
          </li>
          <li>
            <a href='#'>Log In</a>
          </li>
          <li>
            <a href='#'>En</a>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </>
  );
}

export default Navbar;
