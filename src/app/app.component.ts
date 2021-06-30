import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Para que se use la accessToken al iniciar el componente principal
  
  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
  
}
