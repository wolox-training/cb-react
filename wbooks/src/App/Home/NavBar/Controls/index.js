import React from 'react';
import { Redirect } from 'react-router-dom';
import UserAvatar from '../../UserAvatar';
import NotificationControl from './NotificationControl';
import AddBookControl from './AddBookControl';
import DropDownMenu from './DropDownMenu';
import { Auth } from '../../../services/auth-service';
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
        component: 'not1',
        action: null,
        id: 1
      },
      {
        component: 'not2',
        action: null,
        id: 2
      }
    ];
    const userMenuItems = [
      {
        component: 'Perfil',
        action: null,
        id: 1
      },
      {
        component: 'Cerrar Sesión',
        action: this.logout,
        id: 2
      }
    ];

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="controls">
        <NotificationControl>
          <DropDownMenu items={notificationMenuItems} />
        </NotificationControl>
        <AddBookControl />
        <UserAvatar isMenu>
          <DropDownMenu items={userMenuItems} />
        </UserAvatar>
      </div>
    );
  }
}

export default Controls;
