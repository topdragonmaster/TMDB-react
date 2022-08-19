type ActorsState = {
  actors: ActorInterface[]
}

type ActorAction = {
  type: string
  actor: ActorInterface
  id?: number
}
interface ApplicationState {
  actor: ActorsState
  router: RouterState
}

type DispatchType = (args: ActorAction) => ActorAction

interface Movie {
  id: number
  title: string
  name: string
  original_title: string
  overview: string
  poster_path: string
  backdrop_path: string
}

interface ActorInterface {
  id: number
  name: string
  profile_path: string
  known_for: Movie[]
}

interface resultInterface {
  results: ActorInterface[]
}
