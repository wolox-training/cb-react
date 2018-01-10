import React from'react';
import './styles.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSelection : '',
      filterText : '',
    }
  }

  handleFilterTextChange = (event) => {
    this.setState({
      filterText : event.target.value
    });
  }

  handleSelection = (event) => {
    this.setState({
      filterSelection : event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onFilterSubmit(this.state.filterSelection, this.state.filterText);
  }

  render() {
    return (
      <form className="filter-form" onSubmit={this.handleSubmit}>
        <select
          className="filter-selection"
          value={this.state.filterSelection}
          onChange={this.handleSelection}
        >
          <option value="" disabled hidden>Seleccionar filtro</option>
          <option value="title">nombre</option>
          <option value="author">autor</option>
        </select>
        <input
          className="search-term"
          type="text"
          placeholder="Buscar..."
          value={this.state.filtertext}
          onChange={this.handleFilterTextChange}
        />
        <button type="submit" className="search-button"></button>
      </form>
    )
  }
}

export default Filter;
