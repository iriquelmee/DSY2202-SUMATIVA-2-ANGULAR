import { Component } from '@angular/core';
import {nav} from '../../../../data/index';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  title : string = 'Table Top Games';
  navbarItems : any[] | undefined;
  navbarOpen: boolean = false;

  ngOnInit()
  {
    this.loadNavbar();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  loadNavbar()
  {
    try 
    {
      if(nav != undefined)
      {
        this.navbarItems = nav;
      } 
    } catch (ex) 
    {
      console.log(ex);
    }
  }
}
