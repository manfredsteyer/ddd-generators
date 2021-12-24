import { Component, OnInit } from '@angular/core';
import {
  Search2Facade,
  loadFlight2,
} from '@nx-ddd-workspace-generators/booking2/domain';

@Component({
  selector: 'booking2-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.scss'],
})
export class Search2Component implements OnInit {
  flight2List$ = this.search2Facade.flight2List$;

  constructor(private search2Facade: Search2Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.search2Facade.load();
  }
}
