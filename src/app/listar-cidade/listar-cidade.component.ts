import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../service/cidade.service';
import { Cidade } from '../cadastro-cidade/cadastro-cidade.component';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit{

  public cidade:string = '';
  public cidades:Array<Cidade> = [];

  constructor(
    public cidade_service:CidadeService
  ){

  }

  ngOnInit(): void {
    this.cidades = this.cidade_service.carregar();
  }



}
