// Require the necessary modules for the ArcGIS API i.e Map, Sketch, Home, MapView and config
//When the browser loads the script file specified in the  <script> tag in the head section of html doc, index.html, the require method asynchronously loads the specified modules.
// Use arrow function syntax in the require method and pass parameters for the callback function
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Sketch",
    "esri/widgets/Home",
     "esri/layers/GraphicsLayer"
  ], (esriConfig, Map, MapView, Sketch, Home,  GraphicsLayer) => {
    // Set the API key obtained from https://developers.arcgis.com/api-keys/ on the user dashboard, without the api key most basemap services would require sign in
    esriConfig.apiKey = "AAPKfe75a1a0fdf64f4eb98ecedea8361482hVRNN1YTOm4xBGR2FveYly67Eyu7dhvwd_Kl4dOg0QdIUnXDzEA2tk0bJdQS00z6";
  
    // Create a new map with the arcgis-topographic basemap
    const map = new Map({
      basemap: "arcgis/topographic" // basemap styles service, others include, streets, satellite, hybrid, and gray
    });
  
    // Create a new MapView and set its properties
    const view = new MapView({
      map: map,
      center: [114.2985, 30.5843], // Longitude, latitude for Wuhan, Hubei Province, China
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element to contain the map view in index.html
    });

    // Create a GraphicsLayer to draw sketches
      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);
  
    // Create a Sketch widget and add it to the view on the top-right section of the webmap
    // The Sketch widget allows users to create and edit graphics on the map, such as points, lines, and polygons
    // It provides tools for drawing, editing, and deleting graphics
   
    const sketch = new Sketch({
      view: view,
      layer: graphicsLayer
    });
    view.ui.add(sketch, "top-right"); 
  
  
    // Create a Home widget and add it to the view top-left section of the webmap
    //the home widget when clicked, it makes the map go to it's original display  extent or auto upgrade if cannot fit in current display
    const homeWidget = new Home({
      view: view
    });
    view.ui.add(homeWidget, "top-left");
  });
  
