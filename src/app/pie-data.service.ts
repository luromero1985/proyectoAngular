import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { Pie } from './pie-list/Pie';

const URL = 'https://62b654606999cce2e8018ebd.mockapi.io/api/v1/pie';

@Injectable({
  providedIn: 'root'
})
export class PieDataService {

  constructor(private http: HttpClient) { }
//consume una API de tartas y devuelve un observable a la respuesta
  public getAll(): Observable<Pie[]>{
    //es como hacer fetch('url', {method: 'GET'})
    return this.http.get<Pie[]>(URL) //uso .get o .(el metodo que quiera)
                .pipe(
                  tap((cackes: Pie[]) => cackes.forEach(pie => pie.quantity=0))
              
                ); 
   
  }

}
