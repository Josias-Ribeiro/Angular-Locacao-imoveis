import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroImoveisComponent } from './cadastro-imoveis.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroPessoaHttpService } from '../cadastro-pessoa/services/cadastro-pessoa-http.service';
import { MaterialCoreModule } from '../shared/modulos/material-core.module';
import { CadastroImoveisRoutingModule } from './cadastro-imoveis-routing.module';
import { CadastroImoveisFormService } from './services/cadastro-imoveis-form.service';
import { CadastroImoveisHttpService } from './services/cadastro-imoveis-http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: CadastroImoveisComponent;
  let fixture: ComponentFixture<CadastroImoveisComponent>;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CadastroImoveisComponent
      ],
      imports: [
        CommonModule,    
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialCoreModule,    
        CadastroImoveisRoutingModule,
        HttpClientTestingModule
        
      ],providers: [CadastroImoveisFormService, CadastroImoveisHttpService, CadastroPessoaHttpService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
