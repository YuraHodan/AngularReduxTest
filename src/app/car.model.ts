export class Car {
    constructor(
      public name: string,
      public model: string,
      public disabled: boolean = false,
      public id?: number
    ){}
}

export interface Cars {
  cars: Car[]
}
