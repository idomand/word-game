import React from "react";
import GameBoard from "./GameBoard";

type Props = {};

export default function Main({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center  border-2 border-slate-700  p-4">
      <h1>Main</h1>

      <GameBoard />
    </main>
  );
}
