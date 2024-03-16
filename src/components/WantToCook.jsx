const WantToCook = ({ toCooks }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-3xl text-center">Want to cook: {toCooks.lenght}</h2>
        <div className="divider"></div>

        <div className="grid grid-cols-5 items-center">
          <div>Index</div>
          <div>Name</div>
          <div>Time</div>
          <div>Calories</div>
          <div className="card-actions"></div>
        </div>
        <div className="toCook-container grid grid-cols-5 items-center space-y-2">
          {toCooks.map((item) => (
            <>
              <h2>{item.index}</h2>
              <h2>{item.recipe_name}</h2>
              <h2>{item.preparing_time}</h2>
              <h2>{item.calories}</h2>
              <button className="btn btn-primary">Preparing</button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WantToCook;
