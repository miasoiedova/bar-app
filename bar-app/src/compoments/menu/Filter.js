import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredient, selectStrength, clearFilters } from '../store/features/filterSlice'

const Filter = () => {
  const ingredients = useSelector(state => state.cocktails.ingredients);
  const selectedIngredient = useSelector(state => state.cocktails.selectedIngredient);
  const selectedStrength = useSelector(state => state.cocktails.strength);
  const dispatch = useDispatch();

  const handleIngredientSelect = (ingredient) => {
    if (ingredient === selectedIngredient) {
      dispatch(selectIngredient(null));
    } else {
      dispatch(selectIngredient(ingredient));
    }
  };

  const handleStrengthSelect = (strength) => {
    if (strength === selectedStrength) {
      dispatch(selectStrength(null));
    } else {
      dispatch(selectStrength(strength));
    }
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div>
      <h2>Filter</h2>
      <div>
        <h3>Ingredient:</h3>
        <ul>
          {ingredients.map(ingredient => (
            <li
              key={ingredient}
              onClick={() => handleIngredientSelect(ingredient)}
              className='selectedFilter'
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Strength:</h3>
        <ul>
          <li
            onClick={() => handleStrengthSelect('Acloholic')}
            className='selectedFilter'
          >
            Acloholic
          </li>
          <li
            onClick={() => handleStrengthSelect('Non-Acloholic')}
            className='selectedFilter'
          >
            Non-Alcoholic
          </li>
        </ul>
      </div>
      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filter;
