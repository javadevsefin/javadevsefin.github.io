import { FormGroup } from '@angular/forms';
import { DetalhamentoServicoService } from './../shared/detalhamento-servico.service';
import { DetalhamentoServico } from './../shared/detalhamento-servico';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhamento-servico-list',
  templateUrl: './detalhamento-servico-list.component.html',
  styleUrls: ['./detalhamento-servico-list.component.css'],
  preserveWhitespaces: true
})
export class DetalhamentoServicoListComponent implements OnInit {

  mostrarMens: boolean = false;
  _id: string = "";
  _descricao: string = "";
  detalhamentoServicos: DetalhamentoServico[];

  constructor(private detalhamentoServicoService: DetalhamentoServicoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listDetalhamentoServico();

  }

  listDetalhamentoServico(){
    this.detalhamentoServicoService.listDetalhamentoServico().subscribe(
      dados=> this.detalhamentoServicos = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  pegarDados(id, descricao){
    this._id = id;
    this._descricao = descricao;
  }

  onDelete(){

  }

}
