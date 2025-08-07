import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeNumber } from "../change-number/change-number";

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [CommonModule, ChangeNumber],
  templateUrl: './emitter.html',
  styleUrl: './emitter.scss'
})
export class Emitter {
  valor:number = 0;
  onChangeNumber(){
    this.valor = Math.floor(Math.random() * 100);
  }
}
