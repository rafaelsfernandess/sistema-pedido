import { Component } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filtro-produto',
  templateUrl: './filtro-produto.component.html',
  styleUrls: ['./filtro-produto.component.css']
})
export class FiltroProdutoComponent {
  faSearch = faSearch;
  public nome_produto:string='';
  public codigo_produto:string = '';

    constructor(
      public produto_service:ProdutoService
    ){}

  carregar(){
    let produto = this.produto_service.registro(Number(this.codigo_produto));
    console.log();
    if(produto!= undefined){
      this.nome_produto = produto.nome;
    }else{
      this.nome_produto = '';
      this.codigo_produto = '';
    }
  }

  modal(){
    
  }
  
}
