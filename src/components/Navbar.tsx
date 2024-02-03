import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  const storedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

  const [currentTheme, setCurrentTheme] = useState<any>(storedTheme);

  const setDark = (theme: any) => {
    const dataTheme = document.querySelector("html") as HTMLElement;
    dataTheme.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    setDark(storedTheme);
  }, [currentTheme]);

  return (
    <>
      <div className="navbar bg-base-100 my-2">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="disabled pointer-events-none">
                <details className="z-[1]">
                  <summary>Padrões</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="disabled pointer-events-none">
                <Link to={"/contact"}>Contato</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to={"/"}>
            MyToolKit
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="disabled pointer-events-none">
              <details className="z-[1]">
                <summary>Padrões</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="disabled pointer-events-none">
              <Link to={"/contact"}>Contato</Link>
            </li>
            <li className="disabled pointer-events-none">
              <Link to={"/"}>Sobre</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 z-10">
            <li>
              <details>
                <summary>Themes</summary>
                <ul className="p-2 bg-base-100 rounded-t-none h-52 overflow-x-hidden">
                  {themes.map((theme) => (
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label={theme}
                        onClick={(e) => {
                          setCurrentTheme(e.currentTarget.value);
                        }}
                        value={theme}
                        key={theme.length}
                      />
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
