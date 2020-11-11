import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guiche } from '../shared/guiche';
import { GuicheService } from '../shared/guiche.service';

@Component({
  selector: 'app-guiche-list',
  templateUrl: './guiche-list.component.html',
  styleUrls: ['./guiche-list.component.css'],
  preserveWhitespaces: true
})
export class GuicheListComponent implements OnInit {

  guiches: Guiche[];
  mostrarMens: boolean = false;
  _id: string = "";
  _descricao: string = "";

  constructor(private guicheService: GuicheService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarGuiche();
  }

  listarGuiche(){
    this.guicheService.listGuiche().subscribe(
      dados => this.guiches = dados
    );
  }

  onEdit(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(){
    this.guicheService.remove(this._id).subscribe(
      success => {this.mostrarMens = true, this.listarGuiche()}
    );
  }

  pegaDados(id, descricao){
    this._id = id;
    this._descricao = descricao;
  }
}
