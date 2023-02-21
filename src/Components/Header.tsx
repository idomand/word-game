import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex justify-center border bg-orange-400">
      <div className="m-3">
        <a className="cursor-pointer hover:underline "> new game </a>
      </div>
      <div className="m-3">
        <a className="cursor-pointer hover:underline"> score board </a>
      </div>
      <div className="m-3">
        <a className="cursor-pointer hover:underline"> list of words </a>
      </div>
    </header>
  );
}
