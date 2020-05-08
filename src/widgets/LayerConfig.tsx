/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />


////*** Style imports ***////
import "./styles/LayerConfig.scss";

////*** Esri Imports ***////
import {
  subclass,
  declared,
  property,
  aliasOf
} from "esri/core/accessorSupport/decorators";

import {
  renderable,
  tsx
} from "esri/widgets/support/widget";

import Widget = require("esri/widgets/Widget");
import watchUtils = require("esri/core/watchUtils");
import WebMap = require("esri/WebMap");
import Layer = require("esri/layers/Layer");

////*** Calcite Imports ***////
import "@esri/calcite-components";
import '@esri/calcite-app-components';

////*** Interior Widget Imports ***////
// import i18n = require("dojo/i18n!./SearchConfig/nls/resources");
import LayerConfigViewModel = require("./LayerConfigViewModel");
import FieldSelector = require("./FieldSelector");
import StateStore = require('./stateStore');
import { friendlyLayerNames, friendlyGeometryNames, RouterStates, USE_SUBLAYER_KEY } from './LayerConfigAssets';


//----------------------------------
//
//  CSS Classes
//
//----------------------------------
const CSS = {
  base: "esri-layer-picker-config",
  flexContainer: "esri-layer-picker-config__flex-display",
  flexRow: "esri-layer-picker-config__flex-row",
  rowStylesAndSpacing: "esri-layer-picker-config__row-styles",
  mainLayerDisplay: "esri-layer-picker-config__main-layer-display",
  sublayerDisplay: "esri-layer-picker-config__sublayer-display",
  layersIconSpacing: "esri-layer-picker-config__layers-spacing",
  widthFull: "esri-layer-picker-config__width",
  greyColor: "grey-color",
  displayNone: "display-none",
  lightBlueColoration: "light-blue-color",
  featureLayerIconSpacing: "esri-layer-picker-config__FL-icon-spacing",
  sublayerSpacing: "esri-layer-picker-config__sublayer-spacing",
  layerDisplayPadding: "esri-layer-picker-config__layer-display-padding",

  layerItemStyle: "esri-layer-picker-config__layer",
  selectableLayerItemStyle: "esri-layer-picker-config__selectable-layer",
  radioBtns: "esri-layer-picker-config__radio-btns",
  checkboxStyle: "esri-layer-picker-config__checkbox",
  renderLineBreaks: "renderLineBreaks",

  fieldButtonStyle: "esri-layer-picker-config__field-button",
  fieldModalDisplay: "esri-layer-picker-config__field-modal-display",

  darkIconStyle: "dark-icon-style",

  calciteStyles: {
    alert: "alert",
    alertYellow: "alert-yellow",
    modifierClass: "modifier-class",
    isActive: "is-active",
    button: "btn",
    largeButton: "btn-large",
    greenButton: "btn-green",
    redButton: "btn-red",
    clearButton: "btn-clear",
    locatorIcon: "icon-ui-locate",

    mapImageLayerIcon: "icon-ui-layers",
    featureLayerIcon: "icon-ui-feature-layer",
    rightTriangleIcon: "icon-ui-right-triangle-arrow",
    downTriangleIcon: "icon-ui-down-arrow",

    warningIcon: "icon-ui-error2"
  }
};

@subclass("LayerConfig")
class LayerConfig extends declared(Widget) {
  //----------------------------------
  //
  //  Variables
  //
  //----------------------------------

  inputJSON;

  /** Reference to the Webmap from which layers are being picked */
  @renderable()
  loadedWebMap: WebMap;

  /** Decides which page is being shown */
  @aliasOf("stateStore.router")
  @property()
  @renderable()
  router: RouterStates;

  /** Indicates if the details for the Webmap layers are being loaded */
  @aliasOf("viewModel.areLayersDetailsLoading")
  @property()
  @renderable()
  areLayersDetailsLoading: boolean;

  /** Message displayed in info tooltip */
  filterTooltipMsg: string;

  /** Global State Store */
  @property()
  stateStore = new StateStore();

  /** ViewModel of LayerConfig */
  @renderable([
    "viewModel.acceptableLayers"
  ])
  @property({
    type: LayerConfigViewModel
  })
  viewModel: LayerConfigViewModel = new LayerConfigViewModel({
    stateStore: this.stateStore
  });

