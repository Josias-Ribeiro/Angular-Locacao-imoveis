import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { CadastroImoveisHttpService } from '../cadastro-imoveis/services/cadastro-imoveis-http.service';
import { CadastroImovelModel } from '../cadastro-imoveis/model/cadastro-imovel.model';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpService: CadastroImoveisHttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NoopAnimationsModule, BrowserAnimationsModule],
      declarations: [HomeComponent],
      providers: [CadastroImoveisHttpService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(CadastroImoveisHttpService);
    fixture.detectChanges();
  });


  it('should calculate patrimonio correctly', () => {
    const imovel1: CadastroImovelModel = {
      id: 1,
      nome: 'Imóvel 1',
      tipo: 'Casa',
      valor: 1000,
      condominio: 500,
      quartos: 3,
      banheiros: 2,
      mobiliado: true,
      area: 150,
      venda: true,
      aluguel: false,
      dataAnuncio: new Date('2022-01-01'),
      proprietarioId: 1
    };

    const imovel2: CadastroImovelModel = {
      id: 2,
      nome: 'Imóvel 2',
      tipo: 'Apartamento',
      valor: 2000,
      condominio: 700,
      quartos: 2,
      banheiros: 1,
      mobiliado: false,
      area: 80,
      venda: false,
      aluguel: true,
      dataAnuncio: new Date('2022-02-01'),
      proprietarioId: 2
    };

    component.imoveis = [imovel1, imovel2];

    expect(component.patrimonio).toBe(3000);
  });

  it('should return the latest date of the imoveis', () => {
    const imovel1: CadastroImovelModel = {
      id: 1,
      nome: 'Imóvel 1',
      tipo: 'Casa',
      valor: 1000,
      condominio: 500,
      quartos: 3,
      banheiros: 2,
      mobiliado: true,
      area: 150,
      venda: true,
      aluguel: false,
      dataAnuncio: new Date('2022-01-01'),
      proprietarioId: 1
    };

    const imovel2: CadastroImovelModel = {
      id: 2,
      nome: 'Imóvel 2',
      tipo: 'Apartamento',
      valor: 2000,
      condominio: 700,
      quartos: 2,
      banheiros: 1,
      mobiliado: false,
      area: 80,
      venda: false,
      aluguel: true,
      dataAnuncio: new Date('2022-02-01'),
      proprietarioId: 2
    };

    component.imoveis = [imovel1, imovel2];

    expect(component.dataUltimoImovel).toEqual(new Date('2022-02-01'));
  });

  it('should load imoveis on initialization', fakeAsync(() => {
    const imoveis: CadastroImovelModel[] = [
      {
        id: 1,
        nome: 'Imóvel 1',
        tipo: 'Casa',
        valor: 1000,
        condominio: 500,
        quartos: 3,
        banheiros: 2,
        mobiliado: true,
        area: 150,
        venda: true,
        aluguel: false,
        dataAnuncio: new Date('2022-01-01'),
        proprietarioId: 1
      },
      {
        id: 2,
        nome: 'Imóvel 2',
        tipo: 'Apartamento',
        valor: 2000,
        condominio: 700,
        quartos: 2,
        banheiros: 1,
        mobiliado: false,
        area: 80,
        venda: false,
        aluguel: true,
        dataAnuncio: new Date('2022-02-01'),
        proprietarioId: 2
      }
    ];

    spyOn(httpService, 'carregarImoveis').and.returnValue(of(imoveis));

    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(component.imoveis).toEqual(imoveis);
  }));
});
