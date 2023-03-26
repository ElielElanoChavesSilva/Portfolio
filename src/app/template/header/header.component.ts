import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  activeButton = 1;
  teste: boolean;
  showMenu: boolean = false;
  
  constructor(){
    this.teste = window.innerWidth < 660;
    this.showMenu = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.teste = window.innerWidth <660;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}