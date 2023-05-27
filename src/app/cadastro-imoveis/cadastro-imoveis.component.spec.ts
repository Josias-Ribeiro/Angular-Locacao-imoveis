import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroImoveisComponent } from './cadastro-imoveis.component';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';
import { CadastroImoveisHttpService } from './services/cadastro-imoveis-http.service';
import { CadastroPessoaHttpService } from '../cadastro-pessoa/services/cadastro-pessoa-http.service';
import { of } from 'rxjs';

describe('CadastroImoveisComponent', () => {
  let component: CadastroImoveisComponent;
  let fixture: ComponentFixture<CadastroImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [CadastroImoveisComponent],
      providers: [
        CadastroImoveisFormService,
        CadastroImoveisHttpService,
        CadastroPessoaHttpService,
        FormBuilder
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the component', () => {
    component.ngOnInit();
    expect(component.formulario).toBeDefined();
    expect(component.status).toBe('NovaPesquisa');
  });

  it('should return true if cep is valid', () => {
    component.endereco.get('cep')?.setValue('12345678');
    expect(component.cepValido).toBe(true);
  });

  it('should return false if cep is invalid', () => {
    component.endereco.get('cep')?.setValue('123');
    expect(component.cepValido).toBe(false);
  });

  it('should set status to "Inserindo" when creating', () => {
    component.criar();
    expect(component.status).toBe('Inserindo');
  });

  it('should reset form and enable it when canceling', () => {
    component.cancelar();
    expect(component.status).toBe('NovaPesquisa');
    expect(component.formulario.enabled).toBe(true);
    expect(component.formulario.pristine).toBe(true);
  });

  it('should disable form when listing', () => {
    component.listar();
    expect(component.status).toBe('DadosCarregados');
    expect(component.formulario.disabled).toBe(true);
  });

  it('should set status to "Editando" when editing', () => {
    component.editar();
    expect(component.status).toBe('Editando');
  });

  it('should call HTTP service to delete imovel', () => {
    const httpService = TestBed.inject(CadastroImoveisHttpService);
    spyOn(httpService, 'deletarImovel').and.returnValue(of());
    component.excluir();
    expect(httpService.deletarImovel).toHaveBeenCalled();
  });

  it('should call HTTP service to save imovel when status is "Inserindo"', () => {
    const httpService = TestBed.inject(CadastroImoveisHttpService);
    spyOn(httpService, 'salvarImovel').and.returnValue(of());
    component.status = 'Inserindo';
    component.salvar();
    expect(httpService.salvarImovel).toHaveBeenCalled();
  });

  it('should call HTTP service to edit imovel when status is not "Inserindo"', () => {
    const httpService = TestBed.inject(CadastroImoveisHttpService);
    spyOn(httpService, 'editarImovel').and.returnValue(of());
    component.status = 'Editando';
    component.salvar();
    expect(httpService.editarImovel).toHaveBeenCalled();
  });

  it('should call HTTP service to load endereco', () => {
    const httpService = TestBed.inject(CadastroImoveisHttpService);
    spyOn(httpService, 'carregarEndereco').and.returnValue(of({ logradouro: 'Rua Teste', bairro: 'Bairro Teste', localidade: 'Localidade Teste', uf: 'UF Teste' }));
    component.endereco.get('cep')?.setValue('12345678');
    component.pesquisarCEP();
    expect(httpService.carregarEndereco).toHaveBeenCalled();
  });
});
