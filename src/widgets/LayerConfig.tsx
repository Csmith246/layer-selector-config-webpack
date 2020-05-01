/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />

import "./styles/LayerConfig.scss";
import "@esri/calcite-components";

import { friendlyLayerNames, friendlyGeometryNames } from './LayerConfigAssets';

// esri.core.accessorSupport
import {
  subclass,
  declared,
  property,
  aliasOf
} from "esri/core/accessorSupport/decorators";

//esri.widgets.support
import {
  renderable,
  tsx
} from "esri/widgets/support/widget";

// dojo.118n
// import i18n = require("dojo/i18n!./SearchConfig/nls/resources");

// esri.widgets.Widget
import Widget = require("esri/widgets/Widget");

// esri.core.watchUtils
import watchUtils = require("esri/core/watchUtils");

// esri/WebMap
import WebMap = require("esri/WebMap");

// esri/Layer
import Layer = require("esri/layers/Layer");

// widgets/LayerConfigViewModel
import LayerConfigViewModel = require("./LayerConfigViewModel");
// import { VNode, JSX } from '@esri/calcite-components/dist/types/stencil-public-runtime';

// import LCViewModelExport = require("./LayerConfigViewModel");
// const LayerConfigViewModel = LCViewModelExport.LayerConfigViewModel;
// const USE_SUBLAYER_KEY = LCViewModelExport.USE_SUBLAYER_KEY;

// import USE_SUBLAYER_KEY = require("./LayerConfigViewModel");

const USE_SUBLAYER_KEY = "USE_SUBLAYER_KEY";

