import { Component, OnInit } from '@angular/core';
import { Manage3Facade } from '@nx-ddd-workspace-generators/checkin/domain';

@Component({
  selector: 'checkin-manage3',
  templateUrl: './manage3.component.html',
  styleUrls: ['./manage3.component.scss'],
})
export class Manage3Component implements OnInit {
  ticketList$ = this.manage3Facade.ticketList$;

  constructor(private manage3Facade: Manage3Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manage3Facade.load();
  }
}
