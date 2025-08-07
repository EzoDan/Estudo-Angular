import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  imports: [],
  templateUrl: './parent-data.html',
  styleUrl: './parent-data.scss'
})
export class ParentData {

  @Input() name: string = "";

  @Input() semana!: {segunda: string, terca: string, quarta: string}

}
