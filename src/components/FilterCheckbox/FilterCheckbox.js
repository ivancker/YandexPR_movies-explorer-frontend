import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ isChecked, toggleCheckbox }) => {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        checked={isChecked}
        onChange={toggleCheckbox}
        type="checkbox"
        id="myCheckbox"
      />
      <label className="filter-checkbox__label" htmlFor="myCheckbox"></label>
      <p className="filter-checkbox__name">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
