/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MutanteService } from './mutante.service';

describe('Service: Mutante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutanteService]
    });
  });

  it('should ...', inject([MutanteService], (service: MutanteService) => {
    expect(service).toBeTruthy();
  }));
});
