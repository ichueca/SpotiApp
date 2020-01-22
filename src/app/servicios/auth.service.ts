import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { SpotifyService } from "./spotify.service";

@Injectable({
  providedIn: "root"
})
export class AuthService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.interceptor(req, next));
  }

  async interceptor(req, next): Promise<HttpEvent<any>> {
    if (!req.url.includes("token")) {
      let tk:any = JSON.parse(localStorage.getItem("token"));
      let ahora = new Date(); 
      if (!tk || ahora>=new Date(tk.fecha)){
        tk = await this.servicio.getToken();  
        let obj = {
          "access_token":tk.access_token,
          "fecha":ahora.getTime()+tk.expires_in*1000
        }
        localStorage.setItem("token",JSON.stringify(obj));
      }
      console.log(tk);
      let request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tk.access_token}`
        }
      });
      
      return next.handle(request).toPromise();
    } else {
      return next.handle(req).toPromise();
    }
  }

  constructor(private servicio: SpotifyService) {}
}
