import { Component, OnInit } from '@angular/core';

import { Route } from '../shared/route.model';
import { RoutesService } from '../services/routes.service';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.scss']
})
export class RoutesListComponent implements OnInit {

  routes: Route[] = [];
  constructor(private routesService: RoutesService) { }

  ngOnInit(): void {
    this.routes = this.routesService.getRoutes();
  }

}
