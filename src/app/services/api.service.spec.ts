import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;

  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule], 
    providers: [ApiService]
  }));

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
  it('should have getUser function', inject([ApiService], (service: ApiService) => {
    expect(service.getUser).toBeTruthy();
   }));
});
