import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-center border bg-orange-400">
      <Link
        to="/"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline "
      >
        new game
      </Link>

      <Link
        to="/score-board"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline"
      >
        score board
      </Link>

      <Link
        to="/allWords"
        className="cursor-pointer p-4 hover:bg-orange-300 hover:underline"
      >
        list of words
      </Link>
    </header>
  );
}
