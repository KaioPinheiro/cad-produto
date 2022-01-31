import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Produto } from '../produto';
import { ProdutosService } from '../../produtos.service'

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[] = [];
  nome: string = '';
  message: string = '';
  produtoSelecionado!: Produto;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor( 
    private service: ProdutosService, 
    private router: Router ) {}

  ngOnInit(): void {
    this.service
      .getProdutos()
      .subscribe (resposta  => this.produtos = resposta);

  }

  novoCadastro(){
    this.router.navigate(['/produtos-form'])
  }

  consultar(){
    console.log('entrei aqui');
    console.log(this.nome);
    this.service
      .buscar(this.nome)
      .subscribe(response => {
        this.produtos = response;
        if( this.produtos.length <= 0 ){
          this.message = "Nenhum Registro encontrado.";
        }else{
          this.message;
        }
      });
  }


  preparaBaixa(produto: Produto){
    this.produtoSelecionado = produto;
  }

  baixaProduto(){
    this.service
      .baixar(this.produtoSelecionado)
      .subscribe( 
        response => {
          this.ngOnInit();
        }
      )
  }
}
