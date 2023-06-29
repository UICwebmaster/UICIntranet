import React from "react";

function Menu() {
  return (
    <ul className="menu bg-base-200 w-60 rounded-box">
      <li>
        <h2 className="menu-title">Formulaires</h2>

        <ul>
          <li>
            <a>Restauration</a>
          </li>
          <li>
            <a>Voyages</a>
          </li>
          <li>
            <a>Traductions Interprétations</a>
          </li>
          <li>
            <a>Demandes travaux ETF</a>
          </li>
          <li>
            <a>Reprographie</a>
          </li>
        </ul>
      </li>
      <li>
        <h2 className="menu-title">Listes</h2>

        <ul>
          <li>
            <a>Personnel</a>
          </li>
          <li>
            <a>Centres analytiques</a>
          </li>
          <li>
            <a>Planning Salle</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Menu;
