import { Link } from "react-router-dom";

function Navbar() {
  const themes = ["light", "dark", "cyberpunk", "forest", "aqua", "dracula"];

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
                <ul className="p-2 bg-base-100 rounded-t-none h-100">
                  {themes.map((theme) => (
                    <li>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label={theme}
                        value={theme}
                        key={themes.length}
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
