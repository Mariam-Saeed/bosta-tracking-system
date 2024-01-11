import Navbar from './Components/Navbar';
import ShimpentTracking from './Components/ShimpentTracking';
import { ShipmentProvider } from './Contexts/ShipmentContext';

function App() {
  return (
    <ShipmentProvider>
      <Navbar />
      <ShimpentTracking />
    </ShipmentProvider>
  );
}

export default App;
