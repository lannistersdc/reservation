import React from 'react';
import styles from '../../../public/styles/Reservation.css';

const ReservationTime = () => (
  <div className={styles.timeContainer}>
    <div className={styles.timeHeader}>Time</div>
    <div className={styles.timeSelectionIconContainer}>
      <select className={styles.dateTimeSelector}>
        <option value="5:00 PM">5:00 PM</option>
        <option value="5:30 PM">5:30 PM</option>
        <option value="6:00 PM">6:00 PM</option>
        <option value="6:30 PM">6:30 PM</option>
        <option value="7:00 PM">7:00 PM</option>
        <option value="7:30 PM">7:30 PM</option>
        <option value="8:00 PM">8:00 PM</option>
        <option value="8:30 PM">8:30 PM</option>
        <option value="9:00 PM">9:00 PM</option>
        <option value="9:30 PM">9:30 PM</option>
        <option value="10:00 PM">10:00 PM</option>
      </select>
    </div>
  </div>
);

export default ReservationTime;
