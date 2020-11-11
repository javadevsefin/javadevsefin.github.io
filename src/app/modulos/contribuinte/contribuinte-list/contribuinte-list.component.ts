import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContribuinteService } from './../shared/contribuinte.service';
import { Contribuinte } from './../shared/contribuinte';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contribuinte-list',
  templateUrl: './contribuinte-list.component.html',
  styleUrls: ['./contribuinte-list.component.css'],
  preserveWhitespaces: true
})
export class ContribuinteListComponent implements OnInit {

  contribuintes: Contribuinte[];  
  mostrarMens: boolean = false;
  contribuinteForm: FormGroup;
  _descricao;
  constructor(private contribuinteService: ContribuinteService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listContribuinte();

    this.contribuinteForm = this.fb.group({
        nome: ['',[]],
        cpfCnpj: ['', []]
    });
  }

  listContribuinte(){
    this.contribuinteService.listContribuinte().subscribe(
      dados => this.contribuintes = dados
    );
  }

  onEdit(id){
   this.router.navigate(['editar', id], { relativeTo: this.route});
  }
  onDelete(){

  }
  pegaDados(id, descricao){

  }

  pesquisar(){

    let nome = this.contribuinteForm.get('nome').value;
    let cpfCnpj = this.contribuinteForm.get('cpfCnpj').value;
    this.contribuinteService.buscaAvancada(nome, cpfCnpj).subscribe(
      dados=>this.contribuintes = dados
    );
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
}

