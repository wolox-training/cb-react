import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class UserInfo extends Component {
  render() {
    return (
      <div className="section user-section">
        <div className="user-avatar big-avatar" />
        <div className="user-info">
          <span className="user-name">{`${this.props.info.first_name} ${this.props.info.last_name}`}</span>
          <span className="user-email">{this.props.info.email}</span>
          <div className="user-counters">
            <span className="user-counter">{`${this.props.info.rents_counter} leidos`}</span>
            <span className="user-counter">{`${this.props.info.comments_counter} comentarios`}</span>
          </div>
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  info: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    rents_counter: PropTypes.number,
    comments_counter: PropTypes.number
  })
};
