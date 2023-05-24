import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { selectIngredient } from '../store/features/filterSlice';
import { getData } from "../api/api";

const BarList = () => {
  const [cocktails, setCocktails] = useState([]);
  const selectedIngredient = useSelector(selectIngredient);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setCocktails(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  const filteredCocktails = selectedIngredient
    ? cocktails.filter(cocktail => cocktail.ingredients.includes(selectedIngredient))
    : cocktails;

  return (
    <div className="barList">
      {filteredCocktails.map(cocktail => (
        <div className="barCard" key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <div>
            <p>{cocktail.strDrink}</p>
            <p>{cocktail.strAlcoholic}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarList;