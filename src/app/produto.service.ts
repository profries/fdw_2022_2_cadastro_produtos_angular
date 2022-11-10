import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listaProdutos: any[] = [
    {id:1, nome:"Produto 1", preco: 20},
    {id:2, nome:"Produto 2", preco: 30},
    {id:3, nome:"Produto 3", preco: 40},
    {id:4, nome:"Produto 4", preco: 50},
  ];

  constructor() { }

  inserir(produto: any) {
    this.listaProdutos.push(produto);
  }

  listar() {
    return this.listaProdutos;
  }
}
