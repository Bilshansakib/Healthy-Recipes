import { useState } from "react";
import "./App.css";
import Recipes from "./components/Recipes/Recipes";
import WantToCook from "./components/WantToCook";

function App() {
  const [toCooks, setToCooks] = useState([]);

  const handleDelete = (id) => {
    const newToCook = toCooks.filter((item) => item.id != id);
    setToCooks(newToCook);
  };

  const handleCookCart = (cooking) => {
    const isExist = toCooks.find((item) => item.id == cooking.id);
    if (!isExist) {
      setToCooks([...toCooks, cooking]);
    } else {
      alert("roast()");
    }
  };

  return (
    <>
      <div className="container mx-auto">
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
                      <a>Menu Halal</a>
                    </li>
                    <li>
                      <a>Menu Other</a>
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
            <a className="btn btn-ghost text-3xl font-extrabold">
              Iftari Recipe
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
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
                      <a>Menu Other</a>
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
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-6  text-center">
        <h1 className=" text-3xl font-bold">Our Recipes</h1>
        <p className="my-6 font-semibold">
          A brief overview of the dish, including its origins, cultural
          significance, or any interesting background information.
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
          ></WantToCook>
        </div>
      </div>
    </>
  );
}

export default App;
