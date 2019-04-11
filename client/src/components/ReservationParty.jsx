import React from 'react';
import styles from '../../../public/styles/Reservation.css';

class ReservationParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'For 2',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    this.setState({
      selected: e.target.value,
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div className={styles.partyContainer}>
        <div className={styles.partyHeader}>Party Size</div>
        <div className={styles.selectionIconContainer}>
          <div className={styles.partySelectorDiv}>{selected}</div>
          <select onChange={this.handleSelect} className={styles.partySelector}>
            <option value="For 1">1</option>
            <option value="For 2" defaultValue="selected">2</option>
            <option value="For 3">3</option>
            <option value="For 4">4</option>
            <option value="For 5">5</option>
            <option value="For 6">6</option>
            <option value="For 7">7</option>
            <option value="For 8">8</option>
            <option value="For 9">9</option>
            <option value="For 10">10</option>
            <option value="For 11">11</option>
            <option value="For 12">12</option>
            <option value="For 13">13</option>
            <option value="For 14">14</option>
            <option value="For 15">15</option>
            <option value="For 16">16</option>
            <option value="For17">17</option>
            <option value="For 18">18</option>
            <option value="For 19">19</option>
            <option value="For 20">20</option>
          </select>
        </div>
      </div>
    );
  }
}
export default ReservationParty;
