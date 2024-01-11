// import { FaCheckCircle } from 'react-icons/fa';
// import { FaEnvelope } from 'react-icons/fa';
import { useShipment } from '../Contexts/ShipmentContext';

function ShimpentTracking() {
  const {
    fetchShipmentDetails,
    shipmentNo,
    orderStatus,
    progressValue,
    lastDate,
  } = useShipment();

  const { day, formatedDate } = lastDate;

  fetchShipmentDetails(shipmentNo);
  return (
    <div className='shipment-details'>
      <div className='shipment-data'>
        <p>
          Shipment number {shipmentNo}
          <br></br>
          <span className={orderStatus}>
            {orderStatus === 'delivered'
              ? 'Shipment delivered'
              : orderStatus === 'cancelled'
              ? 'Shipment cancelled'
              : 'Shipment was not delivered'}
          </span>
        </p>
        <p>
          Last Update
          <br></br> <span>{`${day} ${formatedDate}`}</span>
        </p>
        <p>
          Merchant Name
          <br></br> <span>Amazon</span>
        </p>
        <p>
          Delivery Date
          <br></br> <span>12-3-2024</span>
        </p>
      </div>
      <hr></hr>
      <div className='shipment-track'>
        <progress
          max={100}
          value={progressValue}
          className={`shipment-${orderStatus}`}
        />
        {/* <div className=''>
          <FaCheckCircle className='icon' />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className=''>
          <FaCheckCircle className='icon' />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className=''>
          <FaCheckCircle className='icon' />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className=''>
          <FaEnvelope className='icon' />
          <p>Lorem, ipsum dolor.</p>
        </div> */}
      </div>
    </div>
  );
}

export default ShimpentTracking;
