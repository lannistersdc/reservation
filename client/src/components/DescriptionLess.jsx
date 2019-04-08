import React from 'react';
import SVG from 'react-inlinesvg';
import styles from '../../../public/styles/Description.css';

const DescriptionLess = () => (
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
              <span>57th St</span>
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
              <span>Downtown</span>
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
              <span>Brunch Sat, Sun 10:00 am–2:30 pm Dinner Mon–Thu 5:30 pm–10:00 pm Fri, Sat 5:00 pm–11:00 pm Sun 5:00 pm–10:00 pm</span>
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
              <span>Californian</span>
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
              <span>Casual Dining</span>
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
              <span>Casual Dress</span>
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
              <span>There is metered parking in the front of the restaurant and a free 2 hour city parking lot in the rear</span>
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
              <span>AMEX, Diners Club, Discover, MasterCard, Visa</span>
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
              <span>Renata Rokicki</span>
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
              <span>Banquet, Bar/Lounge, Beer, Cocktails, Corkage Fee, Full Bar, Happy Hour, Non-Smoking, Outdoor dining, Patio/Outdoor Dining, Weekend Brunch, Wheelchair Access, Wine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DescriptionLess;
