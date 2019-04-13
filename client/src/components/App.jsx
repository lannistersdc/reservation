import React from 'react';
import axios from 'axios';
import Description from './Description';
import Nav from './Nav';
import Map from './Map';
import Reservation from './Reservation';
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
    };
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get();
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
    } = this.state;
    return (
      <div /* className={styles.masterContainer} */>
        {/* <div className={styles.mainContainer}> */}
          {/* <Nav /> */}
        {/* </div> */}
        <div className={styles.reservationMod}>
          <Reservation />
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
