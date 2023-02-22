import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-center border bg-orange-400">
      <div className="m-3">
        <Link to="/" className="cursor-pointer hover:underline ">
          new game
        </Link>
      </div>
      <div className="m-3">
        <Link to="/" className="cursor-pointer hover:underline">
          score board
        </Link>
      </div>
      <div className="m-3">
        <Link to="/allWords" className="cursor-pointer hover:underline">
          list of words
        </Link>
      </div>
    </header>
  );
}
