
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "FragSubNuc_0": {
            "type": "geojson",
            "data": json_FragSubNuc_0
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_FragSubNuc_0_0",
            "type": "fill",
            "source": "FragSubNuc_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#becf50'}
        }
],
}