import React from 'react';
import axios from 'axios';
import Description from './Description';
import Nav from './Nav';
import Map from './Map';
import Reservation from './Reservation';
import Calendar from './Calendar';
import styles from '../../../public/styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantInfo: null,
    };
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    axios
      .get('/api/reservation/id/1')
      .then(data => console.log(data.data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className={styles.masterContainer}>
        <Nav />
        <div className={styles.reservationMod}>
          <Reservation />
          <div className={styles.mapDescriptionContainer}>
            <Map />
            <Description />
            <form>
              {/* <Calendar /> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
