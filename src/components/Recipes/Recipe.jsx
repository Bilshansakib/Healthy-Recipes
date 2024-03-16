const Recipe = ({ recipe, handleCookCart, notify }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-2">
      <figure className="px-10 pt-10">
        <img src={recipe_image} alt="food" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{short_description}</p>

        <div className="divider"></div>

        <div className="">
          <h1 className="font-bold">Ingredients: {ingredients.length}</h1>
          <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="flex gap-4">
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span>{preparing_time}</span>
          </div>
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
            </span>
            <span>{calories}</span>
          </div>
        </div>
        <div className="card-actions">
          <button
            className="btn btn-primary rounded-full"
            onClick={() => handleCookCart(recipe)}
          >
            Want To Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
