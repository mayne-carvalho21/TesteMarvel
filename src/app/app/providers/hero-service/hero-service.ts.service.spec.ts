import { TestBed } from '@angular/core/testing';

import { HeroService.TsService } from './hero-service.ts.service';

describe('HeroService.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService.TsService = TestBed.get(HeroService.TsService);
    expect(service).toBeTruthy();
  });
});
