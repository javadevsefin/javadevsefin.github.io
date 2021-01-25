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
  visUp: boolean = false;
  p01: boolean = false;
  p02: boolean = false;
  p03: boolean = false;
  p04: boolean = false;
  p05: boolean = false;
  p06: boolean = false;

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
          this.visUp = true
          this.p01 = true
          this.p02 = true
          this.p03 = true
          this.p04 = true
          this.p05 = true
          this.p06 = true
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
          this.visGrade = true
          this.visRecep = false
          this.visAtend = false
          this.visCont = true
          this.visConf =  false
          this.visRel = false
          this.visPan = true
        } else if(tipo === "Apoio de Informática"){
          this.visGrade = true
          this.visRecep = false
          this.visAtend = false
          this.visCont = true
          this.visConf =  false
          this.visRel = true
          this.visPan = false
        } else if(tipo === "Recepção/Informação"){
          this.visGrade = false
          this.visRecep = true
          this.visAtend = false
          this.visCont = true
          this.visConf =  false
          this.visRel = false
          this.visPan = true
        } else if(tipo === "Atendente"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = true
          this.visCont = true
          this.visConf =  false
          this.visRel = false
          this.visPan = false
        } else if (tipo === "Painel01"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
          this.p01 = true
        } else if (tipo === "Painel02"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
          this.p02 = true
        } else if (tipo === "Painel03"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
          this.p03 = true
        } else if (tipo === "Painel04"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
          this.p04 = true
        } else if (tipo === "Painel05"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
          this.p05 = true
        } else if (tipo === "Painel06"){
          this.visGrade = false
          this.visRecep = false
          this.visAtend = false
          this.visCont = false
          this.visConf =  false
          this.visRel = false
          this.visPan = true
          this.p06 = true
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
