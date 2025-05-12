import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}

  navigateTo(route: string){
    this.router.navigate([route])
  }

}
