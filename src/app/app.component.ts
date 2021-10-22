import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listAlunos: any[] = [
    {nome: 'Aline Costa' , RU: 1903451, Curso: 'Análise e Desenvolvimento de Sistemas', Nascimento: '01/02/1975' },
    {nome: 'Lúcia Costa' , RU: 1204567, Curso: 'Administração', Nascimento: '09/04/1987' },
    {nome: 'Júlia Lima' , RU: 1309876, Curso: 'Engenharia', Nascimento: '25/05/1990' },
    {nome: 'João Pereira' , RU: 1401234, Curso: 'Pedagogia', Nascimento: '05/10/1992' },
    {nome: 'Matheus Santana' , RU: 1502345, Curso: 'História', Nascimento: '20/09/1990' }
    
  ];
 
}
