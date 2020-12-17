import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BuscaService } from './services/busca.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaComponent } from './components/busca/busca.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BuscaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
