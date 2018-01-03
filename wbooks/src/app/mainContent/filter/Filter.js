import React from'react';
import './Filter.css';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter-bar">
        <select className="filter-selection" defaultValue="Seleccionar filtro" >
        </select>
        <input type="text" className="search-term" placeholder="Buscar..." />
        <button type="submit" className="search-button"></button>
      </div>
    )
  }
}

export default Filter;
