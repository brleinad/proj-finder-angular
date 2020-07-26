import { Injectable } from '@angular/core';

import { Route } from '../shared/route.model';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  routes: Route[] = [
        {
          "id": 105748391,
          "name": "Calypso",
          "type": "Trad",
          "rating": "5.6",
          "stars": 4,
          "starVotes": 926,
          "pitches": 3,
          "location": [
              "Colorado",
              "Boulder",
              "Eldorado Canyon SP",
              "The Wind Tower",
              "Wind Tower - SW Face"
          ],
          "url": "https:\/\/www.mountainproject.com\/route\/105748391\/calypso",
          "imgSqSmall": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105935643_sqsmall_1557951647.jpg",
          "imgSmall": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105935643_small_1557951647.jpg",
          "imgSmallMed": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105935643_smallMed_1557951647.jpg",
          "imgMedium": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105935643_medium_1557951647.jpg",
          "longitude": -105.283,
          "latitude": 39.9315
      },
      {
          "id": 105749956,
          "name": "Free Willie",
          "type": "Sport",
          "rating": "5.11a",
          "stars": 4.1,
          "starVotes": 644,
          "pitches": 1,
          "location": [
              "Colorado",
              "Boulder",
              "Boulder Canyon",
              "Animal World",
              "Lower Animal World"
          ],
          "url": "https:\/\/www.mountainproject.com\/route\/105749956\/free-willie",
          "imgSqSmall": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105840070_sqsmall_1557862152.jpg",
          "imgSmall": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105840070_small_1557862152.jpg",
          "imgSmallMed": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105840070_smallMed_1557862152.jpg",
          "imgMedium": "https:\/\/cdn2.apstatic.com\/photos\/climb\/105840070_medium_1557862152.jpg",
          "longitude": -105.4152,
          "latitude": 39.9975
      },
      {
          "id": 105750454,
          "name": "North Face",
          "type": "Trad",
          "rating": "5.6 R",
          "stars": 4.4,
          "starVotes": 183,
          "pitches": 5,
          "location": [
              "Colorado",
              "Boulder",
              "Flatirons",
              "South",
              "The Maiden"
          ],
          "url": "https:\/\/www.mountainproject.com\/route\/105750454\/north-face",
          "imgSqSmall": "https:\/\/cdn2.apstatic.com\/photos\/climb\/107342922_sqsmall_1494182976.jpg",
          "imgSmall": "https:\/\/cdn2.apstatic.com\/photos\/climb\/107342922_small_1494182976.jpg",
          "imgSmallMed": "https:\/\/cdn2.apstatic.com\/photos\/climb\/107342922_smallMed_1494182976.jpg",
          "imgMedium": "https:\/\/cdn2.apstatic.com\/photos\/climb\/107342922_medium_1494182976.jpg",
          "longitude": -105.2872,
          "latitude": 39.95
      }
  ]

  constructor() { }

  getRoutes() {
    return this.routes.slice();
  }

  getRoute(id: number) {
    const route: Route = this.routes.find(
      (r) => {
        r.id === id;
      }
    )
    console.log('Getting route ', route);
    return route;
  }
}
