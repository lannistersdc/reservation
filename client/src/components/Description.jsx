import React from 'react';
import DescriptionMore from './DescriptionMore';
import DescriptionLess from './DescriptionLess';
import styles from '../../../public/styles/Description.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    };
    this.handleViewFalse = this.handleViewFalse.bind(this);
    this.handleViewTrue = this.handleViewTrue.bind(this);
  }

  handleViewFalse(e) {
    e.preventDefault();
    this.setState({
      view: true,
    });
  }

  handleViewTrue(e) {
    e.preventDefault();
    this.setState({
      view: false,
    });
  }

  render() {
    const { view } = this.state;
    if (view === true) {
      return (
        <div className={styles.backgroundColor}>
          <DescriptionLess />
          <DescriptionMore />
          <span className={styles.websiteLink} onClick={this.handleViewTrue}>
            <a href="javascript:void(0)">- View less</a>
          </span>
        </div>
      );
    }
    return (
      <div className={styles.backgroundColor}>
        <DescriptionLess />
        <span className={styles.websiteLink} onClick={this.handleViewFalse}>
          <a href="javascript:void(0)">+ View more</a>
        </span>
      </div>
    );
  }
}

export default Description;
