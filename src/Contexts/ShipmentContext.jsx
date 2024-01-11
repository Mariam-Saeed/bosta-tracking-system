/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { formatDate } from '../helpers';

const URL = 'https://tracking.bosta.co/shipments/track/';
const ShipmentContext = createContext();

//* 7234258, 13737343, 67151313
function ShipmentProvider({ children }) {
  const [shipmentNo, setShipmentNo] = useState(67151313);
  const [orderStatus, setOrderStatus] = useState('');
  const [progressValue, setProgressValue] = useState(0);
  const [lastDate, setLastDate] = useState({});

  async function fetchShipmentDetails(shipmentNo) {
    try {
      const res = await fetch(`${URL}${shipmentNo}`);
      const data = await res.json();
      setOrderStatus(
        data.CurrentStatus.state.toLowerCase().replaceAll('_', '-')
      );
      setProgressValue(orderStatus === 'delivered' ? 100 : 75);
      setLastDate(formatDate(data.CurrentStatus.timestamp));
      // const date = formatDate(data.CurrentStatus.timestamp);
      // console.log(date);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ShipmentContext.Provider
      value={{
        shipmentNo,
        setShipmentNo,
        orderStatus,
        progressValue,
        lastDate,
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
