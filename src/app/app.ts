import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./components/first-component/first-component";
import { ParentData } from "./components/parent-data/parent-data";
import { Directives } from "./components/directives/directives";
import { CondRend } from "./components/cond-rend/cond-rend";
import { Events } from "./components/events/events";

@Component({
  selector: 'app-root',
  imports: [FirstComponent, ParentData, Directives, CondRend, Events],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    ngSkipHydration: '',
  },
})
export class App {
  username = "enzinho";
  dias_da_semana ={
    segunda: "segunda",
    terca: "terca",
    quarta: "quarta"
  }
  protected readonly title = signal('curso-angular');
}
