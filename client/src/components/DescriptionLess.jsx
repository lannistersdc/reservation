import React from 'react';
import SVG from 'react-inlinesvg';
import styles from '../../../public/styles/Description.css';

const DescriptionLess = (props) => {
  const {
    data,
    hours,
    payments,
    additional,
  } = props;
  return (
    <div>
      <div className={styles.default}>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/cross-street-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Cross Street</span>
              <div>
                <span>{data.restaurantCrossStreet}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/neighborhood.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Neighborhood</span>
              <div>
                <span>{data.restaurantNeighborhood}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/hours-of-operation-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Hours of operation</span>
              <div>
                <span>
                  {hours.map(hour => (
                    <div>{hour}</div>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/cuisines-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Cuisines</span>
              <div>
                <span>{data.restaurantCuisine}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/dining-style-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Dining Style</span>
              <div>
                <span>{data.restaurantDiningStyle}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/dress-code-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Dress Code</span>
              <div>
                <span>{data.restaurantDressCode}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/parking-details-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Parking Details</span>
              <div>
                <span>{data.restaurantParkingDetails}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/payment-options-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Payment Options</span>
              <div>
                <span>
                  {payments.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/chef-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Executive Chef</span>
              <div>
                <span>{data.restaurantChef}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/additional-info-icon.svg" />
          </div>
          <div className={styles.infoContainer}>
            <div>
              <span className={styles.infoHeader}>Additional</span>
              <div>
                <span>
                  {additional.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionLess;
