import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Details from './Details';
import Recommendations from './Recommendations';
import CommentsSection from './CommentsSection';

class BookDetail extends React.Component {
  render() {
    const id = this.props.match.params.number - 1;
    return (
      <div>
        <Link to='/' className='back-link' >{"< Volver"}</Link>
        <Details bookInfo={this.props.books[id]}/>
        <Recommendations books={this.props.books} />
        <CommentsSection />
      </div>
    );
  }
}

export default BookDetail;
