import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../../../../../../services/auth-service';

import AddBookControl from './components/AddBookControl';
import DropDownMenu from './components/DropDownMenu';
import './styles.css';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  redirect() {
    this.setState({
      redirect: true
    });
  }

  logout = () => {
    Auth.logout();
    this.redirect();
  };

  render() {
    const notificationMenuItems = [
      {
        component: <span>not1</span>,
        action: null,
        id: 1
      },
      {
        component: <span>not2</span>,
        action: null,
        id: 2
      }
    ];
    const userMenuItems = [
      {
        component: <Link to="/perfil">Perfil</Link>,
        action: null,
        id: 1
      },
      {
        component: <span>Cerrar Sesión</span>,
        action: this.props.logout,
        id: 2
      }
    ];

    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="controls">
        <DropDownMenu className="control notifications" items={notificationMenuItems} />
        <AddBookControl />
        <DropDownMenu className="user-avatar" items={userMenuItems} />
      </div>
    );
  }
}

Controls.propTypes = {
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

export default Controls;
