import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../constants/endpoints';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject('');
  currentdata = this.dataSource.asObservable();
  constructor(private httpService: HttpService) { }

 
  loginUser(userData: any): Observable<any> {
    const apiUrl = `${environment.ideaEvaluationApiUrl}${Endpoints.login}`;
    return this.httpService.post(apiUrl, userData);
  }

  getIdeaList(userId: number): Observable<any> {
    const apiUrl = `${environment.ideaEvaluationApiUrl}${Endpoints.ideaList}/${userId}`;
    return this.httpService.get(apiUrl);
  }

  evaluateIdea(EvaluateData: any): Observable<any> {
    const apiUrl = `${environment.ideaEvaluationApiUrl}${Endpoints.evaluateIdea}`;
    return this.httpService.post(apiUrl, EvaluateData);
  }
 

  changeData(data: any) {
    this.dataSource.next(data)
  }


}
