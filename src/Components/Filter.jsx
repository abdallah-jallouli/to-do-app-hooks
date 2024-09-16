import React from 'react';

const Filter = ({ ChangeIsFiltered }) => {
  return (
    <div className="filter-container">
      <button className="filter-btn" onClick={() => ChangeIsFiltered()}>
        Filter
      </button>
    </div>
  );
};

export default Filter;
