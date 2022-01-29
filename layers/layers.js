ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-73.545347, -37.231537, -72.218514, -36.413143]);
var wms_layers = [];

var format_COMUNAS_0 = new ol.format.GeoJSON();
var features_COMUNAS_0 = format_COMUNAS_0.readFeatures(json_COMUNAS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_COMUNAS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNAS_0.addFeatures(features_COMUNAS_0);
var lyr_COMUNAS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMUNAS_0, 
                style: style_COMUNAS_0,
                interactive: true,
    title: 'COMUNAS<br />\
    <img src="styles/legend/COMUNAS_0_0.png" /> Chiguayante<br />\
    <img src="styles/legend/COMUNAS_0_1.png" /> Concepción<br />\
    <img src="styles/legend/COMUNAS_0_2.png" /> Florida<br />\
    <img src="styles/legend/COMUNAS_0_3.png" /> Hualpén<br />\
    <img src="styles/legend/COMUNAS_0_4.png" /> Hualqui<br />\
    <img src="styles/legend/COMUNAS_0_5.png" /> Penco<br />\
    <img src="styles/legend/COMUNAS_0_6.png" /> Talcahuano<br />\
    <img src="styles/legend/COMUNAS_0_7.png" /> Tomé<br />\
    <img src="styles/legend/COMUNAS_0_8.png" /> <br />'
        });

lyr_COMUNAS_0.setVisible(true);
var layersList = [lyr_COMUNAS_0];
lyr_COMUNAS_0.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_COMUNAS_0.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_COMUNAS_0.set('fieldLabels', {'objectid': 'no label', 'shape_leng': 'no label', 'dis_elec': 'no label', 'cir_sena': 'no label', 'cod_comuna': 'no label', 'codregion': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', 'Comuna': 'header label', 'Provincia': 'no label', });
lyr_COMUNAS_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});