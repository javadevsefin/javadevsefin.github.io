import { PerfilAtendimentoService } from './../shared/perfil-atendimento.service';
import { DetalhamentoServicoService } from './../../detalhamento-servico/shared/detalhamento-servico.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Servidor } from '../../servidor/shared/servidor';
import { ServidorService } from '../../servidor/shared/servidor.service';
import { DetalhamentoServico } from '../../detalhamento-servico/shared/detalhamento-servico';
import { PerfilAtendimento } from '../shared/perfil-atendimento';

@Component({
  selector: 'app-perfil-atendimento-form',
  templateUrl: './perfil-atendimento-form.component.html',
  styleUrls: ['./perfil-atendimento-form.component.css']
})
export class PerfilAtendimentoFormComponent implements OnInit {

  mostrarMens: boolean = false;
  perfilForm: FormGroup;
  servidores: Servidor[];
  delServicos: DetalhamentoServico[];
  perfilAtendimentos: PerfilAtendimento[];
  pegarMaricula: string;

  constructor(private fb: FormBuilder,
              private servidorService: ServidorService,
              private detalhamentoServicoService: DetalhamentoServicoService,
              private perfilAtendimentoService: PerfilAtendimentoService) { }

  ngOnInit(): void {

    this.combobox();

    this.perfilForm = this.fb.group({
      id: [null, []],
      matricula: ['',[]],
      servico: ['', []]
    });
  }

  combobox(){
    this.servidorService.listServidor().subscribe(
      dados => this.servidores = dados,
      
    );
    this.detalhamentoServicoService.listDetalhamentoServico().subscribe(
      dados => this.delServicos = dados
    );  
  }

  listarPerfil(matricula){
    this.perfilAtendimentoService.loadById(matricula).subscribe(
      dados => this.perfilAtendimentos = dados  
    );
  }

  onSubmit(){

    let matricula = this.perfilForm.get('matricula').value;
    let servico = this.perfilForm.get('servico').value;

    servico.forEach(element => {
      this.perfilAtendimentoService.createPerfil(matricula, element).subscribe(
        success => { 
          this.listarPerfil(matricula), 
          this.mostrarMens = true;
        }
      );
    });
    
    this.mostrarMens = false;
  }

  onDelete(id){
    this.perfilAtendimentoService.remove(id).subscribe(
      success => {
        this.listarPerfil(this.perfilForm.get('matricula').value)
      }
    );
  }

}
