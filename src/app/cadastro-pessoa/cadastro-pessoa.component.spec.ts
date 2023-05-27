import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { CadastroPessoaFormService } from './services/cadastro-pessoa-form.service';
import { CadastroPessoaHttpService } from './services/cadastro-pessoa-http.service';
import { CadastroImoveisHttpService } from '../cadastro-imoveis/services/cadastro-imoveis-http.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CadastroImovelModel } from '../cadastro-imoveis/model/cadastro-imovel.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CadastroPessoaComponent', () => {
  let component: CadastroPessoaComponent;
  let fixture: ComponentFixture<CadastroPessoaComponent>;
  let formService: CadastroPessoaFormService;
  let httpService: CadastroPessoaHttpService;
  let httpImovelService: CadastroImoveisHttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPessoaComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        CadastroPessoaFormService,
        CadastroPessoaHttpService,
        CadastroImoveisHttpService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPessoaComponent);
    component = fixture.componentInstance;
    formService = TestBed.inject(CadastroPessoaFormService);
    httpService = TestBed.inject(CadastroPessoaHttpService);
    httpImovelService = TestBed.inject(CadastroImoveisHttpService);
    fixture.detectChanges();
  });  

  it('should initialize the form', () => {
    expect(component.formService).toBeInstanceOf(CadastroPessoaFormService);
    expect(component.formulario).toBeInstanceOf(FormGroup);
  });
 

  it('should save the pessoa', () => {
    spyOn(httpService, 'salvarPessoa').and.returnValue(of({}));

    component.salvar();

    expect(httpService.salvarPessoa).toHaveBeenCalledWith(component.formService.entidade);
  });
});
