import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // objeto de formulário
  formulario = new FormGroup({

    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])

  })

  //Visibilidade dos botões

  btnCadastrar:boolean = true;

  vetor:Pessoa[] = [];

  //armazena o índice da pessoa selacionada
  indice:number = -1 //-1 garante que não será selecionado nenhuma pessao da lista

  //função de cadastro
  cadastrar(){
    //cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //limpeza dos inputs
    this.formulario.reset();

    //visualização via console
    //console.table(this.vetor);
  }

  // funçao de seleção
  selecionar(indice:number){
    // atribuir o índice da pessoa
    this.indice = indice;

    //atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade
    });

    //Visibilidade dos botões
    this.btnCadastrar = false

  }

  //função alteração
  alterar(){

    //alterar o vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpa os campos
    this.formulario.reset();

    //visibilidade dos botoes
    this.btnCadastrar = true;


  }

  //função de remoção
  remover(){
    //removendo do vetor
    this.vetor.splice(this.indice, 1);// remove apenas um registro a partir do indice

    //limpeza dos inputs
    this.formulario.reset();

    //visibilidade dos botóes
    this.btnCadastrar = true;
  }
  
  //função de cancelamento
  cancelar(){
    //limpeza dos campos
    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastrar = true;

  }

}
