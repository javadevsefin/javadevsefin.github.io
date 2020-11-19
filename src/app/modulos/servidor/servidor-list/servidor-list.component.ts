import { Router, ActivatedRoute } from '@angular/router';
import { ServidorService } from './../shared/servidor.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Servidor } from '../shared/servidor';

@Component({
  selector: 'app-servidor-list',
  templateUrl: './servidor-list.component.html',
  styleUrls: ['./servidor-list.component.css'],
  preserveWhitespaces: true
})
export class ServidorListComponent implements OnInit {

  servidorForm: FormGroup
  _descricao: String;
  _matricula: String;
  mostrarMens: boolean = false;
  servidores: Servidor[];

  constructor(private fb: FormBuilder, 
              private router: Router,
              private route: ActivatedRoute,
              private servidorService: ServidorService ) { }

  ngOnInit(): void {

    //this.listServidor();

    this.servidorForm = this.fb.group({
      matricula: ["", []],
      nome: ["", []],
      cpf: ["", []]
    });
  }

  listServidor(){
    this.servidorService.listServidor().subscribe(
      dados => this.servidores = dados
    );
  }

  pesquisar(){

    let matricula = this.servidorForm.get('matricula').value;
    let nome = this.servidorForm.get('nome').value;
    let cpf = this.servidorForm.get('cpf').value;

    this.servidorService.pesquisaAvancada(matricula, nome, cpf).subscribe(
      dados=> this.servidores = dados
    );

  }


  formatarCpf(cpf){
    let str:string = cpf; 
    let p1 = str.substring(0, 3);
    let p2 = str.substring(3, 6);
    let p3 = str.substring(6, 9);
    let p4 = str.substring(9, 11);
      cpf = p1 + "." + p2 + "." + p3 + "-" + p4;
    return cpf
   }

   onEdit(id){
      this.router.navigate(['editar', id], {relativeTo: this.route});  
   }

   pegaDados(matricula, descricao){

      this._matricula = matricula;
      this._descricao = descricao;

      
   }

   onDelete(){
      this.servidorService.remove(this._matricula).subscribe(
        success => { this.mostrarMens = true }
      );
   }
}