//----------------------------------
//
//  CSS Classes
//esri-search-config__source-list-table
//----------------------------------
const CSS = {
  base: "esri-layer-picker-config",
  flexContainer: "esri-layer-picker-config__flex-display",
  flexRow: "esri-layer-picker-config__flex-row",
  rowStylesAndSpacing: "esri-layer-picker-config__row-styles",
  displayNone: "display-none",
  mainLayerDisplay: "esri-layer-picker-config__main-layer-display",
  sublayerDisplay: "esri-layer-picker-config__sublayer-display",
  lightBlueColoration: "light-blue-color",
  layersIconSpacing: "esri-layer-picker-config__layers-spacing",
  greyColor: "grey-color",
  widthFull: "esri-layer-picker-config__width",

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


  // //----------------------------------
  // //
  // //  configItems
  // //
  // //----------------------------------
  // @aliasOf("viewModel.configItems")
  // @renderable()
  // configItems: Collection<LocatorConfigItem | LayerConfigItem> = null;

  //----------------------------------
  //
  //  viewModel
  //
  //----------------------------------
  @renderable([
    "viewModel.acceptableLayers"
  ])
  @property({
    type: LayerConfigViewModel
  })
  viewModel: LayerConfigViewModel = new LayerConfigViewModel();


  @renderable()
  loadedWebMap: WebMap;

  @aliasOf("viewModel.areLayersDetailsLoading")
  @property()
  @renderable()
  areLayersDetailsLoading: boolean;


  filterTooltipMsg: string;


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

      // todo: listener clean up
      watchUtils.whenFalseOnce(this.viewModel, "areLayersDetailsLoading", () => {
        let finalAcceptableLayers = acceptableLayers.filter(this.viewModel.filterByGeomType.bind(this.viewModel));
        this.viewModel.acceptableLayers = finalAcceptableLayers;
      });
    });

    // todo: listener clean up
    this.viewModel.watch("outputJSON", (val) => {
      console.log("New OutputJSON Value:", JSON.stringify(val))
    });

    this._setupFilterInfoTooltip();

  }

  render() {
    // console.log("loadedWM render:", this.loadedWebMap);

    return (
      <div class={this.classes(CSS.base, CSS.flexContainer)}>

        <div class={CSS.flexRow}>
          <header>Layers</header>{/* todo: nls */}
          <calcite-tooltip class={CSS.renderLineBreaks} placement="left-start" reference-element="tooltip-filter-info">{this.filterTooltipMsg}</calcite-tooltip>
          <calcite-tooltip-manager>
            <calcite-icon id="tooltip-filter-info" class={CSS.lightBlueColoration} icon="information" scale="s"></calcite-icon>
          </calcite-tooltip-manager>
        </div>
        {this._renderLayerItems()}
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

  private _setupFilterInfoTooltip() {
    this.filterTooltipMsg = `Showing layers of type:
    •  ${this.viewModel.allowedLayerTypes.map(layerType => friendlyLayerNames.get(layerType)).join("\n    •  ")}
And of geometry:
    •  ${this.viewModel.allowedGeomTypes.map(geomType => friendlyGeometryNames.get(geomType)).join("\n    •  ")}
  `;
  }

  private _renderLayerItems() {
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
    return [
      <label for={id} class={this.classes(CSS.selectableLayerItemStyle, CSS.layerItemStyle, CSS.mainLayerDisplay)} >
        { selectionType }
        <span class={this.classes(CSS.calciteStyles.featureLayerIcon, CSS.greyColor)} />
        {/* <calcite-icon class={CSS.darkIconStyle} icon="layer" scale="m"></calcite-icon> */}
        <span>{layer.title}</span>
      </label>,
      // this.viewModel.isLayerSelected(layer) ? this._renderFieldSelector(layer, "layer") : null 
      this._renderFieldSelector(layer, "layer") 
    ];
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
          <span>{layer.title}</span>
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
      <div class={this.classes(CSS.flexRow)}>
        <label for={divKey} class={this.classes(CSS.selectableLayerItemStyle, CSS.widthFull)} key={divKey}>
          { selectionType }
          <span class={CSS.calciteStyles.featureLayerIcon} />
          <span>{sublayer.title}</span>
        </label>
        {/* {this.viewModel.isLayerSelected(sublayer) ? this._renderFieldSelector(sublayer, "sublayer") : null } */}
        { this._renderFieldSelector(sublayer, "sublayer") }
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
      <calcite-checkbox class={CSS.checkboxStyle}>
        <input
          bind={this}
          class={CSS.displayNone}
          id={id}
          onchange={this.viewModel._handleMultipleLayerSelectionChange.bind(this.viewModel, layer)}
          type="checkbox"
          name="checkboxSelection"
        // checked={this.viewModel.layerItemToBeConfigured.withinViewEnabled}
        />
      </calcite-checkbox>
    );
  }

  private _renderFieldSelector(layer: __esri.Layer | __esri.Sublayer, layerType: "layer" | "sublayer") {
    const uniqueId: string = this.viewModel.createUniqueLayerId(layer);

    const cancelBtn: any = <calcite-button slot="secondary" width="full" appearance="outline">Cancel</calcite-button>
    const confirmBtn: any = <calcite-button slot="primary" width="full">Confirm</calcite-button>
    const fieldCheckboxes =
      layer["fields"].map((field:__esri.Field, index: number)=>{
        return (<calcite-checkbox class={CSS.checkboxStyle} tabIndex={index}>
        <input
          bind={this}
          class={CSS.displayNone}
          id={uniqueId}
          value={field.name}
          // onchange={this.viewModel._handleMultipleLayerSelectionChange.bind(this.viewModel, layer)}
          type="checkbox"
          name="checkboxSelection"
          tabIndex={index}
        />
          {field.name}
        </calcite-checkbox>);
      });
    
    const fieldModal: any = 
    <calcite-modal size="medium" disableEscape="false" onclick={(e:any)=>{e.stopPropagation()}}>
      <h3 slot="header" id="modal-title">Select Fields</h3>
      <div slot="content" class={CSS.fieldModalDisplay}>
        {fieldCheckboxes}
      </div>
      {cancelBtn}
      {confirmBtn}
    </calcite-modal>;

    return (
      <span
        class={this.classes(CSS.lightBlueColoration, CSS.fieldButtonStyle, !this.viewModel.isLayerSelected(layer) ? CSS.displayNone : "")}
        onclick={this._openFieldSelectorModal.bind(this, uniqueId, fieldModal, cancelBtn, confirmBtn, fieldCheckboxes)}
      >
        Field
        {fieldModal}
      </span>
    );
  }


  private _openFieldSelectorModal(uniqueId: string, fieldModal: any, cancelBtn: any, confirmBtn: any, fieldCheckboxes: any) {
    fieldModal.domNode.open();

    (cancelBtn as any).domNode.onclick = (e: MouseEvent)=>{
      e.stopPropagation();
      fieldModal.domNode.close();

      // need to reinstatiate the state of when modal was initially opened
      this.viewModel.fieldSelectionCancel(uniqueId, fieldCheckboxes);
    };

    (confirmBtn as any).domNode.onclick = (e: MouseEvent)=>{
      e.stopPropagation();
      fieldModal.domNode.close();

      // save field selections
      this.viewModel.fieldSelectionSave(uniqueId, fieldCheckboxes);

      this.viewModel.createJsonOutput();
    };
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
   * --- Friday 5/1 ---
   * 
   * 1. [ ] test with variety of layer types
   * 2. [ ] Work on json input - what should it look like?
   * 3. [ ] filter on layer capabilities
   * 4. [ ] nls
   * 
   */

}

export = LayerConfig;
