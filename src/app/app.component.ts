import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title ='';
  constructor(private router: Router,private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentdata.subscribe(UserName => {
      this.title=UserName;
    })
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.dataService.changeData("");
    this.router.navigate(['']);

  }
}
