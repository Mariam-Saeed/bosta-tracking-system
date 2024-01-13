import { useShipment } from '../Contexts/ShipmentContext';
import logo from '../assets/imgs/bosta-logo.png';
import { FaSearch } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Navbar() {
  const [isEng, setIsEng] = useState(true);
  const { shipmentNo, setShipmentNo, fetchShipmentDetails } = useShipment();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchShipmentDetails(shipmentNo);
  };
  const { t, i18n } = useTranslation('data');
  return (
    <>
      <nav>
        <img src={logo} alt='bosta-logo' className='logo' />
        <ul>
          <li>
            <a href='#'>{t('nav.home')}</a>
          </li>
          <li>
            <a href='#'>{t('nav.pricing')}</a>
          </li>
          <li>
            <a href='#'>{t('nav.contact')}</a>
          </li>
          <li className='track-shipment'>
            <a href='#'>{t('nav.track')}</a>
            <form className='drop-down gray-border' onSubmit={handleSubmit}>
              <label>{t('nav.trackDrop')}</label>
              <input
                type='text'
                value={shipmentNo}
                onChange={(e) => setShipmentNo(e.target.value)}
                placeholder={t('nav.placeholder')}
                className='gray-border'
              />
              <button>
                <FaSearch />
              </button>
            </form>
          </li>
          <li>
            <a href='#'>{t('nav.login')}</a>
          </li>
          <li>
            <a
              href='#'
              onClick={() => {
                i18n.changeLanguage(isEng ? 'ar' : 'en');
                setIsEng((value) => !value);
              }}
            >
              {isEng ? 'Ar' : 'En'}
            </a>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </>
  );
}

export default Navbar;
