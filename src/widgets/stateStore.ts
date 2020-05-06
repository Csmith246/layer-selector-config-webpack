/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

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

import { RouterStates } from './LayerConfigAssets';

@subclass("StateStore")
class StateStore extends declared(Accessor) {
    @property()
    router: RouterStates = "LayerSelector";

    @property()
    rootLayerSelector: any;
}

export = StateStore;