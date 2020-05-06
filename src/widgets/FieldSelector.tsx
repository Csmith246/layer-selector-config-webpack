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
        <div id="header" key="title">Select Fields for: <strong>{this.chosenLayer.title}</strong></div>
        <div id="fields" key="fields">
          {this._renderFieldCheckboxes()}
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
      <label for={this.uniqueId + index} class={isSelected ? "selectedField" : ""}>
        <input
          bind={this}
          // class={CSS.checkboxStyle}
          key={this.uniqueId + index}
          id={this.uniqueId + index}
          value={field.name}
          checked={isSelected}
          type="checkbox"
          name="checkboxSelection"
          onchange={this._handleCheckboxClick.bind(this, field)}
        // tabIndex={index}
        />
        <div class="flex-col-class">
          <div>
            {field.alias}
          </div>
          <div>
            {`{${field.name}}`}
          </div>
        </div>
      </label>
    );
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
    const checked: boolean = e.target["checked"];
    if (checked) {
      this.selectedFields.add(field.name);
    } else {
      this.selectedFields.remove(field.name);
    }
  }

}

export = FieldSelector;