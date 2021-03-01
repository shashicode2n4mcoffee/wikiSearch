import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { query } from '@angular/animations';
import {pluck} from 'rxjs/operators'

interface wikipediaResponse{
  query:{
    search:{
      title:string;
      snippet: string;
      pageid:number;
    }[];  
  };
}



@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http : HttpClient) { }

  onSearch(term:string){
  return this.http.get<wikipediaResponse>('https://en.wikipedia.org/w/api.php',{ params:{
     action:'query',
     format:'json',
     list:'search',
     utf8:'1',
     srsearch:term,
     origin:'*'
   }})
   .pipe(
     pluck('query','search')
   );
  }
}
