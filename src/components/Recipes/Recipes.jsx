import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
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
        <Recipe key={item.id}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
