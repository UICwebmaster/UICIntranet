import React from "react";
import Link from "next/link";
import Image from "../../../public/uic_logo_quadri-62c06.png";

function Navbar2() {
  return (
    <div className="navbar bg-base-100 flex items-center justify-center">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Formulaires
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Reprographie</summary>
              <ul className="p-2">
                <div>
                  <Link href="/reprographie">
                    <button className="btn-sm">Mes demandes</button>
                  </Link>
                </div>

                <Link href="/reprographie/nouvelledemande">
                  <button className="btn-sm">Nouvelle demande</button>
                </Link>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Voyages</summary>
              <ul className="p-2">
                <li>
                  <button className="btn-sm">Mes demandes</button>
                </li>
                <li>
                  <button className="btn-sm">Nouvelle demande</button>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>ETF</summary>
              <ul className="p-2">
                <li>
                  <button className="btn-sm">Mes demandes</button>
                </li>
                <li>
                  <button className="btn-sm">Nouvelle demande</button>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Traduction</summary>
              <ul className="p-2">
                <li>
                  <button className="btn-sm">Mes demandes</button>
                </li>
                <Link href="/traduction/nouvelledemande">
                  <button className="btn-sm">Nouvelle demande</button>
                </Link>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>UICP</summary>
              <ul className="p-2">
                <li>
                  <button className="btn-sm">Mes demandes</button>
                </li>
                <li>
                  <button className="btn-sm">Nouvelle demande</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar flex">
          <div className="w-24 rounded">
            <img src="image" alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
