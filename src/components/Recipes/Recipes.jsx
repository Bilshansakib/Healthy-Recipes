import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({ handleCookCart }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/public/RecipeData.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2">
      {recipes.map((item) => (
        <Recipe
          handleCookCart={handleCookCart}
          key={item.id}
          recipe={item}
        ></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
