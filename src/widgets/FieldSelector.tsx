/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />

import "./styles/FieldSelector.scss";
import "@esri/calcite-components";

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
import Collection = require("esri/core/Collection");

import LayerConfigViewModel = require('./LayerConfigViewModel');
import StateStore = require('./stateStore');


//----------------------------------
//
//  CSS Classes
//
//----------------------------------
const CSS = {

};

@subclass("FieldSelector")
class FieldSelector extends declared(Widget) {
  //----------------------------------
  //
  //  Variables
  //
  //----------------------------------

  @property()
  chosenLayer: __esri.Layer | __esri.Sublayer;

  @property()
  uniqueId: string;

  @property()
  layerConfigViewModel: LayerConfigViewModel;

  @property()
  stateStore: StateStore;

  private selectedFields: __esri.Collection<string>;

  constructor(values) {
    super(values);
  }

  render() {
    return (
      <div id="fieldsContainer">
        <div id="header" key="title">
          <div>
            Select Fields for: <strong>{this.chosenLayer.title}</strong>
          </div>
          <calcite-button appearance="transparent" color="dark" title="Cancel"
            icon="x" scale="l" onclick={this.cancel.bind(this)}></calcite-button>
        </div>
        <div id="fields" key="fields">
          <calcite-pick-list multiple filter-enabled={true}>
            {this._renderFieldCheckboxes()}
          </calcite-pick-list>
        </div>
        <div id="footer" key="buttons">
          <calcite-button key="cancel" appearance="outline" onclick={this.cancel.bind(this)}>Cancel</calcite-button>
          <calcite-button key="confirm" onclick={this.saveSelection.bind(this)}>Confirm</calcite-button>
        </div>
      </div>
    );
  }

  setupFields(layer: __esri.Layer | __esri.Sublayer, uniqueId: string) {
    this.chosenLayer = layer;
    this.uniqueId = uniqueId;
    this.selectedFields = new Collection();
    this.selectedFields.addMany(
      this.chosenLayer?.["fields"]?.filter((field: __esri.Field) => {
        return this.layerConfigViewModel.isFieldSelected(this.uniqueId, field.name);
      }).map(field => field.name)
    );
  }

  private _renderFieldCheckboxes() {
    return this.chosenLayer?.["fields"]?.
      // sort((field1, field2) => {
      //   const isField1Checked: boolean = this.selectedFields.includes(field1);
      //   const isField2Checked: boolean = this.selectedFields.includes(field2);
      //   if (isField1Checked && !isField2Checked) { return -1; }
      //   else if (!isField1Checked && isField2Checked) { return 1; }
      //   else { // both checked, so sort by alphanumeric 
      //     if (field1 < field2) { return -1; }
      //     else if (field1 > field2) { return 1; }
      //     else { return 0; }
      //   }
      // }).
      map(this._renderFieldCheckbox.bind(this));
  }

  private _renderFieldCheckbox(field: __esri.Field, index: number) {
    // const isSelected: boolean = this.layerConfigViewModel.isFieldSelected(this.uniqueId, field.name);
    const isSelected: boolean = this.selectedFields.includes(field.name);
    console.log("RE-render box!", isSelected);

    return (
      <calcite-pick-list-item
        text-label={field.alias}
        text-description={`{${field.name}}`}
        value={field.name}
        selected={isSelected}
        afterCreate={this._setupOnClickEvent.bind(this, field)}
      ></calcite-pick-list-item>
    );
  }

  private _setupOnClickEvent(field: __esri.Field, elem: Element) {
    // this.own(
      (elem as HTMLCalcitePickListElement).addEventListener("calciteListItemChange", (e) => {
        console.log("IN picklist event listener");
        this._handleCheckboxClick.call(this, field, e);
      });
    // )
  }

  private cancel() {
    this.stateStore.router = "LayerSelector";
  }

  private saveSelection() {
    this.layerConfigViewModel.fieldSelectionSave(this.uniqueId, this.selectedFields);
    this.stateStore.router = "LayerSelector";
  }

  private _handleCheckboxClick(field: __esri.Field, e: MouseEvent) {
    console.log("Checkbox click", e);
    const checked: boolean = e.target["selected"]; // Note: selected is the calcite-pick-list-item property
    if (checked) {
      this.selectedFields.add(field.name);
    } else {
      this.selectedFields.remove(field.name);
    }
  }

}

export = FieldSelector;