  /** FieldSelector Page */
  @property()
  fieldSelector = new FieldSelector({
    layerConfigViewModel: this.viewModel,
    stateStore: this.stateStore
  });


  //----------------------------------
  //
  //  Lifecycle methods
  //
  //----------------------------------
  constructor(value: any) {
    super(value);
    // console.log("constructor:", value);
    // console.log("loadedWM Constructor:", this.loadedWebMap);
  }

  postInitialize() {
    // console.log("loadedWM PostINitialize:", this.loadedWebMap);

    this.loadedWebMap.when(() => {
      let acceptableLayers: __esri.Collection<__esri.Layer> = this.loadedWebMap.layers
        .filter(this.viewModel.filterByLayerType.bind(this.viewModel));

      this.viewModel.loadLayerDetails(acceptableLayers);

      watchUtils.whenFalseOnce(this.viewModel, "areLayersDetailsLoading", () => {
        let finalAcceptableLayers = acceptableLayers.filter(this.viewModel.filterByGeomType.bind(this.viewModel));
        this.viewModel.acceptableLayers = finalAcceptableLayers;
        this.scheduleRender();
      });
    });

    // todo: listener clean up
    this.viewModel.watch("outputJSON", (val) => {
      console.log("New OutputJSON Value:");
      console.table(val.layers);
      // console.log("New OutputJSON Value:", JSON.stringify(val))
    });

    this._setupFilterInfoTooltip();

  }

  render() {
    return (
      <div class={this.classes(CSS.base, CSS.flexContainer)}>
        {
          this.router === "FieldSelector" ?
            this.fieldSelector.render()
            :
            this._renderLayerSelector()
        }
      </div>
    );
  }

  //----------------------------------
  //
  //  Public Methods
  //
  //----------------------------------

  // toJSON
  @aliasOf("viewModel.toJSON")
  toJSON: () => void;


  //----------------------------------
  //
  //  Private Methods
  //
  //----------------------------------

  private _renderLayerSelector() {
    const rootLayerSelector =
      (<div>
        <div class={CSS.flexRow}>
          <header>Layers</header>{/* todo: nls */}
          <calcite-tooltip class={CSS.renderLineBreaks} placement="left-start" reference-element="tooltip-filter-info">{this.filterTooltipMsg}</calcite-tooltip>
          <calcite-tooltip-manager>
            <calcite-icon id="tooltip-filter-info" class={CSS.lightBlueColoration} icon="information" scale="s"></calcite-icon>
          </calcite-tooltip-manager>
        </div>
        {this._renderLayerItems.call(this)}
      </div>);

    return rootLayerSelector;
  }

  private _setupFilterInfoTooltip() {
    this.filterTooltipMsg = `Showing layers of type:
    •  ${this.viewModel.allowedLayerTypes.map(layerType => friendlyLayerNames.get(layerType)).join("\n    •  ")}
And of geometry:
    •  ${this.viewModel.allowedGeomTypes.map(geomType => friendlyGeometryNames.get(geomType)).join("\n    •  ")}
  `;
  }

  private _renderLayerItems() {
    // console.log("RENDER LAYER");
    if (this.areLayersDetailsLoading) {
      return <div>Loading...</div>;
    } else {
      let arr = this.viewModel.acceptableLayers.map((layer, sourceItemIndex) => {
        let returnedArr = this._renderLayerItem(layer, sourceItemIndex);
        return returnedArr;
      })
        .toArray();

      return arr.length > 0 ? arr : <div>No acceptable layers exist in Webmap</div>;
      // return <div>No acceptable layers exist in Webmap</div>;

    }
  }

  /** Renders a single layer item based on the layer type */
  private _renderLayerItem(
    layer: Layer,
    sourceItemIndex: number
  ): any {
    // this._checkSearchFields();
    // const layerItem = sourceItem as LayerConfigItem;
    let divKey = `${layer.title}_${layer.id}`;

    return (
      <div class={CSS.rowStylesAndSpacing} key={divKey}>

        {/* Decide which layer type to render */}
        {layer.type === "feature" || layer.type === "imagery" ?
          this._renderFeatureLayerItem(layer as any, sourceItemIndex) :
          layer.type === "map-image" || layer.type === "tile" ?
            this._renderMapImageItem(layer as any, sourceItemIndex) :
            this._renderDefaultItem(layer)
        }

      </div>
    );
  }

