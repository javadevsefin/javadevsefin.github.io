import { GlobalService } from './../../shared/global.service';
import { Router } from '@angular/router';
import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtendimentoService } from '../shared/atendimento.service';

@Component({
  selector: 'app-inicial-atendimento-form',
  templateUrl: './inicial-atendimento-form.component.html',
  styleUrls: ['./inicial-atendimento-form.component.css']
})
export class InicialAtendimentoFormComponent implements OnInit {

  getNome: string;
  getMatricula: string;
  inicialAtendForm: FormGroup;
  msgError: boolean = false;

  constructor(private globalService: GlobalService,
              private fb: FormBuilder,
              private atendimentoService: AtendimentoService,
              private router: Router ) { }

  ngOnInit(): void {

    this.getNome = this.globalService.getNome();
    this.getMatricula = this.globalService.getMatricula();

    this.inicialAtendForm = this.fb.group({
      matricula: ['', []],
      statusAtendimento: ['', [Validators.required]],
      guiche: ['', [Validators.required]]
    });

    this.inicialAtendForm.get('matricula').setValue(this.getMatricula);
  }

  onSubmit(){
    if(this.inicialAtendForm.valid){
      let mat = this.inicialAtendForm.get('matricula').value;
      let sta = this.inicialAtendForm.get('statusAtendimento').value;
      let gui = this.inicialAtendForm.get('guiche').value;

      this.atendimentoService.createAtendente(mat, sta, gui).subscribe(
        success => {console.log("deu certo!"), this.router.navigate(['atendimento/listaAtendimento'])},
        error => { this.msgError = true }
      );
    }
  }
}
