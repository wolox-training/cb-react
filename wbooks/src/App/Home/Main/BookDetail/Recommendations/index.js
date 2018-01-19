import React from 'react';

import * as propTypes from '../../../../constants/propTypes';
import './styles.css';

class Recommendations extends React.Component {
  render() {
    return (
      <div className="section section-mid">
        <h2 className="section-title">Sugerencias</h2>
        <div className="mini-list">
          <div className="mini-book-cover no-cover" />
          <div className="mini-book-cover no-cover" />
          <div className="mini-book-cover no-cover" />
          <div className="mini-book-cover no-cover" />
        </div>
      </div>
    );
  }
}

Recommendations.propTypes = propTypes.booksPropTypes;

export default Recommendations;
