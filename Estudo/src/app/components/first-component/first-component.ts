import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss'
})
export class FirstComponent {

  numero = 12;
  carro = {
    tipo: "palio",
    ano: 2019,
  };

}
