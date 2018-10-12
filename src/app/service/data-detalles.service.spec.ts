import { TestBed } from '@angular/core/testing';

import { DataDetallesService } from './data-detalles.service';

describe('DataDetallesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDetallesService = TestBed.get(DataDetallesService);
    expect(service).toBeTruthy();
  });
});
