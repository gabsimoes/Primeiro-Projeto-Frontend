import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = "Curso de Angular"; //declaramos o nome, o tipo e o conteúdo (inicialização)
  anuncio: string = `O ${this.nomeProduto} está em promoção!`
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto: string = "assets/img/crud.png";
  dataValidade: string = '2021-12-31';

  constructor() {

    console.log('Nome do Produto:', this.nomeProduto);
    console.log('Anuncio:', this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço:', this.precoProduto);
    console.log('Promoção:', this.promocao);

}



  ngOnInit(): void {
  }
}
