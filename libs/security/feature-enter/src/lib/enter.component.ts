import { Component, OnInit } from '@angular/core';
import { EnterFacade } from '@nx-ddd-workspace-generators/security/domain';

@Component({
  selector: 'security-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  ticketList$ = this.enterFacade.ticketList$;

  constructor(private enterFacade: EnterFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.enterFacade.load();
  }
}
