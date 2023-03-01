import React, { useState } from "react";
import { useGameContext } from "../GameContextComponent";
import GameBoard from "./GameBoard";

type Props = {};

export default function Main({}: Props) {
  const { state } = useGameContext();

  console.log("state :>> ", state);

  return (
    <main className="flex flex-col items-center justify-center  border-2 border-slate-700  p-4">
      <h1>Main</h1>
      <GameBoard />
    </main>
  );
}
