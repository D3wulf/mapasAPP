import { Component } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent {

  propiedades: Propiedad[] = [
    {
      
      titulo: 'Rio Real Golf, Marbella',
      descripcion: 'Precioso campo de golf en Rio Real',
      lngLat: [ -4.844783859887143, 36.51241110484465 ]
    },
    {
      titulo: 'Restaurante los Pacos, Marbella',
      descripcion: 'Comida calidad precio inmejorable',
      lngLat: [ -4.900914558596522,36.510799826403826 ]
    },
    {
      titulo: 'Barco en Banús',
      descripcion: 'Yate de 15m en Puerto Banús',
      lngLat: [  -4.951777632378474,36.488037589178816  ]
    },
    {
      titulo: 'Catedral de León',
      descripcion: 'Catedral Gótica de León',
      lngLat: [ -5.566300565474872,42.59930259788312 ]
    },
  ]

}
