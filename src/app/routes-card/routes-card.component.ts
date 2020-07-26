import { Component, OnInit, Input } from '@angular/core';

import { Route } from '../shared/route.model';

@Component({
  selector: 'app-routes-card',
  templateUrl: './routes-card.component.html',
  styleUrls: ['./routes-card.component.scss']
})
export class RoutesCardComponent implements OnInit {

  @Input() route: Route;

  constructor() { }

  ngOnInit(): void {
  }

}
