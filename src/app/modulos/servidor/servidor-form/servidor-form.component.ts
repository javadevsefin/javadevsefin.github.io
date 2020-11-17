import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servidor-form',
  templateUrl: './servidor-form.component.html',
  styleUrls: ['./servidor-form.component.css']
})
export class ServidorFormComponent implements OnInit {

  mostrarMens: boolean = false;
  servForn: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.servForn = this.fb.group({
      
    });
  }

}
