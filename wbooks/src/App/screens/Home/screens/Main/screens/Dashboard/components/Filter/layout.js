import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: '',
      text: ''
    };
  }
  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleTypeChange = event => {
    this.setState({
      selection: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.selection, this.state.text);
  };

  render() {
    return (
      <form className="filter-form" onSubmit={this.handleSubmit}>
        <select className="filter-selection" value={this.state.selection} onChange={this.handleTypeChange}>
          <option value="" disabled hidden>
            Seleccionar filtro
          </option>
          <option value="title">nombre</option>
          <option value="author">autor</option>
        </select>
        <input
          className="search-term"
          type="text"
          placeholder="Buscar..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <button type="submit" className="search-button" />
      </form>
    );
  }
}

Filter.propTypes = {
  onSubmit: PropTypes.func
};

export default Filter;
