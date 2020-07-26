export class Route {

  constructor(public id: number,
              public name: string,
              public type: string,
              public rating: string,
              public stars: number,
              public starVotes: number,
              public pitches: number,
              public location: string[],
              public url: string,
              public imgSqSmall: string,
              public imgSmall: string,
              public imgSmallMed: string,
              public imgMedium: string,
              public longitude: number,
              public latitude: number
  ){}
}
