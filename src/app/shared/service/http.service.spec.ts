import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: HttpService= TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
