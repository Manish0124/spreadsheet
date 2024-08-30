"use client";

import React from "react";
import { useSpreadSheet } from "../store/useStore";
import { Input } from "@nextui-org/react";

export default function Toolbar() {
  const { toggleBold, performSearch, setSearchTerm, toggleCapitalized, toggleUnderlined } = useSpreadSheet();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    performSearch(); 
  };

  return (
    <div className="flex items-center bg-gray-100 h-12 px-2 shadow-md pl-4 fixed top-12 w-full left-0 gap-4 ">
      <button onClick={toggleBold} className="p-1 hover:bg-gray-200 rounded">
        <b>B</b>
      </button>
      <button onClick={toggleUnderlined} className="p-1 hover:bg-gray-200 rounded underline"> U</button>

      <div className="flex items-center space-x-2 ml-4">
        <button onClick={toggleCapitalized} className="p-1 hover:bg-gray-200 rounded">Aa</button>
        <Input
          placeholder="search here"
          onChange={handleSearchChange}
          className=" rounded-md border border-green-500 "
        />
      </div>
    </div>
  );
}
