import { CalendarioService } from './../shared/calendario.service';
import { Calendario } from './../shared/calendario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendario-list',
  templateUrl: './calendario-list.component.html',
  styleUrls: ['./calendario-list.component.css'],
  preserveWhitespaces: true
})
export class CalendarioListComponent implements OnInit {

  calendarios: Calendario[];
  mostrarMens: boolean = false;
  _id: string = "";
  _dia: string = "";

  constructor(private calendarioService: CalendarioService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listCalendario();
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  listCalendario(){
    this.calendarioService.listCalendario().subscribe(
      dados => this.calendarios = dados
    );
  }

  pegaDados(id, dia){
    this._id = id;
    this._dia = dia;
  }

  onDelete(){
    this.calendarioService.remove(this._id).subscribe(
      success => { this.mostrarMens = true, this.listCalendario() }
    )
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

}
