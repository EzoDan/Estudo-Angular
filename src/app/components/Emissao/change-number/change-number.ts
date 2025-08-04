import { Component, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-number',
  imports: [CommonModule],
  templateUrl: './change-number.html',
  styleUrl: './change-number.scss'
})
export class ChangeNumber {
  
  @Output() changenumber: EventEmitter<number> = new EventEmitter();

  handleClick(){
    this.changenumber.emit();     
  }

}
