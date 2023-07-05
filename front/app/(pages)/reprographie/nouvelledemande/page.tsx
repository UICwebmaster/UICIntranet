"use client";
import { Container } from "postcss";
import React, { useState } from "react";

const Form = () => {
  const [demandeur, setDemandeur] = useState("");
  const [budget, setBudget] = useState("");
  const [documentTitle, setDocumentTitle] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [date, setDate] = useState("");
  const [language, setLanguage] = useState("");
  const [target, setTarget] = useState([]);
  const [numWords, setNumWords] = useState("");
  const [numPages, setNumPages] = useState("");
  const [support, setSupport] = useState("");
  const [files, setFiles] = useState([]);
  const [comments, setComments] = useState("");

  const handleTargetChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setTarget([...target, value]);
    } else {
      setTarget(target.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation ou d'envoi des données
    console.log("Form submitted!");
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow p-4 "
      >
        <div className="place-self-auto">
          <h1> Nouvelle demande de reprographie</h1>
        </div>

        <div>
          <label
            htmlFor="demandeur"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Demandeur
          </label>
          <select
            id="demandeur"
            value={demandeur}
            onChange={(e) => setDemandeur(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">Sélectionner un demandeur</option>
            {/* Options du demandeur */}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="budget"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Budget
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">Sélectionner un budget</option>
            {/* Options du budget */}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="documentTitle"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Titre du document
          </label>
          <input
            id="documentTitle"
            type="text"
            value={documentTitle}
            onChange={(e) => setDocumentTitle(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="documentType"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Type de document
          </label>
          <select
            id="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">Sélectionner un type de document</option>
            {/* Options du type de document */}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            id="date"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="language"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Langue
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">Sélectionner une langue</option>
            {/* Options de la langue */}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="target"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Cible
          </label>
          <div className="flex items-center">
            <input
              id="target1"
              type="checkbox"
              value="Cible 1"
              checked={target.includes("Cible 1")}
              onChange={handleTargetChange}
              className="mr-2"
            />
            <label htmlFor="target1" className="text-sm text-gray-700">
              Cible 1
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="target2"
              type="checkbox"
              value="Cible 2"
              checked={target.includes("Cible 2")}
              onChange={handleTargetChange}
              className="mr-2"
            />
            <label htmlFor="target2" className="text-sm text-gray-700">
              Cible 2
            </label>
          </div>
          {/* Ajoutez d'autres options de cible ici */}
        </div>
        <div className="mt-4">
          <label
            htmlFor="numWords"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nombre de mots
          </label>
          <input
            id="numWords"
            type="number"
            value={numWords}
            onChange={(e) => setNumWords(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="numPages"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nombre de pages
          </label>
          <input
            id="numPages"
            type="number"
            value={numPages}
            onChange={(e) => setNumPages(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="support"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Support
          </label>
          <select
            id="support"
            value={support}
            onChange={(e) => setSupport(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">Sélectionner un support</option>
            {/* Options du support */}
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="files"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Fichiers
          </label>
          <input
            id="files"
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="comments"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Commentaires
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
