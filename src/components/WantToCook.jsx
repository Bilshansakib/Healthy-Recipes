const WantToCook = ({ toCooks, index, handleDelete }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center ">Want to cook: </h2>
        <div className="divider"></div>

        <div className="grid grid-cols-5 items-center font-semibold text-2xl  text-start">
          <div>No.</div>
          <div>Name</div>
          <div>Time</div>
          <div>Calories</div>
          <div className="card-actions"></div>
        </div>
        <div className="toCook-container grid grid-cols-5 font-semibold text-start items-center space-y-2">
          {toCooks.map((item, index) => (
            <>
              <h2>{index + 1}</h2>
              <h2>{item.recipe_name}</h2>
              <h2>{item.preparing_time}</h2>
              <h2>{item.calories}</h2>
              <button
                key={item.id}
                onClick={() => handleDelete(item.id)}
                className="btn btn-primary"
              >
                Preparing
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WantToCook;
