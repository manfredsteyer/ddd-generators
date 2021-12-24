import { Component, OnInit } from '@angular/core';
import { Manage5Facade } from '@nx-ddd-workspace-generators/checkin/domain';

@Component({
  selector: 'checkin-manage5',
  templateUrl: './manage5.component.html',
  styleUrls: ['./manage5.component.scss'],
})
export class Manage5Component implements OnInit {
  constructor(private manage5Facade: Manage5Facade) {}

  ngOnInit() { }
}
