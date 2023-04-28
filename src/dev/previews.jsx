import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Basic from "../layouts/authentication/sign-in";

function ComponentPreviews() {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Basic">
        <Basic />
      </ComponentPreview>
    </Previews>
  );
}

export default ComponentPreviews;
