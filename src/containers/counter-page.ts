import { Component, NgZone} from 'angular2/core';
import { RioCounter, RioContainer } from '../components';

import { CounterService } from '../services/counter-service';

@Component({
  selector: 'counter-page',
  providers: [CounterService],
  directives: [RioCounter, RioContainer],
  template: `
    <rio-container>
      <h2 class="center caps">Counter</h2>
      <rio-counter
        [counter]="counterService.counter"
        [increment]="counterService.increment"
        [decrement]="counterService.decrement">
      </rio-counter>
    </rio-container>
  `
})
export class RioCounterPage {
  constructor(
    private counterService: CounterService,
    private _ngZone: NgZone
  ) { 
    setTimeout(() => this._ngZone.run(() => undefined));
  }
}
