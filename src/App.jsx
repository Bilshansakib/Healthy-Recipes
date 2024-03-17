import { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./components/Recipes/Recipes";
import WantToCook from "./components/WantToCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreparingCook from "./components/PreparingCook";
import CalculateSum from "./components/CalculateSum";

function App() {
  const [toCooks, setToCooks] = useState([]);
  const [preparingCart, setPreparingCart] = useState([]);
  // const [currentlyCooking, setcurrentlyCooking] = useState([]);

  // useEffect(() => {
  //   fetch("./RecipeData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToCooks(data);
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch("./RecipeData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPreparingCart(data);
  //     });
  // }, []);

  const handleDelete = (id) => {
    const newToCook = toCooks.filter((item) => item.id != id);
    setToCooks(newToCook);
    // handlePreparingCart(newToCook);
  };

  const handlePreparingCart = (p) => {
    const isThere = preparingCart.find((pd) => pd.id == p.id);
    if (!isThere) {
      setPreparingCart([...preparingCart, p]);
    }
    // setPreparingCart([p]);
  };

  const handleCookCart = (cooking) => {
    const isExist = toCooks.find((item) => item.id == cooking.id);
    if (!isExist) {
      setToCooks([...toCooks, cooking]);
    } else {
      toast("Already added");
    }
    // handlePreparingCart();
  };
  // //////////////////
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                  <ul className="p-2">
                    <li>
                      <a>Diet Menu</a>
                    </li>
                    <li>
                      <a>Other Menu</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-3xl rounded-full font-extrabold">
              Healthy Recipes
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              <li>
                <a>Home</a>
              </li>
              <li>
                <details>
                  <summary>Recipes</summary>
                  <ul className="p-2">
                    <li>
                      <a>Menu Halal</a>
                    </li>
                    <li>
                      <a>Menu Others</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Topics</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className=" rounded-full w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="container lg:mx-auto banner">
        <div className="mt-8 text-center justify-center items-center space-y-20 ">
          <h1 className="text-3xl font-bold text-white  px-10">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-white rounded-2xl bg-slate-800 border-2 mx-12 p-6">
            Remember, cooking is both an art and a science, and practice makes
            perfect. Keep experimenting, trying new recipes, and honing your
            skills to become a better cook.
          </p>
          <div className="space-x-4 text-white">
            <button className="btn rounded-full">Explore Now</button>
            <button className="border-2 p-2 rounded-full">Our Feedback</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-12  text-center">
        <h1 className=" text-3xl font-bold">Our Recipes</h1>
        <p className="my-6 font-semibold">
          A brief overview of the dish, including its origins, cultural
          significance, or any interesting background information such as
          calories.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-7">
        <div className="lg:col-span-4 ">
          <Recipes handleCookCart={handleCookCart}></Recipes>
        </div>
        <div className="col-span-3 ">
          <WantToCook
            handleDelete={handleDelete}
            toCooks={toCooks}
            preparingCart={preparingCart}
            handlePreparingCart={handlePreparingCart}
          ></WantToCook>

          <div>
            <h2 className="mt-6 text-3xl font-bold text-center ">
              Currently cooking: {preparingCart.length}
            </h2>
          </div>
          <div className="divider"></div>
          <PreparingCook
            preparingCart={preparingCart}
            handlePreparingCart={handlePreparingCart}
          ></PreparingCook>
          <div className="grid grid-cols-4 items-center font-semibold text-xl p-2 opacity-85  text-start rounded-2xl">
            {preparingCart.map((item, index) => (
              <>
                <h2 className="col-span-2 space-x-2">
                  {index + 1}. {item.recipe_name}
                </h2>
                <h2>{item.preparing_time}</h2>
                <h2>{item.calories}</h2>
              </>
            ))}
          </div>
          <div className="divider"></div>

          <CalculateSum preparingCart={preparingCart}></CalculateSum>
        </div>

        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
