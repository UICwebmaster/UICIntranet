import React from "react";
import Link from "next/link";

function Tab() {
  return (
    <div className="tabs place-content-center" data-theme="aqua">
      <Link href="/dashboard" className="tab">
        Dashboard
      </Link>
      <Link href="/Communication" className="tab">
        Communication
      </Link>
      <Link href="/Ressources Humaines" className="tab">
        Ressources Humaines
      </Link>
      <Link href="/Voyages" className="tab">
        Voyages
      </Link>
      <Link href="/ETF" className="tab">
        ETF
      </Link>
      <Link href="/L&T" className="tab">
        L&T
      </Link>
      <Link href="/UICP" className="tab">
        UICP
      </Link>
    </div>
  );
}

export default Tab;
