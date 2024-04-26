import { TestBed } from '@angular/core/testing';

import { ProntoSoccorsoService } from './pronto-soccorso.service';

describe('ProntoSoccorsoService', () => {
  let service: ProntoSoccorsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProntoSoccorsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
