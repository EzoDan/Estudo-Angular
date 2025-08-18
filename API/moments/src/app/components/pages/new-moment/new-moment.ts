import { Component } from '@angular/core';
import { FormMomento } from "../../form-momento/form-momento";

@Component({
  selector: 'app-new-moment',
  imports: [FormMomento],
  templateUrl: './new-moment.html',
  styleUrl: './new-moment.css'
})
export class NewMoment {
  buttonText: string = 'Compartilhar';
}
