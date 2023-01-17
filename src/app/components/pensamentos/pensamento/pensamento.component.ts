import { PensamentoService } from './../pensamento.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    conteudo: 'teste',
    autoria: 'Autor aqui',
    modelo: 'modelo3',
    id: 0,
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256 ){
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }
  }

  mudarIconeFavorito(): string  {
    if(this.pensamento.favorito == false){
      return 'inativo'
    }else {
      return 'ativo'
    }
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1);
    });
  }

}
