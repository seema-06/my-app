import { Injectable } from '@angular/core';
import { Pramotion } from '../shared/pramotion';
import { PRAMOTIONS } from '../shared/pramotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';



@Injectable({
  providedIn: 'root'
})
export class PramotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getPramotions(): Observable<Pramotion[]> {
    return this.http.get<Pramotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPramotion(id: number): Observable<Pramotion> {
    return this.http.get<Pramotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPramotion(): Observable<Pramotion> {
    return this.http.get<Pramotion[]>(baseURL + 'promotions?featued=true').pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  // getPramotions(): Observable<Pramotion[]> {
  //   return of(PRAMOTIONS).pipe(delay(2000));
  // }

  // getPramotion(id: number): Observable<Pramotion> {
  //   return of(PRAMOTIONS.filter((pramo) => (pramo.id === id))[0]).pipe(delay(2000));
  // }

  // getFeaturedPramotion(): Observable<Pramotion> {
  //   return of(PRAMOTIONS.filter((pramo) => pramo.featued)[0]).pipe(delay(2000));
  // }


//   getPramotions(): Promise <Pramotion []> {
//      return new Promise (resolve => {
//       //   server latency with 2 sec delay
//       setTimeout(() => resolve(PRAMOTIONS), 2000);
//     });
//   //  return  Promise.resolve(PRAMOTIONS);
//   }

//   // specific dish
//   getPramotion(id: string): Promise< Pramotion> {
//     return new Promise (resolve => {
//       //   server latency with 2 sec delay
//       setTimeout(() => resolve(PRAMOTIONS.filter((pramo) => ( pramo.id === id ))[0]), 2000 );
//     });
// // return  Promise.resolve(PRAMOTIONS.filter((pramo) => ( pramo.id === id ))[0]);
//   }

//   // featured property which have been added that dish
//   getFeaturedPramotion(): Promise<Pramotion> {
//     return new Promise (resolve => {
//       //   server latency with 2 sec delay
//       setTimeout(() => resolve(PRAMOTIONS.filter((pramo) =>  pramo.featued )[0]), 2000 );
//     });
//   //  return  Promise.resolve(PRAMOTIONS.filter((pramo) =>  pramo.featued )[0]);
//   }
}


