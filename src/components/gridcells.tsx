"use client";
import React from "react";
import { useSpreadSheet } from "../store/useStore";

export default function GridCells() {
  const { grid, setValue, setSelectedCell } = useSpreadSheet();

  return (
    <table className="excel-grid">
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={cell.value}
                  onChange={(e) => setValue(rowIndex, colIndex, e.target.value)}
                  onClick={() => setSelectedCell(rowIndex, colIndex)} 
                  className="cell-input"
                  style={{
                    fontWeight: cell.bold ? "bold" : "normal", 
                    textTransform: cell.capitalized ? "uppercase" : "none", 
                    backgroundColor: cell.highlighted ? "yellow" : "white",
                    textDecoration: cell.underlined ? "underline" : "none",
                  }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
