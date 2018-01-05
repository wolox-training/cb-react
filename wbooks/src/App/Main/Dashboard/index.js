import React from 'react';
import Filter from './Filter';
import BooksList from './BooksList';
import './styles.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelection : '',
      filterText : '',
    };
  }

  handleFilterSubmit = (filterSelection, filterText) => {
    this.setState({
      filterSelection : filterSelection,
      filterText : filterText,
    });
  }

  render() {

    return (
      <div className='main-content'>
        <Filter
          onFilterSubmit={this.handleFilterSubmit}
        />
        <BooksList
          books={this.props.books}
          filterSelection={this.state.filterSelection}
          filterText={this.state.filterText} />
      </div>
    )
  }
}

export default Dashboard;
