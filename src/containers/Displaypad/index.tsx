import { useSelector, useDispatch } from 'react-redux'
import { Container, AvatarContent, MoveList, ActorContent } from './styles'
import defaultImg from '../../assets/user.jpg'
import { AvatarItem } from './AvatarItem'
import { deleteActor } from '../../actions/actorAction'
export const DisplayPad: React.FC = (): JSX.Element => {
  const actors = useSelector((state: ApplicationState) => state.actor.actors)
  const dispatch = useDispatch()

  const handleDelete = (id: number) => {
    dispatch(deleteActor(id))
  }

  return (
    <Container>
      <AvatarContent>
        {actors.map((actor) => (
          <ActorContent key={actor.id}>
            <AvatarItem
              id={actor.id}
              handDeleteClick={handleDelete}
              src={
                actor.profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path
                  : defaultImg
              }
            />
            <p>{actor.name}</p>
          </ActorContent>
        ))}
      </AvatarContent>

      <MoveList>
        {actors.length > 0 ? <h3>Movies</h3> : <></>}
        {actors.map((actor) => {
          return actor.known_for.map((movie) => {
            return (
              <p key={movie.id}>{movie.title ? movie.title : movie.name}</p>
            )
          })
        })}
      </MoveList>
    </Container>
  )
}
