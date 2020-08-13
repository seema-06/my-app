import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { promise } from 'protractor';
import { resolve } from 'url';



@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise (resolve => {
      //   server latency with 2 sec delay
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  // specific dish
  getLeader(id: string): Promise<Leader> {
// tslint:disable-next-line: no-shadowed-variable
return new Promise (resolve => {
  //   server latency with 2 sec delay
  setTimeout(() => resolve(LEADERS.filter((leader) => ( leader.id === id ))[0]), 2000 );
});
  }

  // featured property which have been added that dish
  getFeaturedLeader(): Promise<Leader > {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise (resolve => {
      //   server latency with 2 sec delay
      setTimeout(() => resolve(LEADERS.filter((leader) =>  leader.featued )[0]), 2000 );
    });
  }
}

