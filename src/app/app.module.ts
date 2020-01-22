import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './servicios/auth.service';
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import { ImagePipe } from './pipes/image.pipe';
import { MsPipe } from './pipes/ms.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    BusquedaComponent,
    BarraNavegacionComponent,
    ImagePipe,
    MsPipe,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
    { provide: LOCALE_ID, useValue: 'es'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
