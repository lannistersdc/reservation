import React from 'react';
import styles from '../../../public/styles/Nav.css';

const Nav = () => (
  <div className={styles.footer}>
    <ul className={styles.list}>
      <li className="overview">
        <a className="overviewText" href="javascript:void(0)">
          <span>Overview</span>
        </a>
      </li>
      <li className="photos">
        <a className="photosText" href="javascript:void(0)">
          <span>Photos</span>
        </a>
      </li>
      <li className="menu">
        <a className="menuText" href="javascript:void(0)">
          <span>Menu</span>
        </a>
      </li>
      <li className="reviews">
        <a className="reviewsText" href="javascript:void(0)">
          <span>Review</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Nav;
