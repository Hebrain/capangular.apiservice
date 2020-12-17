import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/app/models/estabelecimento.model';
import { Coordenada } from 'src/app/models/coordenada.model';
import { BuscaService } from 'src/app/services/busca.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {


  constructor(private service:BuscaService) { }

  ngOnInit(): void {

    /*console.log(this.service.getIp());
    console.log(this.service.getEstablishment());
    console.log(this.service.getCoordinates());
*/
  }

}
