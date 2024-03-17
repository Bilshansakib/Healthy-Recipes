const PreparingCook = (preparingCart, handlePreparingCart) => {
  console.log(preparingCart);
  return (
    <div>
      <div className="grid grid-cols-3 items-center font-semibold text-2xl p-2  text-start bg-slate-200 rounded-2xl">
        <div>Name</div>
        <div>Time</div>
        <div>Calories</div>
      </div>
    </div>
  );
};

export default PreparingCook;
