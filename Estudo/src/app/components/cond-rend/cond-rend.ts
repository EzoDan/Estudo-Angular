import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cond-rend',
  imports: [CommonModule],
  templateUrl: './cond-rend.html',
  styleUrl: './cond-rend.scss'
})
export class CondRend {

  can_show: boolean = true;
  nome: string = 'eee';

}
