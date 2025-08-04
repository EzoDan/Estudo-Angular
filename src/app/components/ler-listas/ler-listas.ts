import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Coisa } from '../../Coisa';
import { List } from '../../services/list-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ler-listas',
  standalone: true,
  imports: [CommonModule],
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
    this.coisas = this.listService.remove(this.coisas, coisa);
  }

  //pegar do banco de dados
  getPassaros(): void{          //esperar fazer o metodo(concretizar)
    this.listService.getAll().subscribe((coisas) => (this.coisas = coisas));
  }
}
