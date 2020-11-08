import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { UserDetail } from 'src/app/user-login/models/user-detail';
import { IdeaEvaluate } from '../models/idea-evaluate';
import { IdeaDetail } from '../models/ideaDetail';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.css']
})
export class IdeaListComponent implements OnInit {
  ideaDetailList: IdeaDetail[];
  userDetail:UserDetail=new UserDetail();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
       this.userDetail = JSON.parse(sessionStorage.getItem('currentUser'));

      this.dataService.changeData(this.userDetail.userName);
      this.dataService.getIdeaList(this.userDetail.userId).subscribe(response => {
        this.ideaDetailList = response;
      }, error => {
        alert("Error occurred while fetching idea list. Please contact admin to resolve");
      });

    }

  }

  evaluate(ideaId: number) {
    debugger;
    const ideaEvaluateDetail= new IdeaEvaluate();
    ideaEvaluateDetail.ideaId=ideaId;
    ideaEvaluateDetail.userId=this.userDetail.userId;
    this.dataService.evaluateIdea(ideaEvaluateDetail).subscribe(response => {
      this.ideaDetailList = response;
      this.ideaDetailList.forEach(idea=>{
        if(idea.ideaId==response.ideaId)
         idea.isEvaluate=true;
      });
    }, error => {
      alert("Error occurred while post idea evaluation data. Please contact admin to resolve");
    });
  }
}

