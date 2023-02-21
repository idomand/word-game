import React from "react";
import data from "../German-words-data.json";

type Props = {};

export default function Main({}: Props) {
  console.log("data", data);
  return (
    <main>
      <h1>Main</h1>
      <img src="https://cdn.tink.de/cdn/109500/media/wysiwyg/homepage/homepage-banners/230214_DE_AT_VF_Slider1_Smart-Home-Tage_mobile.jpg" />
    </main>
  );
}
