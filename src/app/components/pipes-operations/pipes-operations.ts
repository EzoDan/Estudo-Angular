import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes-operations',
  imports: [CommonModule],
  templateUrl: './pipes-operations.html',
  styleUrl: './pipes-operations.scss'
})
export class PipesOperations {
  textinho = "bom dia mano!!";

  dia:Date = new Date();
}
