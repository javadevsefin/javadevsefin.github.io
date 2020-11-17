import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../shared/servidor.service';

@Component({
  selector: 'app-servidor-form',
  templateUrl: './servidor-form.component.html',
  styleUrls: ['./servidor-form.component.css']
})
export class ServidorFormComponent implements OnInit {

  mostrarMens: boolean = false;
  servForm: FormGroup;

  constructor(private fb: FormBuilder,
              private servidorService: ServidorService) { }

  ngOnInit(): void {

    this.servForm = this.fb.group({
      matricula: ["", []],
      nome: ["", []],
      cpf: ["", []],
      lotacao: ["", []],
      telefone: ["", []],
      email: ["", []],
      statusServidor: ["", []]
    });
  }

  onSubmit(){
    if(this.servForm.valid){
      this.servidorService.create(this.servForm.value).subscribe(
          sussess => { this.mostrarMens = true }
      );
    }
  }

}
