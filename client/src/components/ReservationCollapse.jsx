/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import SVG from 'react-inlinesvg';
import styles from '../../../public/styles/Reservation.css';

class ReservationCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data,
      handleUncollapse,
      party,
      selectedDate,
    } = this.props;
    return (
      <div className={styles.default}>
        <div className={styles.header}>
          <h3>
            <span>Make a reservation</span>
          </h3>
        </div>
        <div className={styles.subcontainer}>
          <div className="combinedContainer">
            <div className={styles.combinedSelector} onClick={handleUncollapse}>
              {party}
              &nbsp;
              People on
              &nbsp;
              {selectedDate}
            </div>
          </div>
          <button type="button" className={styles.button} onClick={handleUncollapse}>Find a Table</button>
          <div className={styles.bookCountContainer}>
            <div>
              <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/bookCount.svg" />
            </div>
            <div className={styles.bookCountInfo}>
              <span>
                Booked
                &nbsp;
                {data.restaurantBookCount}
                &nbsp;
                times today
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationCollapse;
