import { Router } from '@angular/router';
import { GlobalService } from './modulos/shared/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mat: string = '';
  nome: string = '';
  role: string = '';
  unidade: string = '';
  mostrarMenu: boolean = false;
  visGrade: boolean = false;
  visRecep: boolean = false;
  visAtend: boolean = false;
  visCont: boolean = false;
  visConf: boolean = false;
  visRel: boolean = false;
  visPan: boolean = false;
  
  constructor(private globalService: GlobalService,
              private router: Router){

  }

  ngOnInit(): void {

    this.globalService.mostrarMenuEmitter.subscribe(
      mostrar => { this.mostrarMenu = mostrar }
    );

    this.globalService.gUser.subscribe(
      user => { this.nome = user }
    );

    this.globalService.gMatricula.subscribe(
      matricula => { this.mat = matricula }
    );

    this.globalService.gUnidade.subscribe(
      unidade => { this.unidade = unidade }
    );

    this.globalService.gTipo.subscribe(
      tipo => { this.role = tipo
        
        if(tipo === "Administrador"){
          this.visGrade = true
          this.visRecep = true
          this.visAtend = true
          this.visCont = true
          this.visConf =  true
          this.visRel = true
          this.visPan = true
        } else if(tipo === "Operador"){
          this.visGrade = true
          this.visRecep = false
          this.visAtend = false
          this.visCont = true
          this.visConf =  true
          this.visRel = true
          this.visPan = false
        } else if(tipo === "Coordenação"){
          this.visGrade = false
          this.visRecep = true
          this.visAtend = false
          this.visCont = true
          this.visConf =  false
          this.visRel = true
          this.visPan = false
        } else if(tipo === "Supervisão"){
          this.visGrade = true
          this.visRecep = true
          this.visAtend = true
          this.visCont = true
          this.visConf =  true
          this.visRel = true
          this.visPan = true
        } else if(tipo === "Apoio Administrativo"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
        } else if(tipo === "Apoio de Informática"){
          this.visGrade = true
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
        } else if(tipo === "Recepção/Informação"){
          this.visGrade = false
          this.visRecep = true
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
        } else if(tipo === "Atendente"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = true
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = false
        } else if (tipo === "Painel"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
        }

      }
      
    );

    this.router.navigate(['/login']); 
  }

  exit(){
    document.location.reload();
  }

  title = 'Prefeitura de Goiânia';
}
