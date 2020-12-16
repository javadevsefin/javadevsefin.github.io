import { GlobalService } from './../../shared/global.service';
import { PainelService } from './../shared/painel.service';
import { Component, OnInit } from '@angular/core';
import { Painel } from '../shared/painel';
import { interval } from 'rxjs';


@Component({
  selector: 'app-painel-a-list-form',
  templateUrl: './painel-a-list-form.component.html',
  styleUrls: ['./painel-a-list-form.component.css']
})

export class PainelAListFormComponent implements OnInit {

  title: string  = "Painel de Chamada da Unidade de Atendimento Paço Municipal";
  paineis: Painel[];
  id: number;
  filaId: number;
  senha: string;
  guiche: string;
  servico: string;
  unidade: string;
  data: string;
  hora: string;
  prioridade: string;

  constructor(private painelService: PainelService,
              private globalService: GlobalService) { }

  ngOnInit(): void {

    const tempo = interval(5000);
    tempo.subscribe((t)=>{
      this.listarPainelA();
      this.listarChamada();
    });
  }

  listarChamada(){
    this.painelService.findByChamada().subscribe((chamada: any)=>{
      this.id = chamada.id;
      this.filaId = chamada.filaId;
      this.senha = chamada.senha;
      this.guiche = chamada.guiche;
      this.servico = chamada.servico;
      this.unidade = chamada.unidade;
      this.data = this.globalService.formatarDate(chamada.chamada);
      this.hora = this.globalService.formatarTime(chamada.chamada);   
      this.prioridade = chamada.prioridade;
       }
    ); 
  }

  listarPainelA(){
    this.painelService.findByPainelA().subscribe(
      dados => this.paineis = dados
    );
  }

  formatarData(data: string){
    let date = this.globalService.formatarDate(data);
    return date 
  }

  formatarHora(hora: string){
    let time = this.globalService.formatarTime(hora);
    return time;
  }
  mudarCor(priodidade: string){
    return priodidade == "Normal"? 'blue': 'red';
  }
}
