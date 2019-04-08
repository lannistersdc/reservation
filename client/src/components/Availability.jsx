import React from 'react';
import styles from '../../../public/styles/Availability.css';

const Availability = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <span>Select a time:</span>
    </div>
    <div className={styles.timeSelectionGrid}>
      <div className={styles.default}>
        <span>6:30 PM</span>
      </div>
      <div className={styles.default}>
        <span>6:45 PM</span>
      </div>
      <div className={styles.default}>
        <span>7:00 PM</span>
      </div>
      <div className={styles.default}>
        <span>7:15 PM</span>
      </div>
      <div className={styles.default}>
        <span>7:30 PM</span>
      </div>
    </div>
  </div>
);

export default Availability;
