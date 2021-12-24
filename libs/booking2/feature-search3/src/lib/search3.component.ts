import { Component, OnInit } from '@angular/core';
import {
  Search3Facade,
  loadFlight3,
} from '@nx-ddd-workspace-generators/booking2/domain';

@Component({
  selector: 'booking2-search3',
  templateUrl: './search3.component.html',
  styleUrls: ['./search3.component.scss'],
})
export class Search3Component implements OnInit {
  flight3List$ = this.search3Facade.flight3List$;

  constructor(private search3Facade: Search3Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.search3Facade.load();
  }
}
