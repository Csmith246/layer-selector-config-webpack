/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// assets
import { 
  USE_SUBLAYER_KEY,
  IOutputJSON,
  ILayerDef,
  ELayerTypes,
  EGeometryTypes
 } from "./LayerConfigAssets";

// esri.core.accessorSupport
import {
  subclass,
  declared,
  property
} from "esri/core/accessorSupport/decorators";

// esri.core
import Accessor = require("esri/core/Accessor");

// esri.core.Handles
import Handles = require("esri/core/Handles");

// esri.core.Collection
import Collection = require("esri/core/Collection");


@subclass("LayerConfigViewModel")
class LayerConfigViewModel extends declared(Accessor) {
  //----------------------------------
  //
  //  Variables
  //
  //----------------------------------

  //----------------------------------
  //  --- Input State Variables ---
  //  State defined by inputs into LayerConfig
  //----------------------------------

  /** 
   * Collection of LayerTypes which define what layers are allowed to be shown in the ui display
   * Acts as a filter (Only layers of these types are allow through)
   */
  @property()
  allowedLayerTypes: __esri.Collection<ELayerTypes> = new Collection([
    ELayerTypes.FeatureLayer, 
    ELayerTypes.ImageryLayer, 
    ELayerTypes.MapImageLayer, 
    ELayerTypes.TileLayer
  ]);

  /** 
   * Collection of GeometryTypes which define what layers are allowed to be shown in the ui display
   * Acts as a filter (Only layers of these types are allow through)
   */
  @property()
  allowedGeomTypes: __esri.Collection<EGeometryTypes> = new Collection([EGeometryTypes.Point, EGeometryTypes.Line, EGeometryTypes.Polyline, EGeometryTypes.Polygon]);
  // allowedGeomTypes: __esri.Collection<EGeometryTypes> = new Collection([EGeometryTypes.Line, EGeometryTypes.Polyline]);
  // allowedGeomTypes: __esri.Collection<EGeometryTypes> = new Collection([EGeometryTypes.Polygon]);
  // allowedGeomTypes: __esri.Collection<EGeometryTypes> = new Collection([EGeometryTypes.Point]);

  /**
   * Defines which selection method will be used. If "single", then radio buttons are shown
   * next to layers, allowing only one layer to be chosen. If "multi", then checkboxes are shown
   * next to layers, allowing one or many layers to be chosen.
   */
  @property()
  selectionType: "single" | "multi" = "multi";

  //----------------------------------
  //  --- App State Variables --- 
  //  State defined by LayerConfig Widget
  //----------------------------------

  /** Used to keep track of watch Handles and easily clean up after them */
  private _handles: Handles = new Handles();

  /**
   * Keeps track of which expands are expanded with following mapping
   * expandID: string => isExpanded: boolean
   */
  @property() 
  expandStateTracker: Map<string, boolean> = new Map<string, boolean>();

  /** Indicates if information about layers is currently being loaded */
  @property({
    type: Boolean
  })
  areLayersDetailsLoading = false;

  /**
   * The layers that pass all of the filters. Are rendered to the ui to be selected from.
   */
  @property({
    type: Collection
  })
  acceptableLayers: __esri.Collection<__esri.Layer> = new Collection();

  /**
   * Keeps track of all layers selected by checkboxes
   */
  @property()
  multiSelectState: __esri.Collection<__esri.Layer | __esri.Sublayer> = new Collection();

  /**
   * Selected Field State Tracker
   */
  @property()
  fieldState: Map<string, __esri.Collection> = new Map();

  //----------------------------------
  //  --- Output Variables --- 
  //  The output of the application 
  //----------------------------------

  @property()
  outputJSON: IOutputJSON;


  //----------------------------------
  //
  //  Lifecycle methods
  //
  //----------------------------------

  initialize() {
    // When MultiSelectState changes, then remake the outputJSON
    this._handles.add(this.multiSelectState.on("change", ()=>{
      this.createJsonOutput();
    }));
  }

  destroy() {
    this._handles.removeAll();
    this._handles.destroy();
  }


  //----------------------------------
  //
  //  Public Methods
  //
  //----------------------------------

  loadLayerDetails(layers: __esri.Collection<__esri.Layer>) {
    this.areLayersDetailsLoading = true;
    let promCollection = new Collection();
    for (let x=0; x<layers.length; x++){
      const layer = layers.getItemAt(x);
      if(layer.type === "map-image"){
        promCollection.add((<__esri.MapImageLayer>layer).loadAll());
      }else if(layer.type === "tile"){
        promCollection.add(this._loadTileLayerFully(<any>layer));
      }else{ // all other layer types
        promCollection.add(layer.load());
      }
    }

    Promise.all(promCollection.toArray()).then((res) => {
      this.areLayersDetailsLoading = false;
    }).catch((err) => {
      console.error(err);
      this.areLayersDetailsLoading = false;
    });
  }

