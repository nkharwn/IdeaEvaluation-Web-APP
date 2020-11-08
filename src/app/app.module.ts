import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginModule } from './user-login/user-login.module';
import { IdeaEvaluationModule } from './idea-evaluation/idea-evaluation.module';
import { HttpService } from './shared/service/http.service';
import { DataService } from './shared/service/data.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginModule,
    IdeaEvaluationModule,
    HttpClientModule
  ],
  providers: [HttpService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
