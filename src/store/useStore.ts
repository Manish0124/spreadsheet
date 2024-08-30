import { create } from "zustand";

interface CellDetails {
  value: string;
  bold: boolean;
  highlighted: boolean;
  capitalized: boolean;
  underlined: boolean;
  
}

interface SpreadSheetState {
  grid: CellDetails[][];
  searchTerm: string;
  selectedRow: number | null;
  selectedCol: number | null;
  toggleCapitalized: () => void;
  toggleBold: () => void;
  toggleUnderlined:()=>void;
  setValue: (rowIndex: number, colIndex: number, value: string) => void;
  setSelectedCell: (rowIndex: number, colIndex: number) => void;
  setSearchTerm: (term: string) => void;
  performSearch: () => void;
}

export const useSpreadSheet = create<SpreadSheetState>((set, get) => ({
  grid: Array.from({ length: 40 }, () =>
    Array.from({ length: 10 }, () => ({ value: "", bold: false, highlighted: false, underlined:false, capitalized:false }))
  ),
  searchTerm: "",
  selectedRow: null,
  selectedCol: null,

  toggleBold: () =>
    set((state) => {
      const { selectedRow, selectedCol, grid } = state;

      if (selectedRow === null || selectedCol === null) return state;

      const newGrid = grid.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === selectedRow && cIndex === selectedCol
            ? { ...cell, bold: !cell.bold } 
            : cell
        )
      );

      return { grid: newGrid };
    }),

    toggleCapitalized: () =>
        set((state) => {
          const { selectedRow, selectedCol, grid } = state;
          if (selectedRow === null || selectedCol === null) return state;
          const newGrid = grid.map((row, rIndex) =>
            row.map((cell, cIndex) =>
              rIndex === selectedRow && cIndex === selectedCol
                ? { ...cell, capitalized: !cell.capitalized } 
                : cell
            )
          );
          return { grid: newGrid };
        }),

        toggleUnderlined: () =>
            set((state) => {
              const { selectedRow, selectedCol, grid } = state;
              if (selectedRow === null || selectedCol === null) return state;
              const newGrid = grid.map((row, rIndex) =>
                row.map((cell, cIndex) =>
                  rIndex === selectedRow && cIndex === selectedCol
                    ? { ...cell, underlined: !cell.underlined } 
                    : cell
                )
              );
              return { grid: newGrid };
            }),
  setValue: (rowIndex, colIndex, value) =>
    set((state) => {
      const newGrid = state.grid.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex
            ? { ...cell, value }
            : cell
        )
      );
      return { grid: newGrid };
    }),

  setSelectedCell: (rowIndex, colIndex) =>
    set({
      selectedRow: rowIndex,
      selectedCol: colIndex,
    }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  performSearch: () =>
    set((state) => {
      const { grid, searchTerm } = state;

      if (!searchTerm.trim()) {
        const clearedGrid = grid.map((row) =>
          row.map((cell) => ({ ...cell, highlighted: false }))
        );
        return { grid: clearedGrid };
      }

      const newGrid = grid.map((row) =>
        row.map((cell) =>
          cell.value.toLowerCase().includes(searchTerm.toLowerCase())
            ? { ...cell, highlighted: true }
            : { ...cell, highlighted: false }
        )
      );
      return { grid: newGrid };
    }),
}));
