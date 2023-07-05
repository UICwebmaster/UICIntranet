"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFetch } from "@/app/utils/hooks/page";

export default function mesdemandes() {
  const router = useRouter();

  const {
    data = [],
    isLoading,
    error,
  } = useFetch(`${process.env.NEXT_PUBLIC_BACK_URL}/api/reprographie`);

  if (error) {
    router.push("/not-found");
  }

  // handle Input changes
  const [searchInputValue, setSearchInputValue] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    setSearchResults(data || []);
  }, [data]);

  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const reprographies = Array.isArray(data) ? data : [];

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Titre du document</th>
            <th>Demandeur</th>
            <th>Nombre de pages</th>
            <th>Date de la demande</th>
            <th>Date limite</th>
            <th>État de la demande</th>
          </tr>
        </thead>
        <tbody>
          {reprographies.map((reprographie, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{reprographie.TitreDocument}</td>
              <td>{reprographie.FullName}</td>
              <td>{reprographie.NbPages}</td>
              <td>{reprographie.LibDateCreate}</td>
              <td>{reprographie.DateLimite2}</td>
              <td>{reprographie.EtatDemande}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
