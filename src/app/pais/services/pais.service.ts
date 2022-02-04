import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Country} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url )
      // .pipe(
      //   catchError( err => of([]))
      // )
      ////es la forma de agarrar el error en el servicio y devolver un observable
  }


}