  private _renderFeatureLayerItem(layer: __esri.FeatureLayer, sourceItemIndex: number): any {
    let id = `${layer.title}_${sourceItemIndex}`;
    let selectionType = this._decideSelectionType(id, layer);
    return (
      <div class={this.classes(CSS.flexRow, CSS.widthFull)}>
        <label for={id} class={this.classes(CSS.selectableLayerItemStyle, CSS.layerItemStyle, CSS.mainLayerDisplay, CSS.widthFull)} >
          {selectionType}
          <calcite-icon id="featureLayerIcon" class={CSS.featureLayerIconSpacing} icon="layer" theme="dark" scale="m"></calcite-icon>
          {/* <span class={this.classes(CSS.calciteStyles.featureLayerIcon, CSS.greyColor)} /> */}
          <span>{layer.title}</span>
        </label>
        {this._renderFieldSelectorToggle(layer)}
      </div>
    );
  }

  private _renderMapImageItem(layer: __esri.MapImageLayer, sourceItemIndex: number): any {
    let key: string = `itemAt${sourceItemIndex}`;
    let isExpanded = this.viewModel.expandStateTracker.get(key);
    if (isExpanded == null) { // initialize item expand Tracking if not already
      this.viewModel.expandStateTracker.set(key, false);
    }
    return (
      <div class={this.classes(CSS.widthFull)}>
        <div
          class={this.classes(CSS.layerItemStyle, CSS.widthFull)}
          onclick={this._handleExpandClick.bind(this, key, sourceItemIndex)}
        >
          <calcite-icon icon={isExpanded ? "chevron-down" : "chevron-right"} scale="m"></calcite-icon>
          <calcite-icon icon="layers" scale="m" class={CSS.layersIconSpacing}></calcite-icon>
          <span class={CSS.layerDisplayPadding}>{layer.title}</span>
        </div>
        <div class={isExpanded ? CSS.sublayerDisplay : CSS.displayNone}>
          {this._renderSublayerItems(layer)}
        </div>
      </div>
    );
  }

  private _handleExpandClick(key: string, index: number) {
    this.viewModel.expandStateTracker.set(key, !this.viewModel.expandStateTracker.get(key));
  }

  private _renderSublayerItems(layer: __esri.MapImageLayer) {
    let res = layer.allSublayers
      .filter(sublayer => sublayer[USE_SUBLAYER_KEY]) // NOTE: USE_SUBLAYER_KEY Prop populated by filterByGeomType
      .map(sublayer => this._renderSublayerItem(sublayer));
    return res.toArray();
  }

  private _renderSublayerItem(sublayer: __esri.Sublayer) {
    let divKey = `${sublayer.layer.title}_${sublayer.id}`;
    let selectionType = this._decideSelectionType(divKey, sublayer);

    return (
      <div class={this.classes(CSS.flexRow, CSS.sublayerSpacing)}>
        <label for={divKey} class={this.classes(CSS.selectableLayerItemStyle, CSS.widthFull, CSS.flexRow)} key={divKey}>
          {selectionType}
          {/* <span class={CSS.calciteStyles.featureLayerIcon} /> */}
          <calcite-icon id="featureLayerIcon" class={CSS.featureLayerIconSpacing} icon="layer" scale="m"></calcite-icon>
          <span>{sublayer.title}</span>
        </label>
        {/* {this.viewModel.isLayerSelected(sublayer) ? this._renderFieldSelector(sublayer, "sublayer") : null } */}
        {this._renderFieldSelectorToggle(sublayer)}
      </div>
    );
  }

  private _renderDefaultItem(layer: Layer) {

  }

  private _decideSelectionType(id: string, layer: __esri.Layer | __esri.Sublayer) {
    return this.viewModel.selectionType === "single" ? this._renderRadioBtn(id, layer) : this._renderCheckBox(id, layer);
  }

