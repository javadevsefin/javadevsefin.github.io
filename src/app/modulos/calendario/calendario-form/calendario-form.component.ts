import { CalendarioService } from './../shared/calendario.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css']
})
export class CalendarioFormComponent implements OnInit {

  calendarioForm: FormGroup;
  mostrarMens: boolean = false;

  constructor(private fb: FormBuilder,
              private calendarioService: CalendarioService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    const routeParans = this.route.snapshot.params;
    if(routeParans.id !=null){
        this.calendarioService.loadById(routeParans.id).subscribe((calendario: any)=>{
              this.updateCalendarioForm(calendario)
        });
    }


    this.calendarioForm = this.fb.group({
      id: [null, []],
      dia: ['', []],
      observacao: ['', []],
      statusCalendario: ['', []]
    })
  }

  updateCalendarioForm(calendario){
    this.calendarioForm.patchValue(calendario)
  }

  onSumit(){
    if(this.calendarioForm.valid){
        this.calendarioService.save(this.calendarioForm.value).subscribe(
          success => { this.mostrarMens = true }
        );
    }
    this.calendarioForm.reset();
  }
}
