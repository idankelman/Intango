import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  //--------------------------------------------------------------------------------
  //                          Variables
  url:string = "https://api.coindesk.com/v1/bpi/currentprice.json";


  constructor(private Http: HttpClient) {}

  //---------------------------------------------------------------------------------
  //                          Functions

  
  getUrl(){
    return this.url
  }

  //---------------------------------------------------------------------------------
  //                          return observable of the request
  getData(url= this.url): Observable<any> {
    // return this.Http.get(url, {responseType:'json'}).pipe(catchError(this.errorHandler('getUrl',[])));
    return this.Http.get(url, {responseType:'json'});
  }


  //---------------------------------------------------------------------------------
  //                          error handling

  private errorHandler<T> (operation = 'operation', result?: any) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }


}
