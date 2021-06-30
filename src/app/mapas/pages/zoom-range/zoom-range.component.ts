import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      height: 100%;
      width: 100%; 
    }

    .row {
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  //Viewchild coge un elemento html (referencia local #mapa) y lo usa como si fuera un elemento normal
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  //propiedad del mapboxgl
  zoomLevel: number = 10;

  //para cambiar la longitud y latitud vamos a iniciar asi

  center: [number, number] = [ -4.883333, 36.516666 ];

  constructor() {}

  //destruccion de los listeners de abajo, limpiarlo antes de su uso, podrían dar fallos al tenerlos emitiendo
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });
    //.on es un listener de mapbox, escuchara evento zoom
    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom();
    });
    //zoom maximo
    this.mapa.on('zoomend', (ev) => {
      if ( this.mapa.getZoom() > 18 ) {
        this.mapa.zoomTo( 18 );
      }
    });

    // Movimiento del mapa
    this.mapa.on('move', (event) => {
      const target = event.target;
      // propiedades del move con el event.target tenemos muchas propiedades y nos interesan dos lo cual deconstruimos
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });


  }


  //propiedades de mapa-mapboxgl
  zoomOut() {
    this.mapa.zoomOut();
  }

  zoomIn() {
    this.mapa.zoomIn();
  }


  //como viene un string, hay que pasarlo a number
  zoomCambio( valor: string ) {
    this.mapa.zoomTo( Number(valor) );
  }

}
