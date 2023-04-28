import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { ExampleLoaderComponent, PaletteTree } from "./palette";
import OrdersOverview from "../layouts/dashboard/components/OrdersOverview";
import Home from "../layouts/home";

function ComponentPreviews() {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PaletteTree">
        <PaletteTree />
      </ComponentPreview>
      <ComponentPreview path="/OrdersOverview">
        <OrdersOverview />
      </ComponentPreview>
      <ComponentPreview path="/Home">
        <Home />
      </ComponentPreview>
      <ComponentPreview path="/ExampleLoaderComponent">
        <ExampleLoaderComponent />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
    </Previews>
  );
}

export default ComponentPreviews;
