import { createContext, useContext, useState } from 'react';

const URL = 'https://tracking.bosta.co/shipments/track/';
const ShipmentContext = createContext();

function ShipmentProvider({ children }) {
  const [shipmentNo, setShipmentNo] = useState('');
  const [isError, setIsError] = useState();
  const [response, setResponse] = useState({});

  async function fetchShipmentDetails(shipmentNo) {
    try {
      const res = await fetch(`${URL}${shipmentNo}`);
      const data = await res.json();
      setIsError(false);
      setResponse({
        lastDate: data.CurrentStatus.timestamp,
        orderStatus: data.CurrentStatus.state
          .toLowerCase()
          .replaceAll('_', '-'),
        expectedDate: data.PromisedDate,
      });
      console.log(data);
    } catch (error) {
      setResponse({});
      setIsError(true);
      console.log(error);
    }
  }

  return (
    <ShipmentContext.Provider
      value={{
        shipmentNo,
        setShipmentNo,
        response,
        isError,
        fetchShipmentDetails,
      }}
    >
      {children}
    </ShipmentContext.Provider>
  );
}

function useShipment() {
  const context = useContext(ShipmentContext);
  if (context === undefined)
    throw new Error('Shipment context was used in the wrong place');
  return context;
}

export { ShipmentProvider, useShipment };
