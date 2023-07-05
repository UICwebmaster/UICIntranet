import React from "react";
import Card from "@/app/components/Dashboardcards/Cards";
import ImageRepro from "../../../public/reprographie.jpeg";
import ImageVoyage from "../../../public/voyages.jpeg";
import ImageEtf from "../../../public/etf.jpeg";
import ImageTraduction from "../../../public/traduction.jpeg";
import ImageUicp from "../../../public/uicp.jpeg";

export default function Dashboard() {
  const navBarTitles: string[] = [
    "Reprographie",
    "Voyages",
    "Etf",
    "Traduction",
    "Uicp",
  ];
  const imageSources: { [key: string]: StaticImageData } = {
    Reprographie: ImageRepro,
    Voyages: ImageVoyage,
    Etf: ImageEtf,
    Traduction: ImageTraduction,
    Uicp: ImageUicp,
  };

  return (
    <div>
      <div className="flex flex-wrap mx-4 place-content-center m-40">
        {navBarTitles.map((title, index) => (
          <div key={index} className="mx-4 mb-4">
            <Card title={title} imageSrc={imageSources[title]} />
          </div>
        ))}
      </div>
    </div>
  );
}
