var highlightLayer;
function highlightFeature(e) {
  highlightLayer = e.target;

  if (e.target.feature.geometry.type === "LineString") {
    highlightLayer.setStyle({
      color: "#ffff00",
    });
  } else {
    highlightLayer.setStyle({
      fillColor: "#ffff00",
      fillOpacity: 1,
    });
  }
}
var map = L.map("map", {
  zoomControl: false,
  maxZoom: 20,
  minZoom: 1,
})
L.control.zoom({position : "bottomleft", zIndex : 10}, ).addTo(map)


var hash = new L.Hash(map);
map.attributionControl.setPrefix(
  '<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>'
);
var autolinker = new Autolinker({
  truncate: { length: 30, location: "smart" },
});
function removeEmptyRowsFromPopupContent(content, feature) {
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;
  var rows = tempDiv.querySelectorAll("tr");
  for (var i = 0; i < rows.length; i++) {
    var td = rows[i].querySelector("td.visible-with-data");
    var key = td ? td.id : "";
    if (
      td &&
      td.classList.contains("visible-with-data") &&
      feature.properties[key] == null
    ) {
      rows[i].parentNode.removeChild(rows[i]);
    }
  }
  return tempDiv.innerHTML;
}
L.control.locate({ locateOptions: { maxZoom: 19 }, position : "bottomleft" }).addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {
  if (bounds_group.getLayers().length) {
    map.fitBounds(bounds_group.getBounds());
  }
}
map.createPane("pane_ESRITopo_0");
map.getPane("pane_ESRITopo_0").style.zIndex = 400;
var layer_ESRITopo_0 = L.tileLayer(
  "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  {
    pane: "pane_ESRITopo_0",
    opacity: 1.0,
    attribution: "",
    minZoom: 1,
    maxZoom: 20,
    minNativeZoom: 0,
    maxNativeZoom: 20,
  }
);
layer_ESRITopo_0;
map.createPane("pane_ESRISatellite_1");
map.getPane("pane_ESRISatellite_1").style.zIndex = 401;
var layer_ESRISatellite_1 = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    pane: "pane_ESRISatellite_1",
    opacity: 1.0,
    attribution: "",
    minZoom: 1,
    maxZoom: 20,
    minNativeZoom: 0,
    maxNativeZoom: 20,
  }
);
layer_ESRISatellite_1;
map.createPane("pane_OSMStandard_2");
map.getPane("pane_OSMStandard_2").style.zIndex = 402;
var layer_OSMStandard_2 = L.tileLayer(
  "http://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    pane: "pane_OSMStandard_2",
    opacity: 1.0,
    attribution:
      '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
    minZoom: 1,
    maxZoom: 20,
    minNativeZoom: 0,
    maxNativeZoom: 19,
  }
);
layer_OSMStandard_2;
map.addLayer(layer_OSMStandard_2);
function pop_TingkatKerawananLongsor_3(feature, layer) {
  layer.on({
    mouseout: function (e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  var popupContent =
    '<table>\
            <tr>\
                <th scope="row">Longsor</th>\
                <td>' +
    (feature.properties["Longsor"] !== null
      ? autolinker.link(feature.properties["Longsor"].toLocaleString())
      : "") +
    "</td>\
            </tr>\
        </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
  var popup = layer.getPopup();
  var content = popup.getContent();
  var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
  popup.setContent(updatedContent);
}

function style_TingkatKerawananLongsor_3_0(feature) {
  switch (String(feature.properties["Longsor"])) {
    case "Sangat Tinggi":
      return {
        pane: "pane_TingkatKerawananLongsor_3",
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(255,0,4,1.0)",
        interactive: true,
      };
      break;
    case "Tinggi":
      return {
        pane: "pane_TingkatKerawananLongsor_3",
        stroke: false,
        fill: true,
        fillOpacity: 1,
        fillColor: "rgba(245,245,10,1.0)",
        interactive: true,
      };
      break;
  }
}
map.createPane("pane_TingkatKerawananLongsor_3");
map.getPane("pane_TingkatKerawananLongsor_3").style.zIndex = 403;
map.getPane("pane_TingkatKerawananLongsor_3").style["mix-blend-mode"] =
  "normal";
var layer_TingkatKerawananLongsor_3 = new L.geoJson(
  json_TingkatKerawananLongsor_3,
  {
    attribution: "",
    interactive: true,
    dataVar: "json_TingkatKerawananLongsor_3",
    layerName: "layer_TingkatKerawananLongsor_3",
    pane: "pane_TingkatKerawananLongsor_3",
    onEachFeature: pop_TingkatKerawananLongsor_3,
    style: style_TingkatKerawananLongsor_3_0,
  }
);
bounds_group.addLayer(layer_TingkatKerawananLongsor_3);
map.addLayer(layer_TingkatKerawananLongsor_3);
function pop_pemukiman_4(feature, layer) {
  layer.on({
    mouseout: function (e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  var popupContent =
    '<table>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["Legenda"] !== null
      ? autolinker.link(feature.properties["Legenda"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["skor_Tlaha"] !== null
      ? autolinker.link(feature.properties["skor_Tlaha"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["Ni_bobot"] !== null
      ? autolinker.link(feature.properties["Ni_bobot"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["Total_PL"] !== null
      ? autolinker.link(feature.properties["Total_PL"].toLocaleString())
      : "") +
    "</td>\
            </tr>\
        </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
  var popup = layer.getPopup();
  var content = popup.getContent();
  var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
  popup.setContent(updatedContent);
}

function style_pemukiman_4_0() {
  return {
    pane: "pane_pemukiman_4",
    opacity: 1,
    color: "rgba(51,250,44,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 1,
    fillColor: "rgba(210,170,8,1.0)",
    interactive: true,
  };
}
map.createPane("pane_pemukiman_4");
map.getPane("pane_pemukiman_4").style.zIndex = 404;
map.getPane("pane_pemukiman_4").style["mix-blend-mode"] = "normal";
var layer_pemukiman_4 = new L.geoJson(json_pemukiman_4, {
  attribution: "",
  interactive: true,
  dataVar: "json_pemukiman_4",
  layerName: "layer_pemukiman_4",
  pane: "pane_pemukiman_4",
  onEachFeature: pop_pemukiman_4,
  style: style_pemukiman_4_0,
});
bounds_group.addLayer(layer_pemukiman_4);
map.addLayer(layer_pemukiman_4);
function pop_Desa_5(feature, layer) {
  layer.on({
    mouseout: function (e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  var popupContent =
    '<table>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["NAMOBJ"] !== null
      ? autolinker.link(feature.properties["NAMOBJ"].toLocaleString())
      : "") +
    "</td>\
            </tr>\
        </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
  var popup = layer.getPopup();
  var content = popup.getContent();
  var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
  popup.setContent(updatedContent);
}

function style_Desa_5_0() {
  return {
    pane: "pane_Desa_5",
    opacity: 1,
    color: "rgba(12,12,12,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 1.0,
    fillOpacity: 0,
    interactive: true,
  };
}
map.createPane("pane_Desa_5");
map.getPane("pane_Desa_5").style.zIndex = 405;
map.getPane("pane_Desa_5").style["mix-blend-mode"] = "normal";
var layer_Desa_5 = new L.geoJson(json_Desa_5, {
  attribution: "",
  interactive: true,
  dataVar: "json_Desa_5",
  layerName: "layer_Desa_5",
  pane: "pane_Desa_5",
  onEachFeature: pop_Desa_5,
  style: style_Desa_5_0,
});
bounds_group.addLayer(layer_Desa_5);
map.addLayer(layer_Desa_5);
function pop_jalan_6(feature, layer) {
  layer.on({
    mouseout: function (e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  var popupContent =
    '<table>\
            <tr>\
                <th scope="row">OBJECTID</th>\
                <td>' +
    (feature.properties["OBJECTID"] !== null
      ? autolinker.link(feature.properties["OBJECTID"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <th scope="row">NAMRJL</th>\
                <td>' +
    (feature.properties["NAMRJL"] !== null
      ? autolinker.link(feature.properties["NAMRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["KONRJL"] !== null
      ? autolinker.link(feature.properties["KONRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["MATRJL"] !== null
      ? autolinker.link(feature.properties["MATRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["FGSRJL"] !== null
      ? autolinker.link(feature.properties["FGSRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["UTKRJL"] !== null
      ? autolinker.link(feature.properties["UTKRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["TOLRJL"] !== null
      ? autolinker.link(feature.properties["TOLRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["WLYRJL"] !== null
      ? autolinker.link(feature.properties["WLYRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["AUTRJL"] !== null
      ? autolinker.link(feature.properties["AUTRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["KLSRJL"] !== null
      ? autolinker.link(feature.properties["KLSRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["SPCRJL"] !== null
      ? autolinker.link(feature.properties["SPCRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["JPARJL"] !== null
      ? autolinker.link(feature.properties["JPARJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["ARHRJL"] !== null
      ? autolinker.link(feature.properties["ARHRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["STARJL"] !== null
      ? autolinker.link(feature.properties["STARJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["KLLRJL"] !== null
      ? autolinker.link(feature.properties["KLLRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["MEDRJL"] !== null
      ? autolinker.link(feature.properties["MEDRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["LOCRJL"] !== null
      ? autolinker.link(feature.properties["LOCRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["JARRJL"] !== null
      ? autolinker.link(feature.properties["JARRJL"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["FCODE"] !== null
      ? autolinker.link(feature.properties["FCODE"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["REMARK"] !== null
      ? autolinker.link(feature.properties["REMARK"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["SRS_ID"] !== null
      ? autolinker.link(feature.properties["SRS_ID"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["LCODE"] !== null
      ? autolinker.link(feature.properties["LCODE"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["METADATA"] !== null
      ? autolinker.link(feature.properties["METADATA"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["SHAPE_Leng"] !== null
      ? autolinker.link(feature.properties["SHAPE_Leng"].toLocaleString())
      : "") +
    '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["Shape_Le_1"] !== null
      ? autolinker.link(feature.properties["Shape_Le_1"].toLocaleString())
      : "") +
    "</td>\
            </tr>\
        </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
  var popup = layer.getPopup();
  var content = popup.getContent();
  var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
  popup.setContent(updatedContent);
}

function style_jalan_6_0(feature) {
  switch (String(feature.properties["REMARK"])) {
    case "Jalan Arteri":
      return {
        pane: "pane_jalan_6",
        opacity: 1,
        color: "rgba(231,98,36,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
      };
      break;
    case "Jalan Kolektor":
      return {
        pane: "pane_jalan_6",
        opacity: 1,
        color: "rgba(202,231,140,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
      };
      break;
    case "Jalan Lain":
      return {
        pane: "pane_jalan_6",
        opacity: 1,
        color: "rgba(93,178,220,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
      };
      break;
    case "Jalan Lokal":
      return {
        pane: "pane_jalan_6",
        opacity: 1,
        color: "rgba(217,31,158,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
      };
      break;
    case "Jalan Setapak":
      return {
        pane: "pane_jalan_6",
        opacity: 1,
        color: "rgba(147,113,215,1.0)",
        dashArray: "",
        lineCap: "square",
        lineJoin: "bevel",
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
      };
      break;
  }
}
map.createPane("pane_jalan_6");
map.getPane("pane_jalan_6").style.zIndex = 406;
map.getPane("pane_jalan_6").style["mix-blend-mode"] = "normal";
var layer_jalan_6 = new L.geoJson(json_jalan_6, {
  attribution: "",
  interactive: true,
  dataVar: "json_jalan_6",
  layerName: "layer_jalan_6",
  pane: "pane_jalan_6",
  onEachFeature: pop_jalan_6,
  style: style_jalan_6_0,
});
bounds_group.addLayer(layer_jalan_6);
function pop_FasilitasKesehatan_7(feature, layer) {
  layer.on({
    mouseout: function (e) {
      for (i in e.target._eventParents) {
        e.target._eventParents[i].resetStyle(e.target);
      }
    },
    mouseover: highlightFeature,
  });
  var popupContent =
    '<table>\
            <tr>\
                <td colspan="2">' +
    (feature.properties["REMARK"] !== null
      ? autolinker.link(feature.properties["REMARK"].toLocaleString())
      : "") +
    "</td>\
            </tr>\
        </table>";
  layer.bindPopup(popupContent, { maxHeight: 400 });
  var popup = layer.getPopup();
  var content = popup.getContent();
  var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
  popup.setContent(updatedContent);
}

function style_FasilitasKesehatan_7_0() {
  return {
    pane: "pane_FasilitasKesehatan_7",
    radius: 8.0,
    opacity: 1,
    color: "rgba(255,255,255,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 2.0,
    fill: true,
    fillOpacity: 1,
    fillColor: "rgba(0,0,0,1.0)",
    interactive: true,
  };
}
map.createPane("pane_FasilitasKesehatan_7");
map.getPane("pane_FasilitasKesehatan_7").style.zIndex = 407;
map.getPane("pane_FasilitasKesehatan_7").style["mix-blend-mode"] = "normal";
var layer_FasilitasKesehatan_7 = new L.geoJson(json_FasilitasKesehatan_7, {
  attribution: "",
  interactive: true,
  dataVar: "json_FasilitasKesehatan_7",
  layerName: "layer_FasilitasKesehatan_7",
  pane: "pane_FasilitasKesehatan_7",
  onEachFeature: pop_FasilitasKesehatan_7,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {},
    };
    return L.circleMarker(latlng, style_FasilitasKesehatan_7_0(feature));
  },
});
bounds_group.addLayer(layer_FasilitasKesehatan_7);
map.addLayer(layer_FasilitasKesehatan_7);
var baseMaps = {};
L.control
  .layers(baseMaps, {
    'fasilitas Kesehatan <img src="legend/FasilitasKesehatan_7.png" style="text-align : center;/>':
    layer_FasilitasKesehatan_7,

    'jalan<br /><table><tr><td style="text-align: center;"><img src="legend/jalan_6_JalanArteri0.png" /></td><td>Jalan Arteri</td></tr><tr><td style="text-align: center;"><img src="legend/jalan_6_JalanKolektor1.png" /></td><td>Jalan Kolektor</td></tr><tr><td style="text-align: center;"><img src="legend/jalan_6_JalanLain2.png" /></td><td>Jalan Lain</td></tr><tr><td style="text-align: center;"><img src="legend/jalan_6_JalanLokal3.png" /></td><td>Jalan Lokal</td></tr><tr><td style="text-align: center;"><img src="legend/jalan_6_JalanSetapak4.png" /></td><td>Jalan Setapak</td></tr></table>':
      layer_jalan_6,
    '<img src="legend/Desa_5.png" /> Desa': layer_Desa_5,
    '<img src="legend/pemukiman_4.png" /> pemukiman': layer_pemukiman_4,
    'Tingkat Kerawanan Longsor<br /><table><tr><td style="text-align: center;"><img src="legend/TingkatKerawananLongsor_3_SangatTinggi0.png" /></td><td>Sangat Tinggi</td></tr><tr><td style="text-align: center;"><img src="legend/TingkatKerawananLongsor_3_Tinggi1.png" /></td><td>Tinggi</td></tr></table>':
      layer_TingkatKerawananLongsor_3,
    "OSM Standard": layer_OSMStandard_2,
    "ESRI Satellite": layer_ESRISatellite_1,
    "ESRI Topo": layer_ESRITopo_0,
    
  }, {position : "bottomright"})
  .addTo(map);
setBounds();
