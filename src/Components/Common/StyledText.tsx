import React, { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
  return <h1 className=" mb-3 text-center text-2xl font-bold">{children}</h1>;
}
export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="text-1xl mb-3 text-center font-bold underline">
      {children}
    </h2>
  );
}
