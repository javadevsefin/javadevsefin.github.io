import { ActivatedRoute } from '@angular/router';
import { ContribuinteService } from './../shared/contribuinte.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contribuinte-form',
  templateUrl: './contribuinte-form.component.html',
  styleUrls: ['./contribuinte-form.component.css']
})
export class ContribuinteFormComponent implements OnInit {

  mostrarMens: boolean = false; 
  contribuinteForm: FormGroup;
  id: number;
  nome: string;  
  cpfCnpj: string; 
  email: string;
  fone: string;
  senha: string;
  mostrarSenha: boolean = false;

  constructor(private contribuinteService: ContribuinteService,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    const routeParans = this.route.snapshot.params;

    if(routeParans.id != null){
        this.contribuinteService.loadById(routeParans.id).subscribe((contribuinte: any)=> {
              this.updateContribuinteForm(contribuinte), this.mostrarSenha = true
        });
    }

    this.contribuinteForm = this.fb.group({
        id: [null, []],
        nome: ['', []],
        cpfCnpj: ['', []],
        email: ['', []],
        fone: ['', []],
        senha: ['', []]
    })
  }

  updateContribuinteForm(contribuinte){
    this.contribuinteForm.patchValue(contribuinte);
  }

  confirmar(){
    
    this.mostrarSenha = true;
    this.id = this.contribuinteForm.get('id').value;
    this.nome = this.contribuinteForm.get('nome').value;
    this.cpfCnpj = this.formatarPessoas(this.contribuinteForm.get('cpfCnpj').value);
    this.email = this.contribuinteForm.get('email').value;
    this.fone = this.contribuinteForm.get('fone').value;
    if(this.id == null){
      this.contribuinteForm.get('senha').setValue(this.gerarSenha())
    }
    this.senha = this.contribuinteForm.get('senha').value;
   
  }

  formatarPessoas(pfj: string){
    let res: string;
    if(pfj.length == 11 ){
      res = this.formatarCpf(pfj);
    } 

    if(pfj.length == 14 ){
      res = this.formatarCnpj(pfj);
    } 
    return res;
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

   formatarCnpj(cnpj){
     let str: string = cnpj;

     let p1 = str.substring(0, 2);
     let p2 = str.substring(2, 5);
     let p3 = str.substring(5, 8);
     let p4 = str.substring(8, 12);
     let p5 = str.substring(12, 14);

      cnpj = p1 + "." + p2 + "." + p3 + "/" + p4 + "-" + p5;

      return cnpj;
    }

    gerarSenha(){

      let senha: string;

      if(this.id == null){

        let nom: string = this.contribuinteForm.get('nome').value;
        let p1 =nom.substring(0, 3).toLocaleLowerCase();
  
        let cp: string = this.contribuinteForm.get('cpfCnpj').value;
        let p2 = cp.substring(0, 3);
        
        senha = p1 + p2;
      }
      return senha
    }

    onSumit(){
      if(this.contribuinteForm.valid){
        this.contribuinteService.save(this.contribuinteForm.value).subscribe(
            success => { this.mostrarMens = true }
        )
      }
      this.contribuinteForm.reset();
    }
   
}
