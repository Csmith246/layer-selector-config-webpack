import "./config";

import ArcGISWebMap from "esri/WebMap";
import MapView from "esri/views/MapView";
import LayerConfig from "./widgets/LayerConfig";


console.log("INIT IN MAIN");
const map = new ArcGISWebMap({
  portalItem: {
    // id: "34beb6ccb9e74bbf8641dea2e8cb8b37"
    // id: "6712da5c872c44deaf24499e6f6c2d2b"
    id: "ba6be27ea6df4edcbef7028b6f481cc4"
  }
});
const view = new MapView({
  map,
  container: "viewDiv"
});

view.when(() => {
  new LayerConfig({
    container: "configPanel",
    loadedWebMap: map
  });
});
