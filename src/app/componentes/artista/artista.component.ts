import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/servicios/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  private artista:any;
  private canciones:any[];
  constructor(private servicio:SpotifyService,
    private ruta:ActivatedRoute) { 
      this.servicio.getArtista(ruta.snapshot.params.id)
        .subscribe(
          datos => {
            this.artista = datos;
            console.log(this.artista);
          }
     );
     this.servicio.getCancionesArtista(ruta.snapshot.params.id)
        .subscribe(
          (datos:any) => {
            this.canciones = datos.tracks;
            console.log(this.canciones);
          }
     )
    /*ruta.params.subscribe(
      param => {
        this.servicio.getArtista(param.id)
        .subscribe(
          datos => console.log(datos)
        )
      }
    )*/
  }

  ngOnInit() {
  }

}
