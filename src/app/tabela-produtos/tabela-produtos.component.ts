import { Component, Input, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  titulo = "Tabela de Produtos";
  
  lista: any[] = []
  
  constructor(private servico: ProdutoService) {
    this.lista = this.servico.listar();
  }

  ngOnInit(): void {
  }

}
