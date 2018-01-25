import React from 'react';

import Filter from './components/Filter';
import BooksList from './components/BooksList';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelection: '',
      filterText: ''
    };
  }

  handleFilterSubmit = (filterSelection, filterText) => {
    this.setState({
      filterSelection,
      filterText
    });
  };

  render() {
    return (
      <div>
        <Filter onFilterSubmit={this.handleFilterSubmit} />
        <BooksList />
      </div>
    );
  }
}

export default Dashboard;
