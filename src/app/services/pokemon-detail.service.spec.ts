import { TestBed } from '@angular/core/testing';

import { PokemonDetailService } from './pokemon-detail.service';

describe('PokemonDetailService', () => {
  let service: PokemonDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDetailService);
  });

  it('should be get', () => {
    service.detailObs$.next([]);
    expect(service.getDetailObs()).toEqual([]);
  });

  it('should be created', () => {
    service.setDetailObs([]);
    expect(service.getDetailObs()).toEqual([]);
  });
});
