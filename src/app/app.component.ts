import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';
import { Coordenada } from 'src/app/models/coordenada.model';
import { BuscaService } from 'src/app/services/busca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //estabelecimentos: Estabelecimento = {};
  //coordenadas: Coordenada = {};
  error:boolean = false;
  errorMessage:string = "";

  constructor(private service:BuscaService) { }

  ngOnInit(): void {

  }

  onSubmit(){

    this.service.getIp().subscribe((resIp: Ip) => {

      this.service.getCoordinates(resIp.ip).subscribe((resCoord: Coordenada) => {

        console.log(resCoord);
        this.service.getEstablishment().subscribe((respEstab: any) => {

          console.log(respEstab);
          this.service.getKm(resCoord, respEstab);
        });

      });
    });




  }

}

export interface Ip{ip: string;}
