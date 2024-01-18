import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponsCadastradosPesquisaComponent } from './cupons-cadastrados-pesquisa.component';

describe('CuponsCadastradosPesquisaComponent', () => {
  let component: CuponsCadastradosPesquisaComponent;
  let fixture: ComponentFixture<CuponsCadastradosPesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuponsCadastradosPesquisaComponent]
    });
    fixture = TestBed.createComponent(CuponsCadastradosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
