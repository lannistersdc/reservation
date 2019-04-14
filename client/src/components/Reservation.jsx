import React from 'react';
import SVG from 'react-inlinesvg';
import { Spinner } from 'reactstrap';
import ReservationParty from './ReservationParty';
import ReservationTime from './ReservationTime';
import Availability from './Availability';
import Calendar from './Calendar';
import styles from '../../../public/styles/Reservation.css';
import spinnerStyle from '../../../public/styles/Spinner.css';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTime: false,
      loading: false,
    };
    this.handleSelectTime = this.handleSelectTime.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    setTimeout(() => this.handleSelectTime(e), 1000);
  }

  handleSelectTime(e) {
    e.preventDefault();
    this.setState({
      selectTime: true,
    });
  }

  render() {
    const { selectTime, loading } = this.state;
    const { data } = this.props;
    if (selectTime === true) {
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
                  <div className={styles.dateContainer}>
                    <div className={styles.dateHeader}>Date</div>
                    <div>
                      <Calendar />
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
                <span>Booked {data.restaurantBookCount} times today</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (loading === true) {
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
                  <div className={styles.dateContainer}>
                    <div className={styles.dateHeader}>Date</div>
                    <div>
                      <Calendar />
                    </div>
                  </div>
                  <ReservationTime />
                </div>
              </div>
            </div>
            <div className={styles.spinnerContainer}>
              <Spinner className={spinnerStyle.spinner} />
            </div>
            <div className={styles.bookCountContainer}>
              <div>
                <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/bookCount.svg" />
              </div>
              <div className={styles.bookCountInfo}>
                <span>Booked {data.restaurantBookCount} times today</span>
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
                <div className={styles.dateContainer}>
                  <div className={styles.dateHeader}>Date</div>
                  <div>
                    <Calendar />
                  </div>
                </div>
                <ReservationTime />
              </div>
            </div>
          </div>
          <button type="button" className={styles.button} onClick={this.handleLoading}>Find a Table</button>
          <div className={styles.bookCountContainer}>
            <div>
              <SVG src="https://s3-us-west-1.amazonaws.com/open-table-reservation-svg/bookCount.svg" />
            </div>
            <div className={styles.bookCountInfo}>
              <span>Booked {data.restaurantBookCount} times today</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
