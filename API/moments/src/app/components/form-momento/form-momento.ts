import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-momento',
  imports: [],
  templateUrl: './form-momento.html',
  styleUrl: './form-momento.css'
})
export class FormMomento {
  @Input() buttonText!: string;
}
