import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Gabrielle',
    idade: 24,
    altura: 1.57,
    graduado: false
  };

  listarProdutos: any = [
    {id: 1, nome: 'Curso de Angular', precoProduto: 35.56, validade: '2021-12-31'},
    {id: 2, nome: 'Curso de Ionic', precoProduto: 50, validade: '2021-12-31', promocao: true},
    {id: 3, nome: 'Curso de Ionic Avançado', precoProduto: 56, validade: '2021-12-31'},
    {id: 4, nome: 'Curso de Python', precoProduto: 45.50, validade: '2021-12-31'},
    {id: 5, nome: 'Curso de Kotlin', precoProduto: 57, validade: '2021-12-31'},
    {id: 6, nome: 'Curso de Swift', precoProduto: 150, validade: '2021-12-31'},
    {id: 7, nome: 'Curso de C#', precoProduto: 75.50, validade: '2021-12-31'}
  ];

  constructor() {
    for (let item of this.listaStrings){
      console.log(item);
    }

    for (const item of this.listaNumeros){
      console.log(item);
    }

    //console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
    console.log(this.objetoModelo.idade);
    console.log(this.objetoModelo.altura);
    //console.log(this.objetoModelo.graduado);

  }

  ngOnInit(): void {
  }

}
