import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  client_id = "85b5910403a14bf9b75bf6f61cae1427";
  client_password = "59efdd98f3084fc8a7707b68d7a8650d";
  constructor(private http: HttpClient) {}

  async getToken(): Promise<any> {
    let body = new HttpParams().set("grant_type", "client_credentials");
    let credenciales = btoa(`${this.client_id}:${this.client_password}`);
    return this.http
      .post("https://accounts.spotify.com/api/token", body.toString(), {
        headers: {
          Authorization: `Basic ${credenciales}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .toPromise();
  }

  async getNovedades() {
    /*let datos = await this.getToken();
    let tk = datos.access_token;*/
    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases", {
      /*headers: {
        Authorization: `Bearer ${tk}`
      },*/
      params : {
        country:"ES",
        limit:"40"
      }
    }).toPromise();
  }

  buscar(artista:string){
    return this.http.get('https://api.spotify.com/v1/search', {
      params: {
        q:artista,
        type:'artist'
      }
    });
  }

  getArtista(id){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`);
  }

  getCancionesArtista(id){
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`,
    {
      params: {
        market:'ES'
      }
    });
  }
}
