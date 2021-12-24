import { Component, OnInit } from '@angular/core';
import { CheckFacade } from '@nx-ddd-workspace-generators/security/domain';

@Component({
  selector: 'security-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent implements OnInit {
  passengerList$ = this.checkFacade.passengerList$;

  constructor(private checkFacade: CheckFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkFacade.load();
  }
}
