import { Component, OnInit } from '@angular/core';
import { Manage2Facade } from '@nx-ddd-workspace-generators/checkin/domain';

@Component({
  selector: 'checkin-manage2',
  templateUrl: './manage2.component.html',
  styleUrls: ['./manage2.component.scss'],
})
export class Manage2Component implements OnInit {
  ticketList$ = this.manage2Facade.ticketList$;

  constructor(private manage2Facade: Manage2Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.manage2Facade.load();
  }
}