  // Render Form Components
  private _renderRadioBtn(id: string, layer: __esri.Layer | __esri.Sublayer) {
    return (
      <input
        bind={this}
        id={id}
        class={CSS.radioBtns}
        onclick={this.viewModel._handleSingleLayerSelectionChange.bind(this.viewModel, layer)}
        // onkeydown={this._handleExistingSourceType}
        // tabIndex={0}
        name="radioSelection"
        type="radio"
        // checked={this._addExistingType}
        source-type="url"
      />
    );
  }

  private _renderCheckBox(id: string, layer: __esri.Layer | __esri.Sublayer) {
    return (
      <calcite-checkbox checked={this.viewModel.isLayerSelected(layer)}>
        <input
          key={"checkbox"}
          bind={this}
          class={CSS.checkboxStyle}
          checked={this.viewModel.isLayerSelected(layer)}
          id={id}
          onchange={this.viewModel._handleMultipleLayerSelectionChange.bind(this.viewModel, layer)}
          type="checkbox"
          name="checkboxSelection"
          slot
        />
      </calcite-checkbox>
    );
  }

  private _renderFieldSelectorToggle(layer: __esri.Layer | __esri.Sublayer) {
    const uniqueId: string = this.viewModel.createUniqueLayerId(layer);

    return (
      <calcite-button
        appearance="transparent"
        icon={!this.viewModel.areFieldsSelectedForLayer(uniqueId) ? "" : "list-check"}
        scale="xs"
        class={this.classes(CSS.lightBlueColoration, CSS.fieldButtonStyle, !this.viewModel.isLayerSelected(layer) ? CSS.displayNone : "")}
        onclick={this._openFieldSelector.bind(this, layer, uniqueId)}
      >
        Field
      </calcite-button>
    );
    // return (
    //   <span
    //     class={this.classes(CSS.lightBlueColoration, CSS.fieldButtonStyle, !this.viewModel.isLayerSelected(layer) ? CSS.displayNone : "")}
    //     onclick={this._openFieldSelector.bind(this, layer, uniqueId)}
    //   >
    //     Field
    //     {/* {fieldModal} */}
    //     <calcite-icon
    //       class={this.classes(CSS.lightBlueColoration, !this.viewModel.areFieldsSelectedForLayer(uniqueId) ? CSS.displayNone : "")}
    //       icon="list-check" scale="s"
    //     >
    //     </calcite-icon>
    //   </span>
    // );
  }


  private _openFieldSelector(layer: __esri.Layer | __esri.Sublayer, uniqueId: string) {
    this.stateStore.router = "FieldSelector";
    this.fieldSelector.setupFields(layer, uniqueId);
    this.scheduleRender();
  }


  /***
   * TODO:
   * 
   * - [X] Work out a basic display for Feature Layers and Map Image Layers (showing all sublayers for map image)
   * - [X] Work out the filtering based on Layer Type and Geom Type - (display what the layer and Geom types are?)
   *     - [X] map-image and feature
   *     - [X] point, polyline, polygon... etc
   * 
   * - [X] Get example app to serve with webpack
   * - [X] Work on selection with checkboxes and radio btns
   * - [X] Capture selection
   * - [X] Idea to give visual indication of what the filters are that are being applied
   * - [X] Work on Field Presentation and Selection
   *    - output - confirm json output timing and correct structure now with the field selection
   * - [X] Abstract Styling
   * - [X] Work on output json - should look like the old one
   * 
   * 
   * --- Tuesday May 5th ---
   * 
   * 1. [X] make in-panel field selector
   *    [X] Check logic that refactored today
   *    - Work on Styling
   *      - Test it with Calcite Checkboxes - then maybe report the issue (ask Kelly 1st?) - https://github.com/Esri/calcite-components/issues/283 - https://github.com/Esri/calcite-components/issues/234 
   *      - Checkboxes
   *      - field selector styling
   *      - radio buttons
   *      - Other Styling ideas:
   *        - MIL and TLs, slight underline of main item to show that something beneath it is checked.
   *        - Field button - styling on that to indicate if the Field Selection for that layer needs to be done still.
   * 
   * . [X] Work on json input - what should it look like?
   * - [ ] Hook up inputs to work properly
   *   - [ ] make a set of sample inputs, to show during next meeting
   * - [ ] passing in savedState and reinstanitating from that
   * . [ ] nls
   *      
   * . [ ] test with variety of layer types
   * . [ ] filter on layer capabilities
   * 
   */

}

export = LayerConfig;
