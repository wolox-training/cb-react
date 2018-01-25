import React from 'react';

import Filter from './components/Filter';
import BooksList from './components/BooksList';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Filter />
        <BooksList />
      </div>
    );
  }
}

export default Dashboard;
