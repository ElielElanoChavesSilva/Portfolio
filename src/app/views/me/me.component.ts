import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MEComponent {
  Down(): void{
    window.open("https://docs.google.com/document/d/1k_R2KfcUO-L6s5gs4I9gCa9s7xYPsHiM/edit", "_blank")
  }
}
