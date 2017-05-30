import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit Clone';
  pageheader = 'Add Link';
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding Article Title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
