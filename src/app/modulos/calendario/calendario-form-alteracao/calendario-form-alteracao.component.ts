import { CalendarioService } from './../shared/calendario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-form-alteracao',
  templateUrl: './calendario-form-alteracao.component.html',
  styleUrls: ['./calendario-form-alteracao.component.css']
})
export class CalendarioFormAlteracaoComponent implements OnInit {

  calAltForm: FormGroup;
  dataInicial: string;
  dataFinal: string;
  mostrarMens: boolean = false;
  mess: string = "";

  constructor(private fb: FormBuilder,
              private calendarioService: CalendarioService) { }

  ngOnInit(): void {

    this.calAltForm = this.fb.group({

      dataInicial: ['', []],
      dataFinal: ['', []]

    });
  }

  alterarStatus(){
    this.dataInicial = this.formatarDate(this.calAltForm.get('dataInicial').value);
    this.dataFinal = this.formatarDate(this.calAltForm.get('dataFinal').value);
  }

  inativar(){

    let dataInicial = this.calAltForm.get('dataInicial').value;
    let dataFinal = this.calAltForm.get('dataFinal').value;

    this.calendarioService.inativarDias(dataInicial, dataFinal).subscribe(
      success => {console.log("nada")},
      erro =>{ this.mostrarMens = !this.mostrarMens,
               this.mess = "Os dias foram Inativados!" }
      );
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
