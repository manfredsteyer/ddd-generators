import { Component, OnInit } from '@angular/core';
import {
  SearchFacade,
  loadFlight,
} from '@nx-ddd-workspace-generators/booking2/domain';

@Component({
  selector: 'booking2-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  flightList$ = this.searchFacade.flightList$;

  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.searchFacade.load();
  }
}
