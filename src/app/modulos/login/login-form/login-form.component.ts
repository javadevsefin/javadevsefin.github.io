import { Router } from '@angular/router';
import { GlobalService } from './../../shared/global.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  mat: string = '';
  nome: string = '';
  role: string = '';
  unidade: string = '';
  msgError: boolean = false;

  constructor(private fb: FormBuilder, private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      matricula: ['', []],
      senha: ['', []]

    });
  }

  fechar(){
    this.msgError = false;
  }

  logar(){
    let matricula = this.loginForm.get('matricula').value;
    let senha = this.loginForm.get('senha').value;

    this.globalService.logar(matricula, senha).subscribe((dados: any)=>{

      if(matricula === dados.servidor.matricula && senha === dados.senha ){
        this.globalService.setLoggedIn(true);
        this.router.navigate(['/']); 
        this.globalService.pegarDados(dados.servidor.nome, dados.role.descricao, dados.servidor.matricula, dados.unidade.descricao);
        this.globalService.setMatricula(dados.servidor.matricula),
        this.globalService.setNome(dados.servidor.nome),
        this.globalService.setRole(dados.role.descricao),
        this.globalService.setUnidade(dados.unidade.descricao),
        this.globalService.getMatricula(),  
        this.globalService.getNome(),
        this.globalService.getRole(),
        this.globalService.getUnidade()
        }  
    }, (error: any) => { this.msgError = true });
  }
}
