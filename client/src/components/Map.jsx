import React from 'react';
import SVG from 'react-inlinesvg';
// import MapIcon from '../../../public/svg/map-icon.svg';
import styles from '../../../public/styles/Map.css';

const Map = props => (
  <div className={styles.default}>
    <div className="reservationMapContainer">
      <div className={styles.image}>
        <img src="https://i.imgur.com/nThGa2z.png" height="156 px" width="310 px" />
      </div>
      <div className={styles.reservationMapStreetContainer}>
        <div>
          <SVG src={"https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/map-icon.svg"} />
        </div>
        <div className={styles.reservationMapStreet}>
          <a id="reservationMapStreetLink" href="javascript:void(0)">
            <span>5631 N Figueroa St Los Angeles, CA 90042-4101</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Map;
