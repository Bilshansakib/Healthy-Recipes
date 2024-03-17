const CalculateSum = (preparingCart) => {
  function getSum(Array) {
    const sum = Array.reduce((acc, c) => acc + c, 0);
    const totalSum = parseInt(sum);
    setTotalSum(totalSum);
  }
  return (
    <div className=" grid grid-cols-3 font-semibold ">
      <div></div>
      <div>
        <span>Total Time =</span>
        <span>__ minutes</span>
      </div>
      <div>
        <span>Total Calories =</span>
        <span>_{() => getSum(preparingCart.calories[0])} calories</span>
      </div>
    </div>
  );
};

export default CalculateSum;
