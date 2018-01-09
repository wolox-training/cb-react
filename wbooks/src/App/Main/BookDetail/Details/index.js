import React from 'react';
import './styles.css';

class Details extends React.Component {
  render() {
    return(
      <div className="book-details">
        <img
          className="book-cover"
          alt=""
          src={this.props.bookInfo.image_url}
        />
        <div className="book-info">
          <h3 className="details-title">{this.props.bookInfo.title}</h3>
          <h4 className="details-subtitle">{this.props.bookInfo.author}</h4>
          <h4 className="details-subtitle">{this.props.bookInfo.year}</h4>
          <h4 className="details-subtitle">Temática</h4>
          <p className="book-review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="rent-button">Aplicar</button>
        </div>
      </div>
    );
  }
}

export default Details;
