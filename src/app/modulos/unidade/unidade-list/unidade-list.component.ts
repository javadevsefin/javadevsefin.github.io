import { UnidadeService } from './../shared/unidade.service';
import { Unidade } from './../shared/unidade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.css'],
  preserveWhitespaces: true
})
export class UnidadeListComponent implements OnInit {
  
  unidades: Unidade[];
  _id: string =  "";
  _descricao: string = "";
  mostrarMens: boolean = false;

  constructor(private unidadeService: UnidadeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listUnidade();
  }

  listUnidade(){
    this.unidadeService.listUnidade().subscribe(
      dados => this.unidades = dados
    );
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  pegaDados(id, descricao){
      this._id = id,
      this._descricao = descricao;
  }

  onDelete(){
    this.unidadeService.remove(this._id).subscribe(
      success => { this.mostrarMens =  true, this.listUnidade() }
    )
  }
}
