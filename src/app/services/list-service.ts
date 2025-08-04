import { inject, Injectable } from '@angular/core';

import { Coisa } from '../Coisa'; 

//imports pra fazer tudo funcionar
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class List {
  private apiUrl = 'http://localhost:3000/Passaros';
  private http = inject(HttpClient); // pra usar o http precisa injetar ele por essa var
  
  constructor(){}

  remove(coisas: Coisa[], coisa: Coisa): Coisa[]{
      return coisas.filter((a) => coisa.name !== a.name);
  }

  getAll(): Observable<Coisa[]>{
      return this.http.get<Coisa[]>(this.apiUrl);
  }

}
