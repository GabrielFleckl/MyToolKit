import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

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

  // i18n
  const langs = ["EN", "PT-BR"];

  const [currentLang, setCurrentLang] = useState<string>(language);

  const handleChangeLang = (e: React.MouseEvent<HTMLInputElement>) => {
    const newLang: string = e.currentTarget.value === "EN" ? "en" : "pt";
    localStorage.setItem("lang", newLang);
    setCurrentLang(newLang);
  };

  useEffect(() => {
    const myLang: string | null = localStorage.getItem("lang");

    if (myLang !== null) {
      changeLanguage(myLang);
    }
  }, [currentLang]);

  // Themes

  const storedTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";

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
                <Link to={"/"}>{t("navbar:home")}</Link>
              </li>
              <li className="disabled pointer-events-none">
                <details className="z-[1]">
                  <summary>{t("navbar:patterns")}</summary>
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
                <Link to={"/contact"}>{t("navbar:contact")}</Link>
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
              <Link to={"/"}>{t("navbar:home")}</Link>
            </li>
            <li className="disabled pointer-events-none">
              <details className="z-[1]">
                <summary>{t("navbar:patterns")}</summary>
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
              <Link to={"/contact"}>{t("navbar:contact")}</Link>
            </li>
            <li className="disabled pointer-events-none">
              <Link to={"/"}>{t("navbar:about")}</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 z-10">
            <li>
              <details>
                <summary>
                  <svg
                    className="h-5 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                  >
                    <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                    <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
                  </svg>
                </summary>
                <ul className="p-2 bg-base-200 rounded-t-none ">
                  {langs.map((lang) => (
                    <li>
                      <input
                        type="button"
                        className="btn btn-sm btn-block btn-ghost justify-start"
                        aria-label={lang}
                        onClick={handleChangeLang}
                        value={lang}
                        key={langs.length}
                      />
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>{t("navbar:theme")}</summary>
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
