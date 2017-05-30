import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  title: string;
  link: string;
  votess: number;
  votes: object[];
  constructor() {
    this.votes=[
      {
        title: "Angular 4",
        link: "http://angular.io",
        vote: 1,
        hide: true
      },
      {
        title: "Angular 5",
        link: "http://angular.io",
        vote: 1,
        hide: true
      },
      {
        title: "Angular 6",
        link: "http://angular.io",
        vote: 1,
        hide: true
      },
    ];
    this.title = 'Angular 4';
    this.link = 'http://angular.io';
    this.votess = 10;
   }

   voteUp(){
     this.votess +=1;
     return false;
   }

   voteDown(){
     this.votess -=1;
     return false;
   }


  ngOnInit() {
  }

}
