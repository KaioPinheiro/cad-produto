import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Produto } from './produtos/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient ) {}

  salvar (produto: Produto) : Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8081/api/produtos', produto);
  }
  
  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8081/api/produtos');
  }
  
  getProdutoById(id: number) : Observable<Produto> {
    return this.http.get<any>(`http://localhost:8081/api/produtos/${id}`); 
  }

  buscar(nome: string) : Observable<Produto[]>{

    const httpParams = new HttpParams()
      .set("nome", nome);
      console.log(nome);

    const apiUrl='http://localhost:8081/api/produtos';
    const url = apiUrl + "?" + httpParams.toString();
    console.log('return'+nome);
    console.log(url);
    return this.http.get<any>(url);
  }


  baixar( produto: Produto ) : Observable<any> {
    const apiUrl='http://localhost:8081/api/produtos';
    return this.http.put<Produto>(`${apiUrl}/${produto.id}` , produto);
  }

}