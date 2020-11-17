import { ServidorService } from './../../servidor/shared/servidor.service';
import { Role } from './../shared/role';
import { AcessoService } from './../shared/acesso.service';
import { UnidadeService } from './../../unidade/shared/unidade.service';
import { Unidade } from './../../unidade/shared/unidade';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Servidor } from '../../servidor/shared/servidor';

@Component({
  selector: 'app-acesso-form',
  templateUrl: './acesso-form.component.html',
  styleUrls: ['./acesso-form.component.css']
})
export class AcessoFormComponent implements OnInit {

  mostrarMens: boolean = false;
  acessoForm: FormGroup;
  servidores: Servidor[];
  unidades: Unidade[];
  roles: Role[];
  matricula: string;
  servidor: string;  
  unidade: string; 
  role: string;
  senha: string;


  constructor(private fb: FormBuilder,
              private unidadeService: UnidadeService,
              private acessoService: AcessoService,
              private servidorService: ServidorService) { }

  ngOnInit(): void {

    this.comboBox();

    this.acessoForm = this.fb.group({
      
      id: ['', []],
      servidor: ['', []],
      unidade: ['', []],
      role: ['', []],
      senha: ['', []]
    });
  }

  comboBox(){
      this.unidadeService.listUnidade().subscribe(
        dados => this.unidades = dados
      );

      this.acessoService.listRole().subscribe(
        dados => this.roles = dados
      );

      this.servidorService.listServidor().subscribe(
        dados=> this.servidores = dados
      );
  }

  confirmar(){
      this.matricula = this.acessoForm.get('matricula').value;
      this.servidor = this.acessoForm.get('servidor').value;
      this.unidade = this.acessoForm.get('unidade').value;
      this.role = this.acessoForm.get('role').value;

      if(this.acessoForm.get('senha').value == null){
        this.acessoForm.get('senha').setValue(this.gerarSenha());
      }
      this.senha = this.acessoForm.get('senha').value;
  }

  gerarSenha() {

    let senha: string;

    if(this.matricula == null){

      let mat: string = "1038885";
      let p1 = mat.substring(0, 3);

      let cp: string = this.acessoForm.get('servidor').value;
      let p2 = cp.substring(0, 3);
      
      senha = p1 + p2;
    }
    return senha
  }

  onSubmit(){

    this.acessoForm.get('id').setValue(this.acessoForm.get('matricula').value);
    this.confirmar();
    console.log(this.acessoForm.value);
    
  }
}
