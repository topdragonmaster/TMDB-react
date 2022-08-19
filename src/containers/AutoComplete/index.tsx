import { useState, useCallback, KeyboardEvent } from 'react'
import debounce from 'lodash/debounce'
import { useDispatch } from 'react-redux'
import { InputText, SuggestionContent, Container } from './styles'
import { addActor } from '../../actions/actorAction'
import { SuggestItem } from './ActorListItem'

const API_KEY = process.env.REACT_APP_API_KEY
const SERVER_URL = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}`

export const AutoComplete: React.FC = (): JSX.Element => {
  const [filteredActors, setFilteredActors] = useState<ActorInterface[]>([])
  const [activeActorIndex, setActiveActorIndex] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const fetchActors = async (url: string) => {
    try {
      const jsonRes = await fetch(url)
      const result: resultInterface = await jsonRes.json()
      return result.results
    } catch (e) {
      console.log(e)
      return []
    }
  }

  const debouncedChangeHandler = useCallback(
    debounce(async (url: string) => {
      const ActorList: ActorInterface[] = await fetchActors(url)
      if (typeof ActorList === 'undefined') return

      const filterActors = ActorList.filter((actor, index) => {
        return index < 10
      })
      setFilteredActors(filterActors)
      setActiveActorIndex(0)
      setShowSuggestions(true)
    }, 200),
    [],
  )

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value
    debouncedChangeHandler(SERVER_URL + `&query=` + userInput)
    setInput(userInput)
  }

  const handleListClick = (id: number) => {
    dispatch(addActor(filteredActors[id]))
    setFilteredActors([])
    setInput('')
    setActiveActorIndex(0)
    setShowSuggestions(false)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 40) {
      setActiveActorIndex(activeActorIndex + 1)
    } else if (event.keyCode === 38) {
      setActiveActorIndex(activeActorIndex - 1 < 0 ? 0 : activeActorIndex - 1)
      console.log(event.keyCode)
    } else if (event.keyCode === 13) {
      if (filteredActors.length === 0) return
      dispatch(addActor(filteredActors[activeActorIndex]))
      setFilteredActors([])
      setInput('')
      setActiveActorIndex(0)
      setShowSuggestions(false)
    }
  }

  const SuggestionsListComponent = () => {
    return filteredActors.length ? (
      <SuggestionContent>
        {filteredActors.map((actor, index) => {
          return (
            <SuggestItem
              id={index}
              name={actor.name}
              active={index == activeActorIndex ? true : false}
              handClick={handleListClick}
              key={index}
            ></SuggestItem>
          )
        })}
      </SuggestionContent>
    ) : (
      <div className="no-suggestions">
        <em>There is not any actors with this name!</em>
      </div>
    )
  }

  return (
    <Container>
      <InputText
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={input}
        placeholder="ENTER ACTOR'S NAME..."
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </Container>
  )
}
