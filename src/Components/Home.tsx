import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <h1>Home</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="text-green-700 text-left font-bold">123</div>
    </div>
  );
}
