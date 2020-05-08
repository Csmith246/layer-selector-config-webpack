import "./config";

import "@esri/calcite-components/dist/calcite.js";
import '@esri/calcite-app-components/dist/calcite-app.js';

import "@esri/calcite-app-components/dist/calcite-app/calcite-app.css";
import "@esri/calcite-components/dist/calcite/calcite.css";

import ArcGISWebMap from "esri/WebMap";
import MapView from "esri/views/MapView";
import LayerConfig from "./widgets/LayerConfig";
// import Portal from "esri/portal/Portal";
import esriConfig from "esri/config";

esriConfig.portalUrl = "https://nw-brews.mapsdevext.arcgis.com"

// let portal = new Portal({
//   url: "http://nw-brews.mapsdevext.arcgis.com/"
// });

// portal.authMode = "immediate";

// portal.load().then(()=>{
  console.log("LOADED PORTAL");
  console.log("INIT IN MAIN");
  const map = new ArcGISWebMap({
    portalItem: {
      // id: "34beb6ccb9e74bbf8641dea2e8cb8b37"
      // id: "6712da5c872c44deaf24499e6f6c2d2b"
      // id: "ba6be27ea6df4edcbef7028b6f481cc4"
      id: "9561e894eb5b4f1091ac6145bdeddc9a"
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
// });

