import { TestBed } from '@angular/core/testing';

import { CadastroCupomServiceTsService } from './cadastro-cupom.service';

describe('CadastroCupomServiceTsService', () => {
  let service: CadastroCupomServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroCupomServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
