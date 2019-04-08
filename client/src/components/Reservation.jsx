import React from 'react';
import SVG from 'react-inlinesvg';
import styles from '../../../public/styles/Reservation.css';
import ReservationParty from './ReservationParty';
import ReservationTime from './ReservationTime';
import Availability from './Availability';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTime: false,
    };
    this.handleSelectTime = this.handleSelectTime.bind(this);
  }

  handleSelectTime(e) {
    e.preventDefault();
    this.setState({
      selectTime: true,
    });
  }

  render() {
    if (this.state.selectTime === true) {
      return (
        <div className={styles.default}>
          <div className={styles.header}>
            <h3>
              <span>Make a reservation</span>
            </h3>
          </div>
          <div className={styles.subcontainer}>
            <div className="reservationContainer">
              <div className={styles.selectionContainer}>
                <ReservationParty />
                <div className={styles.dateTimeContainer}>
                  <div className="reservationDateContainer">
                    <div>Date</div>
                    <div>
                      <select className={styles.dateTimeSelector} />
                    </div>
                  </div>
                  <ReservationTime />
                </div>
              </div>
            </div>
            <div className="AvailabilityContainer">
              <Availability />
            </div>
            <div className={styles.bookCountContainer}>
              <div>
                <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/bookCount.svg" />
              </div>
              <div className={styles.bookCountInfo}>
                <span>Booked 15 times today</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.default}>
        <div className={styles.header}>
          <h3>
            <span>Make a reservation</span>
          </h3>
        </div>
        <div className={styles.subcontainer}>
          <div className="reservationContainer">
            <div className={styles.selectionContainer}>
              <ReservationParty />
              <div className={styles.dateTimeContainer}>
                <div className="reservationDateContainer">
                  <div>Date</div>
                  <div>
                    <select className={styles.dateTimeSelector} />
                  </div>
                </div>
                <ReservationTime />
              </div>
            </div>
          </div>
          <button type="button" className={styles.button} onClick={this.handleSelectTime}>Find a Table</button>
          <div className={styles.bookCountContainer}>
            <div>
              <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/bookCount.svg" />
            </div>
            <div className={styles.bookCountInfo}>
              <span>Booked 15 times today</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
