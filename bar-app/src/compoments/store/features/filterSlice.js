import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'cocktails',
  initialState: {
    ingredients: [],
    selectedIngredient: null,
    strength: null,
    filteredCocktails: [],
  },
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    selectIngredient: (state, action) => {
        state.selectedIngredient = action.payload;
        state.filteredCocktails = state.ingredients.filter(cocktail => (
          cocktail.ingredients.includes(action.payload) &&
          (!state.strength || cocktail.strength === state.strength)
        ));
    },
    selectStrength: (state, action) => {
        state.strength = action.payload;
        state.filteredCocktails = state.ingredients.filter(cocktail => (
          (!state.selectedIngredient || cocktail.ingredients.includes(state.selectedIngredient)) &&
          (!state.strength || cocktail.strength === state.strength)
        ));
    },
    clearFilters: (state) => {
        state.selectedIngredient = null;
        state.strength = null;
        state.filteredCocktails = [];
    },
  },
});

export const {
    setIngredients,
    selectIngredient,
    selectStrength,
    clearFilters,
  } = filterSlice.actions;
  
export default filterSlice.reducer;