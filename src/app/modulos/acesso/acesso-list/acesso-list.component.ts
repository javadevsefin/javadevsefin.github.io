import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-list',
  templateUrl: './acesso-list.component.html',
  styleUrls: ['./acesso-list.component.css']
})
export class AcessoListComponent implements OnInit {

  acessos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
