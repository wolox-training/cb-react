import PropTypes from 'prop-types';

export const bookPropTypes = {
    book: PropTypes.shape(
      {
        id: PropTypes.number,
        author:PropTypes.string,
        title:PropTypes.string,
        genre:PropTypes.string,
        publisher:PropTypes.string,
        year: PropTypes.string,
        image_url: PropTypes.string
      }
    )
};


export const booksPropTypes = {
  books: PropTypes.arrayOf(bookPropTypes.book)
};
