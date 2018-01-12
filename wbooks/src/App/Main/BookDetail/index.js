import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Details from './Details';
import Recommendations from './Recommendations';
import CommentsSection from './CommentsSection';

class BookDetail extends React.Component {
  render() {
    return (
      <div>
        <Link to='/' className='back-link' >Volver</Link>
        <Details bookInfo={this.props.books.find((book) => book.id === Number(this.props.match.params.id))}/>
        <Recommendations books={this.props.books} />
        <CommentsSection />
      </div>
    );
  }
}

export default BookDetail;
