import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

import {Log} from '../models/Log';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";

@Injectable()
export class LogService {
  logs: Log[];
  logIdBase = '';

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  items: Observable<any>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore
  ) {
    this.itemsCollection = db.collection<any>('logs');
    this.items = db.collection('logs').valueChanges();
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    return this.items
  }

  setFormLog(log: Log) {
      this.logSource.next(log);
    // }
    this.itemsCollection.snapshotChanges().pipe(
      map( (changes) => {
        return changes.map(action => {
          const data = action.payload.doc.data();
          data.idBase = action.payload.doc.id;
          return data;
        });
      } ),
    ).subscribe(
      tempBase => {
        const temp = tempBase.filter((x) => {return x.id === log.id});
            this.logIdBase = temp[0].idBase;
      }
    )
  }

  addLog(log: Log) {
    this.itemsCollection.add(log);
  }

  updateLog(log: Log) {
    this.itemsCollection.doc(this.logIdBase).set(
      {
        date: new Date().getTime(),
        id: log.id,
        text: log.text
      }
    )
  }

  deleteLog() {
    setTimeout( () => {
        this.itemsCollection.doc(this.logIdBase).delete()
    } ,100)
  }

  clearState() {
    this.stateSource.next(true);
  }

  temp() {
    console.log('temp', this.logs);
    this.itemsCollection.doc('vs1QMJ6OguRjwVfOkLNG').set(
      {
        date: new Date().getTime(),
        id: 1,
        text: 'abracadabra'
      }
    );
    this.itemsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map(action => {
          return action.payload.doc.data()
        })
      })
    ).subscribe(collect => {console.log(collect)})
  }
}
