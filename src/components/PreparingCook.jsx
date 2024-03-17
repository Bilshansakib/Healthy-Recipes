const PreparingCook = (preparingCart, handlePreparingCart) => {
  console.log(preparingCart);
  return (
    <>
      <div>
        <div className="grid grid-cols-4 items-center font-semibold text-2xl p-2 opacity-85 text-start text-white bg-slate-800 rounded-2xl">
          <div className="col-span-2">Name</div>
          <div>Time</div>
          <div>Calories</div>
        </div>
      </div>
    </>
  );
};

export default PreparingCook;
