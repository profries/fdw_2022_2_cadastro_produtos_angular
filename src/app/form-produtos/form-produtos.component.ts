import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {

  produto: any = {id:0, nome:'', preco: 0.0};

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    //alert(this.produto.nome)
    this.produtoService.inserir(this.produto);
    this.produto = {id:0, nome:'', preco: 0.0};

  }

}
