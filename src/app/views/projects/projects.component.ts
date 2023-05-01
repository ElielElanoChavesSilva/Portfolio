import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  LinkMine(): void{
    window.open("https://github.com/ElielElanoChavesSilva/Projetos-Codelandia-_HTML-CSS/tree/main/ProjetoMINE", "blank");
  }
  
  LinkLoki(): void{
    window.open("https://github.com/ElielElanoChavesSilva/Projetos-Codelandia-_HTML-CSS/tree/main/ProjetoLoki", "blank");
  }
  
  LinkImc(): void{
    window.open("https://github.com/ElielElanoChavesSilva/Projetos-Codelandia-_HTML-CSS/tree/main/Calculadora-IMC", "blank");
  }

  LinkCrud(): void{
    window.open("https://github.com/ElielElanoChavesSilva/Angular", "blank");
  }
}
