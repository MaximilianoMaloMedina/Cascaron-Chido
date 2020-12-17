import { TestBed } from '@angular/core/testing';

import { SprestamosService } from './sprestamos.service';

describe('SprestamosService', () => {
  let service: SprestamosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprestamosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
