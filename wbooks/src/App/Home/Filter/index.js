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

  handleSubmit = () => {
    this.props.onFilterSubmit(this.state.filterSelection, this.state.filterText);
  }

  render() {
    return (
      <form className="filter-bar" onSubmit={this.handleSubmit}>
        <select
          className="filter-selection"
          onChange={this.handleSelection}
        >
          <option value="" disabled selected>Seleccionar filtro</option>
          <option value="name">nombre</option>
          <option value="author">autor</option>
        </select>
        <input
          className="search-term"
          type="text"
          placeholder="Buscar..."
          onChange={this.handleFilterTextChange}
        />
        <button type="submit" className="search-button"></button>
      </form>
    )
  }
}

export default Filter;
