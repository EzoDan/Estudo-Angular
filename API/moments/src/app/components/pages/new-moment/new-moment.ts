import { Component } from '@angular/core';
import { FormMomento } from "../../form-momento/form-momento";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-moment',
  imports: [FormMomento, CommonModule, ReactiveFormsModule],
  templateUrl: './new-moment.html',
  styleUrl: './new-moment.css'
})
export class NewMoment {
  buttonText: string = 'Compartilhar';
}
