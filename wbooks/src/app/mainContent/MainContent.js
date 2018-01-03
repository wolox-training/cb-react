import React from 'react';
import Filter from './filter/Filter';
import BooksList from './booksList/BooksList';
import './MainContent.css';

class MainContent extends React.Component {
  render(){
    return (
      <div className='main-content'>
        <Filter />
        <BooksList books={this.props.books} />
      </div>
    )
  }
}

export default MainContent;
