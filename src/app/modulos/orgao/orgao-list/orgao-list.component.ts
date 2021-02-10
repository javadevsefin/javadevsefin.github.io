import { GlobalService } from './../../shared/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrgaoService } from './../shared/orgao.service';
import { Component, OnInit } from '@angular/core';
import { Orgao } from '../shared/orgao';

@Component({
  selector: 'app-orgao-list',
  templateUrl: './orgao-list.component.html',
  styleUrls: ['./orgao-list.component.css'],
  preserveWhitespaces: true
})
export class OrgaoListComponent implements OnInit {

  orgaos: Orgao[];
  _id: string = "";
  _descricao: string = "";
  mostrarMens: boolean = false;

  constructor(private orgaoService: OrgaoService,
              private router: Router,
              private route: ActivatedRoute,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.listOrgao();
  }

  listOrgao(){
    this.orgaoService.listOrgao().subscribe(
      dados => this.orgaos = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  pegaDados(id, descricao){
      this._id = id;
      this._descricao = descricao;
  }

  onDelete(){
    this.orgaoService.remove(this._id).subscribe(
      success=>{this.globalService.removeShow('Excluido com Sucesso!', 'Orgão'), this.listOrgao()}
    );
  }
}
