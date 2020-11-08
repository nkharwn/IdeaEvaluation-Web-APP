import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { UserDetail } from '../models/user-detail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetail: UserDetail = new UserDetail();
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
      this.router.navigate(['ideas']);
    }

  }

  login() {

    if (this.userDetail.userName && this.userDetail.password) {
      this.dataService.loginUser(this.userDetail).subscribe(response => {
        console.log(JSON.stringify(response));
        if (response) {
          sessionStorage.setItem('currentUser', JSON.stringify(response));
          this.dataService.changeData(this.userDetail.userName);
          this.router.navigate(['ideas']);
        }
      }, error => {
        alert("invalid username or password");

      });


    }

  }


}
