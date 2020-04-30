// Key put on __esri.Sublayer Object which indicates whether that sublayer 
// should be shown or not in the pick list, based on the geom (and other) filters
export const USE_SUBLAYER_KEY = "USE_SUBLAYER_KEY";

export interface IOutputJSON{
    layers: ILayerDef[];
}

export interface ILayerDef{
    id: string;
    sublayerId?: number;
    fields?: string[];
}

/////////////////////
/// Layer Types
/////////////////////
export enum ELayerTypes{
    MapImageLayer = "map-image",
    TileLayer = "tile",
    
    FeatureLayer = "feature",

    ImageryLayer = "imagery"
}

const layerNames: [ELayerTypes, string][] = [
    [ELayerTypes.FeatureLayer, "Feature Layer"],
    [ELayerTypes.MapImageLayer, "Map Image Layer"],
    [ELayerTypes.TileLayer, "Tile Layer"],
    [ELayerTypes.ImageryLayer, "Imagery Layer"]
];

export const friendlyLayerNames: Map<ELayerTypes, string> = new Map();
layerNames.forEach(layerName => friendlyLayerNames.set(layerName[0], layerName[1]))

/////////////////////
/// Geometry Types
/////////////////////
export enum EGeometryTypes{
    Point = "esriGeometryPoint",
    Line = "esriGeometryLine",
    Polyline = "esriGeometryPolyline",
    Polygon = "esriGeometryPolygon"
}

const geometryNames: [EGeometryTypes, string][] = [
    [EGeometryTypes.Point, "Point"],
    [EGeometryTypes.Line, "Line"],
    [EGeometryTypes.Polyline, "Polyline"],
    [EGeometryTypes.Polygon, "Polygon"]
];

export const friendlyGeometryNames: Map<EGeometryTypes, string> = new Map();
geometryNames.forEach(geometryName => friendlyGeometryNames.set(geometryName[0], geometryName[1]))


