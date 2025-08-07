import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // precisa importar isso

import { Coisa } from '../../Coisa';
import { List } from '../../services/list-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ler-listas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ler-listas.html',
  styleUrl: './ler-listas.scss'
})
export class LerListas implements OnInit{

  coisas: Coisa[]= [];
  detalhesDoEzo:string = '';

  constructor(private listService: List){}

  ngOnInit(): void {
    this.getPassaros();
  }

  showInfo(coisa: Coisa):void{
    this.detalhesDoEzo = `o nome desse ezo é ${coisa.name} e mora em ${coisa.moraEm}`;
  }

  hideInfo():void{
    this.detalhesDoEzo = '';
  }

  removeFromList(coisa: Coisa){
    this.coisas = this.listService.remove1(this.coisas, coisa);
  }
  removeFromListHTTP(coisa: Coisa){
    this.coisas = this.coisas.filter((a) => coisa.name !== a.name);
    this.listService.removeHTTP(coisa.id).subscribe();
  }

  //pegar do banco de dados
  getPassaros(): void{          //esperar fazer o metodo(concretizar)
    this.listService.getAll().subscribe((coisas) => (this.coisas = coisas));
  }



/*
  {"id": 1, "name": "Pomba", "moraEm": "cidade"},
  {"id": 2, "name": "Macarrao", "moraEm": "caixa"},
  {"id": 3, "name": "Cacto", "moraEm": "deserto"},
  {"id": 4, "name": "Aguia", "moraEm": "montanha"},
  {"id": 5, "name": "oruããã", "moraEm": "ã"},
  {"id": 6, "name": "Camelo", "moraEm": "deserto"}
*/
}
