import { Component, OnInit } from '@angular/core';
import { CadastroImoveisHttpService } from '../cadastro-imoveis/services/cadastro-imoveis-http.service';
import { CadastroImovelModel } from '../cadastro-imoveis/model/cadastro-imovel.model';

@Component({
  selector: 'app-home',
  templateUrl: './view/home.component.html',
  styleUrls: ['./view/home.component.scss']
})
export class HomeComponent implements OnInit {
  imoveis: CadastroImovelModel[]
  
  constructor(private _httpImovelService: CadastroImoveisHttpService) { }

  get patrimonio(): number {
    let soma = 0;
    this.imoveis?.forEach(item => {
      soma += item.valor;
    });
    return soma;
  }

  get dataUltimoImovel() {
    let dataMaisRecente = null;
  
    for (let i = 0; i < this.imoveis.length; i++) {
      const dataAnuncio = new Date(this.imoveis[i].dataAnuncio);
      
      if (!dataMaisRecente || dataAnuncio > dataMaisRecente) {
        dataMaisRecente = dataAnuncio;
      }
    }

    return dataMaisRecente
  }

  ngOnInit(): void {
    this._carregarImoveis()
  }

  private _carregarImoveis(): void {
    this._httpImovelService.carregarImoveis().subscribe(res => {
      this.imoveis = res
      console.log(this.imoveis)
    })
    }

}
