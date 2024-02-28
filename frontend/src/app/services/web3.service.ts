import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  transactionDone: WritableSignal<boolean> = signal<boolean>(false);

  changeTransactionState(isDone: boolean): void {
    this.transactionDone.set(isDone);
  }
}
