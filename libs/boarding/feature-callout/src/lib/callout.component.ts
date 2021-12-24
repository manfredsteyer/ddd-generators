import { Component, OnInit } from '@angular/core';
import {
  CalloutFacade,
  loadPassenger,
} from '@nx-ddd-workspace-generators/boarding/domain';

@Component({
  selector: 'boarding-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss'],
})
export class CalloutComponent implements OnInit {
  passengerList$ = this.calloutFacade.passengerList$;

  constructor(private calloutFacade: CalloutFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.calloutFacade.load();
  }
}
