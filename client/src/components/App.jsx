import React from 'react';
import axios from 'axios';
import Description from './Description';
import Nav from './Nav';
import Map from './Map';
import Reservation from './Reservation';
import ReservationCollapse from './ReservationCollapse';
import styles from '../../../public/styles/App.css';

const randomNumber = () => {
  const num = Math.floor(Math.random() * 100);
  return num;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantInfo: {},
      hours: [],
      payments: [],
      additional: [],
      transform: 0,
      uncollapse: false,
      party: 'For 2',
      selectedDate: 'Fri, 4/19',
    };
    this.get = this.get.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleUncollapse = this.handleUncollapse.bind(this);
    this.getPartySize = this.getPartySize.bind(this);
    this.getDate = this.getDate.bind(this);
  }

  componentDidMount() {
    this.get();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getDate(date) {
    this.setState({
      selectedDate: date,
    });
  }

  getPartySize(e) {
    e.preventDefault();
    this.setState({
      party: e.target.value,
    });
  }

  handleScroll(e) {
    e.preventDefault();
    this.setState({
      transform: window.scrollY,
    });
  }

  handleUncollapse(e) {
    e.preventDefault();
    this.setState({
      uncollapse: true,
      transform: 0,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  get() {
    axios
      .get(`http://localhost:3000/api/reservation/id/${randomNumber()}`)
      .then(data => this.setState({
        restaurantInfo: data.data[0],
        hours: data.data[0].restaurantHoursOfOperation,
        payments: data.data[0].restaurantPaymentOptions,
        additional: data.data[0].restaurantAdditional,
      }))
      .catch(err => console.error(err));
  }

  render() {
    const {
      restaurantInfo,
      hours,
      payments,
      additional,
      transform,
      uncollapse,
      party,
      selectedDate,
    } = this.state;
    if (transform > 390) {
      return (
        <div className={styles.masterContainer}>
          <div className={styles.mainContainer}>
            <Nav />
          </div>
          <div className={styles.reservationMod}>
            <ReservationCollapse data={restaurantInfo} handleUncollapse={this.handleUncollapse} party={party} selectedDate={selectedDate} />
            <div className={styles.mapDescriptionContainer}>
              <Map />
              <Description
                data={restaurantInfo}
                hours={hours}
                payments={payments}
                additional={additional}
              />
            </div>
          </div>
        </div>
      );
    }
    if (uncollapse === true) {
      return (
        <div className={styles.masterContainer}>
          <div className={styles.mainContainer}>
            <Nav />
            <div className={styles.hiddenContainer} />
          </div>
          <div className={styles.reservationMod}>
            <Reservation data={restaurantInfo} getParty={this.getPartySize} getDate={this.getDate} />
            <div className={styles.mapDescriptionContainer}>
              <Map />
              <Description
                data={restaurantInfo}
                hours={hours}
                payments={payments}
                additional={additional}
              />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.masterContainer}>
        <div className={styles.mainContainer}>
          <Nav />
          <div className={styles.hiddenContainer} />
        </div>
        <div className={styles.reservationMod}>
          <Reservation data={restaurantInfo} getParty={this.getPartySize} getDate={this.getDate} />
          <div className={styles.mapDescriptionContainer}>
            <Map />
            <Description
              data={restaurantInfo}
              hours={hours}
              payments={payments}
              additional={additional}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
