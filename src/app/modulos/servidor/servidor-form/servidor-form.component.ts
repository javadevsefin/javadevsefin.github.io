import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../shared/servidor.service';

@Component({
  selector: 'app-servidor-form',
  templateUrl: './servidor-form.component.html',
  styleUrls: ['./servidor-form.component.css']
})
export class ServidorFormComponent implements OnInit {

  mostrarMens: boolean = false;
  servForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private servidorService: ServidorService) { }

  ngOnInit(): void {

    let routeParams = this.route.snapshot.params;

    if(routeParams != null) {
      this.servidorService.loadByMatricula(routeParams.id).subscribe((servidor: any)=>{
          this.updateServForm(servidor)
      });
    }

    this.servForm = this.fb.group({
      matricula: ["", []],
      nome: ["", []],
      cpf: ["", []],
      lotacao: ["", []],
      telefone: ["", []],
      email: ["", []],
      statusServidor: ["", []]
    });
  }

  updateServForm(servidor){
      this.servForm.patchValue(servidor);
  }

  onSubmit(){
    if(this.servForm.valid){
      this.servidorService.save(this.servForm.value).subscribe(
        susses => { this.mostrarMens = true }
      );
    }
    this.servForm.reset();
  }

}
