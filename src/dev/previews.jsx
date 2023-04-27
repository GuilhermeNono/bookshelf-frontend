import React from "react";
import { Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";

function ComponentPreviews() {
  return <Previews palette={<PaletteTree />} />;
}

export default ComponentPreviews;
