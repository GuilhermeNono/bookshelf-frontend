import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import OrdersOverview from "../layouts/dashboard/components/OrdersOverview";

function ComponentPreviews() {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PaletteTree">
        <PaletteTree />
      </ComponentPreview>
      <ComponentPreview path="/OrdersOverview">
        <OrdersOverview />
      </ComponentPreview>
    </Previews>
  );
}

export default ComponentPreviews;
