import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

class BookDetail extends React.Component {
  render() {
    return (
      <Link to='/' className='back-link' >{"< Volver"}</Link>
    );
  }
}

export default BookDetail;
