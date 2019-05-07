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
      minZoom: -3,
      maxZoom: 1,
      center: [0, 0],
      zoom: -1,
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
          "radius": 22,
          "color": "#323862"
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
          "radius": 22,
          "color": "#323862"
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
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-279.25, -1131.45]
        },
        "properties": {
          "text": "ADM",
          "url": '<h4>Administración de empresas</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/04">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-278, -1033.94]
        },
        "properties": {
          "text": "CON",
          "url": '<h4>Contabilidad y Auditoria</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/05">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-267.75, -778.25]
        },
        "properties": {
          "text": "IND",
          "url": '<h4>Ingeniería Industrial</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/06">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-267.375, -680.70]
        },
        "properties": {
          "text": "MEC",
          "url": '<h4>Ingeniería  Mecánica</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/07">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-267, -532.25]
        },
        "properties": {
          "text": "ELC",
          "url": '<h4>Ingeniería Electrónica</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/08">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-266.5, -434.45]
        },
        "properties": {
          "text": "COM",
          "url": '<h4>Computación</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/09">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-268.75, -338.93]
        },
        "properties": {
          "text": "TEL",
          "url": '<h4>Ingeniería en Telecomunicaciones</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/10">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-267.5, -241.92]
        },
        "properties": {
          "text": "MCA",
          "url": '<h4>Ingeniería Mecatrónica</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/11">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [319, -242.83]
        },
        "properties": {
          "text": "CMU",
          "url": '<h4>Comunicación</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/12">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [320.25, -337.75]
        },
        "properties": {
          "text": "AMB",
          "url": '<h4>Ingeniería Ambiental</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/13">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [318.625, -435.75]
        },
        "properties": {
          "text": "BIO",
          "url": '<h4>Biotecnología</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/14">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [317.75, -533.23]
        },
        "properties": {
          "text": "VET",
          "url": '<h4>Medicina Veterinaria</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/15">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [330.125, -846.22]
        },
        "properties": {
          "text": "DES",
          "url": '<h4>Desarrollo Local</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/16">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [1096.25, -1105.62]
        },
        "properties": {
          "text": "EDU",
          "url": '<h4>Educación</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/17">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [1173, -851.94]
        },
        "properties": {
          "text": "EFI",
          "url": '<h4>Pedagogía de la Actividad Física y Deporte</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/18">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [1236.75, -624.06]
        },
        "properties": {
          "text": "PSI",
          "url": '<h4>Psicología</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/19">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-234.625, 685.06]
        },
        "properties": {
          "text": "IDM",
          "url": '<h4>Idiomas</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/20">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-98, 737.66]
        },
        "properties": {
          "text": "UNE",
          "url": '<h4>Cátedra Unesco</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/21">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [337.625, 751.40]
        },
        "properties": {
          "text": "ASU",
          "url": '<h4>ASU</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/22">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [406.625, 678.15]
        },
        "properties": {
          "text": "CUL",
          "url": '<h4>Grupos culturales</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/23">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [398.375, 293.71]
        },
        "properties": {
          "text": "BIE",
          "url": '<h4>Bienestar Estudiantil</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/24">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [331.875, 245.99]
        },
        "properties": {
          "text": "POS",
          "url": '<h4>Postgrados</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/25">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [1027.75, 400.09]
        },
        "properties": {
          "text": "ELE",
          "url": '<h4>Carrera de Electricidad</h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/26">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },

      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [1248.75, 839.73]
        },
        "properties": {
          "text": "AUT",
          "url": '<h4>Mecánica Automotriz </h4> <br> <ion-button expand="block" fill="outline"  href="proyecto/27">Ingresar</ion-button>',
          "radius": 22,
          "color": "#323862"
        }
      },
    ];
    
    var Classroomsamount = new L.geoJson(buildingPoints, {
      pointToLayer: function (feature, latlng) {
        return new L.CircleMarker([latlng.lat, latlng.lng], { radius: feature.properties.radius, color: feature.properties.color, opacity: 1.0, fillOpacity: 0.85 });
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
