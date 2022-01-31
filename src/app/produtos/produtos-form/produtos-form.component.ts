import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Produto } from '../produto'
import { ProdutosService } from '../../produtos.service'

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produto: Produto;
  success: boolean = false;
  errors: String[]=[];
  id!: number;


  constructor( 
      private service: ProdutosService ,
      private router: Router,
      private activatedRoute: ActivatedRoute
      ) {
    this.produto = new Produto();
    let params = this.activatedRoute.params;
   }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params;
    console.log(params['value'].id);
    if(params && params['value'].id){
      this.id = params['value'].id;
      this.service
        .getProdutoById(this.id)
        .subscribe ( {
        next: (response) => this.produto = response,
        error: () => this.produto = new Produto()
       })
      }    
    }
  

  voltarParaListagem(){
    this.router.navigate(['produtos-lista'])
  }

  onSubmit(){
    this.service
      .salvar(this.produto)
      .subscribe ({
        next: () =>  this.success = true,
       error: (errorResponse) => this.errors = errorResponse.error.errors,
       complete: () =>  this.ngOnInit()
   })
 }

}
