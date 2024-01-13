import { useShipment } from '../Contexts/ShipmentContext';
import { formatDate } from '../helpers';
import { useTranslation } from 'react-i18next';

function ShipmentTracking() {
  const { shipmentNo, isError, response } = useShipment();
  const { orderStatus, lastDate, expectedDate } = response;
  const { day: lastDay, formatedDate: lastFormatedDate } = formatDate(lastDate);
  const {
    dayNo: expectedDay,
    month: expectedMonth,
    yearNo: expectedYear,
  } = formatDate(expectedDate);
  const { t } = useTranslation('data');

  return (
    <div className='shipment-details'>
      <div className='shipment-data'>
        <p>
          {`${t('shipmentTracking.shipNo')} ${shipmentNo}`}
          <br></br>
          <span className={orderStatus}>
            {orderStatus === undefined
              ? ''
              : orderStatus === 'delivered'
              ? t('shipmentTracking.status.delivered')
              : orderStatus === 'cancelled'
              ? t('shipmentTracking.status.cancelled')
              : t('shipmentTracking.status.notDelivered')}
          </span>
        </p>
        <p>
          {t('shipmentTracking.last')}
          <br></br>
          <span>
            {lastDay === undefined ? '' : `${lastDay} ${lastFormatedDate}`}
          </span>
        </p>
        <p>
          {t('shipmentTracking.name')}
          <br></br> <span>{isError === false && 'Amazon'}</span>
        </p>
        <p>
          {t('shipmentTracking.expected')}
          <br></br>
          <span>
            {Number.isNaN(expectedDay) || expectedDate === null
              ? ''
              : `${expectedDay} ${expectedMonth} ${expectedYear}`}
          </span>
        </p>
      </div>
      <hr></hr>
      <div className='shipment-track'>
        <progress
          max={100}
          value={
            orderStatus === undefined
              ? 0
              : orderStatus === 'delivered'
              ? 100
              : 75
          }
          className={`shipment-${orderStatus}`}
        />
        {isError && (
          <p className='error-msg'>{t('shipmentTracking.errorMsg')}</p>
        )}
      </div>
    </div>
  );
}

export default ShipmentTracking;
