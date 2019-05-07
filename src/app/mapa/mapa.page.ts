import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

declare var L: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.leafletMap();
  }

  ionViewDidEnter() { }

  leafletMap() {

    var yx = L.latLng;

    var xy = function (x, y) {
      if (L.Util.isArray(x)) {
        return yx(x[1], x[0]);
      }
      return yx(y, x);
    };

    var map = L.map('mapId', {
      minZoom: -5,
      maxZoom: 5,
      center: [0, 0],
      zoom: -2,
      crs: L.CRS.Simple
    });


    var alto = 2339,
      ancho = 1653,
      url = './assets/images/mapa.png';

    var bounds = [[-alto, -ancho], [alto, ancho]];

    L.imageOverlay(url, bounds).addTo(map);

    var sistemas = xy(-980, 100);
    var contabilidad = xy(-630, 900);
    var automotriz = xy(350, -350);
    var ambiental = xy(-980, 700);
    var civil = xy(720, -750);

    var buildingPoints = [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [155, -1325]
        },
        "properties": {
          "text": "BIO",
          "url": '<h4>Biomedicina</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/01">Ingresar</ion-button>',
          "radius": 20,
          "color": "yellow"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [61.5, -1306.25]
        },
        "properties": {
          "text": "CIV",
          "url": '<h4>Ingeniería Civil</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/02">Ingresar</ion-button>',
          "radius": 20,
          "color": "yellow"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-35, -1285.75]
        },
        "properties": {
          "text": "GRD",
          "url": '<h4>Gestión de Riesgos y Desastres</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/03">Ingresar</ion-button>',
          "radius": 20,
          "color": "yellow"
        }
      }
    ];

    var Classroomsamount = new L.geoJson(buildingPoints, {
      pointToLayer: function (feature, latlng) {
        return new L.CircleMarker([latlng.lat, latlng.lng], { radius: feature.properties.radius, color: feature.properties.color });
      },
      onEachFeature: function (feature, layer) {
        var text = L.tooltip({
          permanent: true,
          direction: 'center',
          className: 'text',
        })
          .setContent(feature.properties.text)
          .setLatLng(layer.getLatLng());
        text.addTo(map);

        var text2 = L.tooltip({
          direction: 'top',
          className: 'text2'
        })
          .setLatLng(layer.getLatLng());
        layer.bindPopup(feature.properties.url);
      }
    }).addTo(map);

    map.on('click', function (e) {
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("[" + lng + ", " + lat + "]");
    });

  }
}
