import { GlobalService } from './../../shared/global.service';
import { ServicoService } from './../shared/servico.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from '../shared/servico';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css'],
  preserveWhitespaces: true
})
export class ServicoListComponent implements OnInit {

  servicos: Servico[];
  _id: string = "";
  _descricao: string = "";
  mostrarMens: boolean = false;

  constructor(private servicoService: ServicoService,
              private router: Router,
              private route: ActivatedRoute,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.listarServico();
  }

  listarServico(){
    this.servicoService.listServico().subscribe(
          dados => this.servicos = dados
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
    this.servicoService.remove(this._id).subscribe(
      sucess=> { this.globalService.removeShow('Excluido com Sucesso!', 'Serviço')}
    );
  }
}
