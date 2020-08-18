import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { promise } from 'protractor';
import { resolve } from 'url';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';



@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }


  // getLeaders(): Observable<Leader[]> {
  //   return this.http.get<Leader[]>(baseURL + 'leaders');
  // }

  // getLeader(id: number): Observable<Leader> {
  //   return this.http.get<Leader>(baseURL + 'leader/' + id);
  // }

  // getFeaturedLeader(): Observable<Leader> {
  //   return this.http.get<Leader[]>(baseURL + 'leader?featued=true').pipe(map(leader => leader[0]));
  // }


  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: number): Observable<Leader> {
    return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featued)[0]).pipe(delay(2000));
  }

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

