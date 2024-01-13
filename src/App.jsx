import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import ShipmentDetails from './Components/ShipmentDetails';
import ShipmentTracking from './Components/ShipmentTracking';
import { ShipmentProvider } from './Contexts/ShipmentContext';

import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation('data');
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);
  return (
    <ShipmentProvider>
      <Navbar />
      <ShipmentTracking />
      <ShipmentDetails />
    </ShipmentProvider>
  );
}

export default App;
