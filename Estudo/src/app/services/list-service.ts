import { inject, Injectable } from '@angular/core';

import { Coisa } from '../Coisa'; 

//imports pra fazer tudo funcionar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class List {
  private apiUrl = 'http://localhost:3000/passaros';
  private http = inject(HttpClient); // pra usar o http precisa injetar ele por essa var
  
  constructor(){}

  remove1(coisas: Coisa[], coisa: Coisa): Coisa[]{  //remove direto
      return coisas.filter((a) => coisa.name !== a.name);
  }
  removeHTTP(id:Number){  //remove com api
      return this.http.delete<Coisa>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Coisa[]>{
    return this.http.get<Coisa[]>(this.apiUrl);
  }

  getItem(id:Number): Observable<Coisa>{
    return this.http.get<Coisa>(`${this.apiUrl}/${id}`); 
  }

}
