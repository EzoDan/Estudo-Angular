import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events implements OnInit{

  show: boolean = false;

  cores = ['vermelho', 'verde', 'azul'];
  numero: number = 0;
  

  mostrar(): void{
    this.show = !this.show;
  }  

  mudarCor():void{
    this.numero++;
    if(this.numero === 3){
      this.numero = 0;
    }
  }

  constructor (){}  
  
  ngOnInit(): void {
  }

}


