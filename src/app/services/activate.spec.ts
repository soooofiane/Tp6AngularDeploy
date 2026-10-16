import { TestBed } from '@angular/core/testing';
import { ActiviteService } from './activate';

describe('ActiviteService', () => {
  let service: ActiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
