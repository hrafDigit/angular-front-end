import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, from, of, interval, timer, Subscription } from 'rxjs'
import { filter, take,  map, max } from 'rxjs/operators';
// import { take } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  status = '';
  tab: Array<number> = [];

  /*
 ngOnInit(): void {
    // const tableau = [1, 2, 3];
    // const observable: Observable<number> = from(tableau);

    // Envoi une infinité de valeur, soit 1 valeur par seconde i.e. (1000)
    const observable: Observable<number> = interval(1000);

    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = error;
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // );

    // Envoi une infinité de valeur, soit 1 valeur par seconde i.e. (1000)
    // sachant que la première valeur est envoyé seulement après 3 secondes
    const observable_1: Observable<number> = timer(3000, 1000);

    // observable_1.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = error;
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // );

    // Envoi une infinité de valeur, soit 1 valeur par seconde i.e. (1000)
    // sachant que la première valeur est envoyé seulement après 3 secondes
    const observable: Observable<number> = timer(3000, 1000);
    this.subscription = observable.subscribe (
      (value) => { this.tab.push(value); },
      (error) => { this.status = error; },
      () => { this.status = 'fini'; }
    );

  }
  */

  /*
  subscription!: Subscription;
  ngOnInit(): void {
    // Envoi une infinité de valeur, soit 1 valeur par seconde i.e. (1000)
    // sachant que la première valeur est envoyé seulement après 3 secondes
    const observable: Observable<number> = timer(3000, 1000);
    this.subscription = observable.subscribe (
      (value) => { this.tab.push(value); },
      (error) => { this.status = error; },
      () => { this.status = 'fini'; }
    );

  }
  ngOnDestroy() { this.subscription.unsubscribe(); }
  */

  /*
 ngOnInit(): void {
  //
  const observable: Observable<number> = interval(1000).pipe(
    take(10),
    map(elt => elt + 3),
    filter(elt => elt % 2 === 0),
    max(),
  );

  observable.subscribe(
    (value) => {
      this.tab.push(value);
    },
    (error) => {
      this.status = error;
    },
    () => {
      this.status = 'fini';
    }
  );

}
  */

 ngOnInit(): void {
  //
  const observable: Observable<number> = interval(1000).pipe(
    take(10),
    map(elt => elt + 3),
    filter(elt => elt % 2 === 0),
    max(),
  );

  observable.subscribe(
    (value) => {
      this.tab.push(value);
    },
    (error) => {
      this.status = error;
    },
    () => {
      this.status = 'fini';
    }
  );

}

//Behavior subject peut être à la fois Observable et Observateur
// Cas pratique : si par exemple, la connexion à l'App se trouve fermée et qu'on la réouvre par la suite, on récupère la dernière donnée (d'une liste) émise par l'observable

}
