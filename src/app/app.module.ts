import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    //ReceberCursoCriadoComponent,
    //CursosComponent,
    //CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [LogService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
