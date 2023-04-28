import React, { Fragment } from "react";

import { Category, Component, Variant, Palette } from "@react-buddy/ide-toolbox";
import MUIPalette from "@react-buddy/palette-mui";

export function PaletteTree() {
  return (
    <Palette>
      <Category name="App">
        <Component name="Loader">
          <Variant>
            <ExampleLoaderComponent />
          </Variant>
        </Component>
      </Category>
      <MUIPalette />
    </Palette>
  );
}

export function ExampleLoaderComponent() {
  return <>Loading...</>;
}
