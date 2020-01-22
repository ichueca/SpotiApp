import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  private artistas:any[];
  private fecha = new Date();
  constructor(private servicio:SpotifyService) { }

  ngOnInit() {
  }

  buscar(evt,ctrl){
    this.servicio.buscar(ctrl.value).subscribe(
      (datos:any) => {
        console.log(datos.artists.items);
        this.artistas = datos.artists.items;
      }
    )
  }
  
}
