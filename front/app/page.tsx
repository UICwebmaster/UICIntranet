import Image from "next/image";
import Menu from "./components/Menu/Menu";
import Table from "./components/Table/Table";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/uic_2012 (1).jpg"
            alt="eiffel tower"
            className="max-w-sm rounded-lg shadow-2xl"
            width="500"
            height="500"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Bienvenue dans le nouvel Intranet !
            </h1>
            <p className="py-6">
              Voici la nouvelle interface pour les formulaires de demande.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
