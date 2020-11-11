import { AgendamentoService } from './../shared/agendamento.service';
import { GradeService } from './../../grade/shared/grade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent implements OnInit {

  mostrarMens: boolean = false;
  id: number;
  dia: string;
  hIn: string;
  hFin: string;
  inter: number;
  uni: string;
  serv: string;
  quant: number;
  conf: string;
  ger: string

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gradeService: GradeService,
              private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    const routeParans = this.route.snapshot.params;
    if(routeParans.id != null){
        this.gradeService.loadById(routeParans.id).subscribe(
          (dados: any) => { this.id = dados.id,
                            this.dia = this.formatarDate(dados.calendario.dia),
                            this.hIn = dados.horaInicial,
                            this.hFin = dados.horaFinal,
                            this.inter = dados.correcaoHora,
                            this.uni = dados.unidade.sigla,
                            this.serv = dados.servico.descricao,
                            this.quant = dados.quantidade,
                            this.conf = dados.configurado,
                            this.ger = dados.gerado
                          })
    }
  }

  formatarDate(data: string){
    let dataCompleta = "";
		
			 let dia = data.substring(8,10);
			 let mes = data.substring(5,7);
       let ano = data.substring(0,4);
       
       if(dia.length == 1){
        dia = "0" + dia;
        }

     if(mes.length == 1){
       mes = "0" + mes
        }
       dataCompleta = dia+"/"+mes+"/"+ano
    
		 return dataCompleta;
  }

  confirmar(id){
    this.agendamentoService.create(id).subscribe(
      success => { this.mostrarMens = true, this.ger = "g"}
    );
        this.id = null;
        this.dia = "";
        this.hIn = "";
        this.hFin = "";
        this.inter = null;
        this.uni = "";
        this.serv = "";
        this.quant = null;
      
  }

}
