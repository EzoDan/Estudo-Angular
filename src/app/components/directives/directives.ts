import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.scss'
})
export class Directives {
  font_size= 30;
  color= 'blue';
  classes= ['grandao_verde','letra_azul'];
}
