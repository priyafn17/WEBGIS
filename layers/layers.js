var wms_layers = [];

var format_Dissolved_0 = new ol.format.GeoJSON();
var features_Dissolved_0 = format_Dissolved_0.readFeatures(json_Dissolved_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_0.addFeatures(features_Dissolved_0);
var lyr_Dissolved_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dissolved_0, 
                style: style_Dissolved_0,
                interactive: true,
    title: 'Dissolved<br />\
    <img src="styles/legend/Dissolved_0_0.png" /> Kerapatan Vegetasi Rendah<br />\
    <img src="styles/legend/Dissolved_0_1.png" /> Kerapatan Vegetasi Tinggi<br />'
        });

lyr_Dissolved_0.setVisible(true);
var layersList = [lyr_Dissolved_0];
lyr_Dissolved_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Keterangan': 'Keterangan', });
lyr_Dissolved_0.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Keterangan': 'TextEdit', });
lyr_Dissolved_0.set('fieldLabels', {'fid': 'no label', 'DN': 'inline label', 'Keterangan': 'inline label', });
lyr_Dissolved_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});