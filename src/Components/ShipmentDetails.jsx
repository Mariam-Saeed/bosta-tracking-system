import { useShipment } from '../Contexts/ShipmentContext';
import question from '../assets/imgs/question.webp';
import { useTranslation } from 'react-i18next';

function ShipmentDetails() {
  const { isError, response } = useShipment();
  const { orderStatus } = response;
  const { t } = useTranslation('data');

  return (
    <div className='details-container'>
      <div className='delivery-details-table'>
        <h3>{t('shipmentDetails.details')}</h3>
        <table>
          <thead>
            <tr>
              <th>{t('shipmentDetails.table.titles.branch')}</th>
              <th>{t('shipmentDetails.table.titles.date')}</th>
              <th>{t('shipmentDetails.table.titles.time')}</th>
              <th>{t('shipmentDetails.table.titles.details')}</th>
            </tr>
          </thead>
          {isError === false && (
            <tbody>
              <tr>
                <td>{t('shipmentDetails.table.data.branch')}</td>
                <td>05/04/2020</td>
                <td>12:30 pm</td>
                <td>{t('shipmentDetails.table.data.created')}</td>
              </tr>
              <tr>
                <td>{t('shipmentDetails.table.data.branch')}</td>
                <td>05/04/2020</td>
                <td>12:30 pm</td>
                <td>{t('shipmentDetails.table.data.received')}</td>
              </tr>
              <tr>
                <td>{t('shipmentDetails.table.data.branch')}</td>
                <td>05/04/2020</td>
                <td>12:30 pm</td>
                <td>{t('shipmentDetails.table.data.delivery')}</td>
              </tr>
              <tr>
                <td>{t('shipmentDetails.table.data.branch')}</td>
                <td>05/04/2020</td>
                <td>12:30 pm</td>
                <td
                  style={{
                    color:
                      orderStatus === 'delivered'
                        ? '#00ad21'
                        : orderStatus === 'cancelled'
                        ? '#ff071b'
                        : '#ffb12b',
                    fontSize: '18px',
                  }}
                >
                  {orderStatus === 'delivered'
                    ? t('shipmentTracking.status.delivered')
                    : orderStatus === 'cancelled'
                    ? t('shipmentTracking.status.cancelled')
                    : t('shipmentTracking.status.notDelivered')}
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <div className='delivery-address-container'>
        <h3>{t('shipmentDetails.addr')}</h3>
        {isError === false && (
          <p className='gray-border address'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
            accusantium.
          </p>
        )}
        <div className='question-container gray-border'>
          <div>
            <p>{t('shipmentDetails.question')}</p>
            <button>{t('shipmentDetails.qBtn')}</button>
          </div>
          <img src={question} alt='question-img' />
        </div>
      </div>
    </div>
  );
}

export default ShipmentDetails;
