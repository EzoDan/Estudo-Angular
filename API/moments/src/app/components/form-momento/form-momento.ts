import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-momento',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './form-momento.html',
  styleUrl: './form-momento.css'
})
export class FormMomento implements OnInit {
  ngOnInit(): void {
    this.momentoForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }
  @Input() buttonText!: string;

  momentoForm!: FormGroup;
required: any;

  onSubmit() {
    if(this.momentoForm.invalid) {
      return
    }
    console.log('Form submitted');
  }

  

  get title(){
    return this.momentoForm.get('title')!;
  }

  get description(){
    return this.momentoForm.get('description')!;
  }

}