  filterByLayerType(layer: __esri.Layer): boolean {
    return this.allowedLayerTypes.includes(<ELayerTypes>layer.type);
  }

  filterByGeomType(layer: __esri.Layer): boolean {
    if (layer.type === ELayerTypes.MapImageLayer || layer.type === ELayerTypes.TileLayer){
      let passingCount = 0;
      (<__esri.MapImageLayer>layer).allSublayers.forEach((sublayer)=>{
        let isSublayerPassing:boolean = this.allowedGeomTypes.includes(sublayer.sourceJSON?.["geometryType"]);
        sublayer[USE_SUBLAYER_KEY] = isSublayerPassing;
        if(isSublayerPassing) passingCount += 1;
      });

      return passingCount > 0; // if any sublayers pass, then don't filter the MIL out of the display
    }else if(layer.type === ELayerTypes.ImageryLayer){
      return true; // no associated geometry - just allow it to pass through (since it already passed the layer filter)
    }else{
      return this.allowedGeomTypes.includes(layer?.["sourceJSON"]?.["geometryType"]);
    }
  }

  /**
   * Note: Only for radio button selection
   * @param layer 
   */
  _handleSingleLayerSelectionChange(layer: __esri.Layer | __esri.Sublayer){
    // console.log("Selected Layer", layer);
    this.multiSelectState.removeAll();
    this.multiSelectState.add(layer);

    // this.outputJSON = {
    //   layers: [ this.toJSON(layer) ]
    // }
  }

  _handleMultipleLayerSelectionChange(layer: __esri.Layer | __esri.Sublayer, e: any){
    // console.log("Layer Checkbox Selection: ", layer);
    // console.log("MouseEvent: ", e);
    let isChecked: boolean = e.target.checked;
    if(isChecked){ // Add to Collection
      this.multiSelectState.add(layer);
    } else{ // Remove from Collection
      this.multiSelectState.remove(layer);
    }
  }


  fieldSelectionCancel(uniqueId: string, fieldCheckboxes: any[]){
    console.log("layer", uniqueId);
    console.log("fieldCheckboxes", fieldCheckboxes);
    // 1. find State in Map
      // if doesn't exsit then clear all selection for field Checkboxes
      // else reinstate state for field Checkboxes
    let fieldNames = this.fieldState.get(uniqueId);
    if(fieldNames == null){
      // reset all checkboxes to unchecked
      fieldCheckboxes.forEach((checkbox)=>{ checkbox.domNode.checked = false; })
    }else{
      fieldCheckboxes.forEach((checkbox)=>{ checkbox.domNode.checked = fieldNames?.includes(checkbox.domNode.value) ? true: false })
    }
  }

  fieldSelectionSave(uniqueId: string, fieldCheckboxes: any){
    // update State in Map to match fieldCheckboxes
    // update OutputJSON
    let fieldNames = this.fieldState.get(uniqueId);
    if(fieldNames == null){
      fieldNames = new Collection();
      this.fieldState.set(uniqueId, fieldNames);
    }else{
      fieldNames.removeAll();
    }

    fieldNames.addMany(
      fieldCheckboxes
        .filter((checkbox: any)=>{ return checkbox.domNode.checked })
        .map((checkbox: any)=>{ return checkbox.domNode.value })
    );
  }


  createUniqueLayerId(layer: __esri.Layer | __esri.Sublayer): string{
    // "type" is defined on Layer, but not on Sublayer
    return layer["type"] != null ? layer.id as string : `${(layer as __esri.Sublayer).layer.id}_${layer.id}`;
  }


  createJsonOutput(){
    this.outputJSON = {
      layers: <any>[ ...this.multiSelectState.toArray().map(this.toJSON.bind(this)) ]
    };
  }


  isLayerSelected(layer: __esri.Layer | __esri.Sublayer):boolean{
    return this.multiSelectState.includes(layer);
  }


  //----------------------------------
  //
  //  Private Methods
  //
  //----------------------------------

  private async _loadTileLayerFully(layer: __esri.TileLayer){
    await (<__esri.TileLayer>layer).load();
    return Promise.all(layer.allSublayers.toArray().map(sublayer=>sublayer.load()))
  }

  private toJSON(layer: __esri.Layer | __esri.Sublayer): ILayerDef{
    
    let output: ILayerDef;

    if(layer[USE_SUBLAYER_KEY] != null){
      output = {
        id: (<__esri.Sublayer>layer).layer.id,
        sublayerId: <number>layer.id
      };
    }else{
      output = {
        id: <string>layer.id
      };
    }

    let uniqueId = this.createUniqueLayerId(layer);
    let fieldsNames = this.fieldState.get(uniqueId);
    if(fieldsNames != null){
      output.fields = fieldsNames.toArray();
    }else{
      output.fields = [];
    }

    return output;
  }

}

export = LayerConfigViewModel;