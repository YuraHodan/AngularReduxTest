import {Car} from '../car.model'
import {CAR_ACTION, CarsAction} from './cars.action'

const initialState = {
  cars: [
    { name: 'Mercedes', model: 's-500', disabled: false},
    { name: 'Audi', model: 'A6', disabled: true},
    { name: 'Mazda', model: '6', disabled: false},
  ]
}

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(c => c.name !== action.payload.name && c.model !== action.payload.model )]
      }
    case CAR_ACTION.UPDATE_CAR:
      const idx = state.cars.findIndex(c => c.name === action.payload.name && c.model === action.payload.model )
      if (state.cars[idx].disabled == true) {
        state.cars[idx].disabled = false
      }else{
        state.cars[idx].disabled = true
      }

      return {
        ...state,
        cars: [...state.cars]
      }
    default:
      return state
  }
}
