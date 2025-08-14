import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';
import { NewMoment } from './components/pages/new-moment/new-moment';

export const routes: Routes = [
    {path: '', component: Home },
    {path: 'about', component: About },
    {path: 'moments/new', component: NewMoment },
];
