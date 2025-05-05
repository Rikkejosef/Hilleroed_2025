var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Kommunegrnse_Hillerd_1 = new ol.format.GeoJSON();
var features_Kommunegrnse_Hillerd_1 = format_Kommunegrnse_Hillerd_1.readFeatures(json_Kommunegrnse_Hillerd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommunegrnse_Hillerd_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommunegrnse_Hillerd_1.addFeatures(features_Kommunegrnse_Hillerd_1);
var lyr_Kommunegrnse_Hillerd_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommunegrnse_Hillerd_1, 
                style: style_Kommunegrnse_Hillerd_1,
                popuplayertitle: 'Kommunegrænse_Hillerød',
                interactive: false,
                title: '<img src="styles/legend/Kommunegrnse_Hillerd_1.png" /> Kommunegrænse_Hillerød'
            });
var format_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2 = new ol.format.GeoJSON();
var features_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2 = format_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2.readFeatures(json_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2.addFeatures(features_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2);
var lyr_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2, 
                style: style_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2,
                popuplayertitle: 'beskyttetnatur_Hillerødvs3 — beskyttede_naturtypervs3',
                interactive: true,
                title: '<img src="styles/legend/beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2.png" /> beskyttetnatur_Hillerødvs3 — beskyttede_naturtypervs3'
            });
var format_omrdertilbesigtigelse2025_3 = new ol.format.GeoJSON();
var features_omrdertilbesigtigelse2025_3 = format_omrdertilbesigtigelse2025_3.readFeatures(json_omrdertilbesigtigelse2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_omrdertilbesigtigelse2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_omrdertilbesigtigelse2025_3.addFeatures(features_omrdertilbesigtigelse2025_3);
var lyr_omrdertilbesigtigelse2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_omrdertilbesigtigelse2025_3, 
                style: style_omrdertilbesigtigelse2025_3,
                popuplayertitle: 'områder til besigtigelse 2025',
                interactive: true,
                title: '<img src="styles/legend/omrdertilbesigtigelse2025_3.png" /> områder til besigtigelse 2025'
            });

lyr_googlehybrid_0.setVisible(true);lyr_Kommunegrnse_Hillerd_1.setVisible(true);lyr_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2.setVisible(true);lyr_omrdertilbesigtigelse2025_3.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_Kommunegrnse_Hillerd_1,lyr_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2,lyr_omrdertilbesigtigelse2025_3];
lyr_Kommunegrnse_Hillerd_1.set('fieldAliases', {'id.namespa': 'id.namespa', 'id.lokalId': 'id.lokalId', 'registreri': 'registreri', 'senesteSag': 'senesteSag', 'virkningFr': 'virkningFr', 'virkningsa': 'virkningsa', 'kommunenav': 'kommunenav', 'kommunekod': 'kommunekod', });
lyr_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Natyp_kode': 'Natyp_kode', 'Natyp_navn': 'Natyp_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Sagsbeh': 'Sagsbeh', 'Gl_sys_ref': 'Gl_sys_ref', 'Besig_dato': 'Besig_dato', 'Journalnr': 'Journalnr', 'Vedligehold_status': 'Vedligehold_status', 'Vedligehold_tid': 'Vedligehold_tid', });
lyr_omrdertilbesigtigelse2025_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Naturtype': 'Naturtype', 'Hvorfor_be': 'Hvorfor_be', 'Bemærknin': 'Bemærknin', 'Areal': 'Areal', 'Besigtiget': 'Besigtiget', 'Luftfotona': 'Luftfotona', 'Skal ikke': 'Skal ikke', });
lyr_Kommunegrnse_Hillerd_1.set('fieldImages', {'id.namespa': 'TextEdit', 'id.lokalId': 'TextEdit', 'registreri': 'TextEdit', 'senesteSag': 'TextEdit', 'virkningFr': 'TextEdit', 'virkningsa': 'TextEdit', 'kommunenav': 'TextEdit', 'kommunekod': 'TextEdit', });
lyr_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Natyp_kode': 'Range', 'Natyp_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Sagsbeh': 'TextEdit', 'Gl_sys_ref': 'TextEdit', 'Besig_dato': 'DateTime', 'Journalnr': 'TextEdit', 'Vedligehold_status': 'TextEdit', 'Vedligehold_tid': 'DateTime', });
lyr_omrdertilbesigtigelse2025_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Naturtype': 'TextEdit', 'Hvorfor_be': 'TextEdit', 'Bemærknin': 'TextEdit', 'Areal': 'TextEdit', 'Besigtiget': 'TextEdit', 'Luftfotona': 'TextEdit', 'Skal ikke': 'TextEdit', });
lyr_Kommunegrnse_Hillerd_1.set('fieldLabels', {'id.namespa': 'no label', 'id.lokalId': 'no label', 'registreri': 'no label', 'senesteSag': 'no label', 'virkningFr': 'no label', 'virkningsa': 'no label', 'kommunenav': 'no label', 'kommunekod': 'no label', });
lyr_beskyttetnatur_Hillerdvs3beskyttede_naturtypervs3_2.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Natyp_kode': 'no label', 'Natyp_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Sagsbeh': 'no label', 'Gl_sys_ref': 'no label', 'Besig_dato': 'no label', 'Journalnr': 'no label', 'Vedligehold_status': 'no label', 'Vedligehold_tid': 'no label', });
lyr_omrdertilbesigtigelse2025_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'inline label - always visible', 'Naturtype': 'inline label - always visible', 'Hvorfor_be': 'inline label - always visible', 'Bemærknin': 'inline label - always visible', 'Areal': 'inline label - always visible', 'Besigtiget': 'inline label - always visible', 'Luftfotona': 'inline label - always visible', 'Skal ikke': 'inline label - always visible', });
lyr_omrdertilbesigtigelse2025_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});