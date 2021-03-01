import { Component , Injectable, ReflectiveInjector} from '@angular/core';
import {WikipediaService} from './wikipedia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages :{}[];
  constructor(private wikipedia : WikipediaService) {}
  onTerm(value:string){
    this.wikipedia.onSearch(value).subscribe((pages)=>{
      this.pages = pages;
      //console.log(response);
    })
  }
}
