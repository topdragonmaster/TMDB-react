import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const addActor = (actor: ActorInterface) => {
  console.log(actor)
  return {
    type: 'ADDACTOR',
    actor: actor,
  }
}

export const deleteActor = (id: number) => {
  console.log(id)
  return {
    type: 'DELETEACTOR',
    id: id,
  }
}
