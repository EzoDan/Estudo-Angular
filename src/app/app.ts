import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';


//import { AppRoutingModule } from './app.routes'; usar pro outro modo la

//provideHttpClient(withInterceptorsFromDi())

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule],
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
