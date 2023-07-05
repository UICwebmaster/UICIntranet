import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  imageSrc: string;
}

const Cards: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure className="w-full h-40 md:h-56">
        <Image src={imageSrc} alt="{imageAlt}" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
