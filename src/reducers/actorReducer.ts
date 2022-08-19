const initialState: ActorsState = {
  actors: [],
}

const reducer = (
  state: ActorsState = initialState,
  action: ActorAction,
): ActorsState => {
  switch (action.type) {
    case 'ADDACTOR':
      if (!state.actors.some((actor) => actor.id === action.actor.id))
        return {
          ...state,
          actors: [...state.actors, action.actor],
        }
      break
    case 'DELETEACTOR':
      return {
        ...state,
        actors: state.actors.filter((actor) => actor.id !== action.id),
      }
  }
  return state
}

export default reducer
