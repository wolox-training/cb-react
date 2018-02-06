import React from 'react';
import { Link } from 'react-router-dom';

import { booksPropTypes } from '../../../../../../constants/propTypes';

import Details from './components/Details';
import Recommendations from './components/Recommendations';
import CommentsSection from './components/CommentsSection';

import './styles.css';

class BookDetail extends React.Component {
  componentDidMount() {
    this.props.onMount(Number(this.props.match.params.id));
  }

  render() {
    if (this.props.error) {
      return <span>ERROR</span>;
    }
    if (this.props.isLoading) {
      return <span>Cargando...</span>;
    }
    return (
      <div>
        <Link to="/" className="back-link">
          Volver
        </Link>
        <Details />
        <Recommendations />
        <CommentsSection bookId={Number(this.props.match.params.id)} />
      </div>
    );
  }
}

BookDetail.propTypes = booksPropTypes;

export default BookDetail;
