import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { promise } from 'protractor';
import { resolve } from 'url';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';




@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: number): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leadership?featued=true').pipe(map(leadership => leadership[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  // getLeaders(): Observable<Leader[]> {
  //   return of(LEADERS).pipe(delay(2000));
  // }

  // getLeader(id: number): Observable<Leader> {
  //   return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  // }

  // getFeaturedLeader(): Observable<Leader> {
  //   return of(LEADERS.filter((leader) => leader.featued)[0]).pipe(delay(2000));
  // }

//   getLeaders(): Promise<Leader[]> {
//     // tslint:disable-next-line: no-shadowed-variable
//     return new Promise (resolve => {
//       //   server latency with 2 sec delay
//       setTimeout(() => resolve(LEADERS), 2000);
//     });
//   }

//   // specific dish
//   getLeader(id: string): Promise<Leader> {
// // tslint:disable-next-line: no-shadowed-variable
// return new Promise (resolve => {
//   //   server latency with 2 sec delay
//   setTimeout(() => resolve(LEADERS.filter((leader) => ( leader.id === id ))[0]), 2000 );
// });
//   }

//   // featured property which have been added that dish
//   getFeaturedLeader(): Promise<Leader > {
//     // tslint:disable-next-line: no-shadowed-variable
//     return new Promise (resolve => {
//       //   server latency with 2 sec delay
//       setTimeout(() => resolve(LEADERS.filter((leader) =>  leader.featued )[0]), 2000 );
//     });
//   }
}

