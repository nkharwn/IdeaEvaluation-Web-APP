import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { HttpService } from './http.service';
import { of } from 'rxjs';




describe('DataService', () => {
  let dataService:DataService;
  let httpervice:HttpService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [DataService,HttpService]
  }));
  beforeEach(() => {
    dataService=TestBed.get(DataService);
    httpervice=TestBed.get(HttpService);
  })
 

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

 


});
